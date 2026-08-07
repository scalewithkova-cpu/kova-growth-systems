import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Privacy — KOVA";
const DESC =
  "How KOVA collects, uses and protects information submitted through scalewithkova.com.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
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
          KOVA collects only the information you choose to submit through the contact form: your
          name, company, phone, email, website or social profile, service type, service area and
          the notes you provide.
        </p>
        <p>
          That information is used solely to respond to your inquiry and evaluate whether KOVA is a
          fit for your business. We do not sell or rent your information.
        </p>
        <p>
          If you&rsquo;d like your information removed, reach out through the contact form and
          we&rsquo;ll delete it.
        </p>
      </div>
      <Link to="/" className="mt-12 inline-block text-sm text-champagne hover:opacity-75">
        ← Back to KOVA
      </Link>
    </main>
  );
}
