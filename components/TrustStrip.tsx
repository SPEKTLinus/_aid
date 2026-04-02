import { SectionReveal } from "@/components/SectionReveal";

const stats = [
  { value: "12+", label: "Supplying armed forces" },
  { value: "NATO", label: "Certified supplier" },
  { value: "47", label: "Nations · Shipped globally" },
  { value: "ISO 9001", label: "Quality certified" },
];

export function TrustStrip() {
  return (
    <section
      className="border-y border-brand-black bg-brand-steel py-12 sm:py-14"
      aria-label="Trust and credentials"
    >
      <SectionReveal>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4 md:gap-0 md:divide-x md:divide-brand-fog/40 sm:px-6 lg:px-8">
          {stats.map((s) => (
            <div
              key={s.value}
              className="flex flex-col items-center px-4 text-center md:px-8"
            >
              <p className="font-heading text-3xl font-bold uppercase tracking-wide text-brand-white sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 font-body text-sm text-brand-khaki">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
