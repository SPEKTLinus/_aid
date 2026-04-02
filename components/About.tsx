import { SectionReveal } from "@/components/SectionReveal";

const milestones = [
  { year: "2012", label: "Founded" },
  { year: "2016", label: "First NATO contract" },
  { year: "2019", label: "ISO certified" },
  { year: "2024", label: "Pan-Nordic distribution" },
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
            About Spekt Tactical
          </p>
          <h2
            id="about-heading"
            className="mt-4 font-heading text-4xl font-bold uppercase tracking-widest text-brand-white sm:text-5xl"
          >
            Built by veterans. Trusted by professionals.
          </h2>
          <span
            className="mx-auto mt-4 block h-0.5 w-16 bg-brand-olive"
            aria-hidden
          />
          <div className="mt-10 space-y-6 text-left font-body text-base leading-relaxed text-brand-khaki sm:text-center">
            <p>
              Spekt Tactical started as a Nordic repair and gear integration
              workshop. Today we source and certify equipment against MIL-SPEC
              and STANAG baselines vetted by procurement officers across NATO
              members.
            </p>
            <p className="mt-6">
              Our supply chain is audited. Lot traceability and documentation
              ship with every order. We do not market fantasy specs — what we
              list is what we can prove in an audit.
            </p>
            <p className="mt-6">
              Field feedback from Nordic units drives product selection. If an
              item fails cold-weather trials or comms interoperability, it does
              not reach our catalogue.
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
