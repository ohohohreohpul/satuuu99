import { useId, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MARK_BLADE_LEFT,
  MARK_BLADE_RIGHT,
  MARK_DIAMOND,
  MARK_HEIGHT,
  MARK_ORIGIN,
  MARK_WIDTH,
} from "./markGeometry";

gsap.registerPlugin(ScrollTrigger);

/** How far each blade is folded in before the gesture opens, in degrees. */
const FOLDED_ANGLE = 24;
/** Vertical drift while the section scrolls past, as a percentage of height. */
const PARALLAX_DRIFT = 9;

export type GestureTone = "dark" | "taupe" | "paper";

/**
 * "One gesture. A larger presence." The symbol at supergraphic scale:
 * cropped by its section, quiet in contrast, and opening from the diamond as
 * the section arrives. Place it inside a positioned, overflow-hidden parent
 * and size and crop it with `className`.
 */
export function GestureGraphic({
  tone,
  className = "",
}: {
  tone: GestureTone;
  className?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  // useId() contains colons, which are not safe inside an SVG url() reference.
  const gradientId = `gesture-light-${useId().replace(/[^\w-]/g, "")}`;

  useLayoutEffect(() => {
    const element = root.current;
    const section = element?.parentElement;
    if (!element || !section) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const opening = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "top 25%",
          scrub: 0.8,
        },
      });
      opening
        .from(element.querySelector(".gesture-diamond"), {
          y: -26,
          opacity: 0,
          duration: 0.5,
        })
        .from(
          element.querySelector(".gesture-blade-left"),
          { rotation: -FOLDED_ANGLE, svgOrigin: MARK_ORIGIN, opacity: 0 },
          0.1,
        )
        .from(
          element.querySelector(".gesture-blade-right"),
          { rotation: FOLDED_ANGLE, svgOrigin: MARK_ORIGIN, opacity: 0 },
          0.1,
        );
      gsap.fromTo(
        element,
        { yPercent: PARALLAX_DRIFT },
        {
          yPercent: -PARALLAX_DRIFT,
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

  const fill = `url(#${gradientId})`;
  return (
    <div
      ref={root}
      className={`gesture gesture--${tone} ${className}`.trim()}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${MARK_WIDTH} ${MARK_HEIGHT}`}
        focusable="false"
        preserveAspectRatio="xMidYMin meet"
      >
        <defs>
          {/* A soft top light, echoing the embossed supergraphic artwork. */}
          <linearGradient id={gradientId} x1="0" y1="0" x2="0.35" y2="1">
            <stop offset="0" className="gesture-light" />
            <stop offset="1" className="gesture-shade" />
          </linearGradient>
        </defs>
        <path className="gesture-diamond" d={MARK_DIAMOND} fill={fill} />
        <path className="gesture-blade-left" d={MARK_BLADE_LEFT} fill={fill} />
        <path
          className="gesture-blade-right"
          d={MARK_BLADE_RIGHT}
          fill={fill}
        />
      </svg>
    </div>
  );
}
