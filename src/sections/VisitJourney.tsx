import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../components/ui/Icons";
import { CONTACT } from "../data/content";
import { MEDIA } from "../data/media";
import { useLang } from "../lib/i18n";

const steps = [
  {
    id: "arrive",
    number: "01",
    label: { de: "Ankommen", en: "Arrive" },
    title: {
      de: "Die Tür fällt zu. Der Tag bleibt draußen.",
      en: "The door closes. The day stays outside.",
    },
    copy: {
      de: "Du kommst in unser kleines Studio in Ahrensburg. Ohne Spa-Trubel, ohne Eile – erst einmal in Ruhe ankommen.",
      en: "You arrive at our small Ahrensburg studio. No busy spa atmosphere, no rush – just time to settle in.",
    },
  },
  {
    id: "listen",
    number: "02",
    label: { de: "Zuhören", en: "Listen" },
    title: {
      de: "Bevor etwas beginnt, hören wir dir zu.",
      en: "Before anything begins, we listen.",
    },
    copy: {
      de: "Wir sprechen kurz darüber, wie es dir geht und was du dir wünschst. Pflege, Berührung und Ablauf stimmen wir mit dir ab.",
      en: "We talk briefly about how you feel and what you need. Care, touch and the flow of your treatment are agreed with you.",
    },
  },
  {
    id: "ritual",
    number: "03",
    label: { de: "Loslassen", en: "Let go" },
    title: {
      de: "Dein Ritual. Dein Tempo. Deine Zeit.",
      en: "Your ritual. Your pace. Your time.",
    },
    copy: {
      de: "Du darfst still sein, die Augen schließen und dich kümmern lassen. Wir bleiben aufmerksam und passen Druck oder Ablauf jederzeit an.",
      en: "You can be quiet, close your eyes and let yourself be cared for. We stay attentive and adjust pressure or pace at any time.",
    },
  },
  {
    id: "return",
    number: "04",
    label: { de: "Nachklingen", en: "Linger" },
    title: {
      de: "Nicht aufspringen. Noch einen Moment bleiben.",
      en: "No need to rush. Stay a moment longer.",
    },
    copy: {
      de: "Nach der Behandlung hast du Zeit, wieder anzukommen. Dann gehst du zurück in deinen Tag – vielleicht ein wenig leichter.",
      en: "After your treatment, there is time to return gently. Then you step back into your day – perhaps feeling a little lighter.",
    },
  },
];

export function VisitJourney() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const step = steps[active];
  return (
    <section className="visit-journey" aria-labelledby="journey-title">
      <div className="journey-heading section-shell">
        <p className="eyebrow">
          {t({ de: "So fühlt sich ein Besuch an", en: "How a visit feels" })}
        </p>
        <h2 id="journey-title">
          {t({
            de: "Eine Stunde, die nicht viel von dir verlangt.",
            en: "An hour that asks very little of you.",
          })}
        </h2>
        <p>
          {t({
            de: "Kein anonymer Spa-Ablauf. Ein persönlicher Termin in unserem privaten Studio – Schritt für Schritt.",
            en: "No anonymous spa routine. A personal appointment in our private studio – one step at a time.",
          })}
        </p>
      </div>
      <div className="journey-stage section-shell">
        <figure className="journey-image">
          <img
            src={MEDIA.studio}
            alt={t({
              de: "Privater Behandlungsraum von satuuu99 in Ahrensburg",
              en: "Private satuuu99 treatment room in Ahrensburg",
            })}
            loading="lazy"
          />
          <figcaption>Manhagener Allee 45 · Ahrensburg</figcaption>
        </figure>
        <div className="journey-interface">
          <div
            className="journey-tabs"
            role="tablist"
            aria-label={t({
              de: "Ablauf deines Besuchs",
              en: "Your visit journey",
            })}
          >
            {steps.map((item, index) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={active === index}
                aria-controls="journey-panel"
                id={`journey-tab-${item.id}`}
                onClick={() => setActive(index)}
              >
                <span>{item.number}</span>
                {t(item.label)}
              </button>
            ))}
          </div>
          <article
            id="journey-panel"
            role="tabpanel"
            aria-labelledby={`journey-tab-${step.id}`}
            key={step.id}
            className="journey-panel"
          >
            <span className="journey-count">{step.number} / 04</span>
            <h3>{t(step.title)}</h3>
            <p>{t(step.copy)}</p>
            <div className="journey-actions">
              <a className="button" href={CONTACT.booking}>
                {t({ de: "Termin finden", en: "Find a time" })}
                <ArrowRightIcon />
              </a>
              <Link className="text-link" to="/studio">
                {t({ de: "Studio kennenlernen", en: "Meet the studio" })}
                <ArrowRightIcon />
              </Link>
            </div>
          </article>
          <div className="journey-progress" aria-hidden="true">
            <i style={{ width: `${((active + 1) / steps.length) * 100}%` }} />
          </div>
        </div>
      </div>
    </section>
  );
}
