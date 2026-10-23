import { useEffect, useRef } from "react";
import { useConsent } from "../../lib/consent";

/** Zenno AI receptionist — the studio's chat assistant. */
export const CHAT_WIDGET_SRC =
  "https://book.zennohq.com/receptionist-widget.js";
const CHAT_WIDGET_KEY = "wc_d310a3c5d8604736b38152be19a3d433";

/**
 * Loads the chat assistant only after the visitor has consented. The widget
 * cannot be unloaded once it runs, so withdrawing consent reloads the page
 * without it.
 */
export function ChatWidget() {
  const consent = useConsent();
  const isLoaded = useRef(false);
  const hasConsent = consent?.chat === true;

  useEffect(() => {
    if (hasConsent && !isLoaded.current) {
      const script = document.createElement("script");
      script.src = CHAT_WIDGET_SRC;
      script.async = true;
      script.dataset.key = CHAT_WIDGET_KEY;
      document.body.appendChild(script);
      isLoaded.current = true;
      return;
    }
    if (!hasConsent && isLoaded.current) window.location.reload();
  }, [hasConsent]);

  return null;
}
