import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function useHomeMotion(language: string) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".hero-copy > *", {
        y: 24,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power2.out",
        clearProps: "all",
      });
      gsap.from(".hero-media", { opacity: 0, duration: 1.3 });
      gsap.utils
        .toArray<HTMLElement>(
          ".brand-story, .studio-intro, .ritual-finder, .journey-heading, .journey-stage, .editorial-heading, .journal-card",
        )
        .forEach((el) => {
          gsap.from(el, {
            y: 35,
            opacity: 0,
            duration: 0.9,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });
    });
    return () => media.revert();
  }, [language]);
}
