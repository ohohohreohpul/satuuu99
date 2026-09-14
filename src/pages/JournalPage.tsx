import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { JOURNAL } from "../data/journal";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";
import { ArrowRightIcon } from "../components/ui/Icons";
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
        {JOURNAL.slice(0, 2).map((a) => (
          <Link className="journal-card" key={a.slug} to={"/journal/" + a.slug}>
            <img src={a.image} alt="" loading="lazy" />
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
export function JournalPage() {
  const { t } = useLang();
  const [params, setParams] = useSearchParams();
  const q = params.get("q") || "";
  const [category, setCategory] = useState("");
  usePageMeta(
    t({
      de: "Journal: Head Spa & Wellness in Ahrensburg | satuuu99",
      en: "Journal: Head Spa & Wellness in Ahrensburg | satuuu99",
    }),
    t({
      de: "Tipps für deinen ersten Head-Spa-Besuch, Orientierung zu Wellnessritualen und Zeit für dich in Ahrensburg bei Hamburg.",
      en: "Plan your first head spa visit, explore wellness rituals and make time for yourself in Ahrensburg near Hamburg.",
    }),
  );
  const articles = JOURNAL.filter(
    (a) =>
      (!category || a.category.en === category) &&
      (t(a.title) + " " + t(a.intro) + " " + t(a.category))
        .toLowerCase()
        .includes(q.toLowerCase()),
  );
  return (
    <section className="journal-page section-shell">
      <p className="eyebrow">Satuuu99 Journal</p>
      <h1>{t({ de: "Zeit zum Innehalten.", en: "Time to pause." })}</h1>
      <p className="journal-lead">
        {t({
          de: "Rituale, kleine Gedanken und alles, was du vor deinem Besuch wissen möchtest.",
          en: "Rituals, reflections and the things you would like to know before your visit.",
        })}
      </p>
      <div className="journal-tools">
        <label>
          {t({ de: "Im Journal suchen", en: "Search the journal" })}
          <input
            type="search"
            value={q}
            onChange={(e) =>
              setParams(e.target.value ? { q: e.target.value } : {}, {
                replace: true,
              })
            }
            placeholder={t({
              de: "Zum Beispiel: Head Spa",
              en: "Try: Head spa",
            })}
          />
        </label>
        <label>
          {t({ de: "Thema", en: "Topic" })}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">
              {t({ de: "Alle Themen", en: "All topics" })}
            </option>
            {JOURNAL.map((a) => (
              <option key={a.slug} value={a.category.en}>
                {t(a.category)}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p className="results-count" role="status">
        {articles.length} {t({ de: "Geschichten", en: "stories" })}
      </p>
      <div className="journal-grid">
        {articles.map((a) => (
          <Link className="journal-card" key={a.slug} to={"/journal/" + a.slug}>
            <img src={a.image} alt="" />
            <p className="eyebrow">{t(a.category)}</p>
            <h2>{t(a.title)}</h2>
            <p>{t(a.intro)}</p>
            <span className="text-link">
              {t({ de: "Weiterlesen", en: "Read the story" })}
              <ArrowRightIcon />
            </span>
          </Link>
        ))}
      </div>
      {!articles.length && (
        <div className="empty-state">
          <h2>
            {t({
              de: "Noch keine passende Geschichte.",
              en: "No matching stories yet.",
            })}
          </h2>
          <button
            className="text-link"
            onClick={() => {
              setParams({});
              setCategory("");
            }}
          >
            {t({ de: "Alle Geschichten anzeigen", en: "Show all stories" })}
          </button>
        </div>
      )}
    </section>
  );
}
export function JournalArticlePage() {
  const { slug } = useParams();
  const { t } = useLang();
  const article = JOURNAL.find((a) => a.slug === slug);
  usePageMeta(
    article
      ? t(article.title) + " | satuuu99 Journal"
      : t({
          de: "Geschichte nicht gefunden | satuuu99",
          en: "Story not found | satuuu99",
        }),
    article
      ? t(article.intro)
      : t({
          de: "Entdecke das satuuu99 Journal.",
          en: "Explore the satuuu99 journal.",
        }),
    !article,
  );
  if (!article)
    return (
      <section className="not-found section-shell">
        <h1>{t({ de: "Geschichte nicht gefunden", en: "Story not found" })}</h1>
        <Link to="/journal">Journal</Link>
      </section>
    );
  return (
    <article className="journal-article">
      <header className="section-shell">
        <Link className="text-link" to="/journal">
          ← Journal
        </Link>
        <p className="eyebrow">{t(article.category)}</p>
        <h1>{t(article.title)}</h1>
        <p className="journal-lead">{t(article.intro)}</p>
      </header>
      <img
        className="article-image"
        src={article.image}
        alt={t(article.title)}
      />
      <div className="article-body">
        {article.sections.map((s) => (
          <section key={s.title.en}>
            <h2>{t(s.title)}</h2>
            <p>{t(s.text)}</p>
          </section>
        ))}
        <Link className="button" to={"/behandlungen/" + article.related}>
          {t({ de: "Ritual entdecken", en: "Explore the ritual" })}
          <ArrowRightIcon />
        </Link>
        <aside>
          <h2>{t({ de: "Weiter im Journal", en: "More from the journal" })}</h2>
          {JOURNAL.filter((a) => a.slug !== slug).map((a) => (
            <Link
              className="article-next"
              key={a.slug}
              to={"/journal/" + a.slug}
            >
              {t(a.title)}
              <ArrowRightIcon />
            </Link>
          ))}
        </aside>
      </div>
    </article>
  );
}
