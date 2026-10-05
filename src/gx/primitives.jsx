import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import { LINKS } from "./data";
import { cn } from "../utils/cn";

/* ---------------- Reveal on scroll ---------------- */

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Section scaffold ---------------- */

export function SectionHead({
  eyebrow,
  title,
  sub,
  align = "center",
  tone = "light",
}) {
  return (
    <Reveal
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left mx-0"
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em]",
          tone === "light"
            ? "border-peach-deep bg-peach text-flame-deep"
            : "border-white/20 bg-white/10 text-white"
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-flame" />
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-[3.4rem]",
          tone === "light" ? "text-ink" : "text-white"
        )}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            tone === "light" ? "text-dim" : "text-white/75"
          )}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}

/* ---------------- Count up ---------------- */

export function CountUp({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.8,
  className,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current)
          ref.current.textContent =
            prefix +
            v.toLocaleString("en-IN", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            }) +
            suffix;
      },
    });
    return () => c.stop();
  }, [inView, to, prefix, suffix, decimals, duration]);
  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

/* ---------------- Buttons ---------------- */

export function PrimaryCta({
  href = LINKS.register,
  children,
  className,
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-flame px-7 py-4 text-[15px] font-bold text-white shadow-[var(--shadow-flame)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-flame-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame",
        className
      )}
    >
      {children}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
        <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

/* ---------------- Store badges ---------------- */

export function GooglePlayBadge({ className, small }) {
  return (
    <a
      href={LINKS.playStore}
      target="_blank"
      rel="noreferrer"
      aria-label="Get GymXBook on Google Play"
      className={cn(
        "group inline-flex cursor-pointer items-center gap-3 rounded-xl border border-ink/90 bg-ink text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-pop)]",
        small ? "px-4 py-2.5" : "px-5 py-3",
        className
      )}
    >
      <svg viewBox="0 0 24 24" className={small ? "h-5 w-5" : "h-6 w-6"} aria-hidden>
        <path fill="#EA4335" d="M4.5 3.3v17.4l9.7-8.7L4.5 3.3z" opacity="0" />
        <path fill="#00D2FF" d="m4 3 10.2 9L4 21c-.4.1-.6-.2-.6-.6V3.6C3.4 3.2 3.7 2.9 4 3z" />
        <path fill="#FFCE00" d="m17.4 8.9-3.2 3.1L4 3c.3-.1.7-.1 1 .1l12.4 5.8z" />
        <path fill="#FF3A44" d="M4 21l10.2-9 3.2 3.1L5 20.9c-.3.2-.7.2-1 .1z" />
        <path fill="#00F076" d="m17.4 8.9 3.3 1.5c1 .5 1 1.7 0 2.2l-3.3 1.5-3.4-3.1 3.4-3.1z" />
      </svg>
      <span className="text-left leading-none">
        <span className={cn("block font-medium uppercase tracking-wider text-white/70", small ? "text-[8px]" : "text-[9px]")}>
          Get it on
        </span>
        <span className={cn("mt-1 block font-semibold tracking-tight", small ? "text-[13px]" : "text-[15px]")}>
          Google Play
        </span>
      </span>
    </a>
  );
}

export function AppStoreBadge({ className, small }) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-3 rounded-xl border border-dashed border-faint/60 bg-mist text-ink-soft",
        small ? "px-4 py-2.5" : "px-5 py-3",
        className
      )}
      aria-label="App Store — coming soon"
      title="iOS app — coming soon"
    >
      <svg viewBox="0 0 24 24" className={cn("text-ink-soft", small ? "h-5 w-5" : "h-6 w-6")} fill="currentColor" aria-hidden>
        <path d="M16.36 12.94c0-2.3 1.88-3.4 1.96-3.45-1.06-1.56-2.72-1.77-3.31-1.79-1.4-.14-2.74.83-3.46.83-.71 0-1.82-.81-3-.79-1.54.02-2.96.9-3.75 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.11 1.67 2.35 2.86 2.3 1.15-.04 1.58-.74 2.97-.74 1.39 0 1.77.74 2.99.72 1.24-.02 2.02-1.12 2.78-2.24.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.41-.93-2.44-3.7zM14.1 5.9c.64-.77 1.07-1.85 1.07-2.92 0-.15-.02-.3-.05-.42-1.02.04-2.25.68-2.98 1.54-.65.75-1.22 1.94-1.07 3.08 1.14.09 2.3-.58 3.03-1.28z" />
      </svg>
      <span className="text-left leading-none">
        <span className={cn("block font-medium uppercase tracking-wider text-faint", small ? "text-[8px]" : "text-[9px]")}>
          Download on the
        </span>
        <span className={cn("mt-1 block font-semibold tracking-tight", small ? "text-[13px]" : "text-[15px]")}>
          App Store
        </span>
      </span>
      <span className="absolute -right-2 -top-2 rounded-full border border-peach-deep bg-peach px-2 py-0.5 font-mono text-[8.5px] font-bold uppercase tracking-wider text-flame-deep shadow-sm">
        Soon
      </span>
    </div>
  );
}

