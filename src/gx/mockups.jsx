import { useEffect, useId, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bell,
  Check,
  CheckCheck,
  ChevronRight,
  Dumbbell,
  Lock,
  Megaphone,
  MessageCircle,
  Phone,
  QrCode,
  Search,
  TrendingUp,
} from "lucide-react";
import { DEMO } from "./data";
import { Avatar, BottomNav, CountUp, AppIcon } from "./primitives";
import { cn } from "../utils/cn";

/* ================= attendance ring ================= */

export function AttendanceRing({
  value = 82,
  size = 132,
  label,
  className,
}) {
  const gid = useId();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const r = 46;
  const c = 2 * Math.PI * r;
  return (
    <div ref={ref} className={cn("relative", className)} style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF5A1F" />
            <stop offset="100%" stopColor="#FF9A3D" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r={r} stroke="#F0EFEA" strokeWidth="11" fill="none" />
        <motion.circle
          cx="60"
          cy="60"
          r={r}
          stroke={`url(#${gid})`}
          strokeWidth="11"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          transform="rotate(-90 60 60)"
          initial={{ strokeDashoffset: c }}
          animate={inView ? { strokeDashoffset: c * (1 - value / 100) } : {}}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-1">
        <CountUp to={value} suffix="%" className="text-[18px] font-extrabold tracking-tight text-ink" />
        {label && <span className="mt-0.5 text-[7.5px] font-bold uppercase tracking-[0.08em] text-faint">{label}</span>}
      </div>
    </div>
  );
}

/* ================= check-in feed ================= */

