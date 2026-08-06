import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EASE } from '../../lib/motion';

export interface StyledSegment {
  text: string;
  className?: string;
}

interface MultiStyleProps {
  segments: StyledSegment[];
  className?: string;
  delay?: number;
  stagger?: number;
}

/**
 * Kinetic headline — each word rises (y:20 → 0) with a staggered delay once the
 * line scrolls into view. Each segment carries its own per-word className so a
 * roman lead and a Fraunces-italic fragment animate as one line.
 *
 * The wrapper is a flex container, so whitespace between word spans collapses —
 * the gap IS the word spacing.
 */
export function WordsPullUp({ segments, className = '', delay = 0, stagger = 0.08 }: MultiStyleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const words = segments.flatMap((seg) =>
    seg.text.split(' ').map((word) => ({ word, className: seg.className ?? '' })),
  );

  return (
    <span ref={ref} className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className={`inline-block ${w.className}`}
          initial={{ y: 24, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: delay + i * stagger, ease: EASE }}
        >
          {w.word}
        </motion.span>
      ))}
    </span>
  );
}
