import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { OFFER_PATH } from "../../data/offer";
import { activePromotions } from "../../data/promotions";
import { useConsent } from "../../lib/consent";
import { useLang } from "../../lib/i18n";
import { ArrowRightIcon } from "../ui/Icons";

const SEEN_KEY = "satuuu99-promo-slide-in-seen";
/** Show after scrolling past most of the first screen … */
const SCROLL_TRIGGER = 0.8;
/** … or after this long on the page, whichever comes first. */
const TIME_TRIGGER_MS = 15_000;
/** Pages where the offer is already the subject, or out of place. */
const QUIET_PATHS = [OFFER_PATH, "/impressum", "/datenschutz", "/agbs"];

function wasSeen(): boolean {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "true";
  } catch {
    return false;
  }
}

function markSeen(): void {
  try {
    sessionStorage.setItem(SEEN_KEY, "true");
  } catch {
    // Without storage it may show again on the next page; acceptable.
  }
}

/**
 * A soft, non-blocking card for the leading promotion: slides in once per
 * visit, never while the cookie banner is open, closes with a click or Esc.
 */
export function PromoSlideIn() {
  const { t } = useLang();
  const { pathname } = useLocation();
  const consent = useConsent();
  const [isOpen, setIsOpen] = useState(false);
  const [isDone, setIsDone] = useState(wasSeen);
  const promotion = activePromotions()[0];
  const isQuietPage = QUIET_PATHS.includes(pathname);
  const isEligible = !!promotion && !isDone && consent !== null && !isQuietPage;

  useEffect(() => {
    if (!isEligible || isOpen) return;
    const open = () => setIsOpen(true);
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * SCROLL_TRIGGER) open();
    };
    const timer = window.setTimeout(open, TIME_TRIGGER_MS);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isEligible, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    markSeen();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsDone(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  if (!isOpen || isDone || !promotion || isQuietPage) return null;

  return (
    <aside
      className={`promo-slide-in promo-slide-in--${promotion.id}`}
      aria-labelledby="promo-slide-in-title"
    >
      <button
        type="button"
        className="promo-slide-in-close"
        onClick={() => setIsDone(true)}
        aria-label={t({ de: "Hinweis schließen", en: "Close notice" })}
      >
        ×
      </button>
      <picture className="promo-slide-in-image">
        <source srcSet={`${promotion.image.src}.webp`} type="image/webp" />
        <img
          src={`${promotion.image.src}.jpg`}
          alt={t(promotion.image.alt)}
          width={720}
          height={440}
          loading="lazy"
          decoding="async"
        />
      </picture>
      <p className="eyebrow">{t(promotion.eyebrow)}</p>
      <h2 id="promo-slide-in-title">{t(promotion.title)}</h2>
      <p className="promo-slide-in-note">{t(promotion.note)}</p>
      <Link
        className="button"
        to={`${OFFER_PATH}#${promotion.id}`}
        onClick={() => setIsDone(true)}
      >
        {t({ de: "Zum Angebot", en: "See the offer" })}
        <ArrowRightIcon />
      </Link>
    </aside>
  );
}
