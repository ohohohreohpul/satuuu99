import { useLang } from '../../lib/i18n';
import { ANNOUNCEMENT } from '../../data/content';
import { LanguageToggle } from '../ui/LanguageToggle';

/**
 * Thin flat top strip — promo line + company link + language toggle.
 * Muted dark text on the light header; collapses to zero height once scrolled.
 */
export function AnnouncementBar({ collapsed }: { collapsed: boolean }) {
  const { t } = useLang();
  return (
    <div
      className="overflow-hidden border-b border-taupe/40 bg-sand/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{ maxHeight: collapsed ? 0 : '2.5rem', opacity: collapsed ? 0 : 1 }}
      aria-hidden={collapsed}
    >
      <div className="mx-auto flex max-w-[100rem] items-center justify-between gap-4 px-5 py-2 text-[0.68rem] text-stone sm:px-8">
        <p className="truncate">{t(ANNOUNCEMENT.promo)}</p>
        <div className="flex shrink-0 items-center gap-5">
          <a href="#studio" className="hidden uppercase tracking-[0.16em] transition-colors hover:text-ink sm:inline">
            {t(ANNOUNCEMENT.company)}
          </a>
          <LanguageToggle />
        </div>
      </div>
    </div>
  );
}
