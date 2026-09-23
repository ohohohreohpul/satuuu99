import type { PriceOption } from "../../data/content";
import { useLang } from "../../lib/i18n";

/** Durations and prices for a programme, when the studio has confirmed them. */
export function TreatmentPrices({
  prices,
  className = "",
}: {
  prices?: PriceOption[];
  className?: string;
}) {
  const { t, lang } = useLang();
  if (!prices?.length) return null;
  const currency = new Intl.NumberFormat(lang === "de" ? "de-DE" : "en-GB", {
    style: "currency",
    currency: "EUR",
  });
  return (
    <dl
      className={`treatment-prices ${className}`.trim()}
      aria-label={t({ de: "Dauer und Preis", en: "Duration and price" })}
    >
      {prices.map((option) => (
        <div key={option.minutes}>
          <dt>
            {option.minutes} {t({ de: "Minuten", en: "minutes" })}
          </dt>
          <dd>{currency.format(option.euros)}</dd>
        </div>
      ))}
    </dl>
  );
}
