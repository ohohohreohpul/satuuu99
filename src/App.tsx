import { Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/nav/NavBar';
import { ScrollToTop } from './components/nav/ScrollToTop';
import { Footer } from './sections/Footer';
import { HomePage } from './pages/HomePage';
import { useSmoothScroll } from './lib/useSmoothScroll';

/** satuuu99 — shared nav + footer around routed pages. */
export default function App() {
  useSmoothScroll();

  return (
    <>
      <ScrollToTop />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
