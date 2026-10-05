import { ArrowRight, Check } from "lucide-react";
import { INCLUDED, LINKS, PLANS } from "./data";
import { Reveal, SectionHead } from "./primitives";
import { cn } from "../utils/cn";

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-mist py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <SectionHead
          eyebrow="Pricing"
          title={
            <>
              Simple, transparent{" "}
              <span className="serif-it font-normal text-flame">pricing.</span>
            </>
          }
          sub="No hidden fees. No per-member charges. One flat price, everything included — built for Indian gym owners."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p, i) => {
            const featured = p.id === "quarterly";
            return (
              <Reveal key={p.id} delay={i * 0.07} className={cn(featured && "lg:-translate-y-3")}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-pop)]",
                    featured
                      ? "border-flame shadow-[var(--shadow-flame)] ring-1 ring-flame/40"
                      : "border-line shadow-[var(--shadow-card)]"
                  )}
                >
                  {p.tag && (
                    <span
                      className={cn(
                        "absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.14em] shadow-sm",
                        p.id === "quarterly" ? "bg-flame text-white" : "border border-up/25 bg-up-soft text-up"
                      )}
                    >
                      {p.tag}
                    </span>
                  )}
                  <div className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-dim">{p.name}</div>
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="text-[40px] font-extrabold leading-none tracking-[-0.03em] text-ink">
                      ₹{p.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="mt-1 h-5 text-[12px] font-semibold">
                    {p.save ? (
                      <span className="text-up">{p.save}</span>
                    ) : (
                      <span className="text-faint">{p.per || "\u00a0"}</span>
                    )}
                  </div>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-dim">{p.blurb}</p>
                  <a
                    href={LINKS.register}
                    className={cn(
                      "group mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-[14px] font-bold transition-all duration-200 hover:-translate-y-0.5",
                      featured
                        ? "bg-flame text-white shadow-[var(--shadow-flame)] hover:bg-flame-deep"
                        : "border border-line bg-white text-ink hover:border-ink/25 hover:shadow-[var(--shadow-card)]"
                    )}
                  >
                    {p.cta}
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* everything included */}
        <Reveal delay={0.1} className="mt-14">
          <div className="rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-card)] sm:p-9">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-lg font-extrabold tracking-tight text-ink">
                Every plan includes <span className="serif-it font-normal text-flame">everything.</span>
              </h3>
              <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-faint">
                GST-ready invoices · Razorpay included
              </span>
            </div>
            <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {INCLUDED.map((f) => (
                <span key={f} className="flex items-center gap-2.5 text-[13.5px] font-semibold text-ink-soft">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-up-soft text-up">
                    <Check size={11} strokeWidth={3.5} />
                  </span>
                  {f}
                </span>
              ))}
            </div>
            <p className="mt-7 border-t border-line pt-5 text-[12.5px] leading-relaxed text-faint">
              Running a multi-branch gym? Enterprise plans add a dashboard per branch with
              consolidated reporting across all locations from a single admin account.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
