import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Plus } from "lucide-react";
import { FAQS } from "./data";
import { Reveal } from "./primitives";
import { cn } from "../utils/cn";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative bg-mist py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-peach-deep bg-peach px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-flame-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" />
              FAQ
            </span>
            <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[3.2rem]">
              Questions,{" "}
              <span className="serif-it font-normal text-flame">answered.</span>
            </h2>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-dim">
              Everything you need to know before getting started. Still unsure?
              Our team replies within a few hours — real humans who understand
              gym businesses.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["WhatsApp support", "Email support", "Video-call onboarding"].map((c) => (
                <span key={c} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-[12.5px] font-semibold text-ink-soft shadow-sm">
                  <MessageCircle size={13} className="text-flame" />
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-white transition-colors duration-200",
                    isOpen ? "border-flame/40 shadow-[var(--shadow-card)]" : "border-line"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-[15px] font-bold tracking-tight text-ink">{f.q}</span>
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                        isOpen ? "rotate-45 border-flame bg-flame text-white" : "border-line text-faint"
                      )}
                    >
                      <Plus size={14} strokeWidth={2.5} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 text-[14px] leading-relaxed text-dim">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
