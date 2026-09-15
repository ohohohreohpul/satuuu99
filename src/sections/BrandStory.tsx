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
          de: "satuuu99 ist ein kleines, privates Wellnessstudio in Ahrensburg. Inspiriert von thailändischer Ruhe verbinden wir persönliche Pflege, aufmerksame Berührung und Zeit zum Ankommen — nahbar und ohne großes Spa-Ritual drumherum.",
          en: "satuuu99 is a small, private wellness studio in Ahrensburg. Inspired by a sense of Thai calm, we bring together personal care, attentive touch and time to settle in — intimate, uncomplicated and close to home.",
        })}
      </p>
      <Link className="text-link" to="/studio">
        {t({ de: "Unsere Welt kennenlernen", en: "Step into our world" })} ↗
      </Link>
    </section>
  );
}
