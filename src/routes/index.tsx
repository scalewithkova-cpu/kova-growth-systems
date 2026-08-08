import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal, HeroIn, LineReveal, SectionLabel } from "@/components/site/Reveal";
import wordmark from "@/assets/kova-wordmark.png.asset.json";
import { withBase } from "@/lib/base-url";


const TITLE = "ScaleWithKova | Customer Acquisition for Local Service Businesses";
const DESC =
  "ScaleWithKova helps landscapers, hardscapers, arborists and local service businesses build customer acquisition systems designed to generate qualified opportunities.";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: withBase("/") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: withBase("/") }],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "KOVA",
          alternateName: "Scale With Kova",
          description: DESC,
          url: "/",
          sameAs: ["https://instagram.com/KovaScales"],
        }),
      },
    ],
  }),
  component: Index,
});

const problems = [
  { k: "Referrals", v: "Growth stops the moment the network runs dry." },
  { k: "Word of mouth", v: "Powerful, but impossible to forecast or scale." },
  { k: "Inconsistent lead sources", v: "Some months are full. Others are quiet." },
  { k: "Seasonality", v: "Demand swings, but payroll doesn't." },
  { k: "Random spikes in demand", v: "Busy weeks that never become a pipeline." },
];

const segments = [
  {
    title: "Landscapers",
    copy: "For landscaping companies looking to consistently generate higher-value residential projects.",
  },
  {
    title: "Hardscapers",
    copy: "For contractors selling patios, retaining walls, outdoor living spaces and other high-ticket projects.",
  },
  {
    title: "Arborists / Tree Services",
    copy: "For tree-service companies looking to generate more qualified local opportunities.",
  },
];

