import Link from "next/link";

export function TopBar() {
  return (
    <div className="flex h-8 items-center justify-between border-b border-brand-steel bg-brand-black px-4 font-mono text-[10px] uppercase tracking-wider text-brand-fog sm:px-6 lg:px-8">
      <div className="flex min-w-0 flex-1 items-center gap-1.5 sm:gap-2">
        <span className="shrink-0" aria-hidden>
          🇸🇪
        </span>
        <span className="shrink-0" aria-hidden>
          🇳🇴
        </span>
        <span className="shrink-0" aria-hidden>
          🇩🇪
        </span>
        <span className="shrink-0" aria-hidden>
          🇺🇸
        </span>
        <span className="truncate">
          Certified supplier to NATO member nations
        </span>
      </div>
      <div className="flex shrink-0 items-center gap-3 sm:gap-4">
        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            className="cursor-crosshair-interactive text-brand-white"
          >
            EN
          </button>
          <span className="text-brand-steel">/</span>
          <button
            type="button"
            className="cursor-crosshair-interactive hover:text-brand-white"
          >
            SV
          </button>
        </div>
        <Link
          href="#footer"
          className="cursor-crosshair-interactive hover:text-brand-khaki"
        >
          Track Order
        </Link>
      </div>
    </div>
  );
}
