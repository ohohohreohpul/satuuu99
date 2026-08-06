import { useEffect, useRef, useState } from 'react';

interface VideoLoopProps {
  src: string;
  poster: string;
  /** Alt-equivalent label; the poster image carries it for assistive tech. */
  label: string;
  className?: string;
}

/**
 * Muted, looping, inline autoplay video with a poster fallback.
 * Plays only while in view (IntersectionObserver) to save CPU and keep
 * autoplay reliable. Honors prefers-reduced-motion: shows the poster only.
 */
export function VideoLoop({ src, poster, label, className = '' }: VideoLoopProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(query.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reducedMotion]);

  if (reducedMotion) {
    return <img src={poster} alt={label} className={className} loading="lazy" />;
  }

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    />
  );
}
