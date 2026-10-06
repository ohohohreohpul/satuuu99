import { useLang } from "../lib/i18n";
import { CONTACT } from "../data/content";
import { ArrowRightIcon } from "../components/ui/Icons";
import { GestureGraphic } from "../components/brand/GestureGraphic";
export function FinalCTA() {
  const { t } = useLang();
  return (
    <section
      id="kontakt"
      className="contact-section section-shell has-supergraphic"
      aria-labelledby="contact-title"
    >
      <GestureGraphic tone="taupe" className="gesture--invitation" />
      <p className="eyebrow">
        {t({ de: "Ihr nächster guter Moment", en: "Your next good moment" })}
      </p>
      <div className="contact-top">
        <h2 id="contact-title">
          {t({ de: "Wir halten Ihnen", en: "A little space," })}
          <br />
          {t({ de: "eine Pause frei.", en: "just for you." })}
        </h2>
        <a
          className="contact-book"
          href={CONTACT.booking}
          aria-label={t({
            de: "Termin online buchen",
            en: "Book your visit online",
          })}
        >
          <ArrowRightIcon />
        </a>
      </div>
      <div className="contact-bottom">
        <p>
          {t({
            de: "Wählen Sie Ihren Termin. Wir freuen uns auf Sie.",
            en: "Choose your time. We look forward to seeing you.",
          })}
        </p>
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
      </div>
    </section>
  );
}
