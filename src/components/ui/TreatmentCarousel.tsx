import { useCallback, useEffect, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent, MouseEvent as ReactMouseEvent } from 'react';
import type { Localized } from '../../lib/i18n';
import { useLang } from '../../lib/i18n';
import type { Treatment } from '../../data/content';
import { Eyebrow } from './Eyebrow';
import { TreatmentCard } from './TreatmentCard';
import { MediaFrame } from './MediaFrame';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

export interface EditorialCard {
  image?: string;
  kicker?: Localized;
  quote: Localized;
}

interface TreatmentCarouselProps {
  id?: string;
  eyebrow?: Localized;
  titleLead: Localized;
  titleItalic: Localized;
  editorial: EditorialCard;
  treatments: Treatment[];
  bookingHref: string;
  className?: string;
}

const DRAG_THRESHOLD = 6; // px moved before a drag suppresses the click

/**
 * Signature soulhouse.me carousel: a tall editorial quote card pinned first,
 * then a horizontally-scrolling row of treatment cards. Scrolls via native
 * trackpad, pointer drag, and prev/next buttons — no vertical scroll-jacking.
 */
export function TreatmentCarousel({
  id,
  eyebrow,
  titleLead,
  titleItalic,
  editorial,
  treatments,
  bookingHref,
  className = '',
}: TreatmentCarouselProps) {
  const { t } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Drag-to-scroll state
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0, moved: 0 });

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateEdges();
    el.addEventListener('scroll', updateEdges, { passive: true });
    window.addEventListener('resize', updateEdges);
    // Recompute arrow-enabled state once cards have laid out / on any resize.
    const ro = new ResizeObserver(updateEdges);
    ro.observe(el);

    // Wheel-to-horizontal: a vertical mouse wheel over the track scrolls the
    // cards sideways. At either end it stops hijacking so the page scrolls on.
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return; // already a horizontal gesture
      const canLeft = el.scrollLeft > 0;
      const canRight = el.scrollLeft < el.scrollWidth - el.clientWidth - 1;
      if ((e.deltaY < 0 && canLeft) || (e.deltaY > 0 && canRight)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      el.removeEventListener('scroll', updateEdges);
      window.removeEventListener('resize', updateEdges);
      el.removeEventListener('wheel', onWheel);
      ro.disconnect();
    };
  }, [updateEdges]);

  const scrollByCards = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.8, 420);
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || e.pointerType === 'touch') return; // native touch scroll is fine
    drag.current = { active: true, startX: e.clientX, scrollLeft: el.scrollLeft, moved: 0 };
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    drag.current.moved = Math.max(drag.current.moved, Math.abs(dx));
    el.scrollLeft = drag.current.scrollLeft - dx;
  };
  const endDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (el?.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    drag.current.active = false;
  };
  // Suppress the click that follows a real drag so cards don't navigate.
  const onClickCapture = (e: ReactMouseEvent) => {
    if (drag.current.moved > DRAG_THRESHOLD) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = 0;
    }
  };

  return (
    <section id={id} className={`py-[var(--space-section)] ${className}`}>
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8">
        {/* Header + controls */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            {eyebrow && <Eyebrow>{t(eyebrow)}</Eyebrow>}
            <h2 className="mt-4" style={{ fontSize: 'var(--text-section)' }}>
              {t(titleLead)} <span className="font-editorial text-mocha">{t(titleItalic)}</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <CarouselButton dir="left" disabled={atStart} onClick={() => scrollByCards(-1)} />
            <CarouselButton dir="right" disabled={atEnd} onClick={() => scrollByCards(1)} />
          </div>
        </div>
      </div>

      {/* Track — bleeds to the right edge, aligned left to the container */}
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 [scroll-padding-left:1.25rem] sm:px-8 sm:[scroll-padding-left:2rem] lg:mx-auto lg:max-w-[100rem]"
        style={{ cursor: 'grab', touchAction: 'pan-y' }}
      >
        {/* Editorial quote card */}
        <div className="relative flex min-h-[26rem] w-[80vw] shrink-0 snap-start overflow-hidden rounded-card shadow-soft sm:w-[22rem] lg:w-[26rem]">
          <MediaFrame
            image={editorial.image}
            label={t(editorial.quote)}
            aspect="aspect-[3/4] sm:aspect-auto"
            className="absolute inset-0 h-full w-full"
            tone="dark"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mocha-deep/85 via-mocha-deep/25 to-transparent" aria-hidden />
          <div className="relative mt-auto flex flex-col gap-4 p-7 text-linen">
            <span className="font-display text-3xl leading-[1.5] text-linen" aria-hidden>
              ⸙
            </span>
            {editorial.kicker && (
              <span className="text-[0.62rem] uppercase tracking-[0.24em] text-linen/70">{t(editorial.kicker)}</span>
            )}
            <p className="font-display text-2xl leading-tight text-linen sm:text-[1.7rem]">{t(editorial.quote)}</p>
          </div>
        </div>

        {treatments.map((tr) => (
          <TreatmentCard key={tr.id} treatment={tr} bookingHref={bookingHref} />
        ))}

        {/* trailing spacer so the last card can clear the right bleed */}
        <div className="w-1 shrink-0 sm:w-4" aria-hidden />
      </div>
    </section>
  );
}

function CarouselButton({
  dir,
  disabled,
  onClick,
}: {
  dir: 'left' | 'right';
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === 'left' ? 'Previous' : 'Next'}
      className="grid h-11 w-11 place-items-center rounded-full border border-taupe/70 text-espresso transition-all duration-300 hover:border-mocha hover:bg-mocha hover:text-linen disabled:cursor-default disabled:opacity-30 disabled:hover:border-taupe/70 disabled:hover:bg-transparent disabled:hover:text-espresso"
    >
      {dir === 'left' ? <ChevronLeftIcon className="h-5 w-5" /> : <ChevronRightIcon className="h-5 w-5" />}
    </button>
  );
}
