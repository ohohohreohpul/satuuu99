import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

const SESSION_KEY = "satuuu99-intro-seen";

export function Preloader() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      window.location.pathname === "/" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      sessionStorage.getItem(SESSION_KEY) !== "true"
    );
  });
  const root = useRef<HTMLDivElement>(null);
  const played = useRef(false);

  const finish = () => {
    sessionStorage.setItem(SESSION_KEY, "true");
    setVisible(false);
  };

  useLayoutEffect(() => {
    if (!visible || !root.current || played.current) return;
    played.current = true;
    document.body.classList.add("is-preloading");
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: finish,
      });
      timeline
        .fromTo(
          ".preloader-rule",
          { scaleY: 0 },
          { scaleY: 1, duration: 0.55, ease: "power2.inOut" },
        )
        .fromTo(
          ".preloader-symbol",
          { clipPath: "inset(0 49.8% 0 49.8%)", scale: 0.92 },
          {
            clipPath: "inset(0 0% 0 0%)",
            scale: 1,
            duration: 1.05,
            ease: "power4.out",
          },
          "-=0.2",
        )
        .fromTo(
          ".preloader-word span",
          { yPercent: 115, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.52, stagger: 0.055 },
          "-=0.55",
        )
        .to({}, { duration: 0.42 })
        .to(".preloader-inner", {
          opacity: 0,
          y: -14,
          duration: 0.42,
          ease: "power2.in",
        })
        .to(
          root.current,
          {
            yPercent: -100,
            duration: 0.8,
            ease: "power4.inOut",
          },
          "-=0.08",
        );
    }, root);
    return () => {
      context.revert();
      document.body.classList.remove("is-preloading");
      played.current = false;
    };
  }, [visible]);

  if (!visible) return null;
  return (
    <div
      className="brand-preloader"
      ref={root}
      role="status"
      aria-label="satuuu99 lädt"
    >
      <div className="preloader-inner">
        <i className="preloader-rule" aria-hidden="true" />
        <img className="preloader-symbol" src="/brand/mark.svg" alt="" />
        <div className="preloader-word" aria-hidden="true">
          {"SATUUU99".split("").map((letter, index) => (
            <span key={`${letter}-${index}`}>{letter}</span>
          ))}
        </div>
      </div>
      <button type="button" onClick={finish}>
        Überspringen
      </button>
    </div>
  );
}
