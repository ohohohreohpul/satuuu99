import { useLang } from "../lib/i18n";
import { CONTACT, GIFT_CARD_PURCHASE } from "../data/content";
import { isOfferPromoted, OFFER_PATH } from "../data/offer";
import { ArrowRightIcon, ArrowUpRightIcon } from "../components/ui/Icons";
import { Link } from "react-router-dom";
import { PatternField } from "../components/brand/PatternField";
export function GiftCards() {
  const { t } = useLang();
  return (
    <section
      id="schenken"
      className="gift-section section-shell has-supergraphic"
      aria-labelledby="gift-title"
    >
      <PatternField quiet="start" className="gift-pattern" />
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
              de: "Verschenke eine Auszeit — oder löse deinen Satuuu-Gutschein ein. Wir helfen dir gern, die passende Behandlung und einen Termin zu finden.",
              en: "Give someone a little time out — or redeem your Satuuu gift card. We’ll help you find the right treatment and a time to visit.",
            })}
          </p>
          <a className="text-link" href={CONTACT.booking}>
            {t({ de: "Gutschein online kaufen", en: "Buy a gift card online" })}
            <ArrowUpRightIcon />
          </a>
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
          <p className="gift-note">{t(GIFT_CARD_PURCHASE)}</p>
          {isOfferPromoted() && (
            <Link className="text-link" to={OFFER_PATH}>
              {t({
                de: "Weihnachts-Gutscheinpakete ansehen",
                en: "See the Christmas gift-card packs",
              })}
              <ArrowRightIcon />
            </Link>
          )}
          <Link className="text-link" to="/gutscheine">
            {t({ de: "Mehr zu Gutscheinen", en: "More about gift cards" })}
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
