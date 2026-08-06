import { motion } from 'framer-motion';
import { useLang } from '../lib/i18n';
import { HERO, CONTACT } from '../data/content';
import { EASE } from '../lib/motion';
import { VideoLoop } from '../components/ui/VideoLoop';
import { StarIcon, ArrowRightIcon } from '../components/ui/Icons';

/**
 * Flat, full-bleed cinematic hero: an IO-gated looping video, a warm scrim for
 * legibility, and an editorial headline. Minimal, well-placed — no cursor tricks.
 */
export function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative min-h-[86svh] w-full overflow-hidden">
      <VideoLoop
        src="/assets/hero.mp4"
        poster="/assets/hero-poster.png"
        label={t({ de: 'Ruhiges Spa-Ritual in warmem Licht', en: 'A calm spa ritual in warm light' })}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Cinematic scrims — legible text, still light and airy */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mocha-deep/65 via-mocha-deep/10 to-transparent" aria-hidden />

      <div className="relative flex min-h-[86svh] flex-col justify-end px-6 pb-14 md:px-12 md:pb-20 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
          className="mb-6 inline-flex items-center gap-3"
        >
          <span className="inline-flex text-gold" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-4 w-4" />
            ))}
          </span>
          <span className="text-sm text-linen/85">{t(HERO.ratingLabel)}</span>
        </motion.div>

        <h1 className="max-w-4xl font-display text-linen" style={{ fontSize: 'var(--text-hero)', lineHeight: 0.98 }}>
          <span className="block overflow-hidden">
            <motion.span initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 1, delay: 0.4, ease: EASE }} className="block">
              {t(HERO.headlineLead)}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 1, delay: 0.54, ease: EASE }} className="block font-editorial">
              {t(HERO.headlineItalic)}
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: EASE }}
          className="mt-7 max-w-xl text-base leading-relaxed text-linen/85 sm:text-lg"
        >
          {t(HERO.sub)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95, ease: EASE }}
          className="mt-9 flex flex-wrap items-center gap-6"
        >
          <a
            href={CONTACT.booking}
            className="group inline-flex w-fit items-center gap-3 rounded-pill bg-linen py-3 pl-6 pr-3 text-sm font-medium tracking-wide text-ink transition-colors duration-300 hover:bg-porcelain"
          >
            {t(HERO.ctaPrimary)}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mocha text-linen transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </a>
          <a href="#rituale" className="group inline-flex items-center gap-2 text-sm text-linen/85 transition-colors hover:text-linen">
            <span className="relative">
              {t(HERO.ctaSecondary)}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-linen transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" aria-hidden />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
