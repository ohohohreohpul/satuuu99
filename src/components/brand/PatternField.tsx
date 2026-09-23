import { useId, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MARK_BLADE_LEFT,
  MARK_BLADE_RIGHT,
  MARK_DIAMOND,
  MARK_WIDTH,
} from "./markGeometry";

gsap.registerPlugin(ScrollTrigger);

/**
 * Lattice spacing in mark units, measured from the brand pattern artwork:
 * each mark stands on its own, its blade tips ending just short of the
 * diamond in the row below, with open ground between neighbours.
 */
const COLUMN_STEP = 460;
const ROW_STEP = 180;
const COLUMNS = 7;
const ROWS = 10;
const FIELD_WIDTH = COLUMN_STEP * COLUMNS;
const FIELD_HEIGHT = ROW_STEP * ROWS;
/** Vertical drift while the section scrolls past, as a percentage of height. */
const PARALLAX_DRIFT = 5;

/** Where the words sit, so the pattern can leave that area quiet. */
export type PatternQuiet = "center" | "start";

interface Placement {
  x: number;
  y: number;
}

/** Brick lattice: every other row shifts by half a step. */
const PLACEMENTS: Placement[] = Array.from({ length: ROWS }, (_, row) =>
  Array.from({ length: COLUMNS + 1 }, (_, column) => ({
    x: column * COLUMN_STEP + (row % 2 ? COLUMN_STEP / 2 : 0) - MARK_WIDTH / 2,
    y: row * ROW_STEP - ROW_STEP / 2,
  })),
).flat();

/**
 * "A familiar rhythm." The symbol repeated as a tonal pattern that settles in
 * as a gentle wave and leaves quiet around words. Place it as the first child
 * of a positioned, overflow-hidden section.
 */
export function PatternField({
  quiet,
  className = "",
}: {
  quiet: PatternQuiet;
  className?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const markId = `pattern-mark-${useId().replace(/[^\w-]/g, "")}`;

  useLayoutEffect(() => {
    const element = root.current;
    const section = element?.parentElement;
    if (!element || !section) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(element.querySelectorAll("use"), {
        opacity: 0,
        y: 18,
        duration: 1.1,
        ease: "power2.out",
        stagger: { each: 0.035, from: "center", grid: [ROWS, COLUMNS + 1] },
        scrollTrigger: { trigger: section, start: "top 80%", once: true },
      });
      gsap.fromTo(
        element.querySelector("svg"),
        { yPercent: -PARALLAX_DRIFT },
        {
          yPercent: PARALLAX_DRIFT,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });
    return () => media.revert();
  }, []);

  return (
    <div
      ref={root}
      className={`pattern-field pattern-field--quiet-${quiet} ${className}`.trim()}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${FIELD_WIDTH} ${FIELD_HEIGHT}`}
        focusable="false"
        style={{ width: `calc(${FIELD_WIDTH}px * var(--pattern-scale))` }}
      >
        <defs>
          <g id={markId}>
            <path d={MARK_DIAMOND} />
            <path d={MARK_BLADE_LEFT} />
            <path d={MARK_BLADE_RIGHT} />
          </g>
        </defs>
        {PLACEMENTS.map(({ x, y }) => (
          <use key={`${x}-${y}`} href={`#${markId}`} x={x} y={y} />
        ))}
      </svg>
    </div>
  );
}
