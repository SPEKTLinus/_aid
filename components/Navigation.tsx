"use client";

import { useCart } from "@/components/CartProvider";
import {
  Menu,
  Search,
  ShoppingCart,
  X,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "Product", href: "#equipment" },
  { label: "Overview", href: "#product" },
  { label: "Winter", href: "#campaign" },
  { label: "Procurement", href: "#procurement" },
  { label: "About", href: "#about" },
] as const;

export function Navigation() {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b border-brand-steel/50 backdrop-blur-sm transition-colors duration-300 ${
          scrolled
            ? "bg-brand-charcoal"
            : "bg-brand-charcoal/95"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="#hero"
            className="group flex cursor-crosshair-interactive items-center gap-2"
          >
            <Image
              src="/logo.svg"
              alt=""
              width={28}
              height={28}
              className="shrink-0"
            />
            <div className="flex items-center gap-1.5 font-heading text-lg font-bold uppercase tracking-tight text-brand-white sm:text-xl">
              <span>TacAID</span>
              <Shield
                className="h-5 w-5 shrink-0 text-brand-olive"
                strokeWidth={1.75}
                aria-hidden
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="btn-tactical cursor-crosshair-interactive font-mono text-xs uppercase tracking-wider text-brand-khaki hover:text-brand-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Search"
              className="cursor-crosshair-interactive rounded p-2 text-brand-khaki hover:bg-brand-steel hover:text-brand-white"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label={`Cart${count ? `, ${count} items` : ""}`}
              className="relative cursor-crosshair-interactive rounded p-2 text-brand-khaki hover:bg-brand-steel hover:text-brand-white"
            >
              <ShoppingCart className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-[1rem] items-center justify-center rounded-sm bg-brand-alert px-1 font-mono text-[10px] font-bold text-brand-white">
                  {count > 9 ? "9+" : count}
                </span>
              )}
            </button>
            <Link
              href="#procurement"
              className="btn-tactical relative hidden cursor-crosshair-interactive items-center overflow-hidden rounded-sm bg-brand-olive px-3 py-2 font-mono text-[10px] text-brand-white hover:bg-brand-oliveDark sm:inline-flex"
            >
              Get a quote
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              className="cursor-crosshair-interactive rounded p-2 text-brand-khaki hover:bg-brand-steel lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-[60] bg-brand-black/70 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              className="fixed inset-y-0 right-0 z-[70] flex w-[min(100%,360px)] flex-col bg-brand-charcoal shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              <div className="flex items-center justify-between border-b border-brand-steel p-4">
                <span className="font-heading text-lg font-bold uppercase text-brand-white">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="cursor-crosshair-interactive rounded p-2 text-brand-khaki hover:bg-brand-steel"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 p-4">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="cursor-crosshair-interactive border-b border-brand-steel/60 py-3 font-mono text-sm font-medium uppercase tracking-widest text-brand-khaki hover:text-brand-white"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  href="#procurement"
                  onClick={() => setMobileOpen(false)}
                  className="btn-tactical mt-4 cursor-crosshair-interactive rounded-sm bg-brand-olive py-3 text-center font-mono text-sm text-brand-white"
                >
                  Get a quote
                </Link>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
