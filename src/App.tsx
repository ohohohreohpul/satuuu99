import { Suspense, lazy } from "react";
import { usePageMeta } from "./lib/usePageMeta";
import { Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./components/nav/NavBar";
import { ScrollToTop } from "./components/nav/ScrollToTop";
import { Footer } from "./sections/Footer";
import { HomePage } from "./pages/HomePage";
import { useLang } from "./lib/i18n";
import { ArrowUpRightIcon } from "./components/ui/Icons";
import { Preloader } from "./components/ui/Preloader";

// The homepage ships in the initial bundle; every other route, and the
// editorial copy it carries, is fetched when a visitor navigates to it.
const TreatmentsPage = lazy(() =>
  import("./pages/TreatmentsPage").then((m) => ({ default: m.TreatmentsPage })),
);
const TreatmentDetailPage = lazy(() =>
  import("./pages/TreatmentDetailPage").then((m) => ({
    default: m.TreatmentDetailPage,
  })),
);
const JournalPage = lazy(() =>
  import("./pages/JournalPage").then((m) => ({ default: m.JournalPage })),
);
const JournalArticlePage = lazy(() =>
  import("./pages/JournalPage").then((m) => ({
    default: m.JournalArticlePage,
  })),
);
const StudioPage = lazy(() =>
  import("./pages/StudioPage").then((m) => ({ default: m.StudioPage })),
);
const GiftCardsPage = lazy(() =>
  import("./pages/GiftCardsPage").then((m) => ({ default: m.GiftCardsPage })),
);
const PricesPage = lazy(() =>
  import("./pages/PricesPage").then((m) => ({ default: m.PricesPage })),
);
const ContactPage = lazy(() =>
  import("./pages/ContactPage").then((m) => ({ default: m.ContactPage })),
);
const HeadSpaHamburgPage = lazy(() =>
  import("./pages/HeadSpaHamburgPage").then((m) => ({
    default: m.HeadSpaHamburgPage,
  })),
);
const LocalServicePage = lazy(() =>
  import("./pages/LocalServicePage").then((m) => ({
    default: m.LocalServicePage,
  })),
);
export default function App() {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <NavBar />
      <main id="main" tabIndex={-1}>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/behandlungen" element={<TreatmentsPage />} />
            <Route
              path="/behandlungen/:treatmentId"
              element={<TreatmentDetailPage />}
            />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/journal/:slug" element={<JournalArticlePage />} />
            <Route path="/studio" element={<StudioPage />} />
            <Route path="/gutscheine" element={<GiftCardsPage />} />
            <Route path="/preise" element={<PricesPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/head-spa-hamburg" element={<HeadSpaHamburgPage />} />
            <Route
              path="/japanese-head-spa-ahrensburg"
              element={<LocalServicePage slug="japanese-head-spa-ahrensburg" />}
            />
            <Route
              path="/wellnessmassage-ahrensburg"
              element={<LocalServicePage slug="wellnessmassage-ahrensburg" />}
            />
            <Route
              path="/gesichtsbehandlung-ahrensburg"
              element={
                <LocalServicePage slug="gesichtsbehandlung-ahrensburg" />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
/** Holds the page height while a route chunk loads, so nothing jumps. */
function RouteFallback() {
  return <div className="route-fallback" aria-hidden="true" />;
}

function NotFound() {
  const { t } = useLang();
  usePageMeta(
    t({
      de: "Seite nicht gefunden | satuuu99",
      en: "Page not found | satuuu99",
    }),
    t({
      de: "Diese Seite ist nicht verfügbar. Entdecke unsere Behandlungen und das Studio.",
      en: "This page is unavailable. Explore our treatments and studio.",
    }),
    true,
  );
  return (
    <section className="not-found section-shell">
      <p className="eyebrow">404</p>
      <h1>
        {t({ de: "Kurz vom Weg abgekommen.", en: "A little off the path." })}
      </h1>
      <Link className="button" to="/">
        {t({ de: "Zur Startseite", en: "Back to home" })}
        <ArrowUpRightIcon />
      </Link>
    </section>
  );
}
