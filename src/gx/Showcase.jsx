import { Check } from "lucide-react";
import { MemberAppScreen, RenewalsScreen } from "./mockups";
import { PhoneFrame, Reveal, StoreBadges } from "./primitives";

const POINTS = [
  {
    t: "Members scan in with QR",
    d: "Every check-in lands on your dashboard the second it happens — no register, no disputes.",
  },
  {
    t: "Plans, validity & payments in members' pockets",
    d: "Members see their own attendance, membership validity and payment history — fewer front-desk questions.",
  },
  {
    t: "Workout & diet plans members actually follow",
    d: "Assign plans from your dashboard; members follow along and track progress in their app.",
  },
  {
    t: "Reminders reach members on WhatsApp",
    d: "Expiry, dues, birthdays and announcements — delivered where people actually read them.",
  },
];

export default function Showcase() {
  return (
    <section id="app" className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow-flame absolute inset-x-0 top-1/3 h-[640px]" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr]">
        {/* copy */}
        <div className="max-w-xl max-lg:mx-auto max-lg:text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-peach-deep bg-peach px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-flame-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" />
              One platform · two apps
            </span>
            <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[3.4rem]">
              For the owner —{" "}
              <span className="serif-it font-normal text-flame">and every member.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-dim">
              You run operations from your phone while members live in their own
              app — validity, attendance, workouts, diet and reminders included.
            </p>
          </Reveal>

          <div className="mt-9 space-y-6">
            {POINTS.map((p, i) => (
              <Reveal key={p.t} delay={0.06 * i} className="flex items-start gap-4 max-lg:text-left">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-up-soft text-up">
                  <Check size={13} strokeWidth={3.5} />
                </span>
                <div>
                  <h3 className="text-[15.5px] font-extrabold tracking-tight text-ink">{p.t}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-dim">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <StoreBadges small className="mt-9 max-lg:justify-center" />
          </Reveal>
        </div>

        {/* phones */}
        <Reveal delay={0.1} className="relative">
          <div className="relative mx-auto flex max-w-[640px] items-end justify-center">
            <div className="relative z-0 -mr-14 mb-10 hidden shrink-0 opacity-95 sm:block">
              <PhoneFrame glow={false}>
                <div className="h-[560px] [&>div]:h-full">
                  <RenewalsScreen />
                </div>
              </PhoneFrame>
            </div>
            <div className="relative z-10 shrink-0">
              <PhoneFrame>
                <div className="h-[560px] [&>div]:h-full">
                  <MemberAppScreen />
                </div>
              </PhoneFrame>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 -bottom-4 mx-auto h-10 w-3/4 rounded-[50%] bg-ink/10 blur-2xl" aria-hidden />
        </Reveal>
      </div>
    </section>
  );
}
