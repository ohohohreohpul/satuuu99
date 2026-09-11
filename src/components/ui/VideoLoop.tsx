import { useEffect, useRef, useState } from "react";
import { useLang } from "../../lib/i18n";
import { PauseIcon, PlayIcon } from "./Icons";

// React 18 drops the camelCase `fetchPriority` prop with a warning; the
// lowercase DOM attribute is passed through and honoured by the browser.
const HIGH_FETCH_PRIORITY = { fetchpriority: "high" };

interface VideoLoopProps {
  src: string;
  poster: string;
  label: string;
  className?: string;
}
export function VideoLoop({
  src,
  poster,
  label,
  className = "",
}: VideoLoopProps) {
  const { t } = useLang();
  const video = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReduced(query.matches);
    query.addEventListener("change", change);
    return () => query.removeEventListener("change", change);
  }, []);
  useEffect(() => {
    const element = video.current;
    if (!element || reduced || failed) return;
    let visible = false;
    const sync = () => {
      if (visible && !paused && !document.hidden)
        void element.play().catch(() => setPaused(true));
      else element.pause();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        sync();
      },
      { threshold: 0.1 },
    );
    observer.observe(element);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      element.pause();
    };
  }, [reduced, paused, failed]);
  return (
    <>
      <img
        src={poster}
        alt={label}
        className={className}
        {...HIGH_FETCH_PRIORITY}
      />
      {!reduced && !failed && (
        <video
          ref={video}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          className={className}
          onPlaying={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setFailed(true)}
        />
      )}
      {!reduced && !failed && (
        <button
          className="film-control"
          onClick={() => setPaused(playing)}
          aria-label={t(
            playing
              ? { de: "Video pausieren", en: "Pause video" }
              : { de: "Video abspielen", en: "Play video" },
          )}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
      )}
    </>
  );
}
