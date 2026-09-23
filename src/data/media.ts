import type { PhotoId } from "./media/photos";
import { PHOTOS, PHOTO_DIR } from "./media/photos";
import type { FilmId } from "./media/films";

/**
 * Maps website slots to assets in the photo and film registries.
 *
 * The homepage hero keeps the owner-supplied film so the opening frame
 * represents the real scale of the private Ahrensburg studio. Treatment,
 * editorial and atmosphere slots use the licensed relaunch photography.
 * Provenance and the on-site shots still outstanding are in
 * docs/ASSET-BRIEF.md.
 */
export const MEDIA = {
  hero: {
    poster: "/assets/authentic/hero-scrub-poster.jpg",
    video: "/assets/authentic/hero-scrub.mp4",
  },
  studio: "studio-candlelight-mood",
  studioRoom: "studio-room-atmosphere",
  // Keyed by FocusGroup id.
  treatments: {
    head: "head-spa-water-rinse",
    face: "facial-massage-warm-light",
    feet: "foot-ritual-detail",
    body: "body-massage-shoulders",
  },
  // Keyed by Treatment id, so every programme shows its own photograph.
  programmes: {
    "head-spa": "head-spa-candlelight",
    "aqua-facial": "aqua-facial-mist",
    "sleep-glow": "facial-overhead-view",
    "gua-sha": "facial-gua-sha-pressure",
    "foot-care": "foot-care-towel",
    "foot-massage": "foot-massage-candlelight",
    "cupping-massage": "body-cupping-glasses",
    "anti-stress-gua-sha": "body-massage-shoulders",
    bellabambi: "hands-light-study",
    candle: "studio-candlelight-mood",
    steam: "studio-room-atmosphere",
  },
  /** Ambient loop shown alongside each treatment family. */
  films: {
    head: "head-massage",
    face: "spa-massage",
    feet: "foot-massage",
    body: "leg-massage",
  },
  editorial: {
    gift: "resting-hand-cheek",
    journalHeadSpa: "head-spa-forehead-hold",
    journalFace: "facial-stone-detail",
    journalBody: "skin-texture-profile",
    journalStudio: "studio-room-atmosphere",
  },
} as const satisfies {
  hero: { poster: string; video: string };
  studio: PhotoId;
  studioRoom: PhotoId;
  treatments: Record<string, PhotoId>;
  programmes: Record<string, PhotoId>;
  films: Record<string, FilmId>;
  editorial: Record<string, PhotoId>;
};

/** Absolute rendition URL, for structured data and social metadata. */
export function photoUrl(id: PhotoId, width?: number) {
  const asset = PHOTOS[id];
  const chosen =
    width && asset.widths.includes(width)
      ? width
      : asset.widths[asset.widths.length - 1];
  return `${PHOTO_DIR}/${id}-${chosen}.jpg`;
}

/** Photograph for a treatment family, falling back to the group image. */
export function groupPhoto(groupId: string): PhotoId {
  const lookup: Record<string, PhotoId> = MEDIA.treatments;
  return lookup[groupId] ?? MEDIA.studioRoom;
}

/** Photograph for a single programme, falling back to its family. */
export function treatmentPhoto(treatmentId: string, groupId: string): PhotoId {
  const lookup: Record<string, PhotoId> = MEDIA.programmes;
  return lookup[treatmentId] ?? groupPhoto(groupId);
}

/** Ambient loop for a treatment family, when one exists. */
export function groupFilm(groupId: string): FilmId | undefined {
  const lookup: Record<string, FilmId> = MEDIA.films;
  return lookup[groupId];
}