const steps = [
  { n: "01", t: "Position", c: "Understand the business, market, services and ideal customer." },
  { n: "02", t: "Acquire", c: "Build and launch targeted customer acquisition campaigns." },
  {
    n: "03",
    t: "Convert",
    c: "Create a system for turning incoming interest into real conversations and estimates.",
  },
  {
    n: "04",
    t: "Optimize",
    c: "Track what happens and continuously improve the system based on real data.",
  },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteNav />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden px-5 pt-32 pb-20 sm:px-8 sm:pt-44 sm:pb-32">
          <div className="hairline-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_70%)]" />
          <div className="relative mx-auto max-w-7xl">
            <Reveal>
              <SectionLabel>Client acquisition for local service businesses</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-8 max-w-4xl text-[2.6rem] leading-[1.04] font-medium tracking-[-0.03em] text-balance sm:text-6xl lg:text-7xl">
                More qualified opportunities.
                <br />
                <span className="font-serif text-champagne italic">More jobs.</span>
                <br />
                More room to scale.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                KOVA helps local service businesses build predictable customer acquisition
                systems designed to turn advertising into real booked opportunities.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-champagne px-8 py-4 text-center text-base font-medium text-primary-foreground transition-opacity duration-300 hover:opacity-90"
                >
                  Work With Kova →
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-full border border-border px-8 py-4 text-center text-base text-foreground transition-colors duration-300 hover:border-champagne/50 hover:text-champagne"
                >
                  See How It Works
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
                Built for landscapers, hardscapers, arborists &amp; high-ticket local services.
              </p>
            </Reveal>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="border-t border-border px-5 py-20 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
              <div>
                <Reveal>
                  <SectionLabel>01 — The Problem</SectionLabel>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="mt-6 text-3xl leading-[1.1] font-medium tracking-[-0.02em] text-balance sm:text-4xl lg:text-5xl">
                    Great work doesn&rsquo;t automatically create predictable growth.
                  </h2>
                </Reveal>
                <Reveal delay={140}>
                  <p className="mt-6 max-w-md text-muted-foreground">
                    Most skilled contractors rely on demand they can&rsquo;t control.
                  </p>
                </Reveal>
              </div>

              <div className="border-t border-border">
                {problems.map((p, i) => (
                  <Reveal key={p.k} delay={i * 70}>
                    <div className="group grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-4 border-b border-border py-5 transition-colors duration-300 hover:bg-surface/50 sm:gap-8 sm:py-6">
                      <span className="text-xs text-champagne/70 tabular-nums">
                        0{i + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="text-lg font-medium sm:text-xl">{p.k}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{p.v}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
                <Reveal delay={120}>
                  <p className="pt-8 font-serif text-2xl leading-snug text-foreground text-balance sm:text-3xl">
                    KOVA builds the acquisition infrastructure designed to make growth{" "}
                    <span className="text-champagne italic">more predictable.</span>
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE HELP */}
        <section id="who-we-help" className="scroll-mt-24 border-t border-border bg-surface/40 px-5 py-20 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionLabel>02 — Who We Help</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 max-w-2xl text-3xl leading-[1.1] font-medium tracking-[-0.02em] text-balance sm:text-4xl lg:text-5xl">
                Built around businesses that turn leads into real jobs.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
              {segments.map((s, i) => (
                <Reveal key={s.title} delay={i * 90} className="bg-background">
                  <article className="group relative h-full bg-background p-8 transition-colors duration-500 hover:bg-surface sm:p-10">
                    <div className="hairline-grid pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                    <div className="relative">
                      <span className="font-serif text-5xl text-champagne/25 transition-colors duration-500 group-hover:text-champagne/50">
                        0{i + 1}
                      </span>
                      <h3 className="mt-8 text-xl font-medium tracking-tight uppercase sm:text-2xl">
                        {s.title}
                      </h3>
                      <div className="mt-4 h-px w-10 bg-champagne/40 transition-all duration-500 group-hover:w-20" />
                      <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {s.copy}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="scroll-mt-24 border-t border-border px-5 py-20 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionLabel>03 — How It Works</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 max-w-2xl text-3xl leading-[1.1] font-medium tracking-[-0.02em] text-balance sm:text-4xl lg:text-5xl">
                A simple system built around one thing:{" "}
                <span className="font-serif text-champagne italic">creating opportunities.</span>
              </h2>
            </Reveal>

            <div className="relative mt-16">
              <div className="absolute top-2 left-2 hidden h-px w-full bg-border md:block" />
              <div className="absolute top-2 left-2 h-full w-px bg-border md:hidden" />
              <div className="grid gap-10 md:grid-cols-4 md:gap-8">
                {steps.map((s, i) => (
                  <Reveal key={s.n} delay={i * 90}>
                    <div className="relative pl-10 md:pl-0">
                      <span className="absolute top-0 left-0 size-4 translate-x-[2px] rounded-full border border-champagne/60 bg-background md:relative md:block" />
                      <p className="mt-0 text-xs text-champagne md:mt-8">{s.n}</p>
                      <h3 className="mt-2 text-lg font-medium tracking-[0.06em] uppercase">
                        {s.t}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.c}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="border-t border-border bg-[oklch(0.115_0_0)] px-5 py-28 sm:px-8 sm:py-44">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <h2 className="text-3xl leading-[1.08] font-medium tracking-[-0.02em] text-balance sm:text-5xl lg:text-6xl">
                We don&rsquo;t care about vanity metrics.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-10 text-2xl leading-tight text-muted-foreground sm:text-4xl">
                Clicks don&rsquo;t pay contractors.
                <br />
                <span className="font-serif text-champagne italic">Jobs do.</span>
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mt-12 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                The goal isn&rsquo;t simply generating traffic. The goal is building a system that
                creates qualified opportunities your business can actually turn into revenue.
              </p>
            </Reveal>
          </div>
        </section>

        {/* BUILDING KOVA */}
        <section className="border-t border-border px-5 py-20 sm:px-8 sm:py-32">
          <div className="relative mx-auto max-w-7xl">
            <div className="hairline-grid pointer-events-none absolute inset-0 opacity-40" />
            <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <Reveal>
                  <SectionLabel>04 — BUILDING KOVA</SectionLabel>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="mt-6 text-3xl leading-[1.1] font-medium tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                    Built from scratch.
                    <br />
                    <span className="font-serif text-champagne italic">Measured by results.</span>
                  </h2>
                </Reveal>
              </div>
              <div>
                <Reveal delay={120}>
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    KOVA is being built around a simple idea: local service businesses shouldn&apos;t
                    have to rely entirely on referrals, inconsistent lead sources, or hope to keep
                    their pipeline full.
                  </p>
                </Reveal>
                <Reveal delay={180}>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    The goal is to build customer acquisition systems around real businesses, measure
                    what actually produces opportunities, and improve from real-world data.
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="relative mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
              {[
                "No inflated case studies.",
                "No borrowed results.",
                "No pretending.",
              ].map((t, i) => (
                <Reveal key={t} delay={i * 90} className="bg-background">
                  <div className="flex h-full items-center justify-center bg-background p-8 sm:p-10">
                    <p className="text-center font-serif text-xl text-foreground sm:text-2xl">
                      {t}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="relative mt-16 overflow-hidden rounded-sm border border-border bg-surface/40">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 sm:p-12">
                    <p className="label-xs text-champagne/70">System in progress</p>
                    <p className="mt-4 font-serif text-2xl text-foreground sm:text-3xl">
                      Just execution, data and improvement.
                    </p>
                  </div>
                  <div className="border-t border-border p-8 sm:p-12 md:border-t-0 md:border-l">
                    <div className="flex items-center gap-4">
                      <div className="h-px flex-1 bg-champagne/20">
                        <div className="h-px w-1/3 bg-champagne" />
                      </div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">
                        Building
                      </span>
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-4 text-xs text-muted-foreground">
                      <div>
                        <span className="block text-lg font-medium text-foreground">—</span>
                        <span className="mt-1 block">Opportunities</span>
                      </div>
                      <div>
                        <span className="block text-lg font-medium text-foreground">—</span>
                        <span className="mt-1 block">Cost per lead</span>
                      </div>
                      <div>
                        <span className="block text-lg font-medium text-foreground">—</span>
                        <span className="mt-1 block">Close rate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* THE MOTIVE */}
        <section
          id="why-kova"
          className="scroll-mt-24 border-t border-border bg-surface/40 px-5 py-20 sm:px-8 sm:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <Reveal>
                  <SectionLabel>05 — WHY KOVA</SectionLabel>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="mt-6 text-3xl leading-[1.1] font-medium tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                    Building the proof,
                    <br />
                    <span className="font-serif text-champagne italic">
                      not pretending it already exists.
                    </span>
                  </h2>
                </Reveal>
              </div>
              <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg lg:pt-20">
                <Reveal delay={120}>
                  <p>KOVA is being documented from the beginning.</p>
                </Reveal>
                <Reveal delay={180}>
                  <p>
                    The campaigns, lessons, wins, mistakes and growth behind the company are being
                    built in real time — with the goal of creating something backed by actual results
                    rather than marketing claims.
                  </p>
                </Reveal>
                <Reveal delay={240}>
                  <p className="text-foreground">
                    This isn&apos;t about looking bigger than we are.
                  </p>
                </Reveal>
                <Reveal delay={300}>
                  <p>
                    It&apos;s about becoming better at what we do, proving it through client
                    outcomes, and building KOVA into something worth following.
                  </p>
                </Reveal>
              </div>
            </div>

            <Reveal delay={200}>
              <div className="relative mt-20 overflow-hidden rounded-sm border border-border bg-background">
                <div className="absolute inset-0 hairline-grid opacity-20" />
                <div className="relative grid gap-px bg-border md:grid-cols-2">
                  <div className="bg-background p-8 sm:p-12">
                    <p className="label-xs text-champagne/70">The company</p>
                    <p className="mt-4 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                      KOVA
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                      Customer acquisition for local service businesses.
                    </p>
                  </div>
                  <div className="bg-background p-8 sm:p-12">
                    <p className="label-xs text-champagne/70">The journey</p>
                    <p className="mt-4 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                      KovaScales
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                      The process behind building KOVA from zero.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-12 flex flex-col items-start gap-6 border-t border-border pt-12 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="label-xs text-champagne/70">FOLLOW THE BUILD</p>
                  <a
                    href="https://instagram.com/KovaScales"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-2xl font-medium tracking-tight text-foreground transition-opacity hover:opacity-75"
                  >
                    @KovaScales <span className="text-champagne">→</span>
                  </a>
                </div>
                <p className="max-w-sm text-sm text-muted-foreground">
                  KovaScales documents the lessons, experiments and growth behind KOVA in real time.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA + CONTACT */}
        <section id="contact" className="scroll-mt-24 border-t border-border px-5 py-20 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <Reveal>
                <SectionLabel>Ready to grow?</SectionLabel>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mx-auto mt-6 max-w-3xl text-3xl leading-[1.08] font-medium tracking-[-0.02em] text-balance sm:text-5xl">
                  Let&rsquo;s see if KOVA makes sense for your business.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
                  If you&rsquo;re already doing quality work and have the capacity to take on more
                  projects, let&rsquo;s talk.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mx-auto mt-10 max-w-md text-sm text-muted-foreground/80">
                  No pressure. Just a conversation about your business and whether we can actually
                  help.
                </p>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="mx-auto mt-14 max-w-3xl rounded-sm border border-border bg-surface/40 p-6 sm:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <img src={withBase(wordmark.url)} alt="KOVA" width={800} height={226} className="h-5 w-auto" />
            <p className="mt-5 text-sm text-foreground/80">Scale With Kova</p>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Customer acquisition for ambitious local service businesses.
            </p>
          </div>
          <nav aria-label="Footer" className="flex gap-8 text-sm text-muted-foreground sm:gap-10">
            <a
              href="https://instagram.com/KovaScales"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-champagne"
            >
              Instagram
            </a>
            <a href="#contact" className="transition-colors hover:text-champagne">
              Contact
            </a>
            <a href="/privacy" className="transition-colors hover:text-champagne">
              Privacy
            </a>
          </nav>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">© 2026 KOVA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
