import { SectionReveal } from "@/components/SectionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import Link from "next/link";

function ProcurementGraphic() {
  return (
    <div
      className="relative mx-auto flex h-64 w-full max-w-md items-center justify-center sm:h-80"
      aria-hidden
    >
      <svg
        viewBox="0 0 320 280"
        className="h-full w-full text-brand-olive"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="48"
          y="40"
          width="200"
          height="200"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
          className="text-brand-olive/60"
        />
        <path
          d="M72 88h152M72 112h120M72 136h100M72 184h152"
          stroke="#3B4A6B"
          strokeWidth="2"
          strokeLinecap="square"
        />
        <path
          d="M200 200 L260 120 L260 200 Z"
          fill="#323718"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="220" cy="72" r="28" className="fill-brand-slate/40" />
        <path
          d="M210 72 L218 82 L238 58"
          stroke="currentColor"
          strokeWidth="2"
          className="text-brand-gold"
        />
      </svg>
    </div>
  );
}

export function ProcurementSection() {
  return (
    <section
      id="procurement"
      className="bg-brand-charcoal py-16 sm:py-24"
      aria-labelledby="procurement-heading"
    >
      <SectionReveal>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:grid-cols-2 sm:items-center sm:px-6 lg:gap-16 lg:px-8">
          <div>
            <SectionTitle id="procurement-heading">
              Procurement &amp; B2B orders
            </SectionTitle>
            <p className="mt-8 font-body text-base leading-relaxed text-brand-khaki">
              We supply military units, government agencies, and certified
              private security firms. Quote requests handled within 24 hours.
              All orders include full documentation for procurement
              compliance.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="#newsletter"
                className="btn-tactical group inline-flex cursor-crosshair-interactive items-center gap-2 font-mono text-sm uppercase tracking-wider text-brand-oliveLight hover:text-brand-white"
              >
                <span className="btn-tactical-underline relative">
                  Request a quote →
                </span>
              </Link>
              <Link
                href="#footer"
                className="btn-tactical group inline-flex cursor-crosshair-interactive items-center gap-2 font-mono text-sm uppercase tracking-wider text-brand-oliveLight hover:text-brand-white"
              >
                <span className="btn-tactical-underline relative">
                  Download product catalogue (PDF) →
                </span>
              </Link>
            </div>
          </div>
          <ProcurementGraphic />
        </div>
      </SectionReveal>
    </section>
  );
}
