import { Link } from "react-router-dom";
import { JOURNAL_SUMMARIES } from "../data/journal/summaries";
import { useLang } from "../lib/i18n";
import { Photo } from "../components/media/Photo";
import { ArrowRightIcon } from "../components/ui/Icons";

/**
 * Two article cards on the homepage. Imports only article summaries, so the
 * homepage bundle never carries the article bodies.
 */
export function JournalPreview() {
  const { t } = useLang();
  return (
    <section className="journal-section section-shell">
      <div className="editorial-heading">
        <div>
          <p className="eyebrow">Journal</p>
          <h2>
            {t({
              de: "Gedanken für eine ruhigere Zeit.",
              en: "A little room for reflection.",
            })}
          </h2>
        </div>
        <Link className="text-link" to="/journal">
          {t({ de: "Alle Geschichten", en: "All stories" })}
          <ArrowRightIcon />
        </Link>
      </div>
      <div className="journal-grid">
        {JOURNAL_SUMMARIES.slice(0, 2).map((a) => (
          <Link className="journal-card" key={a.slug} to={"/journal/" + a.slug}>
            <Photo id={a.photo} sizes="(min-width: 900px) 30vw, 90vw" alt="" />
            <p className="eyebrow">{t(a.category)}</p>
            <h3>{t(a.title)}</h3>
            <p>{t(a.intro)}</p>
            <span className="text-link">
              {t({ de: "Weiterlesen", en: "Read the story" })}
              <ArrowRightIcon />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
