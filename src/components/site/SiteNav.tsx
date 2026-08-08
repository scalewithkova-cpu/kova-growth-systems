import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import wordmark from "@/assets/kova-wordmark.png.asset.json";
import { withBase } from "@/lib/base-url";


const links = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#who-we-help", label: "Who We Help" },
  { href: "#why-kova", label: "Why ScaleWithKova" },
  { href: "#contact", label: "Contact" },
];


export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8"
      >
        <a href="#top" className="flex min-w-0 items-center" aria-label="ScaleWithKova home">
          <img
            src={withBase(wordmark.url)}
            alt="ScaleWithKova"
            width={800}
            height={226}
            className="h-5 w-auto transition-opacity duration-300 hover:opacity-80 sm:h-6"
          />
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-sm text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-lift rounded-full border border-champagne/40 px-5 py-2 text-sm text-champagne hover:bg-champagne hover:text-primary-foreground"
          >
            Work With Us
          </a>
        </div>


        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 shrink-0 p-2 text-foreground lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-lg text-foreground/90"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-lift mt-6 rounded-full bg-champagne px-6 py-4 text-center text-base font-medium text-primary-foreground"
            >
              Work With Us <span className="btn-arrow">→</span>
            </a>

          </div>
        </div>
      )}
    </header>
  );
}
