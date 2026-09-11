import { useLang } from "../lib/i18n";
import { CONTACT } from "../data/content";
import { MEDIA } from "../data/media";
import { ArrowRightIcon, SparkIcon } from "../components/ui/Icons";
import { Link } from "react-router-dom";

export function Studio() {
  const { t } = useLang();
  return (
    <section
      id="studio"
      className="studio-section"
      aria-labelledby="studio-title"
    >
      <div className="studio-intro section-shell">
        <p className="eyebrow">
          {t({ de: "02 / Das Studio", en: "02 / The studio" })}
        </p>
        <h2 id="studio-title">
          {t({ de: "Draußen ist Alltag.", en: "Leave the day outside." })}
          <br />
          <span className="soft-text">
            {t({ de: "Hier ist deine Zeit.", en: "This time is yours." })}
          </span>
        </h2>
      </div>
      <div className="studio-layout">
        <figure className="studio-image">
          <img
            src={MEDIA.studio}
            alt={t({
              de: "Atmosphärisches Motiv: Behandlungsraum mit Leinen, Tageslicht und warmen Naturtönen",
              en: "Atmospheric image: a treatment room with linen, daylight and warm natural tones",
            })}
            loading="lazy"
            width="1800"
            height="1170"
          />
          <figcaption>
            {t({
              de: "Ein Gefühl für unsere Welt · Atmosphärenbild",
              en: "A feeling for our world · Mood image",
            })}
          </figcaption>
        </figure>
        <div className="studio-copy">
          <SparkIcon className="small-sun" />
          <h3>
            {t({ de: "Ein kleiner Rückzug.", en: "A small retreat." })}
            <br />
            {t({
              de: "Mitten in Ahrensburg.",
              en: "Right here in Ahrensburg.",
            })}
          </h3>
          <p>
            {t({
              de: "Bei satuuu99 stehen Wellness, Pflege und persönliche Aufmerksamkeit im Mittelpunkt. Wir nehmen uns Zeit, hören zu und finden gemeinsam die passende Anwendung für dich.",
              en: "At satuuu99, wellness, care and personal attention come first. We take time to listen and find the right treatment together.",
            })}
          </p>
          <p>
            {t({
              de: "Komm so, wie du bist. Um den Rest kümmern wir uns.",
              en: "Come as you are. We’ll take care of the rest.",
            })}
          </p>
          <address>
            {CONTACT.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <a
            className="text-link"
            href={CONTACT.maps}
            target="_blank"
            rel="noreferrer"
          >
            {t({ de: "Deinen Weg zu uns finden", en: "Find your way here" })}
            <ArrowRightIcon />
          </a>
          <Link className="text-link studio-more" to="/studio">
            {t({ de: "Das Studio kennenlernen", en: "Meet the studio" })}
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
