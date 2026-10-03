import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal, HeroIn, LineReveal, SectionLabel } from "@/components/site/Reveal";
import wordmark from "@/assets/kova-wordmark.png.asset.json";
import { withBase } from "@/lib/base-url";
import { CALENDLY_URL, openCalendly, prefetchCalendly } from "@/lib/calendly";
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  campaignShots,
  creatives,
  SHOW_EMPTY_SLOTS,
} from "@/lib/site-config";
import { Search, Rocket, Inbox, LineChart, type LucideIcon } from "lucide-react";

const TITLE = "ScaleWithKova | Performance Marketing & Lead Generation";
const DESC =
  "ScaleWithKova helps service businesses reach the right audiences, generate customer inquiries and streamline lead management with targeted Meta advertising.";

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
          name: "ScaleWithKova",
          description: DESC,
          email: CONTACT_EMAIL,
          sameAs: [INSTAGRAM_URL],
        }),
      },
    ],
  }),
  component: Index,
});

const problems = [
  { t: "Inconsistent inquiries", c: "Some weeks are busy, others are quiet — with no reliable way to fill the gaps." },
  { t: "Missed audiences", c: "Ads reach people who were never likely to become customers." },
  { t: "Slow follow-up", c: "Inquiries arrive but go cold before anyone responds." },
  { t: "Limited visibility", c: "It's unclear which spend is producing real opportunities." },
];

const services = [
  { t: "Targeted Advertising", c: "We develop and manage targeted Facebook and Instagram advertising campaigns designed to reach relevant audiences." },
  { t: "Lead Generation", c: "We create streamlined lead-generation experiences that capture prospective customers' information and service interests." },
  { t: "CRM Integration", c: "We connect incoming inquiries with lead-management systems to support organized, timely follow-up." },
  { t: "Campaign Optimization", c: "We monitor campaign performance, evaluate lead-generation costs and refine advertising strategies using available performance data." },
];

const steps: { n: string; t: string; c: string; I: LucideIcon }[] = [
  { n: "01", t: "Discover", c: "Understand the business, its services, target customers and geographic market.", I: Search },
  { n: "02", t: "Launch", c: "Develop targeted advertising campaigns and lead-capture experiences.", I: Rocket },
  { n: "03", t: "Connect", c: "Deliver incoming customer inquiries through an organized lead-management process.", I: Inbox },
  { n: "04", t: "Optimize", c: "Monitor advertising performance and make adjustments based on campaign data.", I: LineChart },
];

function BookButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={CALENDLY_URL}
      onClick={openCalendly}
      onMouseEnter={prefetchCalendly}
      className={`btn-lift inline-flex items-center justify-center gap-2 rounded-md bg-champagne px-7 py-4 text-sm font-medium uppercase tracking-wider text-primary-foreground ${className}`}
    >
      {children} <span className="btn-arrow">→</span>
    </a>
  );
}

function GhostButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="btn-lift inline-flex items-center justify-center rounded-md border border-border px-7 py-4 text-sm font-medium uppercase tracking-wider text-foreground hover:border-foreground/40"
    >
      {children}
    </a>
  );
}

