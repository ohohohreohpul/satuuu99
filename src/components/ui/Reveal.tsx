import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { riseIn, viewportOnce } from '../../lib/motion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'li' | 'section' | 'article' | 'figure';
}

/** Scroll-triggered fade-and-rise wrapper. Fires once when scrolled into view. */
export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={riseIn}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
