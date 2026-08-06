import { useLang } from '../../lib/i18n';
import type { Treatment } from '../../data/content';
import { MediaFrame } from './MediaFrame';
import { StarRating } from './StarRating';
import { ArrowRightIcon } from './Icons';

interface TreatmentCardProps {
  treatment: Treatment;
  bookingHref: string;
}

/**
 * Flat treatment card (after soulhouse.me): a sharp-cornered image with a
 * category tag, a gold rating row, a Fraunces title, and three benefit lines.
 * No shadow, no tilt — just a quiet image scale on hover.
 */
export function TreatmentCard({ treatment, bookingHref }: TreatmentCardProps) {
  const { t } = useLang();

  return (
    <a href={bookingHref} className="group flex w-[80vw] shrink-0 snap-start flex-col sm:w-[22rem] lg:w-[24rem]">
      <div className="relative overflow-hidden">
        <MediaFrame
          image={treatment.image}
          video={treatment.video}
          label={t(treatment.name)}
          aspect="aspect-[4/5]"
          imgClassName="transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-pill bg-linen/90 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-espresso backdrop-blur-sm">
          {t(treatment.category)}
        </span>
      </div>

      <div className="mt-4 flex flex-col">
        <StarRating
          value={treatment.rating}
          reviews={treatment.reviews}
          starsLabel={t({ de: 'Sterne', en: 'stars' })}
          reviewsLabel={t({ de: 'Reviews', en: 'reviews' })}
        />

        <h3 className="mt-2 flex items-center gap-2 font-display text-2xl text-ink">
          {t(treatment.name)}
          <ArrowRightIcon className="h-4 w-4 -translate-x-1 text-mocha opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
        </h3>

        <ul className="mt-3 flex flex-col gap-2">
          {treatment.bullets.map((b) => (
            <li key={t(b)} className="flex items-start gap-2.5 text-sm leading-snug text-stone">
              <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-mocha-soft" aria-hidden />
              {t(b)}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
