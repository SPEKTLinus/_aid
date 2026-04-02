"use client";

import { SectionReveal } from "@/components/SectionReveal";

export function NewsletterStrip() {
  return (
    <section
      id="newsletter"
      className="relative overflow-hidden bg-brand-olive py-16 sm:py-20"
      aria-labelledby="newsletter-heading"
    >
      <div className="absolute inset-0 bg-brand-black/35" aria-hidden />
      <SectionReveal>
        <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            id="newsletter-heading"
            className="font-heading text-4xl font-bold uppercase tracking-widest text-brand-white sm:text-5xl"
          >
            Stay mission-ready
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-brand-khaki">
            Subscribe for product updates, new certifications, and procurement
            bulletins.
          </p>
          <form
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="w-full cursor-crosshair-interactive rounded-sm border-2 border-brand-white bg-brand-black px-4 py-3 font-body text-brand-white placeholder:text-brand-fog focus:outline-none focus:ring-2 focus:ring-brand-gold sm:max-w-sm"
            />
            <button
              type="submit"
              className="btn-tactical cursor-crosshair-interactive rounded-sm bg-brand-alert px-8 py-3 font-mono text-sm uppercase tracking-wider text-brand-white hover:bg-brand-alert/90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </SectionReveal>
    </section>
  );
}
