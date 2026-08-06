import type { ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  /** Draw the leading hairline rule. */
  rule?: boolean;
}

/** Small uppercase tracked label — the quiet section marker. */
export function Eyebrow({ children, className = '', rule = true }: EyebrowProps) {
  return (
    <span className={`inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-eyebrow text-stone ${className}`}>
      {rule && <span className="h-px w-8 bg-clay/60" aria-hidden />}
      {children}
    </span>
  );
}
