import React from "react";
import { FOOTER_LINKS, NAV_LINKS } from "./data";
import { Logo, StoreBadges } from "./primitives";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1.1fr_1.1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-dim">
              Manage your entire gym from your phone. Members, attendance,
              payments, renewals, WhatsApp reminders, workout &amp; diet plans —
              one app, built for Indian gyms.
            </p>
            <StoreBadges small className="mt-6" />
          </div>

          <div>
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-faint">Product</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="cursor-pointer text-[13.5px] font-semibold text-dim transition-colors hover:text-flame">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-faint">Legal</h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="cursor-pointer text-[13.5px] font-semibold text-dim transition-colors hover:text-flame">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-faint">Support</h3>
            <ul className="mt-4 space-y-2.5 text-[13.5px] font-semibold text-dim">
              <li>WhatsApp support</li>
              <li>Email support</li>
              <li>Video-call onboarding</li>
              <li className="text-faint">We reply within a few hours</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-7 text-[12.5px] font-semibold text-faint">
          <span>© 2026 GymXBook. All rights reserved.</span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-flame" />
            Built for gyms across India
          </span>
        </div>
      </div>
    </footer>
  );
}
