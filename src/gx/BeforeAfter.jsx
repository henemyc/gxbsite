import { ArrowDown, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { ChaosPanel, ControlPanel } from "./mockups";
import { Reveal, SectionHead } from "./primitives";

const PAINS = [
  "Attendance in paper registers — errors every morning",
  "Cash dues in notebooks, reconciled painfully at month-end",
  "Memberships expiring silently, revenue walking away",
  "Member records scattered across lists, forms and chats",
];

const WINS = [
  "QR check-ins and live logs — accurate by default",
  "Every payment recorded; dues flagged before they age",
  "WhatsApp reminders fire automatically before expiry",
  "One searchable directory for your entire member base",
];

export default function BeforeAfter() {
  return (
    <section id="switch" className="relative overflow-hidden bg-mist py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <SectionHead
          eyebrow="The shift"
          title={
            <>
              From gym chaos to{" "}
              <span className="serif-it font-normal text-flame">complete control.</span>
            </>
          }
          sub="Running a gym is hard when you're juggling spreadsheets, WhatsApp reminders and manual registers every day."
        />

        <div className="relative mt-16 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          {/* before */}
          <Reveal className="flex flex-col">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-down/70" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-dim">The old way</span>
            </div>
            <div className="relative -rotate-[0.4deg] transition-transform duration-500 hover:rotate-0">
              <ChaosPanel />
            </div>
            <ul className="mt-6 space-y-2.5">
              {PAINS.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[14px] font-medium leading-relaxed text-dim">
                  <XCircle size={16} className="mt-0.5 shrink-0 text-down/70" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* arrow */}
          <Reveal delay={0.1} className="flex items-center justify-center">
            <span className="z-10 flex h-14 w-14 items-center justify-center rounded-full border border-peach-deep bg-white text-flame shadow-[var(--shadow-pop)]">
              <ArrowRight size={22} strokeWidth={2.4} className="max-lg:hidden" />
              <ArrowDown size={22} strokeWidth={2.4} className="lg:hidden" />
            </span>
          </Reveal>

          {/* after */}
          <Reveal delay={0.15} className="flex flex-col">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 animate-soft-ping rounded-full bg-up" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-dim">With GymXBook</span>
            </div>
            <div className="relative rotate-[0.4deg] transition-transform duration-500 hover:rotate-0">
              <ControlPanel />
            </div>
            <ul className="mt-6 space-y-2.5">
              {WINS.map((w) => (
                <li key={w} className="flex items-start gap-2.5 text-[14px] font-medium leading-relaxed text-ink-soft">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-up" />
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
