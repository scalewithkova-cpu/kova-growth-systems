import { useState } from "react";

const services = [
  "Landscaping",
  "Hardscaping",
  "Tree Service / Arborist",
  "Other Local Service",
];

const fieldClass =
  "w-full rounded-sm border border-input bg-surface/60 px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-champagne/60";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex min-h-64 flex-col items-start justify-center rounded-sm border border-champagne/25 bg-surface/60 p-8 sm:p-12">
        <p className="label-xs">Received</p>
        <p className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
          Got it. We&rsquo;ll be in touch.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid gap-4 sm:grid-cols-2"
    >
      <div className="grid gap-2">
        <label htmlFor="name" className="text-xs text-muted-foreground">
          Name
        </label>
        <input id="name" name="name" required autoComplete="name" className={fieldClass} />
      </div>
      <div className="grid gap-2">
        <label htmlFor="company" className="text-xs text-muted-foreground">
          Company
        </label>
        <input id="company" name="company" required autoComplete="organization" className={fieldClass} />
      </div>
      <div className="grid gap-2">
        <label htmlFor="phone" className="text-xs text-muted-foreground">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-xs text-muted-foreground">
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
      </div>
      <div className="grid gap-2">
        <label htmlFor="web" className="text-xs text-muted-foreground">
          Website / Instagram
        </label>
        <input id="web" name="web" className={fieldClass} />
      </div>
      <div className="grid gap-2">
        <label htmlFor="service" className="text-xs text-muted-foreground">
          Primary Service
        </label>
        <select id="service" name="service" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select one
          </option>
          {services.map((s) => (
            <option key={s} value={s} className="bg-surface">
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-2 sm:col-span-2">
        <label htmlFor="area" className="text-xs text-muted-foreground">
          Service Area
        </label>
        <input id="area" name="area" placeholder="City, region" className={fieldClass} />
      </div>
      <div className="grid gap-2 sm:col-span-2">
        <label htmlFor="goal" className="text-xs text-muted-foreground">
          What are you currently looking to improve?
        </label>
        <textarea id="goal" name="goal" rows={4} className={`${fieldClass} resize-none`} />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-full bg-champagne px-8 py-4 text-base font-medium text-primary-foreground transition-opacity duration-300 hover:opacity-90 sm:w-auto"
        >
          Let&rsquo;s Talk →
        </button>
      </div>
    </form>
  );
}
