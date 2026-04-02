import { SectionReveal } from "@/components/SectionReveal";
import { SectionTitle } from "@/components/SectionTitle";

const items = [
  {
    quote:
      "Documentation arrived complete. STANAG references matched our tender. No rework on receiving inspection.",
    name: "Sergeant K. Lindgren",
    role: "Swedish Life Guards (Livgardet)",
  },
  {
    quote:
      "Cold-weather kit held at −37 °C field trial. Stitching and laminate edge trim passed our QC checklist.",
    name: "Captain E. Haugen",
    role: "Norwegian Army — Logistics",
  },
  {
    quote:
      "NCAGE and ISO files accepted first submission. Lead time matched the quoted window.",
    name: "Procurement Officer",
    role: "NATO framework contractor (redacted unit)",
  },
];

export function Testimonials() {
  return (
    <section
      className="bg-brand-charcoal py-16 sm:py-24"
      aria-labelledby="testimonials-heading"
    >
      <SectionReveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle id="testimonials-heading">
            Trusted in the field
          </SectionTitle>
          <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {items.map((t) => (
              <li
                key={t.name}
                className="border-t-2 border-brand-olive bg-brand-black/20 p-6"
              >
                <blockquote className="font-body text-base italic leading-relaxed text-brand-khaki">
                  “{t.quote}”
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-steel font-mono text-[10px] text-brand-fog"
                    aria-hidden
                  >
                    unit
                  </div>
                  <div>
                    <p className="font-mono text-sm text-brand-white">
                      {t.name}
                    </p>
                    <p className="mt-0.5 font-body text-xs text-brand-fog">
                      {t.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </SectionReveal>
    </section>
  );
}
