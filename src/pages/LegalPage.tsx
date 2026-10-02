import { AGB_HTML } from "../data/legal/agb";
import { DATENSCHUTZ_HTML } from "../data/legal/datenschutz";
import { IMPRESSUM_HTML } from "../data/legal/impressum";
import { usePageMeta } from "../lib/usePageMeta";

export type LegalSlug = "impressum" | "datenschutz" | "agbs";

interface LegalDocument {
  title: string;
  description: string;
  /** Generator-style boilerplate adds nothing to search; keep it out. */
  noIndex: boolean;
  html: string;
}

// The legal texts exist only in German; they are shown as-is in both
// languages, as on the studio's original site.
const DOCUMENTS: Record<LegalSlug, LegalDocument> = {
  impressum: {
    title: "Impressum",
    description:
      "Impressum von satuuu99, Wellnessstudio in der Manhagener Allee 45, 22926 Ahrensburg.",
    noIndex: false,
    html: IMPRESSUM_HTML,
  },
  datenschutz: {
    title: "Datenschutzerklärung",
    description:
      "Datenschutzerklärung von satuuu99 in Ahrensburg: welche Daten wir verarbeiten und welche Rechte du hast.",
    noIndex: true,
    html: DATENSCHUTZ_HTML,
  },
  agbs: {
    title: "Allgemeine Geschäftsbedingungen",
    description:
      "Allgemeine Geschäftsbedingungen von satuuu99 in Ahrensburg, inklusive Terminabsagen und Widerrufsbelehrung.",
    noIndex: true,
    html: AGB_HTML,
  },
};

export function LegalPage({ slug }: { slug: LegalSlug }) {
  const doc = DOCUMENTS[slug];
  usePageMeta(`${doc.title} | satuuu99`, doc.description, doc.noIndex);
  return (
    <article className="legal-page" lang="de">
      <header className="section-shell">
        <p className="eyebrow">satuuu99 · Rechtliches</p>
        <h1>{doc.title}</h1>
      </header>
      {/* Sanitised to plain text markup by scripts/legal/import_legal.py. */}
      <div
        className="article-body legal-body"
        dangerouslySetInnerHTML={{ __html: doc.html }}
      />
    </article>
  );
}