export function StoreBadges({ className, small }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <GooglePlayBadge small={small} />
      <AppStoreBadge small={small} />
    </div>
  );
}

/* ---------------- Phone frame ---------------- */

export function PhoneFrame({
  children,
  className,
  glow = true,
  screenshot = false,
}) {
  if (screenshot) {
    return (
      <div className={cn("relative", className)}>
        {glow && (
          <div className="glow-flame glow-pulse absolute -inset-10 -z-10 rounded-full" aria-hidden />
        )}
        <div className="relative w-[292px] sm:w-[308px]">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className={cn("relative", className)}>
      {glow && (
        <div className="glow-flame glow-pulse absolute -inset-10 -z-10 rounded-full" aria-hidden />
      )}
      <div className="relative w-[292px] rounded-[44px] border border-ink/10 bg-white p-[10px] shadow-[var(--shadow-phone)] sm:w-[308px]">
        <div className="relative overflow-hidden rounded-[35px] border border-line bg-mist">
          {/* status bar */}
          <div className="relative z-20 flex items-center justify-between bg-white px-5 pb-2 pt-2.5">
            <span className="font-mono text-[10px] font-semibold text-ink">9:41</span>
            <div className="absolute left-1/2 top-2 h-[18px] w-[74px] -translate-x-1/2 rounded-full bg-ink" aria-hidden />
            <span className="flex items-center gap-1" aria-hidden>
              <svg width="13" height="9" viewBox="0 0 13 9"><rect x="0" y="5" width="2.4" height="4" rx="0.6" fill="#17181c" /><rect x="3.4" y="3.4" width="2.4" height="5.6" rx="0.6" fill="#17181c" /><rect x="6.8" y="1.7" width="2.4" height="7.3" rx="0.6" fill="#17181c" /><rect x="10.2" y="0" width="2.4" height="9" rx="0.6" fill="#c9cac2" /></svg>
              <svg width="17" height="9" viewBox="0 0 17 9"><rect x="0" y="0.8" width="13.5" height="7.4" rx="2" fill="none" stroke="#c9cac2" /><rect x="1.8" y="2.4" width="8" height="4.2" rx="1" fill="#17181c" /><rect x="14.8" y="3" width="1.8" height="3" rx="0.9" fill="#c9cac2" /></svg>
            </span>
          </div>
          <div className="relative">{children}</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- misc ---------------- */

export function Avatar({ initials, tone = "flame", size = "md" }) {
  const tones = {
    flame: "bg-peach text-flame-deep border-peach-deep",
    ink: "bg-mist text-ink-soft border-line",
    up: "bg-up-soft text-up border-up/20",
  };
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border font-bold",
        tones[tone],
        size === "sm" ? "h-7 w-7 text-[9px]" : "h-9 w-9 text-[11px]"
      )}
    >
      {initials}
    </span>
  );
}

