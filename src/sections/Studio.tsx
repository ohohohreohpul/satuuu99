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
              de: "Kleiner, privater Behandlungsraum mit Leinen und Tageslicht",
              en: "A small, private treatment room with linen and daylight",
            })}
            loading="lazy"
            width="1800"
            height="1170"
          />
          <figcaption>
            {t({
              de: "Unser privater Behandlungsraum · Ahrensburg",
              en: "Our private treatment room · Ahrensburg",
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
              de: "Wir sind bewusst ein kleines Studio. Du kommst nicht in einen großen Spa-Betrieb, sondern an einen privaten Ort, an dem wir uns Zeit nehmen, zuhören und gemeinsam die passende Anwendung für dich finden.",
              en: "We are intentionally a small studio. Your visit is personal rather than part of a large spa operation, with time to listen and choose the treatment that feels right for you.",
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
