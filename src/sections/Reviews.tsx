import { useLang } from '../lib/i18n';
import type { Localized } from '../lib/i18n';
import { REVIEWS, RATING } from '../data/content';
import type { Review } from '../data/content';
import { Reveal } from '../components/ui/Reveal';
import { StarRating } from '../components/ui/StarRating';

/**
 * "Geliebt von 1.200+ Gästen" — a rating header over two counter-scrolling
 * marquee rows of review cards. Pauses on hover. Pure CSS marquee.
 */
export function Reviews() {
  const { t } = useLang();
  const half = Math.ceil(REVIEWS.length / 2);
  const rowA = REVIEWS.slice(0, half);
  const rowB = REVIEWS.slice(half);

  return (
    <section id="stimmen" className="overflow-hidden bg-sand/60 py-[var(--space-section)]">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 style={{ fontSize: 'var(--text-section)' }}>
            {t({ de: 'Geliebt von', en: 'Loved by' })}{' '}
            <span className="font-editorial text-mocha">{t({ de: `${RATING.count} Gästen`, en: `${RATING.count} guests` })}</span>
          </h2>
          <div className="mt-5 flex items-center justify-center">
            <StarRating
              value={RATING.value}
              size="md"
              starsLabel={t({ de: 'Sterne', en: 'stars' })}
              className="!text-base"
            />
          </div>
          <p className="mt-2 text-sm text-stone">
            {t({ de: `Basierend auf ${RATING.total} Bewertungen`, en: `Based on ${RATING.total} reviews` })}
          </p>
        </Reveal>
      </div>

      <div className="marquee-paused mt-14 overflow-hidden">
        <div className="marquee-track">
          {[...rowA, ...rowA].map((r, i) => (
            <ReviewCard key={`a-${i}`} review={r} hidden={i >= rowA.length} />
          ))}
        </div>
      </div>
      <div className="marquee-paused mt-5 overflow-hidden [&_.marquee-track]:[animation-direction:reverse]">
        <div className="marquee-track">
          {[...rowB, ...rowB].map((r, i) => (
            <ReviewCard key={`b-${i}`} review={r} hidden={i >= rowB.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, hidden }: { review: Review; hidden: boolean }) {
  const { t } = useLang();
  const stars = t({ de: 'Sterne', en: 'stars' } as Localized);
  return (
    <article
      aria-hidden={hidden}
      className="mx-3 inline-flex w-[20rem] shrink-0 flex-col whitespace-normal rounded-card border border-taupe/40 bg-linen p-7 text-left align-top shadow-soft sm:w-[24rem]"
    >
      <StarRating value={RATING.value} starsLabel={stars} />
      <h3 className="mt-4 font-display text-lg text-ink">{t(review.title)}</h3>
      <p className="mt-2 flex-1 leading-relaxed text-stone">{t(review.quote)}</p>
      <footer className="mt-6 flex items-center gap-2 text-sm text-espresso">
        <span className="font-medium">{review.name}</span>
        <span className="text-stone">·</span>
        <span className="text-stone">{t(review.month)}</span>
      </footer>
    </article>
  );
}