export function AppIcon({ className, size = 10 }) {
  return (
    <span
      className={cn("inline-flex items-center justify-center rounded-[22%] bg-flame text-white", className)}
      style={{ width: size * 4, height: size * 4 }}
      aria-hidden
    >
      <svg viewBox="0 0 32 32" style={{ width: size * 2.4, height: size * 2.4 }}>
        <rect x="4" y="12" width="4.5" height="8" rx="1" fill="white" />
        <rect x="23.5" y="12" width="4.5" height="8" rx="1" fill="white" />
        <rect x="9.8" y="14.6" width="12.4" height="2.8" rx="1.4" fill="white" />
      </svg>
    </span>
  );
}

export function Logo({ className }) {
  return (
    <a href="#top" className={cn("inline-flex cursor-pointer items-center", className)}>
      <span className="text-[22px] font-bold tracking-[-0.02em] text-ink" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Gym<span className="text-flame">X</span>Book
      </span>
    </a>
  );
}

export function BottomNav({ member = false }) {
  const items = member
    ? [
        { label: "Home", icon: <path d="M4 10.5 10 5l6 5.5V19a1 1 0 0 1-1 1h-3.5v-4.5h-3V20H5a1 1 0 0 1-1-1v-8.5z" /> },
        { label: "Workout", icon: <><path d="M6.5 7v6M3.5 8.5v3" /><path d="M13.5 7v6M16.5 8.5v3" /><path d="M6.5 10h7" /></> },
        { label: "Diet", icon: <><path d="M10 4c-3 1-5 3.5-5 6.5C5 14 7 16 10 16s5-2 5-5.5C15 7.5 13 5 10 4z" /><path d="M7.5 10.5c1.5-.5 3.5-2 4.5-4" /></> },
        { label: "Profile", icon: <><circle cx="10" cy="7" r="2.8" /><path d="M4 18c.8-3.2 3-4.8 6-4.8s5.2 1.6 6 4.8" /></> },
      ]
    : [
        { label: "Home", icon: <path d="M4 10.5 10 5l6 5.5V19a1 1 0 0 1-1 1h-3.5v-4.5h-3V20H5a1 1 0 0 1-1-1v-8.5z" /> },
        { label: "Members", icon: <><circle cx="7.5" cy="8" r="2.6" /><path d="M3 18.5c.5-3 2.4-4.5 4.5-4.5s4 1.5 4.5 4.5" /><circle cx="14.8" cy="9" r="2" /><path d="M13.4 14.2c2.4-.3 4.4 1.2 4.9 4" /></> },
        { label: "Plans", icon: <><rect x="3.5" y="5" width="13" height="11" rx="2" /><path d="M7 9h6M7 12h4" /></> },
        { label: "More", icon: <><circle cx="4.5" cy="10" r="1.3" /><circle cx="10" cy="10" r="1.3" /><circle cx="15.5" cy="10" r="1.3" /></> },
      ];
  return (
    <div className="relative z-10 flex items-center justify-between border-t border-line bg-white px-6 py-2.5">
      {items.slice(0, 2).map((i) => (
        <span key={i.label} className={cn("flex flex-col items-center gap-0.5", i.label === "Home" ? "text-flame" : "text-faint")}>
          <svg width="19" height="19" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{i.icon}</svg>
          <span className="text-[8px] font-semibold">{i.label}</span>
        </span>
      ))}
      <span className="-mt-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-flame text-white shadow-[0_10px_24px_-6px_rgba(255,90,31,0.6)]" aria-hidden>
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="5" y="5" width="4" height="4" rx="0.8" /><rect x="15" y="5" width="4" height="4" rx="0.8" /><rect x="5" y="15" width="4" height="4" rx="0.8" /><path d="M15 15h2v2h-2zM19 15h1M15 19h2M19 18v2" /></svg>
      </span>
      {items.slice(2).map((i) => (
        <span key={i.label} className="flex flex-col items-center gap-0.5 text-faint">
          <svg width="19" height="19" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{i.icon}</svg>
          <span className="text-[8px] font-semibold">{i.label}</span>
        </span>
      ))}
    </div>
  );
}
