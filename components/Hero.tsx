"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=1920&q=80";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/70" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-1 flex-col items-center justify-center px-4 py-28 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 font-mono text-xs uppercase tracking-widest text-brand-olive sm:text-sm"
        >
          [ classified — commercial access ]
          <span className="ml-0.5 inline-block h-4 w-px translate-y-0.5 bg-brand-olive animate-blink-cursor align-middle" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-heading text-5xl font-bold uppercase tracking-widest text-brand-white sm:text-6xl md:text-7xl"
        >
          <span className="block">Gear built for</span>
          <span className="block text-brand-khaki">those who protect</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-6 max-w-xl font-body text-base leading-relaxed text-brand-khaki"
        >
          TacAID is built for units that need a single, auditable field system —
          NATO-aligned documentation, Nordic supply chain controls, access for
          certified organizations and vetted individuals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="#equipment"
            className="btn-tactical cursor-crosshair-interactive rounded-sm bg-brand-alert px-8 py-4 font-mono text-sm text-brand-white hover:bg-brand-alert/90"
          >
            View TacAID
          </Link>
          <Link
            href="#procurement"
            className="btn-tactical cursor-crosshair-interactive rounded-sm border-2 border-brand-white px-8 py-4 font-mono text-sm text-brand-white hover:bg-brand-white/5"
          >
            Request catalogue
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-wider text-brand-fog sm:text-[11px]"
        >
          <span>🔒 Secure B2B ordering</span>
          <span className="hidden sm:inline">·</span>
          <span>🇸🇪 Swedish quality standards</span>
          <span className="hidden sm:inline">·</span>
          <span>✈ Global shipping</span>
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col items-center pb-8">
        <div className="mb-4 h-px w-full max-w-2xl bg-brand-olive" />
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          aria-hidden
        >
          <ChevronDown className="h-8 w-8 text-brand-olive" />
        </motion.div>
      </div>
    </section>
  );
}
