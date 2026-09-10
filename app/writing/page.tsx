import type { Metadata } from "next";
import { writingPieces } from "@/content/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Research & Commentary — essays, evidence reviews and policy analysis by Melissa Akinyi on health systems, rehabilitation and digital health.",
};

export default function WritingPage() {
  return (
    <div className="container-px mx-auto max-w-content py-16 sm:py-20">
      <p className="eyebrow mb-3">Writing</p>
      <h1 className="max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
        Research &amp; Commentary
      </h1>
      <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
        Shorter pieces on health systems, rehabilitation and digital health
        &mdash; written to think in public ahead of a formal publication
        record. These are commentary and analysis, not peer-reviewed
        research.
      </p>

      <ul className="mt-14 divide-y divide-line border-t border-line">
        {writingPieces.map((w) => (
          <li key={w.slug} className="grid gap-2 py-8 sm:grid-cols-[1fr_auto] sm:gap-8">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-widest2 text-teal-deep">
                  {w.category}
                </span>
                {w.status !== "Published" && (
                  <span className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">
                    {w.status}
                  </span>
                )}
              </div>
              <h2 className="font-serif text-xl text-ink">{w.title}</h2>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted">
                {w.dek}
              </p>
            </div>
            {w.date && (
              <p className="font-mono text-xs text-ink-faint sm:text-right">
                {w.date}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
