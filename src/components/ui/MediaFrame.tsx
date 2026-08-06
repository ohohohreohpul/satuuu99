import { useState } from 'react';
import { useLang } from '../../lib/i18n';
import { ImageIcon } from './Icons';

interface MediaFrameProps {
  image?: string;
  video?: string;
  poster?: string;
  alt?: string;
  /** Shown inside the placeholder while real media is being generated. */
  label?: string;
  className?: string;
  imgClassName?: string;
  /** Tailwind aspect ratio utility, e.g. "aspect-[4/5]". */
  aspect?: string;
  priority?: boolean;
  /** Placeholder mood — dark for hero/overlaid-text frames, light for inline. */
  tone?: 'light' | 'dark';
}

/** Pull a display ratio ("4:5") out of the first `aspect-[w/h]` utility. */
function ratioFrom(aspect: string): string | null {
  const m = aspect.match(/aspect-\[(\d+)\/(\d+)\]/);
  return m ? `${m[1]}:${m[2]}` : null;
}

/**
 * A single image/video frame with a clearly-labelled placeholder slot.
 * Drop a real generated asset into `image`/`video` and the placeholder
 * disappears. If the asset path 404s (media not generated yet), it falls back
 * to the placeholder rather than a broken image.
 */
export function MediaFrame({
  image,
  video,
  poster,
  alt = '',
  label,
  className = '',
  imgClassName = '',
  aspect = 'aspect-[4/5]',
  priority = false,
  tone = 'light',
}: MediaFrameProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const showVideo = video && !videoFailed;
  const showImage = !showVideo && image && !imgFailed;
  const showPlaceholder = !showVideo && !showImage;

  return (
    <div className={`relative isolate overflow-hidden bg-sand ${aspect} ${className}`}>
      {showVideo && (
        <video
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
          src={video}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          aria-label={alt}
          onError={() => setVideoFailed(true)}
        />
      )}
      {showImage && (
        <img
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
          src={image}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setImgFailed(true)}
        />
      )}
      {showPlaceholder && <Placeholder label={label} tone={tone} ratio={ratioFrom(aspect)} path={image || video} />}
      {/* Whisper grain to keep it cinematic */}
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply" aria-hidden />
    </div>
  );
}

function Placeholder({
  label,
  tone = 'light',
  ratio,
  path,
}: {
  label?: string;
  tone?: 'light' | 'dark';
  ratio?: string | null;
  path?: string;
}) {
  const { t } = useLang();
  const isDark = tone === 'dark';
  const background = isDark
    ? 'radial-gradient(130% 100% at 65% 18%, #6a5847 0%, #4a3b2e 45%, #2b221a 100%)'
    : 'radial-gradient(120% 90% at 30% 20%, #f2e9db 0%, #e6d9c5 45%, #d3c0a5 100%)';
  const ink = isDark ? 'text-linen' : 'text-espresso';
  const soft = isDark ? 'text-linen/55' : 'text-espresso/55';
  const border = isDark ? 'border-linen/25' : 'border-espresso/20';
  // Show just the filename so it's obvious which asset to drop in.
  const file = path?.split('/').pop();

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4" style={{ background }}>
      <div className={`flex max-w-full flex-col items-center gap-2 rounded-xl border border-dashed ${border} px-5 py-6 text-center`}>
        <ImageIcon className={`h-7 w-7 ${soft}`} />
        <span className={`text-[0.6rem] font-medium uppercase tracking-[0.22em] ${soft}`}>
          {t({ de: 'Bild-Platzhalter', en: 'Image placeholder' })}
          {ratio ? ` · ${ratio}` : ''}
        </span>
        {label && <span className={`font-editorial text-sm leading-tight ${ink}`}>{label}</span>}
        {file && <span className={`max-w-[14rem] truncate font-mono text-[0.62rem] ${soft}`}>{file}</span>}
      </div>
    </div>
  );
}
