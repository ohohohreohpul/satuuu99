import { Link } from "react-router-dom";
import { useLang } from "../lib/i18n";
export function BrandStory() {
  const { t } = useLang();
  return (
    <section className="brand-story section-shell">
      <img src="/brand/symbol.png" alt="" />
      <p className="eyebrow">
        {t({ de: "Unsere Haltung", en: "Our philosophy" })}
      </p>
      <h2>
        {t({
          de: "Mehr als ein Ort.\nEin Moment für dich.",
          en: "More than a place.\nA moment for you.",
        })}
      </h2>
      <p>
        {t({
          de: "Inspiriert von thailändischer Architektur und der Ruhe natürlicher Materialien. Bei satuuu99 trifft diese Haltung auf persönliche Pflege, aufmerksame Berührung und Zeit zum Ankommen.",
          en: "Inspired by Thai architecture and the quiet of natural materials. At satuuu99, this spirit meets personal care, attentive touch and time to settle in.",
        })}
      </p>
      <Link className="text-link" to="/studio">
        {t({ de: "Unsere Welt kennenlernen", en: "Step into our world" })} ↗
      </Link>
    </section>
  );
}
