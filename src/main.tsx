import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./styles/media.css";
import "./styles/treatment-editorial.css";
import "./styles/overview.css";
import "./styles/pages.css";
import "./styles/home-sections.css";
import "./styles/supergraphics.css";
import App from "./App";
import { LanguageProvider } from "./lib/i18n";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element #root not found in document.");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
);
