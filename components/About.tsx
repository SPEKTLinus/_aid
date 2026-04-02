import { SectionReveal } from "@/components/SectionReveal";

const milestones = [
  { year: "2012", label: "Founded" },
  { year: "2016", label: "First NATO contract" },
  { year: "2019", label: "ISO certified" },
  { year: "2024", label: "TacAID baseline locked" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-brand-black py-16 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 section-grid-texture"
        aria-hidden
      />
      <SectionReveal>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-brand-olive">
            About TacAID
          </p>
          <h2
            id="about-heading"
            className="mt-4 font-heading text-4xl font-bold uppercase tracking-widest text-brand-white sm:text-5xl"
          >
            One product. Full traceability.
          </h2>
          <span
            className="mx-auto mt-4 block h-0.5 w-16 bg-brand-olive"
            aria-hidden
          />
          <div className="mt-10 space-y-6 text-left font-body text-base leading-relaxed text-brand-khaki sm:text-center">
            <p>
              TacAID is the sole active line we ship. Engineering and procurement
              effort stay on one configuration so documentation, test records,
              and lot history stay aligned with what arrives in country.
            </p>
            <p className="mt-6">
              We do not list speculative variants. The baseline matches MIL-SPEC
              and STANAG references published in the procurement pack. Auditors
              get the same paperwork your receiving inspection sees.
            </p>
            <p className="mt-6">
              Nordic field trials inform software and hardware freeze points.
              When a change clears QC, the revision ships in the catalogue — not
              as an optional SKU you have to chase.
            </p>
          </div>

          <div className="mt-14 overflow-x-auto">
            <div className="relative mx-auto flex min-w-[640px] max-w-4xl items-center justify-between px-2">
              <div className="absolute left-8 right-8 top-1/2 h-px -translate-y-1/2 bg-brand-olive/60" />
              {milestones.map((m) => (
                <div
                  key={m.year}
                  className="relative z-10 flex flex-col items-center bg-brand-black px-2"
                >
                  <span className="font-mono text-sm font-medium uppercase tracking-wider text-brand-white">
                    {m.year}
                  </span>
                  <span className="mt-1 font-mono text-[10px] uppercase tracking-wider text-brand-fog">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
