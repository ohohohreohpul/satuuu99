import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HIGH_FETCH_PRIORITY = { fetchpriority: "high" };

interface ScrollScrubVideoProps {
  src: string;
  poster: string;
  label: string;
  className?: string;
}

export function ScrollScrubVideo({
  src,
  poster,
  label,
  className = "",
}: ScrollScrubVideoProps) {
  const video = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [reduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useLayoutEffect(() => {
    const element = video.current;
    const hero = element?.closest<HTMLElement>(".hero");
    if (!element || !hero || !ready || reduced || failed) return;

    element.pause();
    element.currentTime = 0;
    const playhead = { time: 0 };
    const tween = gsap.to(playhead, {
      time: Math.max(0, element.duration - 0.05),
      ease: "none",
      onUpdate: () => {
        if (Math.abs(element.currentTime - playhead.time) > 0.025) {
          element.currentTime = playhead.time;
        }
      },
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 0.35,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.kill();
    };
  }, [failed, ready, reduced]);

  return (
    <>
      <img
        src={poster}
        alt={label}
        className={`${className} hero-poster`}
        {...HIGH_FETCH_PRIORITY}
      />
      {!reduced && !failed && (
        <video
          ref={video}
          src={src}
          poster={poster}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className={`${className} hero-scrub-film${ready ? " is-ready" : ""}`}
          onLoadedMetadata={() => setReady(true)}
          onError={() => setFailed(true)}
        />
      )}
    </>
  );
}