export function CheckinFeed({ className, rows = DEMO.checkins }) {
  return (
    <div className={cn("space-y-1.5", className)}>
      {rows.map((r, i) => (
        <div
          key={r.name}
          className="feed-row flex items-center gap-2 rounded-xl border border-line px-2.5 py-2"
          style={{ animationDelay: `${i * 2.2}s` }}
        >
          <Avatar initials={r.name.split(" ").map((w) => w[0]).join("")} size="sm" tone={i === 0 ? "flame" : "ink"} />
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[11px] font-bold text-ink">{r.name}</span>
            <span className="block text-[9px] font-medium text-faint">{r.plan} plan</span>
          </span>
          <span className="flex shrink-0 items-center gap-1.5">
            <span className="font-mono text-[9.5px] font-semibold text-dim">{r.time}</span>
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-up text-white">
              <Check size={9} strokeWidth={4} />
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

/* ================= hero phone: owner home ================= */

export function OwnerHomeScreen() {
  return (
    <div className="flex flex-col bg-white">
      {/* header */}
      <div className="flex items-center justify-between bg-white px-5 pb-2">
        <div>
          <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-faint">Good morning</div>
          <div className="mt-0.5 text-[15px] font-extrabold tracking-tight text-ink">{DEMO.gym}</div>
        </div>
        <Avatar initials="RK" size="sm" />
      </div>

      <div className="space-y-3 px-4 pb-3 pt-1">
        {/* KPI chips */}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-2xl border border-line bg-white p-3 shadow-sm">
            <div className="text-[8.5px] font-bold uppercase tracking-[0.12em] text-faint">Collected today</div>
            <CountUp to={18250} prefix="₹" className="mt-1 block text-[19px] font-extrabold tracking-tight text-ink" />
            <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-up-soft px-1.5 py-0.5 text-[8.5px] font-bold text-up">
              <TrendingUp size={9} /> 6 payments
            </span>
          </div>
          <div className="rounded-2xl border border-line bg-white p-3 shadow-sm">
            <div className="text-[8.5px] font-bold uppercase tracking-[0.12em] text-faint">Check-ins today</div>
            <CountUp to={47} className="mt-1 block text-[19px] font-extrabold tracking-tight text-ink" />
            <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-peach px-1.5 py-0.5 text-[8.5px] font-bold text-flame-deep">
              <span className="h-1.5 w-1.5 animate-soft-ping rounded-full bg-flame" /> live now
            </span>
          </div>
        </div>

        {/* ring */}
        <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-3.5 shadow-sm">
          <AttendanceRing value={82} size={92} label="this week" />
          <div className="min-w-0">
            <div className="text-[12px] font-extrabold text-ink">Attendance</div>
            <p className="mt-1 text-[10px] leading-relaxed text-dim">
              82% of active members trained this week
            </p>
            <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-up-soft px-1.5 py-0.5 text-[8.5px] font-bold text-up">
              <TrendingUp size={9} /> +12% vs last week
            </span>
          </div>
        </div>

        {/* live feed */}
        <div>
          <div className="flex items-center justify-between px-1 pb-1.5">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">Live check-ins</span>
            <span className="flex items-center gap-1 text-[8.5px] font-bold text-up">
              <span className="h-1.5 w-1.5 animate-soft-ping rounded-full bg-up" /> QR gate
            </span>
          </div>
          <CheckinFeed />
        </div>
      </div>
      <div className="mt-auto">
        <BottomNav />
      </div>
    </div>
  );
}

/* ================= floating cards (hero) ================= */

function FloatShell({ children, className }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-2xl border border-line bg-white/95 p-3 pr-4 shadow-[var(--shadow-pop)] backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}

export function FloatPayment({ className }) {
  return (
    <FloatShell className={className}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-up-soft text-up">
        <Check size={16} strokeWidth={3.5} />
      </span>
      <span>
        <span className="block text-[12px] font-extrabold text-ink">₹4,500 received</span>
        <span className="block text-[10px] font-medium text-faint">Ravi K. · Quarterly · UPI</span>
      </span>
      <span className="ml-1 font-mono text-[8.5px] font-semibold text-faint">now</span>
    </FloatShell>
  );
}

export function FloatWhatsApp({ className }) {
  return (
    <FloatShell className={className}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#128C7E]">
        <MessageCircle size={16} />
      </span>
      <span>
        <span className="block text-[12px] font-extrabold text-ink">Renewal reminder sent</span>
        <span className="block text-[10px] font-medium text-faint">Suresh · expires in 2 days · auto</span>
      </span>
      <CheckCheck size={15} className="wa-ticks ml-1" />
    </FloatShell>
  );
}

export function FloatCheckin({ className }) {
  return (
    <FloatShell className={className}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-peach text-flame">
        <QrCode size={16} />
      </span>
      <span>
        <span className="block text-[12px] font-extrabold text-ink">QR check-in · 07:42</span>
        <span className="block text-[10px] font-medium text-faint">Priya S. · Annual member</span>
      </span>
    </FloatShell>
  );
}

/* ================= WhatsApp automation thread ================= */

export function WhatsAppThread({ className }) {
  return (
    <div className={cn("rounded-2xl border border-line bg-[#EFEAE2] p-3", className)}>
      <div className="flex items-center gap-2 border-b border-ink/5 pb-2">
        <AppIcon size={4.5} />
        <div className="min-w-0">
          <div className="text-[9.5px] font-extrabold text-ink">{DEMO.gym}</div>
          <div className="text-[7.5px] font-medium text-faint">business account · online</div>
        </div>
        <Phone size={11} className="ml-auto text-faint" />
      </div>
      <div className="relative space-y-2 pt-2.5" style={{ minHeight: 118 }}>
        {/* outgoing reminder */}
        <div className="wa-bubble-a ml-auto max-w-[92%] rounded-xl rounded-tr-sm bg-[#D9FDD3] px-3 py-2 shadow-sm sm:max-w-[86%]">
          <p className="text-[10px] leading-snug text-ink-soft">
            Hi Suresh! Your <b>{DEMO.gym}</b> membership expires in <b>2 days</b>. Renew instantly on UPI — tap to pay.
          </p>
          <div className="mt-1 flex items-center justify-end gap-1">
            <span className="font-mono text-[7.5px] font-medium text-dim">18:04 · auto</span>
            <CheckCheck size={11} className="wa-ticks" />
          </div>
        </div>
        {/* member reply */}
        <div className="wa-bubble-b max-w-[78%] rounded-xl rounded-tl-sm bg-white px-3 py-2 shadow-sm sm:max-w-[70%]">
          <p className="text-[10px] leading-snug text-ink-soft">
            Renewed — paid ₹4,500 via UPI
          </p>
          <div className="mt-1 flex items-center justify-end">
            <span className="font-mono text-[7.5px] font-medium text-dim">18:21</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= owner: renewals screen ================= */

export function RenewalsScreen() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex items-center justify-between bg-white px-5 pb-2">
        <div className="text-[15px] font-extrabold tracking-tight text-ink">Renewals</div>
        <span className="rounded-full bg-peach px-2 py-0.5 text-[8.5px] font-bold text-flame-deep">8 expiring</span>
      </div>
      <div className="space-y-3 px-4 pb-3 pt-1">
        <div className="flex gap-1.5">
          {["Expiring", "Expired", "All"].map((f, i) => (
            <span key={f} className={cn("rounded-full border px-2.5 py-1 text-[9px] font-bold", i === 0 ? "border-flame bg-flame text-white" : "border-line bg-white text-dim")}>
              {f}
            </span>
          ))}
        </div>
        <div className="space-y-1.5">
          {DEMO.renewals.map((r) => (
            <div key={r.name} className="flex items-center gap-2.5 rounded-xl border border-line px-3 py-2">
              <Avatar initials={r.name.split(" ").map((w) => w[0]).join("")} size="sm" tone="ink" />
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-bold text-ink">{r.name}</div>
                <div className="text-[8.5px] font-medium text-faint">Quarterly plan</div>
              </div>
              <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[8px] font-bold text-amber-600">{r.left} left</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366]/15 text-[#128C7e]">
                <MessageCircle size={11} />
              </span>
            </div>
          ))}
        </div>
        <div>
          <div className="px-1 pb-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">
            Sent automatically
          </div>
          <WhatsAppThread />
        </div>
      </div>
      <div className="mt-auto">
        <BottomNav />
      </div>
    </div>
  );
}

/* ================= member app screen ================= */

function StreakDots() {
  return (
    <div className="flex items-center gap-1.5">
      {[1, 1, 1, 1, 1, 0, 0].map((on, i) => (
        <span
          key={i}
          className={cn(
            "h-4 w-4 rounded-full border-2",
            i === 5
              ? "border-flame bg-peach"
              : on
                ? "border-up bg-up"
                : "border-line bg-white"
          )}
        />
      ))}
      <span className="ml-1 text-[8.5px] font-bold text-dim">5-day streak</span>
    </div>
  );
}

export function MemberAppScreen() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex items-center justify-between bg-white px-5 pb-2">
        <div className="flex items-center gap-2.5">
          <Avatar initials="SR" size="sm" tone="ink" />
          <div>
            <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-faint">Member</div>
            <div className="text-[13px] font-extrabold tracking-tight text-ink">Suresh R.</div>
          </div>
        </div>
        <Bell size={14} className="text-faint" />
      </div>

      <div className="space-y-3 px-4 pb-3 pt-1">
        {/* validity */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-flame to-flame-soft p-4 text-white shadow-[var(--shadow-flame)]">
          <div className="bg-grid-light absolute inset-0 opacity-30" aria-hidden />
          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/85">Quarterly plan</span>
              <QrCode size={14} className="text-white/90" />
            </div>
            <div className="mt-2 text-[21px] font-extrabold tracking-tight">24 days left</div>
            <div className="mt-1 text-[10px] font-medium text-white/85">Valid till 24 May · {DEMO.gym}</div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/25">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "72%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="h-full rounded-full bg-white"
              />
            </div>
          </div>
        </div>

        {/* workout */}
        <div className="rounded-2xl border border-line bg-white p-3.5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[11px] font-extrabold text-ink">
              <Dumbbell size={12} className="text-flame" /> Today — Push day
            </span>
            <span className="text-[8.5px] font-bold text-faint">3 of 5 done</span>
          </div>
          <div className="mt-2.5 space-y-1.5">
            {[
              { n: "Bench press", d: "4 × 12", done: true },
              { n: "Incline dumbbell", d: "3 × 10", done: true },
              { n: "Overhead press", d: "4 × 8", done: true },
            ].map((w, i) => (
              <div key={w.n} className="feed-row flex items-center justify-between rounded-lg border border-line px-2.5 py-1.5" style={{ animationDelay: `${i * 2.2}s` }}>
                <span className="text-[10px] font-bold text-ink-soft">
                  {w.n} <span className="font-medium text-faint">· {w.d}</span>
                </span>
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-up text-white">
                  <Check size={9} strokeWidth={4} />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* diet + streak */}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-2xl border border-line bg-white p-3 shadow-sm">
            <div className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-ink">Diet — lunch</div>
            <div className="mt-1.5 text-[10px] font-medium leading-relaxed text-dim">
              Grilled chicken
              <br />
              Rice + salad
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-white p-3 shadow-sm">
            <div className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-ink">Attendance</div>
            <div className="mt-2">
              <StreakDots />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <BottomNav member />
      </div>
    </div>
  );
}

/* ================= before / after panels ================= */

function Scribble({ className }) {
  return (
    <svg viewBox="0 0 120 10" className={className} aria-hidden>
      <path d="M2 6c8-4 12 4 20 0s12 4 20 0 12 4 20 0 12 4 20 0 12 4 20 0 12 3 20 1 10 2 18 0" fill="none" stroke="#B8B7B1" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ChaosPanel() {
  return (
    <div className="relative h-full min-h-[380px] overflow-hidden rounded-3xl border border-line bg-[#F4F3EF] p-5">
      {/* register */}
      <div className="absolute left-6 top-6 w-[62%] -rotate-3 rounded-lg border border-line bg-white p-4 shadow-[var(--shadow-card)]">
        <div className="font-mono text-[9px] font-bold uppercase tracking-widest text-faint">Attendance · March</div>
        <div className="mt-3 space-y-2.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between gap-3">
              <Scribble className="h-2.5 w-2/3" />
              <span className={cn("font-mono text-[9px] font-bold", i === 2 ? "text-down" : "text-faint")}>{i === 2 ? "✗" : "✓"}</span>
            </div>
          ))}
        </div>
        <div className="absolute -top-2 left-8 h-4 w-16 rotate-[-6deg] bg-[#E8E2D0]/80 shadow-sm" aria-hidden />
      </div>
      {/* sticky */}
      <div className="absolute right-5 top-10 w-[38%] rotate-2 rounded-md bg-[#FFF3C4] p-3.5 shadow-[var(--shadow-card)]">
        <div className="serif-it text-[14px] leading-tight text-[#6B5B21]">Call Ravi — fees due… again</div>
        <div className="absolute -top-2 right-4 h-4 w-12 rotate-6 bg-[#E8E2D0]/70" aria-hidden />
      </div>
      {/* red alert */}
      <div className="absolute bottom-24 left-8 w-[52%] -rotate-2 rounded-lg border border-down/20 bg-white p-3.5 shadow-[var(--shadow-card)]">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-down/10 text-down">
            <Bell size={10} />
          </span>
          <span className="text-[11px] font-bold text-down">2 renewals missed this week</span>
        </div>
        <Scribble className="mt-2 h-2.5 w-full opacity-70" />
      </div>
      {/* notebook */}
      <div className="absolute bottom-6 right-8 w-[40%] rotate-3 rounded-lg border border-line bg-white p-3 shadow-[var(--shadow-card)]">
        <div className="font-mono text-[9px] font-bold uppercase tracking-widest text-faint">March accounts</div>
        <div className="serif-it mt-1.5 text-[15px] text-faint">₹?? + cash + ?? =</div>
      </div>
      {/* lost record */}
      <div className="absolute left-[46%] top-[52%] w-[34%] rotate-1 rounded-md border border-dashed border-faint/50 bg-white/80 p-3 shadow-sm">
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-faint">
          <Search size={10} /> member file — where?
        </div>
      </div>
    </div>
  );
}

export function ControlPanel() {
  return (
    <div className="relative h-full min-h-[380px] overflow-hidden rounded-3xl border border-line bg-white p-5 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-2.5 border-b border-line pb-3.5">
        <AppIcon size={5} />
        <span className="text-[12px] font-extrabold tracking-tight text-ink">{DEMO.gym}</span>
        <span className="ml-auto flex items-center gap-1 rounded-full bg-up-soft px-2 py-0.5 text-[8.5px] font-bold text-up">
          <span className="h-1.5 w-1.5 animate-soft-ping rounded-full bg-up" /> syncing
        </span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { l: "Today", v: <CountUp to={18250} prefix="₹" className="text-[15px] font-extrabold tracking-tight text-ink" /> },
          { l: "Check-ins", v: <CountUp to={47} className="text-[15px] font-extrabold tracking-tight text-ink" /> },
          { l: "Dues", v: <CountUp to={7250} prefix="₹" className="text-[15px] font-extrabold tracking-tight text-flame" /> },
        ].map((k) => (
          <div key={k.l} className="rounded-xl border border-line bg-mist/60 p-2.5 text-center">
            {k.v}
            <div className="mt-0.5 text-[8px] font-bold uppercase tracking-wider text-faint">{k.l}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-4">
        <AttendanceRing value={82} size={110} label="attendance" />
        <div className="flex-1 space-y-1.5">
          {[
            { t: "WhatsApp reminders — 8 auto-sent", icon: <MessageCircle size={10} className="text-[#128C7e]" /> },
            { t: "GST invoices — 6 generated", icon: <Check size={10} strokeWidth={3.5} className="text-up" /> },
            { t: "Renewals — 12 collected this week", icon: <TrendingUp size={10} className="text-up" /> },
          ].map((r, i) => (
            <div key={r.t} className="feed-row flex items-center gap-2 rounded-lg border border-line px-2.5 py-2 text-[9.5px] font-bold text-dim" style={{ animationDelay: `${i * 1.6}s` }}>
              {r.icon}
              {r.t}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-line bg-mist/50 p-2.5">
        <CheckinFeed rows={DEMO.checkins.slice(0, 2)} />
      </div>
    </div>
  );
}

/* ================= feature-card artwork ================= */

function ArtFrame({ children, className }) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl border border-line bg-mist/70 p-3 sm:rounded-2xl sm:p-4", className)}>
      {children}
    </div>
  );
}

export function ArtAttendance() {
  return (
    <ArtFrame className="p-3 md:p-4">
      <div className="mb-2.5 flex items-center gap-2">
        <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-white text-flame shadow-sm">
          <QrCode size={14} />
          <span className="qr-sweep absolute left-1 right-1 h-[2px] rounded-full bg-flame/70 blur-[1px]" aria-hidden />
        </span>
        <span className="flex items-center gap-1.5 text-[10px] font-bold text-up">
          <span className="h-1.5 w-1.5 animate-soft-ping rounded-full bg-up" /> QR check-in live
        </span>
        <span className="ml-auto hidden md:block">
          <AttendanceRing value={82} size={52} />
        </span>
      </div>
      <CheckinFeed rows={DEMO.checkins.slice(0, 3)} />
    </ArtFrame>
  );
}

export function ArtPayments() {
  return (
    <ArtFrame>
      <div className="space-y-1.5">
        {[
          { n: "Ravi K.", p: "Quarterly", amt: "₹4,500" },
          { n: "Meena D.", p: "Monthly + PT", amt: "₹2,200" },
        ].map((r) => (
          <div key={r.n} className="flex items-center gap-2 rounded-xl border border-line bg-white px-2.5 py-2 shadow-sm">
            <Avatar initials={r.n.split(" ").map((w) => w[0]).join("")} size="sm" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <span className="truncate text-[11px] font-bold text-ink">{r.n}</span>
                <span className="shrink-0 text-[11px] font-extrabold tracking-tight text-ink">{r.amt}</span>
              </div>
              <div className="flex items-center justify-between gap-1">
                <span className="text-[8.5px] font-medium text-faint">{r.p}</span>
                <span className="flex shrink-0 items-center gap-0.5 text-[8px] font-bold text-up">
                  <Check size={7} strokeWidth={4} /> UPI
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="flex items-start gap-2 rounded-xl border border-flame/25 bg-peach px-2.5 py-2">
          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-flame/15 text-flame-deep">
            <Bell size={9} />
          </span>
          <span className="text-[9px] font-bold leading-snug text-flame-deep">3 dues pending · ₹7,250</span>
        </div>
      </div>
    </ArtFrame>
  );
}

export function ArtWhatsApp() {
  return <WhatsAppThread />;
}

export function ArtMembers() {
  return (
    <ArtFrame>
      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-line bg-white px-2.5 py-2 shadow-sm">
        <Search size={11} className="shrink-0 text-faint" />
        <span className="min-w-0 flex-1 truncate text-[10px] font-medium text-faint">Search name, phone…</span>
        <span className="shrink-0 font-mono text-[9px] font-bold text-flame">212</span>
      </div>
      <div className="mt-2 space-y-1.5">
        {[
          { n: "Amit Verma", s: "Active", tone: "up" },
          { n: "Pooja Nair", s: "Expiring", tone: "warn" },
        ].map((r) => (
          <div key={r.n} className="flex items-center gap-2 rounded-xl border border-line bg-white px-2.5 py-2 shadow-sm">
            <Avatar initials={r.n.split(" ").map((w) => w[0]).join("")} size="sm" tone="ink" />
            <div className="min-w-0 flex-1 truncate text-[11px] font-bold text-ink">{r.n}</div>
            <span className={cn("shrink-0 rounded-full px-1.5 py-0.5 text-[8px] font-bold", r.tone === "up" ? "bg-up-soft text-up" : "bg-amber-50 text-amber-600")}>
              {r.s}
            </span>
          </div>
        ))}
      </div>
    </ArtFrame>
  );
}

export function ArtReports() {
  const bars = [38, 55, 44, 66, 58, 84];
  const months = ["O", "N", "D", "J", "F", "M"];
  return (
    <ArtFrame>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">Revenue</span>
        <span className="flex shrink-0 items-center gap-1 rounded-full bg-up-soft px-1.5 py-0.5 text-[8px] font-bold text-up">
          <TrendingUp size={8} /> up
        </span>
      </div>
      <div className="mt-3 flex h-24 items-end gap-2">
        {bars.map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: `${h}%` }}
              className={cn("w-full origin-bottom rounded-t-md", i === bars.length - 1 ? "bg-flame" : "bg-peach-deep")}
            />
            <span className="font-mono text-[8px] font-semibold text-faint">{months[i]}</span>
          </div>
        ))}
      </div>
      <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-2">
        <span className="text-[9px] font-medium text-faint">Downloadable monthly reports</span>
        <CountUp to={18250} prefix="₹" className="text-[12px] font-extrabold text-ink" />
      </div>
    </ArtFrame>
  );
}

export function ArtInvoice() {
  return (
    <div className="relative rounded-xl border border-line bg-white p-3.5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[8.5px] font-bold uppercase tracking-widest text-faint">Tax invoice · GST</span>
        <span className="rotate-6 rounded border-2 border-up/60 px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase text-up">Paid</span>
      </div>
      <div className="mt-2.5 space-y-1.5">
        <div className="flex justify-between text-[10px] font-medium text-dim"><span>Quarterly membership</span><span className="font-bold text-ink">₹4,237</span></div>
        <div className="flex justify-between text-[10px] font-medium text-dim"><span>GST 18%</span><span className="font-bold text-ink">₹263</span></div>
        <div className="flex justify-between border-t border-dashed border-line pt-1.5 text-[11px] font-extrabold text-ink"><span>Total</span><span>₹4,500</span></div>
      </div>
      <div className="mt-2 flex items-center gap-1 text-[8.5px] font-bold text-faint">
        <AppIcon size={3} /> branded for {DEMO.gym}
      </div>
    </div>
  );
}

export function ArtPlans() {
  return (
    <div className="space-y-1.5">
      {[
        { n: "Monthly", p: "₹1,500/mo", on: false },
        { n: "Quarterly", p: "₹4,000 · save 11%", on: false },
        { n: "Annual", p: "₹12,000 · best", on: true },
      ].map((pl) => (
        <div key={pl.n} className={cn("flex items-center justify-between rounded-xl border px-3 py-2 shadow-sm", pl.on ? "border-flame bg-peach" : "border-line bg-white")}>
          <span className={cn("text-[10.5px] font-bold", pl.on ? "text-flame-deep" : "text-ink")}>{pl.n}</span>
          <span className={cn("font-mono text-[9px] font-semibold", pl.on ? "text-flame-deep" : "text-dim")}>{pl.p}</span>
        </div>
      ))}
    </div>
  );
}

export function ArtExpense() {
  return (
    <div className="rounded-xl border border-line bg-white p-3.5 shadow-sm">
      <div className="flex justify-between font-mono text-[8.5px] font-bold uppercase tracking-wider text-faint">
        <span>March P&L</span><span className="text-up">net +₹42,300</span>
      </div>
      <div className="mt-2.5 space-y-2">
        {[
          { l: "Income", w: "88%", c: "bg-up" },
          { l: "Rent + salaries", w: "34%", c: "bg-flame" },
          { l: "Equipment", w: "18%", c: "bg-peach-deep border border-peach-deep" },
        ].map((r) => (
          <div key={r.l}>
            <div className="mb-1 flex justify-between text-[9px] font-bold text-dim"><span>{r.l}</span></div>
            <div className="h-2 overflow-hidden rounded-full bg-mist">
              <motion.div initial={{ width: 0 }} whileInView={{ width: r.w }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className={cn("h-full rounded-full", r.c)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ArtAccess() {
  return (
    <div className="space-y-2">
      <div className="flex rounded-xl border border-line bg-mist p-1">
        {["Owner", "Receptionist"].map((r, i) => (
          <span key={r} className={cn("flex-1 rounded-lg px-2 py-1.5 text-center text-[10px] font-extrabold transition-all duration-300", i === 1 ? "bg-white text-ink shadow-sm" : "text-faint")}>
            {r}
          </span>
        ))}
      </div>
      <div className="space-y-1.5">
        {[
          { l: "Financial reports", ok: false },
          { l: "Plans & settings", ok: false },
          { l: "Check-ins & payments", ok: true }
        ].map((r) => (
          <div key={r.l} className="flex items-center justify-between rounded-lg border border-line bg-white px-3 py-1.5 text-[10px] font-bold text-ink-soft shadow-sm">
            {r.l}
            {r.ok ? (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-up text-white"><Check size={9} strokeWidth={4} /></span>
            ) : (
              <Lock size={11} className="text-faint" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ArtRazorpay() {
  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        {["UPI", "Cards", "Net banking", "Wallets"].map((c) => (
          <span key={c} className="rounded-full border border-line bg-white px-2.5 py-1 text-[9.5px] font-bold text-ink-soft shadow-sm">{c}</span>
        ))}
      </div>
      <div className="mt-2.5 flex items-center gap-2 rounded-xl border border-line bg-white px-3 py-2 shadow-sm">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#2B49E0]/10 text-[#2B49E0]">
          <Lock size={11} />
        </span>
        <span className="text-[9.5px] font-bold text-ink-soft">
          Online payments · auto-recorded
          <span className="block text-[8px] font-medium text-faint">secured by Razorpay</span>
        </span>
        <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-up text-white"><Check size={9} strokeWidth={4} /></span>
      </div>
    </div>
  );
}

export function ArtDirectory() {
  return (
    <div className="space-y-1.5">
      {[
        { n: "Karan Patel", p: "+91 98••• ••410" },
        { n: "Pooja Nair", p: "+91 90••• ••233" },
      ].map((c) => (
        <div key={c.n} className="flex items-center gap-2.5 rounded-xl border border-line bg-white px-3 py-2 shadow-sm">
          <Avatar initials={c.n.split(" ").map((w) => w[0]).join("")} size="sm" tone="ink" />
          <div className="min-w-0 flex-1">
            <div className="text-[10.5px] font-bold text-ink">{c.n}</div>
            <div className="font-mono text-[8.5px] font-medium text-faint">{c.p}</div>
          </div>
          <Phone size={12} className="text-flame" />
          <MessageCircle size={12} className="text-[#128C7e]" />
          <ChevronRight size={12} className="text-faint" />
        </div>
      ))}
    </div>
  );
}

export function ArtNotice() {
  return (
    <div className="relative rounded-xl border border-line bg-white p-3.5 shadow-sm">
      <span className="absolute -top-1.5 right-6 h-3 w-3 rounded-full border-2 border-white bg-flame shadow" aria-hidden />
      <div className="flex items-center gap-2">
        <Megaphone size={12} className="text-flame" />
        <span className="font-mono text-[8.5px] font-bold uppercase tracking-widest text-faint">Notice board</span>
      </div>
      <p className="mt-2 text-[11px] font-bold leading-snug text-ink">New Sunday batch — 7 AM functional training</p>
      <p className="mt-1 text-[9px] font-medium text-faint">Visible to every member in the app</p>
    </div>
  );
}
