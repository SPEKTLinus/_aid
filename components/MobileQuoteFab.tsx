"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export function MobileQuoteFab() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-tactical fixed bottom-5 right-4 z-40 cursor-crosshair-interactive rounded-full bg-brand-olive px-5 py-3 font-mono text-xs font-medium uppercase tracking-wider text-brand-white shadow-lg md:hidden"
      >
        Get a quote
      </button>
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close quote form"
              className="fixed inset-0 z-[80] bg-brand-black/80 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="quote-modal-title"
              className="fixed inset-x-0 bottom-0 z-[90] max-h-[85vh] overflow-y-auto rounded-t-2xl border border-brand-steel bg-brand-charcoal p-6 shadow-2xl md:hidden"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 320 }}
            >
              <div className="flex items-start justify-between gap-4">
                <h2
                  id="quote-modal-title"
                  className="font-heading text-xl font-bold uppercase tracking-wide text-brand-white"
                >
                  Request a quote
                </h2>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="cursor-crosshair-interactive rounded p-2 text-brand-khaki hover:bg-brand-steel"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-2 font-mono text-xs text-brand-fog">
                Responses within 24h on business days.
              </p>
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setOpen(false);
                }}
              >
                <div>
                  <label
                    htmlFor="quote-org"
                    className="font-mono text-[10px] uppercase tracking-wider text-brand-fog"
                  >
                    Organization / unit
                  </label>
                  <input
                    id="quote-org"
                    required
                    className="mt-1 w-full cursor-crosshair-interactive rounded-sm border-2 border-brand-steel bg-brand-black px-3 py-2 font-body text-sm text-brand-white focus:border-brand-olive focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="quote-email"
                    className="font-mono text-[10px] uppercase tracking-wider text-brand-fog"
                  >
                    Email
                  </label>
                  <input
                    id="quote-email"
                    type="email"
                    required
                    className="mt-1 w-full cursor-crosshair-interactive rounded-sm border-2 border-brand-steel bg-brand-black px-3 py-2 font-body text-sm text-brand-white focus:border-brand-olive focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="quote-notes"
                    className="font-mono text-[10px] uppercase tracking-wider text-brand-fog"
                  >
                    Line items / references
                  </label>
                  <textarea
                    id="quote-notes"
                    rows={3}
                    className="mt-1 w-full cursor-crosshair-interactive rounded-sm border-2 border-brand-steel bg-brand-black px-3 py-2 font-body text-sm text-brand-white focus:border-brand-olive focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-tactical w-full cursor-crosshair-interactive rounded-sm bg-brand-alert py-3 font-mono text-sm uppercase tracking-wider text-brand-white"
                >
                  Submit request
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
