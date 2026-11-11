import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  isOfferPromoted,
  OFFER_PATH,
  VOUCHER_PACKAGES,
} from "../../data/offer";
import { activePromotions } from "../../data/promotions";
import {
  MARK_BLADE_LEFT,
  MARK_BLADE_RIGHT,
  MARK_DIAMOND,
  MARK_HEIGHT,
  MARK_WIDTH,
} from "../brand/markGeometry";
import type { Localized } from "../../lib/i18n";
import { useLang } from "../../lib/i18n";

const DISMISS_KEY = "satuuu99-promo-bar-closed";
/** Lets the header and page spacing make room for the bar. */
const ROOT_CLASS = "has-promo-bar";

interface TickerItem {
  id: string;
  text: Localized;
  href: string;
}

function tickerItems(now: Date = new Date()): TickerItem[] {
  const items: TickerItem[] = activePromotions(now).map((promotion) => ({
    id: promotion.id,
    text: promotion.ticker,
    href: `${OFFER_PATH}#${promotion.id}`,
  }));
  if (isOfferPromoted(now)) {
    const lowest = Math.min(...VOUCHER_PACKAGES.map((item) => item.price));
    const bestSaving = Math.max(
      ...VOUCHER_PACKAGES.map((item) => item.regularPrice - item.price),
    );
    items.push({
      id: "weihnachtspakete",
      text: {
        de: `Weihnachts-Gutscheinpakete ab ${lowest} € – bis zu ${bestSaving} € sparen`,
        en: `Christmas gift-card packs from €${lowest} – save up to €${bestSaving}`,
      },
      href: `${OFFER_PATH}#pakete`,
    });
  }
  return items;
}

function wasDismissed(): boolean {
  try {
    return sessionStorage.getItem(DISMISS_KEY) === "true";
  } catch {
    return false;
  }
}

/**
 * Slim announcement bar above the navigation with a slow marquee of the
 * offers running today. Pauses on hover and focus, stands still for reduced
 * motion, and can be closed for the rest of the visit.
 */
export function PromoBar() {
  const { t } = useLang();
  const [isDismissed, setIsDismissed] = useState(wasDismissed);
  const items = tickerItems();
  const isVisible = !isDismissed && items.length > 0;

  useEffect(() => {
    document.documentElement.classList.toggle(ROOT_CLASS, isVisible);
    return () => document.documentElement.classList.remove(ROOT_CLASS);
  }, [isVisible]);

  if (!isVisible) return null;

  const close = () => {
    try {
      sessionStorage.setItem(DISMISS_KEY, "true");
    } catch {
      // Not remembered without storage; the bar still closes for this page.
    }
    setIsDismissed(true);
  };

  const renderItems = (isCopy: boolean) => (
    <ul className="promo-bar-items" aria-hidden={isCopy || undefined}>
      {items.map((item) => (
        <li key={item.id}>
          <Link to={item.href} tabIndex={isCopy ? -1 : undefined}>
            {t(item.text)}
          </Link>
          <svg
            className="promo-bar-mark"
            viewBox={`0 0 ${MARK_WIDTH} ${MARK_HEIGHT}`}
            aria-hidden="true"
            focusable="false"
          >
            <path d={MARK_DIAMOND} />
            <path d={MARK_BLADE_LEFT} />
            <path d={MARK_BLADE_RIGHT} />
          </svg>
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className="promo-bar"
      aria-label={t({ de: "Aktuelle Angebote", en: "Current offers" })}
    >
      <div className="promo-bar-track">
        {renderItems(false)}
        {renderItems(true)}
      </div>
      <button
        type="button"
        className="promo-bar-close"
        onClick={close}
        aria-label={t({
          de: "Angebotsleiste schließen",
          en: "Close offers bar",
        })}
      >
        ×
      </button>
    </aside>
  );
}
