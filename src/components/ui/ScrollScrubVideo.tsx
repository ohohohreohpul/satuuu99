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
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "+=130%",
        scrub: 0.45,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
    timeline.to(playhead, {
      time: Math.min(8.5, Math.max(0, element.duration - 0.05)),
      duration: 0.76,
      ease: "none",
      onUpdate: () => {
        if (Math.abs(element.currentTime - playhead.time) > 0.025) {
          element.currentTime = playhead.time;
        }
      },
    });
    timeline.to(
      hero.querySelector(".hero-copy"),
      { opacity: 0, y: -34, duration: 0.24, ease: "power2.in" },
      0.76,
    );
    timeline.to(
      hero.querySelector(".hero-media"),
      { scale: 1.035, duration: 0.24, ease: "power1.inOut" },
      0.76,
    );
    timeline.to(
      hero.querySelector(".hero-transition-veil"),
      { opacity: 0.42, duration: 0.24, ease: "none" },
      0.76,
    );

    return () => {
      timeline.kill();
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
      <span className="hero-transition-veil" aria-hidden="true" />
    </>
  );
}
