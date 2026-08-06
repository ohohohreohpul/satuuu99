import type { Variants } from 'framer-motion';

/** Shared cinematic ease — long, calm, expensive-feeling. */
export const EASE = [0.16, 1, 0.3, 1] as const;

/** Standard fade-and-rise. Slower + shorter travel than a playful site — ZEN. */
export const riseIn: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: EASE },
  },
};

/** Smaller rise for dense grids. */
export const riseInSm: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

/** Container that staggers its children — unhurried cadence. */
export const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};

/** Slightly quicker stagger for grids. */
export const staggerFast: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

/** Quiet scale-up for imagery — barely perceptible, luxurious. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.3, ease: EASE },
  },
};

/** Soft mask reveal for headlines (paired with clip on a wrapper). */
export const lineReveal: Variants = {
  hidden: { opacity: 0, y: '110%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: { duration: 1, ease: EASE },
  },
};

/** Fires once, a little before fully in view. */
export const viewportOnce = { once: true, amount: 0.2 } as const;
/** For tall sections — fire as soon as a meaningful part enters. */
export const viewportTall = { once: true, amount: 0.08 } as const;
