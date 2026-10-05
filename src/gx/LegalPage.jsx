import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Footer from "./Footer";
import Nav from "./Nav";

function renderInline(text) {
  const emailRegex = /([A-Za-z0-9._%+-]+@gymxbook\.com)/g;
  const parts = text.split(emailRegex);
  return parts.map((part, index) => {
    if (emailRegex.test(part)) {
      return (
        <a key={index} href={`mailto:${part}`} className="font-semibold text-flame hover:underline">
          {part}
        </a>
      );
    }
    return part;
  });
}

function Block({ block }) {
  switch (block.type) {
    case "p":
      return <p className="mt-4 text-[15px] leading-[1.85] text-dim">{renderInline(block.text)}</p>;
    case "callout":
      return (
        <div className="mt-4 rounded-xl border border-peach-deep bg-peach px-4 py-3 text-[14px] font-semibold text-flame-deep">
          {block.text}
        </div>
      );
    case "bullets":
      return (
        <ul className="mt-4 space-y-2 pl-5 text-[15px] leading-[1.85] text-dim">
          {block.items.map((item, i) => (
            <li key={i} className="relative pl-4">
              <span className="absolute left-0 top-[0.65em] h-1.5 w-1.5 rounded-full bg-flame/60" aria-hidden />
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
    case "terms":
      return (
        <dl className="mt-4 space-y-3">
          {block.items.map((item) => (
            <div key={item.term} className="rounded-xl border border-line bg-mist/50 px-4 py-3">
              <dt className="text-[14px] font-bold text-ink">{item.term}</dt>
              <dd className="mt-1 text-[14px] leading-[1.75] text-dim">{renderInline(item.description)}</dd>
            </div>
          ))}
        </dl>
      );
    case "table":
      return (
        <div className="mt-4 overflow-x-auto rounded-xl border border-line">
          <table className="min-w-full text-left text-[13px]">
            <thead className="bg-mist">
              <tr>
                {block.headers.map((head) => (
                  <th key={head} className="whitespace-nowrap px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-faint">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line bg-white">
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-2.5 text-dim">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

function SectionBlock({ section }) {
  return (
    <section id={section.id} className="scroll-mt-24">
      <div className="flex items-center gap-3 border-b border-line pb-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-flame text-[11px] font-bold text-white">
          {section.number}
        </span>
        <h2 className="text-[22px] font-extrabold tracking-tight text-ink sm:text-[26px]">
          {section.title}
        </h2>
      </div>

      {section.intro && (
        <p className="mt-5 text-[15px] leading-[1.85] text-dim">{renderInline(section.intro)}</p>
      )}

      <div className="mt-4 space-y-3">
        {section.blocks?.map((block, index) => <Block key={index} block={block} />)}
      </div>

      {section.subsections && (
        <div className="mt-6 space-y-6">
          {section.subsections.map((sub) => (
            <div key={sub.title}>
              <h3 className="text-[17px] font-bold text-ink sm:text-[18px]">{sub.title}</h3>
              <div className="space-y-3">
                {sub.blocks.map((block, index) => (
                  <Block key={index} block={block} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default function LegalPage({ content }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `GymXBook — ${content.title}`;
  }, [content.title]);

  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <Nav />

      <main className="relative pb-20 pt-28 sm:pt-32">
        <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">
          {/* Back link */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.location.hash = ""; window.scrollTo(0,0); }}
            className="group mb-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-dim transition-colors hover:text-flame"
          >
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
            Back to home
          </a>

          {/* Page header */}
          <div className="rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-card)] sm:rounded-3xl sm:p-8 lg:p-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-peach-deep bg-peach px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-flame-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" />
              {content.eyebrow}
            </span>
            <h1 className="mt-4 text-[32px] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[42px]">
              {content.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="serif-it font-normal text-flame">{content.accent}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-[1.75] text-dim sm:text-[16px]">
              {content.summary}
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
            {/* Sidebar — desktop only */}
            <aside className="hidden lg:block">
              <nav className="sticky top-28 space-y-0.5">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-faint">
                  Sections
                </p>
                {content.sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium text-dim transition-colors hover:bg-peach/50 hover:text-flame"
                  >
                    <span className="font-mono text-[9px] font-bold text-faint">{s.number}</span>
                    <span className="truncate">{s.title}</span>
                  </a>
                ))}
              </nav>
            </aside>

            {/* Mobile TOC */}
            <div className="lg:hidden">
              <details className="group rounded-xl border border-line bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-[14px] font-bold text-ink">
                  Jump to section
                  <span className="text-faint transition-transform group-open:rotate-180">▾</span>
                </summary>
                <div className="grid grid-cols-2 gap-1 border-t border-line p-2 sm:grid-cols-3">
                  {content.sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="rounded-lg px-3 py-2 text-[12px] font-medium text-dim transition-colors hover:bg-peach/50 hover:text-flame"
                    >
                      <span className="font-mono text-[9px] text-faint">{s.number} </span>
                      {s.title}
                    </a>
                  ))}
                </div>
              </details>
            </div>

            {/* Content */}
            <div className="space-y-10">
              {content.sections.map((section) => (
                <SectionBlock key={section.id} section={section} />
              ))}

              <div className="border-t border-line pt-6">
                <p className="text-[13px] text-faint">{content.footerNote}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