function SectionHead({ label, title, sub }: { label: string; title: string; sub?: string }) {
  return (
    <Reveal className="max-w-3xl">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-5xl">{title}</h2>
      {sub && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

function Shot({ src, label, aspect = "aspect-[4/3]" }: { src: string; label: string; aspect?: string }) {
  if (src) {
    return (
      <img src={src} alt={label} loading="lazy" className={`w-full ${aspect} rounded-md border border-border object-cover object-top`} />
    );
  }
  if (!SHOW_EMPTY_SLOTS) return null;
  return (
    <div className={`flex w-full ${aspect} items-center justify-center rounded-md border border-dashed border-border bg-background p-6 text-center font-mono text-xs uppercase tracking-wider text-muted-foreground`}>
      Upload: {label}
    </div>
  );
}

function Metric({ v, k }: { v: string; k: string }) {
  return (
    <div>
      <p className="text-3xl font-medium tracking-tight tabular-nums sm:text-4xl">{v}</p>
      <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{k}</p>
    </div>
  );
}

function CampaignCard({ name, leads, spend, cpl, shot }: { name: string; leads: string; spend: string; cpl: string; shot: string }) {
  return (
    <div className="card-lift flex flex-col gap-6 rounded-md border border-border bg-surface p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{name}</p>
        <span className="rounded-sm border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Meta Ads</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Metric v={leads} k="Form leads" />
        <Metric v={spend} k="Ad spend" />
        <Metric v={cpl} k="Reported CPL" />
      </div>
      <Shot src={shot} label={`${name} Meta screenshot`} />
    </div>
  );
}

function FunnelVisual() {
  const rows = [
    { k: "Audience", v: "Targeted by service & location", w: "100%" },
    { k: "Ad", v: "Facebook & Instagram", w: "78%" },
    { k: "Lead form", v: "Name · contact · interest", w: "56%" },
    { k: "CRM", v: "Organized follow-up", w: "38%" },
  ];
  return (
    <div className="rounded-md border border-border bg-surface p-6 sm:p-8">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Acquisition flow</p>
        <span className="size-2 rounded-full bg-champagne" />
      </div>
      <div className="mt-6 space-y-5">
        {rows.map((r, i) => (
          <div key={r.k}>
            <div className="flex items-baseline justify-between text-sm">
              <span className="font-medium">
                <span className="mr-3 font-mono text-xs text-muted-foreground">0{i + 1}</span>
                {r.k}
              </span>
              <span className="text-muted-foreground">{r.v}</span>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-background">
              <div className="h-full rounded-full bg-foreground/80" style={{ width: r.w }} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">Illustrative diagram — not campaign data.</p>
    </div>
  );
}

function Index() {
  const year = new Date().getFullYear();
  const shownCreatives = creatives.length ? creatives : SHOW_EMPTY_SLOTS ? [1, 2, 3].map((n) => ({ src: "", alt: `Ad creative ${n}` })) : [];

  return (
    <div id="top" className="min-h-screen">
      <SiteNav />

      {/* HERO */}
      <section className="relative px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
        <div className="hairline-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <HeroIn><p className="label-xs">Performance Marketing & Lead Generation</p></HeroIn>
            <HeroIn delay={90}>
              <h1 className="mt-6 text-5xl font-medium leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Turn targeted advertising into real business opportunities.
              </h1>
            </HeroIn>
            <HeroIn delay={180}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                We help service businesses reach the right audiences, generate prospective customer inquiries and streamline lead management through targeted digital advertising.
              </p>
            </HeroIn>
            <HeroIn delay={270} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <BookButton>Book a Discovery Call</BookButton>
              <GhostButton href="#process">Explore Our Approach</GhostButton>
            </HeroIn>
          </div>
          <HeroIn delay={360}><FunnelVisual /></HeroIn>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-t border-border px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHead label="The Problem" title="Getting attention is one thing. Turning it into opportunity is another." />
          <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((p, i) => (
              <Reveal key={p.t} delay={i * 80} className="h-full bg-background p-7">
                <p className="font-mono text-xs text-champagne">0{i + 1}</p>
                <h3 className="mt-8 text-lg font-medium">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.c}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-20 border-t border-border bg-surface/40 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHead label="Services" title="A more structured approach to customer acquisition." />
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={i * 80}>
                <div className="card-lift h-full rounded-md border border-border bg-background p-8 sm:p-10">
                  <p className="font-mono text-xs text-muted-foreground">S/0{i + 1}</p>
                  <h3 className="mt-10 text-2xl font-medium tracking-tight">{s.t}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{s.c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="scroll-mt-20 border-t border-border px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHead label="Our Process" title="From advertising to actionable inquiries." />
          <div className="relative mt-16">
            <LineReveal className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />
            <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
              {steps.map(({ n, t, c, I }, i) => (
                <Reveal key={n} delay={i * 100}>
                  <li className="group relative flex gap-5 lg:block">
                    <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-md border border-border bg-background transition-colors group-hover:border-champagne/50">
                      <I className="size-5 text-champagne" strokeWidth={1.5} />
                    </div>
                    <div className="lg:mt-8">
                      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Step {n}</p>
                      <h3 className="mt-2 text-xl font-medium">{t}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="scroll-mt-20 border-t border-border bg-surface/40 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            label="Campaign Results"
            title="A data-driven approach to lead generation."
            sub="Explore real advertising campaign examples demonstrating how targeted campaigns can generate customer inquiries."
          />

          <Reveal className="mt-16">
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-4">
              <h3 className="text-xl font-medium">Driving School Advertising — Established Campaign Examples</h3>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Case study 01</p>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <Reveal><CampaignCard name="Campaign A" leads="391" spend="$469.32" cpl="$1.20" shot={campaignShots.a} /></Reveal>
            <Reveal delay={100}><CampaignCard name="Campaign B" leads="273" spend="$237.13" cpl="$0.87" shot={campaignShots.b} /></Reveal>
          </div>

          <Reveal className="mt-16">
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-4">
              <h3 className="text-xl font-medium">Driving School Advertising — Preliminary Campaign Performance</h3>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Case study 02</p>
            </div>
          </Reveal>
          <Reveal className="mt-6">
            <div className="grid gap-8 rounded-md border border-border bg-surface p-6 sm:p-8 lg:grid-cols-[1fr_1fr]">
              <div className="flex flex-col justify-between gap-8">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">First ~24 hours</p>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <Metric v="10" k="Form leads" />
                    <Metric v="$21.04" k="Ad spend" />
                    <Metric v="$2.10" k="Reported CPL" />
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  These are preliminary results from roughly the first day of the campaign. They do not establish long-term campaign performance.
                </p>
              </div>
              <Shot src={campaignShots.prelim} label="Preliminary campaign Meta screenshot" />
            </div>
          </Reveal>

          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            These results are examples from externally managed driving-school advertising campaigns, shown for reference. Figures are as reported by Meta Ads Manager. Campaign performance varies by business, market, budget and offer, and past results do not guarantee future outcomes.
          </p>
        </div>
      </section>

      {/* CREATIVE */}
      <section className="border-t border-border px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHead label="Creative Strategy" title="Creative that connects with the right audience." />
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {["Audience-specific messaging", "Clear service positioning", "Relevant geographic targeting", "Strong calls to action"].map((x, i) => (
                <li key={x} className="flex items-center gap-5 py-4">
                  <span className="font-mono text-xs text-champagne">0{i + 1}</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          {shownCreatives.length > 0 && (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {shownCreatives.map((c, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="rounded-md border border-border bg-surface p-2">
                    <div className="flex items-center gap-2 px-1 pb-2">
                      <span className="size-5 rounded-full bg-muted" />
                      <span className="h-2 w-16 rounded-full bg-muted" />
                    </div>
                    <Shot src={c.src} label={c.alt} aspect="aspect-[4/5]" />
                    <div className="mt-2 rounded-sm bg-muted px-2 py-1.5 text-center text-[10px] uppercase tracking-wider text-muted-foreground">Learn more</div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-20 border-t border-border bg-surface/40 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHead label="About ScaleWithKova" title="Built around performance, not empty promises." />
            <Reveal className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>ScaleWithKova is focused on helping service businesses develop structured, measurable approaches to digital customer acquisition.</p>
              <p>We combine targeted advertising, streamlined lead capture and organized lead management to help businesses identify new growth opportunities.</p>
              <p>Our approach emphasizes clear communication, measurable campaign performance and continuous improvement.</p>
            </Reveal>
          </div>
          <Reveal delay={120} className="self-end">
            <div className="rounded-md border border-border bg-background p-8">
              <p className="label-xs">Founder</p>
              <p className="mt-6 text-2xl font-medium tracking-tight">Brayden Parker</p>
              <p className="mt-1 text-sm text-muted-foreground">Founder, ScaleWithKova</p>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="nav-link mt-8 inline-block text-sm text-foreground">
                @KovaScales →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="scroll-mt-20 border-t border-border px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-6xl">Ready to explore your next growth opportunity?</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Tell us about your business, your current marketing approach and what you're looking to achieve. Let's determine whether our approach makes sense for you.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <BookButton>Schedule a Discovery Call</BookButton>
              <GhostButton href={`mailto:${CONTACT_EMAIL}`}>Contact Us</GhostButton>
            </div>
          </Reveal>
          <Reveal delay={120}><ContactForm /></Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-5 py-14 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <img src={withBase(wordmark.url)} alt="ScaleWithKova" width={800} height={226} loading="lazy" className="h-5 w-auto" />
            <p className="mt-4 font-medium">ScaleWithKova</p>
            <p className="text-sm text-muted-foreground">Performance Marketing & Lead Generation</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {[["#services", "Services"], ["#process", "Our Process"], ["#results", "Campaign Results"], ["#about", "About"], ["#contact", "Contact"]].map(([h, l]) => (
              <a key={h} href={h} className="nav-link hover:text-foreground">{l}</a>
            ))}
          </div>
          <div className="space-y-2 text-sm">
            <a href={`mailto:${CONTACT_EMAIL}`} className="nav-link block text-muted-foreground hover:text-foreground">{CONTACT_EMAIL}</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="nav-link block text-muted-foreground hover:text-foreground">Instagram @KovaScales</a>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-wrap justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© {year} ScaleWithKova. All rights reserved.</p>
          <a href={withBase("/privacy")} className="nav-link hover:text-foreground">Privacy</a>
        </div>
      </footer>
    </div>
  );
}
