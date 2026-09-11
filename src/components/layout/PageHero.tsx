import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  copy: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  imageAlt = "",
  children,
}: PageHeroProps) {
  return (
    <section
      className={
        image ? "page-hero page-hero-split" : "page-hero section-shell"
      }
    >
      <div
        className={
          image ? "page-hero-copy" : "page-hero-copy page-hero-copy-wide"
        }
      >
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero-description">{copy}</p>
        {children && <div className="page-hero-actions">{children}</div>}
      </div>
      {image && (
        <figure className="page-hero-image">
          <img src={image} alt={imageAlt} />
        </figure>
      )}
    </section>
  );
}
