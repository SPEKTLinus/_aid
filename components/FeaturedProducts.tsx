"use client";

import { useCart } from "@/components/CartProvider";
import { SectionTitle } from "@/components/SectionTitle";
import { products } from "@/data/products";
import { Plus } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

function formatSek(n: number) {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
    maximumFractionDigits: 0,
  }).format(n);
}

function formatEur(n: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

export function FeaturedProducts() {
  const { addItem } = useCart();
  const [quickViewId, setQuickViewId] = useState<string | null>(null);

  return (
    <section
      id="equipment"
      className="relative overflow-hidden bg-brand-black py-16 sm:py-24"
      aria-labelledby="equipment-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 section-grid-texture"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionTitle id="equipment-heading">TacAID</SectionTitle>
          <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-brand-khaki">
            One system. Baseline held to NATO STANAG documentation requirements.
            Quotes and lot data ship with the order.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-xl grid-cols-1 gap-6">
          {products.map((p) => (
            <li key={p.id}>
              <motion.article
                className="group relative flex h-full flex-col overflow-hidden rounded-sm bg-brand-charcoal shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                onMouseEnter={() => setQuickViewId(p.id)}
                onMouseLeave={() => setQuickViewId(null)}
              >
                <div className="relative aspect-square bg-brand-steel/50">
                  {p.badge && (
                    <span className="absolute left-3 top-3 z-10 rounded-sm bg-brand-olive px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-brand-white">
                      {p.badge}
                    </span>
                  )}
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    className="object-contain p-6 grayscale transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                  {quickViewId === p.id && (
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden border-t border-brand-olive/50 bg-brand-black/90 p-3 md:block">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-brand-fog">
                        Quick view
                      </p>
                      <p className="mt-1 font-body text-xs text-brand-khaki">
                        {p.spec}. Stock on request. Full specs in catalogue.
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-xl text-brand-white sm:text-2xl">
                    {p.name}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-brand-fog">
                    {p.spec}
                  </p>
                  <div className="mt-4 flex flex-wrap items-baseline gap-2">
                    <span className="text-lg font-bold text-brand-white">
                      {formatSek(p.priceSek)}
                    </span>
                    <span className="text-sm text-brand-khaki">
                      / {formatEur(p.priceEur)}
                    </span>
                    <span className="w-full font-mono text-[10px] uppercase tracking-wider text-brand-fog">
                      Excl. VAT
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={addItem}
                    className="btn-tactical mt-6 flex w-full cursor-crosshair-interactive items-center justify-center gap-2 rounded-sm bg-brand-olive py-3 font-mono text-xs text-brand-white hover:bg-brand-oliveDark"
                  >
                    <Plus className="h-4 w-4" aria-hidden />
                    Add to cart
                  </button>
                </div>
              </motion.article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
