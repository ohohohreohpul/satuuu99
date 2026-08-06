import { useLang } from '../lib/i18n';
import { RITUAL_TICKER } from '../data/content';

/**
 * A quiet auto-scrolling ticker of the studio's own rituals — the elegant
 * marquee band without fabricating press logos. Pauses on hover.
 */
export function PressMarquee() {
  const { t } = useLang();
  const items = [...RITUAL_TICKER, ...RITUAL_TICKER];

  return (
    <section aria-label={t({ de: 'Eine Auswahl unserer Rituale', en: 'A selection of our rituals' })} className="border-y border-taupe/40 bg-linen/60 py-6">
      <div className="marquee-paused overflow-hidden">
        <div className="marquee-track marquee-slow">
          {items.map((item, i) => (
            <span key={i} className="mx-8 inline-flex items-center gap-8 font-display text-lg text-stone sm:text-xl" aria-hidden={i >= RITUAL_TICKER.length}>
              {t(item)}
              <span className="text-mocha/50">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
