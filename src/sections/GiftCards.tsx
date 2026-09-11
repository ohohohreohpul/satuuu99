import { useLang } from "../lib/i18n";
import { CONTACT } from "../data/content";
import { ArrowRightIcon } from "../components/ui/Icons";
import { Link } from "react-router-dom";
export function GiftCards() {
  const { t } = useLang();
  return (
    <section
      id="schenken"
      className="gift-section section-shell"
      aria-labelledby="gift-title"
    >
      <p className="eyebrow">
        {t({ de: "03 / Zeit verschenken", en: "03 / Give a little time" })}
      </p>
      <div className="gift-content">
        <h2 id="gift-title">
          {t({ de: "Für jemanden,", en: "For someone" })}
          <br />
          <span className="soft-text">
            {t({ de: "der dir wichtig ist.", en: "who matters to you." })}
          </span>
        </h2>
        <div>
          <p>
            {t({
              de: "Du hast bereits einen Satuuu-Gutschein? Wir helfen dir gern, die passende Behandlung und einen Termin zu finden.",
              en: "Already have a Satuuu gift card? We’ll help you find the right treatment and a time to visit.",
            })}
          </p>
          <a
            className="text-link"
            href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(t({ de: "Satuuu-Gutschein einlösen", en: "Redeem a Satuuu gift card" }))}`}
          >
            {t({
              de: "Gutschein einlösen",
              en: "Ask to redeem your gift card",
            })}
            <ArrowRightIcon />
          </a>
          <p className="gift-note">
            {t({
              de: "Der Verkauf neuer Gutscheine ist derzeit pausiert.",
              en: "Sales of new gift cards are currently paused.",
            })}
          </p>
          <Link className="text-link" to="/gutscheine">
            {t({ de: "Mehr zu Gutscheinen", en: "More about gift cards" })}
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
