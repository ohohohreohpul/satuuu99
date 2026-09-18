/**
 * Derives the web image and film set from the supplied high-resolution
 * originals. Run from the project root: `node scripts/media/build-media.mjs`.
 *
 * Originals stay outside the repository; only the derived, size-appropriate
 * AVIF, WebP and JPEG renditions are committed under public/assets.
 */
import { execFile } from "node:child_process";
import { mkdir, readFile, access } from "node:fs/promises";
import { promisify } from "node:util";
import path from "node:path";

const run = promisify(execFile);
const MANIFEST = "scripts/media/manifest.json";
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 74;
const AVIF_CRF = 32;
const FILM_CRF = 30;
const FILM_WIDTH = 1280;
const POSTER_WIDTH = 1280;
const CONCURRENCY = 4;

const ASPECTS = { "4:5": 4 / 5, "3:2": 3 / 2, "1:1": 1 };

function heightFor(width, aspect) {
  return Math.round(width / ASPECTS[aspect]);
}

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

/** Renders one width of one photo as AVIF, WebP and JPEG. */
async function renderPhoto(photo, sourceDir, outDir, width, widths) {
  const { id, file, aspect, gravity = "center" } = photo;
  const height = heightFor(width, aspect);
  const source = path.join(sourceDir, file);
  const base = path.join(outDir, `${id}-${width}`);

  await run("convert", [
    `${source}[0]`,
    "-auto-orient",
    "-colorspace",
    "sRGB",
    "-resize",
    `${width}x${height}^`,
    "-gravity",
    gravity,
    "-extent",
    `${width}x${height}`,
    "-unsharp",
    "0x0.6+0.5+0.02",
    "-strip",
    "-interlace",
    "Plane",
    "-sampling-factor",
    "4:2:0",
    "-quality",
    String(JPEG_QUALITY),
    `${base}.jpg`,
  ]);

  await run("cwebp", [
    "-q",
    String(WEBP_QUALITY),
    "-m",
    "6",
    "-metadata",
    "none",
    "-quiet",
    `${base}.jpg`,
    "-o",
    `${base}.webp`,
  ]);

  await run("ffmpeg", [
    "-hide_banner",
    "-loglevel",
    "error",
    "-y",
    "-i",
    `${base}.jpg`,
    "-c:v",
    "libaom-av1",
    "-still-picture",
    "1",
    "-crf",
    String(AVIF_CRF),
    "-cpu-used",
    "4",
    "-pix_fmt",
    "yuv420p",
    `${base}.avif`,
  ]);

  if (width === widths.at(-1)) {
    console.log(`  photo ${id} @ ${widths.join(",")} (${aspect})`);
  }
}

/** Trims one silent ambient loop plus its poster frame. */
async function renderFilm(film, sourceDir, outDir) {
  const { id, file, start, duration } = film;
  const source = path.join(sourceDir, file);
  const out = path.join(outDir, id);

  await run("ffmpeg", [
    "-hide_banner",
    "-loglevel",
    "error",
    "-y",
    "-ss",
    String(start),
    "-t",
    String(duration),
    "-i",
    source,
    "-an",
    "-vf",
    `scale=${FILM_WIDTH}:-2:flags=lanczos,fps=25`,
    "-c:v",
    "libx264",
    "-preset",
    "slow",
    "-crf",
    String(FILM_CRF),
    "-pix_fmt",
    "yuv420p",
    "-profile:v",
    "high",
    "-movflags",
    "+faststart",
    `${out}.mp4`,
  ]);

  await run("ffmpeg", [
    "-hide_banner",
    "-loglevel",
    "error",
    "-y",
    "-ss",
    "0.5",
    "-i",
    `${out}.mp4`,
    "-frames:v",
    "1",
    "-vf",
    `scale=${POSTER_WIDTH}:-2:flags=lanczos`,
    "-q:v",
    "5",
    `${out}-poster.jpg`,
  ]);

  await run("cwebp", [
    "-q",
    String(WEBP_QUALITY),
    "-m",
    "6",
    "-metadata",
    "none",
    "-quiet",
    `${out}-poster.jpg`,
    "-o",
    `${out}-poster.webp`,
  ]);

  console.log(`  film  ${id} (${duration}s from ${start}s)`);
}

/** Runs tasks with a small concurrency cap so encoding stays responsive. */
async function pool(tasks, limit) {
  const queue = [...tasks];
  const workers = Array.from({ length: Math.min(limit, queue.length) }, async () => {
    while (queue.length) {
      const task = queue.shift();
      if (task) await task();
    }
  });
  await Promise.all(workers);
}

async function main() {
  const manifest = JSON.parse(await readFile(MANIFEST, "utf8"));
  const { source, outDir, videoOutDir, defaultWidths, photos, films } = manifest;

  if (!(await exists(source))) {
    throw new Error(
      `Original media directory not found: ${source}. Derived assets in ${outDir} are already committed; only re-run this script when originals are available.`,
    );
  }

  await mkdir(outDir, { recursive: true });
  await mkdir(videoOutDir, { recursive: true });

  const groups = [
    { list: photos, dir: source, fallbackWidths: defaultWidths },
    {
      list: manifest.legacyPhotos || [],
      dir: manifest.legacySource,
      fallbackWidths: manifest.legacyWidths || defaultWidths,
    },
  ];

  const photoTasks = [];
  let photoCount = 0;
  for (const group of groups) {
    for (const photo of group.list) {
      if (!(await exists(path.join(group.dir, photo.file)))) {
        throw new Error(`Missing original for ${photo.id}: ${photo.file}`);
      }
      if (!ASPECTS[photo.aspect]) {
        throw new Error(`Unknown aspect "${photo.aspect}" for ${photo.id}`);
      }
      const widths = photo.widths || group.fallbackWidths;
      photoCount += 1;
      for (const width of widths) {
        photoTasks.push(() =>
          renderPhoto(photo, group.dir, outDir, width, widths),
        );
      }
    }
  }

  console.log(`Rendering ${photoCount} photos (${photoTasks.length} renditions)`);
  await pool(photoTasks, CONCURRENCY);

  console.log(`Rendering ${films.length} ambient films`);
  await pool(
    films.map((film) => {
      if (!film.duration) throw new Error(`Missing duration for film ${film.id}`);
      return () => renderFilm(film, source, videoOutDir);
    }),
    2,
  );

  console.log("Done.");
}

main().catch((error) => {
  console.error(`\nMedia build failed: ${error.message}`);
  process.exit(1);
});
