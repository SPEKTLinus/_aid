"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HIGHLIGHT_IMAGE =
  "https://images.unsplash.com/photo-1595590424283-b51f697229ad?w=1600&q=80";

export function CategoryBands() {
  return (
    <section
      id="product"
      className="bg-brand-charcoal py-16 sm:py-20"
      aria-labelledby="product-highlight-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="product-highlight-heading" className="sr-only">
          TacAID overview
        </h2>
        <motion.div whileHover={{ scale: 1.01 }}>
          <Link
            href="#equipment"
            className="group relative block min-h-[280px] cursor-crosshair-interactive overflow-hidden rounded-sm border-2 border-transparent transition-[border-color] duration-300 hover:border-brand-olive sm:min-h-[320px]"
          >
            <Image
              src={HIGHLIGHT_IMAGE}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black/92 via-brand-black/55 to-brand-black/25" />
            <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-12">
              <p className="font-mono text-xs uppercase tracking-widest text-brand-olive">
                Primary system
              </p>
              <p className="mt-3 font-heading text-3xl font-bold uppercase tracking-widest text-brand-white sm:text-4xl md:text-5xl">
                TacAID
              </p>
              <p className="mt-4 max-w-md font-body text-base leading-relaxed text-brand-khaki">
                One catalogue line. Fixed configuration baseline. Full
                procurement pack on request.
              </p>
              <span className="btn-tactical-underline relative mt-6 inline-flex w-fit font-mono text-xs uppercase tracking-wider text-brand-oliveLight">
                View specs &amp; pricing →
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
