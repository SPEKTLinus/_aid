import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-brand-steel bg-brand-black"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#hero" className="flex cursor-crosshair-interactive items-center gap-2">
              <Image src="/logo.svg" alt="" width={32} height={32} />
              <span className="font-heading text-lg font-bold uppercase tracking-tight text-brand-white">
                TacAID
              </span>
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed text-brand-khaki">
              Single product line. NATO-aligned documentation. Nordic supply
              chain discipline.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://twitter.com"
                className="cursor-crosshair-interactive rounded p-2 text-brand-fog hover:bg-brand-steel hover:text-brand-white"
                aria-label="X (Twitter)"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="cursor-crosshair-interactive rounded p-2 text-brand-fog hover:bg-brand-steel hover:text-brand-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                className="cursor-crosshair-interactive rounded p-2 text-brand-fog hover:bg-brand-steel hover:text-brand-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-brand-white">
              Product
            </h3>
            <ul className="mt-4 space-y-2 font-body text-sm text-brand-khaki">
              <li>
                <Link href="#equipment" className="cursor-crosshair-interactive hover:text-brand-white">
                  TacAID — specs &amp; pricing
                </Link>
              </li>
              <li>
                <Link href="#product" className="cursor-crosshair-interactive hover:text-brand-white">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="#campaign" className="cursor-crosshair-interactive hover:text-brand-white">
                  Cold-weather operations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-brand-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2 font-body text-sm text-brand-khaki">
              <li>
                <Link href="#about" className="cursor-crosshair-interactive hover:text-brand-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#procurement" className="cursor-crosshair-interactive hover:text-brand-white">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="#footer" className="cursor-crosshair-interactive hover:text-brand-white">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#footer" className="cursor-crosshair-interactive hover:text-brand-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-brand-white">
              Support
            </h3>
            <ul className="mt-4 space-y-2 font-body text-sm text-brand-khaki">
              <li>
                <Link href="#newsletter" className="cursor-crosshair-interactive hover:text-brand-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#procurement" className="cursor-crosshair-interactive hover:text-brand-white">
                  B2B / Procurement
                </Link>
              </li>
              <li>
                <Link href="#footer" className="cursor-crosshair-interactive hover:text-brand-white">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#footer" className="cursor-crosshair-interactive hover:text-brand-white">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-brand-steel pt-8 font-mono text-[10px] uppercase tracking-wider text-brand-fog sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TacAID AB</p>
          <p>Org nr: SE556XXXXXXX-XXXX</p>
          <p>NATO supplier code: NCAGE XXXXX</p>
          <p className="flex items-center gap-2">
            <span aria-hidden>🇸🇪</span>
            <span aria-hidden>🇳🇴</span>
            <span aria-hidden>🇩🇪</span>
            <span aria-hidden>🇺🇸</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
