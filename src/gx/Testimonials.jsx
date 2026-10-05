import { Star } from "lucide-react";
import { TESTIMONIALS } from "./data";
import { Avatar, Reveal, SectionHead } from "./primitives";

function Stars() {
  return (
    <span className="flex gap-0.5" aria-label="5 star rating">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={13} className="fill-flame text-flame" strokeWidth={1.5} />
      ))}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <SectionHead
          eyebrow="Social proof"
          title={
            <>
              Loved by{" "}
              <span className="serif-it font-normal text-flame">500+ gym owners.</span>
            </>
          }
          sub="Real gym owners across India, on what changed after switching to GymXBook."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.07}>
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-pop)]">
                <div className="flex items-center justify-between">
                  <Stars />
                  <span className="serif-it select-none text-4xl leading-none text-peach-deep" aria-hidden>
                    &rdquo;
                  </span>
                </div>
                <blockquote className="mt-4 flex-1 text-[14px] leading-relaxed text-ink-soft">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <Avatar initials={t.initials} tone="ink" />
                  <span>
                    <span className="block text-[13.5px] font-extrabold text-ink">{t.name}</span>
                    <span className="block text-[11.5px] font-medium text-faint">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
