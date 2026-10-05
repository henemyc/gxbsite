import { Check } from "lucide-react";
import { STEPS } from "./data";
import { PrimaryCta, Reveal, SectionHead } from "./primitives";

export default function Steps() {
  return (
    <section id="how" className="relative overflow-hidden bg-mist py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <SectionHead
          eyebrow="Getting started"
          title={
            <>
              Up and running in{" "}
              <span className="serif-it font-normal text-flame">minutes.</span>
            </>
          }
          sub="No technical knowledge required. If you can use WhatsApp, you can use GymXBook."
        />

        <div className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* connector line */}
          <div className="absolute left-0 right-0 top-[52px] hidden border-t-2 border-dashed border-peach-deep lg:block" aria-hidden />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.09} className="relative">
              <div className="group h-full rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-pop)]">
                <div className="relative inline-flex h-11 items-center rounded-xl bg-peach px-4 font-mono text-[15px] font-bold text-flame-deep transition-colors duration-300 group-hover:bg-flame group-hover:text-white">
                  {s.n}
                </div>
                <h3 className="mt-5 text-[17px] font-extrabold tracking-tight text-ink">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-dim">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 flex flex-col items-center gap-5 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-semibold text-dim">
            {["Bulk member import included", "Typical migration in 2–4 hours", "Zero data loss"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check size={14} strokeWidth={3.5} className="text-up" />
                {t}
              </span>
            ))}
          </div>
          <PrimaryCta>Start your setup — free</PrimaryCta>
        </Reveal>
      </div>
    </section>
  );
}
