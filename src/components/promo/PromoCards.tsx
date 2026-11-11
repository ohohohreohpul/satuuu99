import { Link } from "react-router-dom";
import { activePromotions, type Promotion } from "../../data/promotions";
import { useLang } from "../../lib/i18n";
import { ArrowRightIcon, ArrowUpRightIcon } from "../ui/Icons";

function PromoCard({ promotion }: { promotion: Promotion }) {
  const { t } = useLang();
  const { cta } = promotion;
  const label = t(cta.label);
  return (
    <article
      id={promotion.id}
      className={`promo-card promo-card--${promotion.id}`}
      aria-labelledby={`${promotion.id}-title`}
    >
      <p className="eyebrow">{t(promotion.eyebrow)}</p>
      <h3 id={`${promotion.id}-title`}>{t(promotion.title)}</h3>
      <p className="promo-card-copy">{t(promotion.copy)}</p>
      <p className="promo-card-note">{t(promotion.note)}</p>
      {cta.external ? (
        <a className="text-link" href={cta.href}>
          {label}
          <ArrowUpRightIcon />
        </a>
      ) : (
        <Link className="text-link" to={cta.href}>
          {label}
          <ArrowRightIcon />
        </Link>
      )}
    </article>
  );
}

/** The seasonal promotions running today; renders nothing when none are. */
export function PromoCards({ className = "" }: { className?: string }) {
  const promotions = activePromotions();
  if (promotions.length === 0) return null;
  return (
    <div className={`promo-cards ${className}`.trim()}>
      {promotions.map((promotion) => (
        <PromoCard key={promotion.id} promotion={promotion} />
      ))}
    </div>
  );
}
