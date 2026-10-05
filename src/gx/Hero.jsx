import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { STATS } from "./data";
import {
  CountUp,
  PhoneFrame,
  PrimaryCta,
  Reveal,
  StoreBadges,
} from "./primitives";
import {
  FloatCheckin,
  FloatPayment,
  FloatWhatsApp,
} from "./mockups";

const EASE = [0.22, 1, 0.36, 1];

function HeroVisual() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 16 });
  const sy = useSpring(my, { stiffness: 60, damping: 16 });
  const px = useTransform(sx, [-0.5, 0.5], [-9, 9]);
  const py = useTransform(sy, [-0.5, 0.5], [-6, 6]);
  const fx = useTransform(sx, [-0.5, 0.5], [10, -10]);
  const fy = useTransform(sy, [-0.5, 0.5], [7, -7]);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative mx-auto flex w-full max-w-[520px] items-center justify-center"
    >
      {/* rings */}
      <svg viewBox="0 0 500 500" className="absolute inset-0 m-auto h-[118%] w-[118%] max-w-none" aria-hidden>
        <circle cx="250" cy="250" r="215" fill="none" stroke="#FFE4D4" strokeWidth="1.2" />
        <circle cx="250" cy="250" r="160" fill="none" stroke="#FFEBDD" strokeWidth="1.2" strokeDasharray="3 6" />
        <circle cx="250" cy="250" r="238" fill="none" stroke="#FFF3EA" strokeWidth="1" />
      </svg>

      {/* phone */}
      <motion.div style={{ x: px, y: py }} className="relative z-10 w-full">
        <div className="relative flex justify-center">
          <div className="glow-flame glow-pulse absolute -inset-10 -z-10 rounded-full" aria-hidden />
          <img
            src="https://i.ibb.co/Zzd7mHX4/image.png"
            alt="GymXBook app home screen — gym dashboard showing members, trainers, attendance, quick actions"
            className="block h-auto w-[110%] max-w-none sm:w-[90%] lg:h-[30rem] lg:w-auto"
            draggable={false}
          />
        </div>
      </motion.div>

      {/* floating cards */}
      <motion.div style={{ x: fx, y: fy }} className="absolute inset-0 z-20" aria-hidden>
        <FloatPayment className="animate-float absolute -right-1 top-[13%] sm:right-[2%]" />
        <FloatWhatsApp className="animate-float-slow absolute -left-2 bottom-[24%] sm:left-[1%] [animation-delay:1.2s]" />
        <FloatCheckin className="animate-float absolute -right-2 bottom-[6%] hidden md:flex [animation-delay:2.1s] sm:right-[9%]" />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-[80px]">
      <div className="bg-grid-light bg-grid-fade absolute inset-0" aria-hidden />
      <div className="glow-flame absolute inset-x-0 top-0 h-[720px]" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-6">
        {/* copy */}
        <div className="max-w-xl max-lg:mx-auto max-lg:text-center">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
            className="mt-6 text-[44px] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[4.35rem]"
          >
            Manage your entire gym{" "}
            <span className="serif-it font-normal tracking-normal text-flame">
              from your phone.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: EASE }}
            className="mt-6 text-[17px] leading-relaxed text-dim sm:text-lg"
          >
            Members, QR attendance, payments, renewals, WhatsApp reminders,
            workout &amp; diet plans — every part of your fitness business, in
            one beautifully simple app.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4 max-lg:justify-center"
          >
            <PrimaryCta>Start 7 days free</PrimaryCta>
            <a
              href="#how"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-line bg-white px-7 py-4 text-[15px] font-bold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[var(--shadow-card)]"
            >
              See how it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.36 }}
            className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[12.5px] font-semibold text-dim max-lg:justify-center"
          >
            {["No credit card required", "Setup in under 10 minutes", "Cancel anytime"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check size={13} strokeWidth={3.5} className="text-up" />
                {t}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.42, ease: EASE }}
          >
            <StoreBadges className="mt-8 max-lg:justify-center" />
          </motion.div>
        </div>

        {/* visual */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* stats strip */}
      <div className="relative mx-auto mt-6 w-full max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-[var(--shadow-card)] lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="group bg-white px-6 py-7 transition-colors duration-300 hover:bg-peach/50">
                <div className="text-[30px] font-extrabold tracking-[-0.02em] text-ink sm:text-[34px]">
                  <CountUp
                    to={s.value}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                    className="transition-colors duration-300 group-hover:text-flame"
                  />
                </div>
                <div className="mt-1 text-[12.5px] font-semibold text-dim">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
