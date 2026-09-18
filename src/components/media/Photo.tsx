import type { CSSProperties } from "react";
import {
  PHOTOS,
  PHOTO_ASPECT_RATIO,
  PHOTO_DIR,
  type PhotoId,
} from "../../data/media/photos";
import { useLang } from "../../lib/i18n";

// React 18 drops the camelCase `fetchPriority` prop with a warning; the
// lowercase DOM attribute is passed through and honoured by the browser.
const HIGH_FETCH_PRIORITY = { fetchpriority: "high" } as const;

/** Rendition used as the `src` fallback for browsers without srcset. */
const FALLBACK_WIDTH = 1200;

function srcSet(id: PhotoId, widths: number[], extension: string) {
  return widths
    .map((w) => `${PHOTO_DIR}/${id}-${w}.${extension} ${w}w`)
    .join(", ");
}

function fallbackWidth(widths: number[]) {
  return widths.includes(FALLBACK_WIDTH) ? FALLBACK_WIDTH : widths.at(-1)!;
}

export interface PhotoProps {
  id: PhotoId;
  /** Layout hint for the browser; always pass the real rendered width. */
  sizes: string;
  className?: string;
  /** Set on the single largest above-the-fold image of a page only. */
  priority?: boolean;
  /**
   * Overrides the registry alt text when the surrounding copy already names
   * the subject, or set to "" for a purely decorative placement.
   */
  alt?: string;
  objectPosition?: string;
}

/**
 * Renders a registry photo as AVIF, WebP and JPEG with explicit dimensions,
 * so layout never shifts while the image loads.
 */
export function Photo({
  id,
  sizes,
  className,
  priority = false,
  alt,
  objectPosition,
}: PhotoProps) {
  const { t } = useLang();
  const asset = PHOTOS[id];
  const width = fallbackWidth(asset.widths);
  const height = Math.round(width / PHOTO_ASPECT_RATIO[asset.aspect]);
  const style: CSSProperties | undefined = objectPosition
    ? { objectPosition }
    : undefined;

  return (
    <picture className={className}>
      <source
        type="image/avif"
        srcSet={srcSet(id, asset.widths, "avif")}
        sizes={sizes}
      />
      <source
        type="image/webp"
        srcSet={srcSet(id, asset.widths, "webp")}
        sizes={sizes}
      />
      <img
        src={`${PHOTO_DIR}/${id}-${width}.jpg`}
        srcSet={srcSet(id, asset.widths, "jpg")}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt ?? t(asset.alt)}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        style={style}
        {...(priority ? HIGH_FETCH_PRIORITY : {})}
      />
    </picture>
  );
}
