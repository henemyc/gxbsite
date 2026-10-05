import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { LINKS, NAV_LINKS } from "./data";
import { Logo } from "./primitives";
import { cn } from "../utils/cn";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 16);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-line bg-paper/85 shadow-[0_1px_0_0_rgba(23,24,28,0.02)] backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="cursor-pointer text-[14px] font-semibold text-dim transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={LINKS.register}
            className="group hidden cursor-pointer items-center gap-1.5 rounded-xl bg-ink px-5 py-2.5 text-[13.5px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-flame sm:inline-flex"
          >
            Start free
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-line bg-white text-ink transition-colors hover:border-ink/20 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-line bg-paper/95 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-1 px-5 pb-5 pt-2">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block cursor-pointer rounded-xl px-3 py-3 text-[15px] font-semibold text-ink-soft transition-colors hover:bg-mist"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={LINKS.register}
                className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-flame px-4 py-3.5 text-[15px] font-bold text-white"
              >
                Start 7 days free <ArrowRight size={15} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
