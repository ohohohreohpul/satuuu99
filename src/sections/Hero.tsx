import type { PointerEvent as ReactPointerEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { useLang } from '../lib/i18n';
import { HERO, CONTACT } from '../data/content';
import { EASE } from '../lib/motion';
import { VideoLoop } from '../components/ui/VideoLoop';
import { MagneticButton } from '../components/ui/Interactive';
import { StarIcon, ArrowRightIcon } from '../components/ui/Icons';

/**
 * Full-bleed cinematic hero: an IO-gated looping video that drifts gently with
 * the pointer (cursor parallax), a floating gold rating chip, and an editorial
 * headline mixing a roman lead with a Fraunces-italic fragment.
 */
export function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  // Pointer parallax — normalized -0.5..0.5, spring-smoothed.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 70, damping: 18, mass: 0.5 });
  const sy = useSpring(py, { stiffness: 70, damping: 18, mass: 0.5 });
  // Noticeable but graceful drift; the 1.14 zoom hides the travel at the edges.
  const videoX = useTransform(sx, [-0.5, 0.5], ['-42px', '42px']);
  const videoY = useTransform(sy, [-0.5, 0.5], ['-30px', '30px']);
  const contentX = useTransform(sx, [-0.5, 0.5], ['14px', '-14px']);
  const contentY = useTransform(sy, [-0.5, 0.5], ['8px', '-8px']);

  function onPointerMove(e: ReactPointerEvent<HTMLElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  }
  function reset() {
    px.set(0);
    py.set(0);
  }

  return (
    <section
      id="top"
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      className="relative min-h-[100svh] px-3 pb-3 pt-3 md:px-5 md:pb-5"
    >
      <div className="relative min-h-[calc(100svh-1.5rem)] overflow-hidden rounded-xl md:min-h-[calc(100svh-2.5rem)] md:rounded-[2rem]">
        {/* Background media with cursor parallax (scaled up to hide the travel).
            Scale lives in the motion style so framer doesn't clobber a CSS transform. */}
        <motion.div style={{ x: videoX, y: videoY, scale: 1.14 }} className="absolute inset-0">
          <VideoLoop
            src="/assets/hero.mp4"
            poster="/assets/hero-poster.png"
            label={t({ de: 'Ruhiges Spa-Ritual in warmem Licht', en: 'A calm spa ritual in warm light' })}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>

        {/* Cinematic scrims */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mocha-deep/70 via-mocha-deep/10 to-transparent" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ink/25 via-transparent to-transparent" aria-hidden />

        {/* Content */}
        <motion.div
          style={{ x: contentX, y: contentY }}
          className="relative flex min-h-[calc(100svh-1.5rem)] flex-col justify-end p-6 md:min-h-[calc(100svh-2.5rem)] md:p-12 lg:p-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
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
              <motion.span initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 1.1, delay: 0.5, ease: EASE }} className="block">
                {t(HERO.headlineLead)}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 1.1, delay: 0.66, ease: EASE }} className="block font-editorial">
                {t(HERO.headlineItalic)}
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.95, ease: EASE }}
            className="mt-7 max-w-xl text-base leading-relaxed text-linen/85 sm:text-lg"
          >
            {t(HERO.sub)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.12, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-6"
          >
            <MagneticButton
              href={CONTACT.booking}
              className="group inline-flex w-fit items-center gap-3 rounded-pill bg-linen py-3 pl-6 pr-3 text-sm font-medium tracking-wide text-ink shadow-soft transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-hover"
            >
              {t(HERO.ctaPrimary)}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mocha text-linen transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5" aria-hidden>
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </MagneticButton>
            <a href="#rituale" className="group inline-flex items-center gap-2 text-sm text-linen/85 transition-colors hover:text-linen">
              <span className="relative">
                {t(HERO.ctaSecondary)}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-linen transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" aria-hidden />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
