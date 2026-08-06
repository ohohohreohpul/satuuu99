import { useLang } from '../../lib/i18n';
import type { Lang } from '../../lib/i18n';

const OPTIONS: Lang[] = ['de', 'en'];

/** Minimal DE / EN switch that matches the reference's language toggle. */
export function LanguageToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`inline-flex items-center gap-1 text-[0.72rem] uppercase tracking-[0.2em] ${className}`}>
      {OPTIONS.map((option, i) => (
        <span key={option} className="inline-flex items-center gap-1">
          {i > 0 && <span className="text-clay/60" aria-hidden>/</span>}
          <button
            type="button"
            onClick={() => setLang(option)}
            aria-pressed={lang === option}
            className={`transition-colors ${lang === option ? 'text-ink' : 'text-stone hover:text-ink'}`}
          >
            {option}
          </button>
        </span>
      ))}
    </div>
  );
}
