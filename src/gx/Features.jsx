import { ArtAccess, ArtAttendance, ArtDirectory, ArtExpense, ArtInvoice, ArtMembers, ArtNotice, ArtPayments, ArtPlans, ArtRazorpay, ArtReports, ArtWhatsApp } from "./mockups";
import { AppIcon, Reveal, SectionHead } from "./primitives";
import { cn } from "../utils/cn";

function FeatureCard({
  title,
  body,
  art,
  className,
  delay = 0,
}) {
  return (
    <Reveal delay={delay} className={cn("group min-w-0", className)}>
      <div className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-pop)] sm:rounded-3xl sm:p-6">
        <div className="flex-1 min-w-0 overflow-hidden">{art}</div>
        <h3 className="mt-4 text-[16px] font-extrabold tracking-tight text-ink transition-colors duration-200 group-hover:text-flame sm:mt-5 sm:text-[17px]">
          {title}
        </h3>
        <p className="mt-1 text-[13px] leading-relaxed text-dim sm:mt-1.5 sm:text-[13.5px]">{body}</p>
      </div>
    </Reveal>
  );
}

function MiniCard({
  title,
  body,
  art,
  delay = 0,
}) {
  return (
    <Reveal delay={delay} className="group min-w-0">
      <div className="flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-line bg-white p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-pop)]">
        <h4 className="text-[14px] font-extrabold tracking-tight text-ink transition-colors duration-200 group-hover:text-flame">
          {title}
        </h4>
        <p className="mb-4 mt-1 text-[12px] leading-relaxed text-dim">{body}</p>
        <div className="mt-auto min-w-0">{art}</div>
      </div>
    </Reveal>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <SectionHead
          eyebrow="Features · 12 modules"
          title={
            <>
              Everything you need,{" "}
              <span className="serif-it font-normal text-flame">nothing you don&rsquo;t.</span>
            </>
          }
          sub="Purpose-built modules for gym management — each one visible at a glance, all inside one clean app."
        />

        {/* big bento */}
        <div className="mt-16 grid gap-5 md:grid-cols-12">
          <FeatureCard
            className="md:col-span-7"
            title="Attendance tracking"
            body="QR check-ins replace paper registers — live logs, daily reports, and monthly summaries, with zero manual entry."
            art={<ArtAttendance />}
          />
          <FeatureCard
            className="md:col-span-5"
            delay={0.08}
            title="Payment tracking"
            body="Cash, online and UPI recorded in one real-time ledger — with due alerts so nothing slips through the cracks."
            art={<ArtPayments />}
          />
          <FeatureCard
            className="md:col-span-4"
            title="Member management"
            body="Unlimited members with photos, plans, health details and complete history — searchable in a tap."
            art={<ArtMembers />}
          />
          <FeatureCard
            className="md:col-span-4"
            delay={0.08}
            title="Renewal reminders"
            body="WhatsApp reminders fire automatically before expiry — retention that runs itself while you train people."
            art={<ArtWhatsApp />}
          />
          <FeatureCard
            className="md:col-span-4"
            delay={0.16}
            title="Reports & analytics"
            body="Visual revenue, retention and attendance insights — downloadable monthly reports for smarter decisions."
            art={<ArtReports />}
          />
        </div>

        {/* remaining modules */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <MiniCard
            title="Billing & invoices"
            body="Professional GST-ready invoices on every payment and renewal."
            art={<ArtInvoice />}
          />
          <MiniCard
            title="Membership plans"
            body="Flexible monthly, quarterly and annual plans with custom pricing."
            delay={0.06}
            art={<ArtPlans />}
          />
          <MiniCard
            title="Expense management"
            body="Rent, salaries, equipment — see true monthly profit & loss."
            delay={0.12}
            art={<ArtExpense />}
          />
          <MiniCard
            title="Staff & trainer access"
            body="Role-based logins — your front desk sees only what it needs."
            delay={0.18}
            art={<ArtAccess />}
          />
          <MiniCard
            title="Razorpay integration"
            body="Members pay by UPI, cards or net banking — auto-recorded in-app."
            art={<ArtRazorpay />}
          />
          <MiniCard
            title="Contact directory"
            body="Every member one search away, with one-tap call and WhatsApp."
            delay={0.06}
            art={<ArtDirectory />}
          />
          <MiniCard
            title="Notice board"
            body="Announcements, batches and closures — visible to every member."
            delay={0.12}
            art={<ArtNotice />}
          />
          <MiniCard
            title="Owner + member apps"
            body="Workouts, diet plans and validity in every member's pocket."
            delay={0.18}
            art={
              <a href="#app" className="group/link flex cursor-pointer items-center justify-between rounded-xl border border-line bg-white px-3.5 py-3 shadow-sm transition-colors hover:border-flame/40">
                <span className="flex items-center gap-2.5">
                  <AppIcon size={4.5} />
                  <span className="text-[10.5px] font-bold text-ink">See the apps</span>
                </span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-flame transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:translate-y-0.5">
                  <path d="M3.5 13l9-9M5.5 4h7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            }
          />
        </div>
      </div>
    </section>
  );
}
