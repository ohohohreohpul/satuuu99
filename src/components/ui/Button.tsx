import type { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'solid' | 'line';
  className?: string;
}

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/**
 * Two premium button treatments:
 * - `solid`: warm brass pill, the primary action.
 * - `line`: quiet text link with an underline that draws in on hover.
 */
export function Button({ href, children, variant = 'solid', className = '' }: ButtonProps) {
  if (variant === 'line') {
    return (
      <a
        href={href}
        className={`group inline-flex items-center gap-2 font-display text-lg text-ink transition-colors hover:text-mocha ${className}`}
      >
        <span className="relative">
          {children}
          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-mocha transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" aria-hidden />
        </span>
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
          <ArrowIcon />
        </span>
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`group inline-flex w-fit items-center gap-3 rounded-pill bg-mocha py-3 pl-6 pr-3 text-sm font-medium tracking-wide text-linen shadow-soft transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-mocha-deep hover:shadow-hover ${className}`}
    >
      {children}
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-linen text-mocha transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5" aria-hidden>
        <ArrowIcon />
      </span>
    </a>
  );
}
