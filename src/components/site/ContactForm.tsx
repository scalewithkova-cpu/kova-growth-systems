import { useState } from "react";
import { z } from "zod";
import { CONTACT_EMAIL, FORMSPREE_ID } from "@/lib/site-config";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  business: z.string().trim().min(1, "Please enter your business name").max(150),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40).optional(),
  website: z.string().trim().max(255).optional(),
  message: z.string().trim().min(1, "Please add a short message").max(2000),
});

const fieldClass =
  "w-full rounded-md border border-border bg-surface px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-champagne/60";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  if (status === "sent") {
    return (
      <div className="flex min-h-64 flex-col justify-center rounded-md border border-border bg-surface p-8 sm:p-12">
        <p className="label-xs">Message sent</p>
        <p className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
          Thanks — your message was delivered.
        </p>
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const raw = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    if (!FORMSPREE_ID) {
      setError(`The form isn't connected yet. Please email ${CONTACT_EMAIL}.`);
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
      setError(`Something went wrong. Please try again or email ${CONTACT_EMAIL}.`);
    }
  }

  const f = (id: string, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-xs text-muted-foreground">
        {label}
      </label>
      <input id={id} name={id} className={fieldClass} {...props} />
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      {f("name", "Full name", { required: true, autoComplete: "name", maxLength: 100 })}
      {f("business", "Business name", { required: true, autoComplete: "organization", maxLength: 150 })}
      {f("email", "Email", { type: "email", required: true, autoComplete: "email", maxLength: 255 })}
      {f("phone", "Phone (optional)", { type: "tel", autoComplete: "tel", maxLength: 40 })}
      <div className="sm:col-span-2">
        {f("website", "Business website (optional)", { maxLength: 255, placeholder: "https://" })}
      </div>
      <div className="grid gap-2 sm:col-span-2">
        <label htmlFor="message" className="text-xs text-muted-foreground">
          Message
        </label>
        <textarea id="message" name="message" rows={5} maxLength={2000} required className={`${fieldClass} resize-none`} />
      </div>
      {error && (
        <p role="alert" className="text-sm text-destructive sm:col-span-2">
          {error}
        </p>
      )}
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-lift w-full rounded-md bg-foreground px-8 py-4 text-sm font-medium uppercase tracking-wider text-background disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? "Sending…" : "Send message"} <span className="btn-arrow">→</span>
        </button>
      </div>
    </form>
  );
}
