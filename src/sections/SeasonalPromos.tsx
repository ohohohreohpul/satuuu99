import { PromoCards } from "../components/promo/PromoCards";
import { activePromotions } from "../data/promotions";
import { useLang } from "../lib/i18n";

/** Homepage band for the promotions running right now. */
export function SeasonalPromos() {
  const { t } = useLang();
  if (activePromotions().length === 0) return null;
  return (
    <section
      className="seasonal-promos section-shell"
      aria-labelledby="seasonal-promos-title"
    >
      <h2 id="seasonal-promos-title" className="sr-only">
        {t({ de: "Aktuelle Angebote", en: "Current offers" })}
      </h2>
      <PromoCards />
    </section>
  );
}
