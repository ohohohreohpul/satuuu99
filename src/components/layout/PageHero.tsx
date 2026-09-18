import type { ReactNode } from "react";
import { Photo } from "../media/Photo";
import type { PhotoId } from "../../data/media/photos";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  copy: string;
  photo?: PhotoId;
  photoAlt?: string;
  caption?: string;
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  copy,
  photo,
  photoAlt,
  caption,
  children,
}: PageHeroProps) {
  return (
    <section
      className={
        photo ? "page-hero page-hero-split" : "page-hero section-shell"
      }
    >
      <div
        className={
          photo ? "page-hero-copy" : "page-hero-copy page-hero-copy-wide"
        }
      >
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero-description">{copy}</p>
        {children && <div className="page-hero-actions">{children}</div>}
      </div>
      {photo && (
        <figure className="page-hero-image">
          <Photo
            id={photo}
            sizes="(min-width: 900px) 48vw, 100vw"
            alt={photoAlt}
            priority
          />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      )}
    </section>
  );
}
