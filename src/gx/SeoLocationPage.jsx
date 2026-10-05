import { useEffect } from "react";
import { ArrowLeft, Check, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import { LINKS } from "./data";
import { PrimaryCta, SectionHead, StoreBadges } from "./primitives";

function Meta({ title, description }) {
  useEffect(() => {
    document.title = title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.href);
  }, [title, description]);

  return null;
}

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-3 text-[15px] leading-7 text-dim">
      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-up-soft text-up">
        <Check size={11} strokeWidth={3.5} />
      </span>
      <span>{children}</span>
    </li>
  );
}

function Section({ title, body, bullets }) {
  return (
    <section className="rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
      <h2 className="text-[24px] font-extrabold tracking-tight text-ink sm:text-[28px]">{title}</h2>
      {body?.map((p) => (
        <p key={p} className="mt-4 text-[15px] leading-8 text-dim">
          {p}
        </p>
      ))}
      {bullets && (
        <ul className="mt-5 space-y-3">
          {bullets.map((b) => (
            <Bullet key={b}>{b}</Bullet>
          ))}
        </ul>
      )}
    </section>
  );
}

export default function SeoLocationPage({ page }) {
  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <Meta title={page.metaTitle} description={page.metaDescription} />
      <Nav />

      <main className="pt-[90px] pb-24 sm:pt-[96px] sm:pb-32">
        <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">
          <Link
            to="/"
            className="group mb-8 inline-flex items-center gap-2 text-[14px] font-semibold text-dim transition-colors hover:text-flame"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>

          <div className="rounded-[32px] border border-line bg-white px-6 py-10 shadow-[var(--shadow-card)] sm:px-10 sm:py-14">
            <SectionHead
              eyebrow={`City page · ${page.city}`}
              title={
                <>
                  {page.heroTitle}
                </>
              }
              sub={page.heroIntro}
              align="left"
            />

            <div className="mt-8 flex flex-wrap items-center gap-2.5 text-[13px] font-semibold text-dim">
              {[
                `gym management software in ${page.city.toLowerCase()}`,
                `gym management app in ${page.city.toLowerCase()}`,
                `gym management system in ${page.city.toLowerCase()}`,
              ].map((k) => (
                <span key={k} className="rounded-full border border-line bg-mist px-3 py-1.5">
                  {k}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4 rounded-3xl border border-line bg-mist/60 p-5 sm:grid-cols-2 lg:grid-cols-5">
              {page.highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-line bg-white p-4 text-[13px] font-semibold leading-6 text-ink-soft shadow-sm">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <PrimaryCta href={LINKS.register}>Start 7 days free</PrimaryCta>
              <StoreBadges small />
            </div>
          </div>

          <div className="mt-10 space-y-6">
            {page.sections.map((section) => (
              <Section
                key={section.title}
                title={section.title}
                body={section.body}
                bullets={section.bullets}
              />
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-line bg-mist px-6 py-8 sm:px-8">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-peach text-flame">
                <MapPin size={18} />
              </span>
              <div>
                <h3 className="text-[20px] font-extrabold tracking-tight text-ink">
                  Looking for a gym management app in {page.city}?
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-dim">
                  GymXBook helps you handle member management, attendance, billing,
                  payments, renewal reminders, workout plans, diet plans, reports,
                  and staff access from one place. Start with the free trial and
                  see how it fits your gym workflow.
                </p>
                <div className="mt-5">
                  <PrimaryCta href={LINKS.register}>Create your account</PrimaryCta>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
