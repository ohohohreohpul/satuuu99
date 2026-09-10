import { Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./components/nav/NavBar";
import { ScrollToTop } from "./components/nav/ScrollToTop";
import { Footer } from "./sections/Footer";
import { HomePage } from "./pages/HomePage";
import { useLang } from "./lib/i18n";
export default function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
function NotFound() {
  const { t } = useLang();
  return (
    <section className="not-found section-shell">
      <p className="eyebrow">404</p>
      <h1>
        {t({ de: "Kurz vom Weg abgekommen.", en: "A little off the path." })}
      </h1>
      <Link className="button" to="/">
        {t({ de: "Zur Startseite", en: "Back to home" })} ↗
      </Link>
    </section>
  );
}
