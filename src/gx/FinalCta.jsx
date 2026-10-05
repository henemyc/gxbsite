import { ArrowRight, Check } from "lucide-react";
import { LINKS } from "./data";
import { Reveal, StoreBadges } from "./primitives";

export default function FinalCta() {
  return (
    <section className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-flame via-flame to-flame-soft px-6 py-16 text-center shadow-[0_40px_100px_-30px_rgba(255,90,31,0.65)] sm:px-14 sm:py-24">
            {/* decoration */}
            <svg viewBox="0 0 1000 600" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
              <circle cx="880" cy="90" r="260" fill="none" stroke="white" strokeOpacity="0.14" strokeWidth="1.5" />
              <circle cx="880" cy="90" r="170" fill="none" stroke="white" strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="4 8" />
              <circle cx="80" cy="540" r="220" fill="none" stroke="white" strokeOpacity="0.12" strokeWidth="1.5" />
              <path d="M0 470 C 220 400 320 520 520 460 S 860 380 1000 440" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="1.5" />
            </svg>

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                7-day free trial · full access
              </span>

              <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-[-0.03em] text-white sm:text-[3.6rem]">
                Your gym,{" "}
                <span className="serif-it font-normal">running from your pocket.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-[16.5px] leading-relaxed text-white/85">
                Join 500+ gyms already collecting on time, retaining more
                members, and running on autopilot with GymXBook.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={LINKS.register}
                  className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-[15px] font-extrabold text-flame-deep shadow-[0_16px_40px_-12px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)]"
                >
                  Start 7 days free
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[12.5px] font-bold text-white">
                {["No credit card required", "Setup in under 10 minutes", "Cancel anytime"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5">
                    <Check size={13} strokeWidth={3.5} className="text-up" />
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex justify-center">
                <StoreBadges className="justify-center" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
