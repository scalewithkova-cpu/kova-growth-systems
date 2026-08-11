export const CALENDLY_URL = "https://calendly.com/scalewithkova/30min";

const CSS_HREF = "https://assets.calendly.com/assets/external/widget.css";
const JS_SRC = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

let loading: Promise<void> | null = null;

function loadWidget(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Calendly) return Promise.resolve();
  if (loading) return loading;

  loading = new Promise<void>((resolve, reject) => {
    if (!document.querySelector(`link[href="${CSS_HREF}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CSS_HREF;
      document.head.appendChild(link);
    }
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${JS_SRC}"]`);
    const script = existing ?? document.createElement("script");
    script.addEventListener("load", () => resolve());
    script.addEventListener("error", () => reject(new Error("calendly")));
    if (!existing) {
      script.src = JS_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  });

  return loading;
}

/** Preload the Calendly widget so the popup opens instantly on click. */
export function prefetchCalendly() {
  void loadWidget().catch(() => {});
}

/** Open Calendly in an overlay; falls back to a new tab if the widget can't load. */
export function openCalendly(e?: { preventDefault: () => void }) {
  e?.preventDefault();
  loadWidget()
    .then(() => {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      } else {
        window.open(CALENDLY_URL, "_blank", "noopener");
      }
    })
    .catch(() => {
      window.open(CALENDLY_URL, "_blank", "noopener");
    });
}
