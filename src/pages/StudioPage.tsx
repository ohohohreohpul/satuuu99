import { Link } from "react-router-dom";
import { PageHero } from "../components/layout/PageHero";
import { ArrowRightIcon, SparkIcon } from "../components/ui/Icons";
import { CONTACT } from "../data/content";
import { MEDIA } from "../data/media";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";
import { FinalCTA } from "../sections/FinalCTA";

export function StudioPage() {
  const { t } = useLang();
  usePageMeta(
    t({
      de: "Wellnessstudio Ahrensburg bei Hamburg | satuuu99",
      en: "Wellness studio near Hamburg | satuuu99",
    }),
    t({
      de: "Lerne das kleine, private satuuu99 Wellnessstudio in Ahrensburg bei Hamburg kennen: Head Spa, Gesichtspflege und Wellnessmassagen.",
      en: "Meet the small, private satuuu99 wellness studio in Ahrensburg near Hamburg for head spa, facial care and wellness massage.",
    }),
  );
  return (
    <>
      <PageHero
        eyebrow={t({ de: "Das Studio", en: "The studio" })}
        title={
          <>
            {t({ de: "Draußen ist Alltag.", en: "Leave the day outside." })}
            <br />
            <span className="soft-text">
              {t({ de: "Hier ist deine Zeit.", en: "This time is yours." })}
            </span>
          </>
        }
        copy={t({
          de: "Ein kleines, privates Studio für Pflege, Berührung und die Momente, in denen du wieder bei dir ankommst.",
          en: "A small, private studio for care, touch and the moments that bring you back to yourself.",
        })}
        image={MEDIA.studio}
        imageAlt={t({
          de: "Ruhiger Behandlungsraum bei satuuu99",
          en: "Calm treatment room at satuuu99",
        })}
      >
        <a
          className="button"
          href={CONTACT.maps}
          target="_blank"
          rel="noreferrer"
        >
          {t({ de: "Route öffnen", en: "Open directions" })}
          <ArrowRightIcon />
        </a>
      </PageHero>
      <section className="story-section section-shell">
        <div>
          <SparkIcon className="story-mark" />
          <p className="eyebrow">
            {t({ de: "Unsere Haltung", en: "Our approach" })}
          </p>
        </div>
        <div>
          <h2>
            {t({
              de: "Persönlich, unaufgeregt und mit viel Gefühl für Details.",
              en: "Personal, unhurried and attentive to every detail.",
            })}
          </h2>
          <p>
            {t({
              de: "satuuu99 ist kein großes Day Spa, sondern ein persönlicher Rückzugsort in Ahrensburg. Wir nehmen uns Zeit, hören zu und stimmen jede Anwendung auf dein Empfinden ab.",
              en: "satuuu99 is a personal retreat in Ahrensburg rather than a large day spa. We take time to listen and tailor each treatment to how you feel.",
            })}
          </p>
          <p>
            {t({
              de: "Komm so, wie du bist. Um den Rest kümmern wir uns.",
              en: "Come as you are. We’ll take care of the rest.",
            })}
          </p>
        </div>
      </section>
      <section className="visit-section">
        <div className="section-shell visit-grid">
          <div>
            <p className="eyebrow">{t({ de: "Besuch", en: "Visit" })}</p>
            <h2>
              {t({
                de: "Ahrensburg bei Hamburg.",
                en: "Ahrensburg near Hamburg.",
              })}
            </h2>
          </div>
          <address>
            {CONTACT.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <div className="visit-links">
            <a href={CONTACT.maps} target="_blank" rel="noreferrer">
              {t({ de: "Google Maps", en: "Google Maps" })}
              <ArrowRightIcon />
            </a>
            <Link to="/kontakt">
              {t({ de: "Kontakt", en: "Contact" })}
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
