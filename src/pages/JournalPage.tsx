import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { JOURNAL_SUMMARIES, journalSummary } from "../data/journal/summaries";
import { journalBody } from "../data/journal/bodies";
import { useLang } from "../lib/i18n";
import { usePageMeta } from "../lib/usePageMeta";
import { Photo } from "../components/media/Photo";
import { StructuredData } from "../components/seo/StructuredData";
import { articleSchema, breadcrumbSchema } from "../lib/schema";
import { photoUrl } from "../data/media";
import { ArrowRightIcon } from "../components/ui/Icons";
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
  const articles = JOURNAL_SUMMARIES.filter(
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
      <p className="journal-hub-intro">
        {t({
          de: "Hier beantworten wir die Fragen, die uns tatsächlich erreichen — meist per E-Mail, kurz vor einer Buchung. Werden beim Head Spa die Haare nass? Wann ist eine Wellnessmassage die falsche Wahl und eine ärztliche Praxis die richtige? Welche der drei Gesichtsbehandlungen passt zu welcher Haut? Und was passiert eigentlich praktisch, wenn man zum ersten Mal in einem Wellnessstudio steht?",
          en: "Here we answer the questions that actually reach us — usually by email, shortly before someone books. Does hair get wet during a head spa? When is a wellness massage the wrong choice and a medical practice the right one? Which of the three facial treatments suits which skin? And what practically happens when you walk into a wellness studio for the first time?",
        })}
      </p>
      <p className="journal-hub-intro">
        {t({
          de: "Wir schreiben ohne Wirkversprechen. Wo wir etwas nicht wissen oder nicht beurteilen dürfen, steht das so da — satuuu99 ist ein Wellnessstudio in Ahrensburg und keine medizinische Einrichtung. Verbindliche Preise und Behandlungszeiten findest du ausschließlich in der offiziellen Preisliste.",
          en: "We write without promising outcomes. Where we do not know something, or are not qualified to judge it, we say so — satuuu99 is a wellness studio in Ahrensburg, not a medical facility. Confirmed prices and durations appear only in the official price list.",
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
            {JOURNAL_SUMMARIES.map((a) => (
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
            <Photo id={a.photo} sizes="(min-width: 900px) 30vw, 90vw" alt="" />
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
  const article = journalSummary(slug ?? "");
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
  const body = article ? journalBody(article.slug) : undefined;
  if (!article || !body)
    return (
      <section className="not-found section-shell">
        <h1>{t({ de: "Geschichte nicht gefunden", en: "Story not found" })}</h1>
        <Link to="/journal">Journal</Link>
      </section>
    );
  return (
    <article className="journal-article">
      <StructuredData
        data={articleSchema({
          headline: t(article.title),
          description: t(article.intro),
          path: `/journal/${article.slug}`,
          image: photoUrl(article.photo),
          section: t(article.category),
        })}
      />
      <StructuredData
        data={breadcrumbSchema([
          { name: t({ de: "Startseite", en: "Home" }), path: "/" },
          { name: "Journal", path: "/journal" },
          { name: t(article.title), path: `/journal/${article.slug}` },
        ])}
      />
      <header className="section-shell">
        <Link className="text-link" to="/journal">
          ← Journal
        </Link>
        <p className="eyebrow">{t(article.category)}</p>
        <h1>{t(article.title)}</h1>
        <p className="journal-lead">{t(article.intro)}</p>
      </header>
      <Photo
        className="article-image"
        id={article.photo}
        sizes="(min-width: 1100px) 62vw, 92vw"
        priority
      />
      <div className="article-body">
        {body.map((section) => (
          <section key={section.title.en}>
            <h2>{t(section.title)}</h2>
            <p>{t(section.text)}</p>
          </section>
        ))}
        <Link className="button" to={"/behandlungen/" + article.related}>
          {t({ de: "Ritual entdecken", en: "Explore the ritual" })}
          <ArrowRightIcon />
        </Link>
        <aside>
          <h2>{t({ de: "Weiter im Journal", en: "More from the journal" })}</h2>
          {JOURNAL_SUMMARIES.filter((a) => a.slug !== slug).map((a) => (
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
