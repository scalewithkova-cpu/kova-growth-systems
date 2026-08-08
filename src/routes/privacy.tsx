import { createFileRoute, Link } from "@tanstack/react-router";
import { withBase } from "@/lib/base-url";


const TITLE = "Privacy — ScaleWithKova";
const DESC =
  "How ScaleWithKova collects, uses and protects information submitted through scalewithkova.com.";


export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: withBase("/privacy") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: withBase("/privacy") }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
      <p className="label-xs">Privacy</p>
      <h1 className="mt-6 text-4xl font-medium tracking-[-0.02em] sm:text-5xl">Privacy Policy</h1>
      <div className="mt-10 space-y-6 text-muted-foreground">
        <p>
          ScaleWithKova collects only the information you choose to submit through the contact form:
          your name, company, phone, email, website or social profile, service type, service area and
          the notes you provide.
        </p>
        <p>
          That information is used solely to respond to your inquiry and evaluate whether
          ScaleWithKova is a fit for your business. We do not sell or rent your information.
        </p>
        <p>
          If you&rsquo;d like your information removed, reach out through the contact form and
          we&rsquo;ll delete it.
        </p>
      </div>
      <Link to="/" className="mt-12 inline-block text-sm text-champagne glow-hover hover:opacity-90">
        ← Back to ScaleWithKova
      </Link>

    </main>
  );
}
