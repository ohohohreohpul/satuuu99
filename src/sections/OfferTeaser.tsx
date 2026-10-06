import { Link } from "react-router-dom";
import { GestureGraphic } from "../components/brand/GestureGraphic";
import { ArrowRightIcon } from "../components/ui/Icons";
import {
  isOfferPromoted,
  OFFER_PATH,
  OFFER_PERIOD,
  offerStatus,
  VOUCHER_PACKAGES,
} from "../data/offer";
import { useLang } from "../lib/i18n";

/** Prices from smallest to largest, so the band reads as a range. */
const PRICES = VOUCHER_PACKAGES.map((item) => ({
  id: item.id,
  price: item.price,
  regularPrice: item.regularPrice,
})).sort((a, b) => a.price - b.price);

/** Homepage announcement of the seasonal gift-card offer, until it ends. */
export function OfferTeaser() {
  const { t, lang } = useLang();
  if (!isOfferPromoted()) return null;
  const isUpcoming = offerStatus() === "upcoming";
  const euro = new Intl.NumberFormat(lang === "de" ? "de-DE" : "en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });

  return (
    <section
      className="offer-teaser has-supergraphic"
      aria-labelledby="offer-teaser-title"
    >
      <GestureGraphic tone="dark" className="gesture--offer-teaser" />
      <div className="offer-teaser-inner section-shell">
        <div className="offer-teaser-copy">
          <p className="eyebrow">
            {t({ de: "Weihnachtsangebot", en: "Christmas offer" })} ·{" "}
            {t(OFFER_PERIOD)}
          </p>
          <h2 id="offer-teaser-title">
            {t({
              de: "Exklusive Gutscheinpakete zum Fest.",
              en: "Exclusive gift-card packs for the holidays.",
            })}
          </h2>
          <p>
            {isUpcoming
              ? t({
                  de: "Zu unserem neuen Auftritt: Gutscheinsets und Weihnachtspakete mit Handtasche oder Überraschung — erhältlich ab 7. Oktober.",
                  en: "Celebrating our new look: gift-card sets and Christmas packs with a handbag or a surprise — available from 7 October.",
                })
              : t({
                  de: "Zu unserem neuen Auftritt: Gutscheinsets und Weihnachtspakete mit Handtasche oder Überraschung — solange der Vorrat reicht.",
                  en: "Celebrating our new look: gift-card sets and Christmas packs with a handbag or a surprise — while stocks last.",
                })}
          </p>
        </div>
        <ul
          className="offer-teaser-prices"
          aria-label={t({ de: "Preise", en: "Prices" })}
        >
          {PRICES.map((item) => (
            <li key={item.id}>
              <strong>{euro.format(item.price)}</strong>
              <span className="sr-only">
                {t({ de: "statt", en: "instead of" })}
              </span>
              <s>{euro.format(item.regularPrice)}</s>
            </li>
          ))}
        </ul>
        <Link className="button" to={OFFER_PATH}>
          {t({ de: "Zum Angebot", en: "See the offer" })}
          <ArrowRightIcon />
        </Link>
      </div>
    </section>
  );
}
