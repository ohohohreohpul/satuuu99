import { useLang } from '../lib/i18n';
import { VIDEO_TESTIMONIALS, VIDEO_WALL, CONTACT } from '../data/content';
import type { VideoTestimonial } from '../data/content';
import { Reveal } from '../components/ui/Reveal';
import { MediaFrame } from '../components/ui/MediaFrame';
import { StarRating } from '../components/ui/StarRating';
import { StarIcon, PlayIcon, ArrowRightIcon } from '../components/ui/Icons';

/**
 * "Deine Momente. Deine Worte." — a wall of vertical testimonial videos.
 * The first card is featured (tag + rating + booking CTA); the rest show a
 * play affordance. Videos plug into MediaFrame's `video` slot when generated.
 */
export function VideoTestimonialWall() {
  const { t } = useLang();
  const [featured, ...rest] = VIDEO_TESTIMONIALS;

  return (
    <section className="mx-auto max-w-[100rem] px-5 py-[var(--space-section)] sm:px-8">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Intro */}
        <Reveal className="lg:col-span-4 lg:self-center">
          <div className="mb-5 flex items-center gap-3">
            <span className="inline-flex text-gold" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            <span className="text-sm text-stone">{t(VIDEO_WALL.ratingLabel)}</span>
          </div>
          <h2 style={{ fontSize: 'var(--text-section)' }}>
            {t(VIDEO_WALL.titleLead)}
            <br />
            <span className="font-editorial text-mocha">{t(VIDEO_WALL.titleItalic)}</span>
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-stone">{t(VIDEO_WALL.body)}</p>
        </Reveal>

        {/* Video cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:col-span-8 lg:grid-cols-3">
          <FeaturedCard item={featured} bookingHref={CONTACT.booking} cta={t(VIDEO_WALL.cta)} />
          {rest.map((item) => (
            <PlayCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ item, bookingHref, cta }: { item: VideoTestimonial; bookingHref: string; cta: string }) {
  const { t } = useLang();
  return (
    <div className="relative col-span-2 overflow-hidden rounded-card shadow-lift sm:col-span-2 lg:col-span-1">
      <MediaFrame image={item.poster} video={item.video} label={item.name} aspect="aspect-[3/4] lg:aspect-[9/16]" tone="dark" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mocha-deep/85 via-transparent to-mocha-deep/20" aria-hidden />
      <span className="absolute left-3 top-3 rounded-pill bg-linen/90 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-espresso">
        {t(item.treatment)}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <StarRating value={item.rating} reviews={item.reviews} className="!text-linen/85" starsLabel={t({ de: 'Sterne', en: 'stars' })} reviewsLabel={t({ de: 'Reviews', en: 'reviews' })} />
        <a
          href={bookingHref}
          className="group mt-3 flex w-full items-center justify-center gap-2 rounded-pill bg-linen py-3 text-xs font-medium uppercase tracking-[0.15em] text-ink transition-colors hover:bg-porcelain"
        >
          {cta}
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

function PlayCard({ item }: { item: VideoTestimonial }) {
  const { t } = useLang();
  return (
    <div className="relative overflow-hidden rounded-card shadow-soft">
      <MediaFrame image={item.poster} video={item.video} label={item.name} aspect="aspect-[9/16]" tone="dark" />
      <div className="pointer-events-none absolute inset-0 bg-mocha-deep/25" aria-hidden />
      <span className="absolute left-3 top-3 rounded-pill bg-linen/85 px-2.5 py-1 text-[0.55rem] font-medium uppercase tracking-[0.16em] text-espresso">
        {t(item.treatment)}
      </span>
      {!item.video && (
        <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-linen/25 text-linen backdrop-blur-sm" aria-hidden>
          <PlayIcon className="h-3.5 w-3.5" />
        </span>
      )}
      <span className="absolute bottom-3 left-3 text-sm font-medium text-linen">{item.name}</span>
    </div>
  );
}
