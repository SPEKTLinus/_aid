"use client";

import { SectionReveal } from "@/components/SectionReveal";
import Image from "next/image";
import Link from "next/link";

const BANNER_IMAGE =
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80";

export function CampaignBanner() {
  return (
    <section
      id="campaign"
      className="relative min-h-[24rem] overflow-hidden sm:min-h-[28rem]"
      aria-labelledby="campaign-heading"
    >
      <div className="absolute inset-0">
        <Image
          src={BANNER_IMAGE}
          alt=""
          fill
          className="object-cover saturate-[0.65]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-olive/80 via-brand-olive/40 to-transparent" />
      </div>
      <SectionReveal className="relative z-10 mx-auto flex min-h-[24rem] max-w-7xl items-center px-4 py-16 sm:min-h-[28rem] sm:px-6 lg:px-8">
        <div className="max-w-lg">
          <p className="font-mono text-xs uppercase tracking-widest text-brand-white/90">
            TacAID · cold-weather baseline
          </p>
          <h2
            id="campaign-heading"
            className="mt-4 font-heading text-4xl font-bold uppercase tracking-widest text-brand-white sm:text-5xl"
          >
            Arctic warfare ready
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-brand-khaki">
            TacAID is validated for Nordic winter employment. Environmental data
            ships in the procurement pack.
          </p>
          <Link
            href="#equipment"
            className="btn-tactical mt-8 inline-flex cursor-crosshair-interactive rounded-sm bg-brand-alert px-8 py-4 font-mono text-sm text-brand-white hover:bg-brand-alert/90"
          >
            View TacAID
          </Link>
        </div>
      </SectionReveal>
    </section>
  );
}
