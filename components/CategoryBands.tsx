"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Load bearing equipment",
    href: "#equipment",
    image:
      "https://images.unsplash.com/photo-1595590424283-b51f697229ad?w=800&q=80",
  },
  {
    title: "Protective gear",
    href: "#equipment",
    image:
      "https://images.unsplash.com/photo-1578662996434-01f58e473301?w=800&q=80",
  },
  {
    title: "Communications",
    href: "#equipment",
    image:
      "https://images.unsplash.com/photo-1517466782853-682b6c92d06f?w=800&q=80",
  },
  {
    title: "Field clothing",
    href: "#equipment",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
  },
];

export function CategoryBands() {
  return (
    <section
      id="categories"
      className="bg-brand-charcoal py-16 sm:py-20"
      aria-labelledby="categories-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="categories-heading" className="sr-only">
          Categories
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {categories.map((c) => (
            <motion.div key={c.title} whileHover={{ scale: 1.02 }}>
              <Link
                href={c.href}
                className="group relative block aspect-[4/5] cursor-crosshair-interactive overflow-hidden rounded-sm border-2 border-transparent transition-[border-color,box-shadow] duration-300 hover:border-brand-olive"
              >
                <Image
                  src={c.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent" />
                <span className="absolute inset-0 flex items-end justify-center p-4 text-center font-heading text-lg font-bold uppercase leading-tight tracking-widest text-brand-white sm:text-xl">
                  {c.title}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
