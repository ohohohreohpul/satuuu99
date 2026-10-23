import { useEffect } from "react";

/** Zenno AI receptionist — the studio's chat assistant. */
export const CHAT_WIDGET_SRC =
  "https://book.zennohq.com/receptionist-widget.js";
const CHAT_WIDGET_KEY = "wc_d310a3c5d8604736b38152be19a3d433";

/**
 * Loads the chat assistant on every page for every visitor. It is added from
 * the app rather than index.html so prerendered snapshots never contain it.
 */
export function ChatWidget() {
  useEffect(() => {
    if (document.querySelector(`script[src="${CHAT_WIDGET_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = CHAT_WIDGET_SRC;
    script.async = true;
    script.dataset.key = CHAT_WIDGET_KEY;
    document.body.appendChild(script);
  }, []);

  return null;
}
