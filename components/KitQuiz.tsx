"use client";

import { SectionReveal } from "@/components/SectionReveal";
import { products } from "@/data/products";
import { useMemo, useState } from "react";
import Link from "next/link";

type Role = "unit" | "security" | "individual";
type Climate = "arctic" | "temperate" | "desert";
type Mission = "patrol" | "comms" | "protection";

const steps = [
  {
    key: "role" as const,
    title: "Role",
    options: [
      { id: "unit" as Role, label: "Military / government unit" },
      { id: "security" as Role, label: "Certified security firm" },
      { id: "individual" as Role, label: "Individual (vetted)" },
    ],
  },
  {
    key: "climate" as const,
    title: "Climate",
    options: [
      { id: "arctic" as Climate, label: "Arctic / sub-zero" },
      { id: "temperate" as Climate, label: "Temperate" },
      { id: "desert" as Climate, label: "Hot / arid" },
    ],
  },
  {
    key: "mission" as const,
    title: "Mission type",
    options: [
      { id: "patrol" as Mission, label: "Foot patrol / load carriage" },
      { id: "comms" as Mission, label: "Comms & headsets" },
      { id: "protection" as Mission, label: "Ballistic / eye / gloves" },
    ],
  },
];

export function KitQuiz() {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState<Role | null>(null);
  const [climate, setClimate] = useState<Climate | null>(null);
  const [mission, setMission] = useState<Mission | null>(null);

  const recommendation = useMemo(() => {
    if (!role || !climate || !mission) return null;
    const ids = new Set<string>();
    if (mission === "patrol") {
      ids.add("spk-0042");
      ids.add("spk-0118");
    }
    if (mission === "comms") {
      ids.add("spk-0204");
    }
    if (mission === "protection") {
      ids.add("spk-0407");
      ids.add("spk-0331");
    }
    if (climate === "arctic") {
      ids.add("spk-0522");
    }
    if (ids.size === 0) {
      ids.add(products[0].id);
    }
    return products.filter((p) => ids.has(p.id));
  }, [role, climate, mission]);

  function select(
    key: "role" | "climate" | "mission",
    id: Role | Climate | Mission,
  ) {
    if (key === "role") setRole(id as Role);
    if (key === "climate") setClimate(id as Climate);
    if (key === "mission") setMission(id as Mission);
    setStep((s) => Math.min(s + 1, steps.length));
  }

  function reset() {
    setStep(0);
    setRole(null);
    setClimate(null);
    setMission(null);
  }

  const current = steps[step];

  return (
    <section
      className="relative overflow-hidden border-t border-brand-steel bg-brand-black py-16 sm:py-20"
      aria-labelledby="kit-quiz-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 section-grid-texture"
        aria-hidden
      />
      <SectionReveal>
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            id="kit-quiz-heading"
            className="font-heading text-3xl font-bold uppercase tracking-widest text-brand-white sm:text-4xl"
          >
            Find your kit
          </h2>
          <span className="mt-3 block h-0.5 w-16 bg-brand-olive" />
          <p className="mt-6 font-body text-base leading-relaxed text-brand-khaki">
            Three inputs. Recommended bundle based on role, climate, and
            mission. No account required.
          </p>

          {step < steps.length && current && (
            <div className="mt-10">
              <p className="font-mono text-xs uppercase tracking-widest text-brand-fog">
                Step {step + 1} / {steps.length} · {current.title}
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {current.options.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => select(current.key, opt.id)}
                    className="btn-tactical w-full cursor-crosshair-interactive border border-brand-steel bg-brand-charcoal px-4 py-3 text-left font-mono text-xs uppercase tracking-wider text-brand-khaki hover:border-brand-olive hover:text-brand-white"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step >= steps.length && recommendation && (
            <div className="mt-10 rounded-sm border border-brand-steel bg-brand-charcoal p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-brand-olive">
                Recommended bundle
              </p>
              <ul className="mt-4 space-y-3">
                {recommendation.map((p) => (
                  <li
                    key={p.id}
                    className="flex items-center justify-between gap-4 border-b border-brand-steel/50 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-heading text-lg text-brand-white">
                      {p.name}
                    </span>
                    <Link
                      href="#equipment"
                      className="shrink-0 cursor-crosshair-interactive font-mono text-[10px] uppercase tracking-wider text-brand-oliveLight hover:text-brand-white"
                    >
                      View
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={reset}
                className="btn-tactical mt-6 cursor-crosshair-interactive font-mono text-xs uppercase tracking-wider text-brand-fog hover:text-brand-white"
              >
                Start over
              </button>
            </div>
          )}
        </div>
      </SectionReveal>
    </section>
  );
}
