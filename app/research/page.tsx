import type { Metadata } from "next";
import PathwayDiagram from "@/components/PathwayDiagram";
import { researchAreas, systemPathway } from "@/content/research-areas";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Melissa Akinyi's research interests: health systems, health services research, patient-centred care, healthcare quality, rehabilitation systems, digital health and global health.",
};

export default function ResearchPage() {
  return (
    <div className="container-px mx-auto max-w-content py-16 sm:py-20">
      <p className="eyebrow mb-3">Research</p>
      <h1 className="max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
        The systems behind healthcare delivery
      </h1>
      <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
        My research interests focus on the systems through which healthcare
        is delivered and the ways those systems can produce better
        experiences and outcomes for patients.
      </p>

      <div className="my-16 overflow-x-auto rounded-sm border border-line bg-paper-alt/50 p-6">
        <PathwayDiagram
          labels={systemPathway}
          orientation="horizontal"
          className="mx-auto h-[140px] w-full min-w-[640px] max-w-3xl"
        />
      </div>

      <div className="space-y-20">
        {researchAreas.map((area, i) => (
          <section
            key={area.slug}
            id={area.slug}
            className="grid gap-6 border-t border-line pt-10 lg:grid-cols-[0.3fr_0.7fr]"
          >
            <div>
              <span className="font-mono text-xs text-ink-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 font-serif text-2xl text-ink">
                {area.title}
              </h2>
            </div>
            <div>
              <p className="max-w-prose leading-relaxed text-ink-muted">
                {area.summary}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {area.focus.map((f) => (
                  <li
                    key={f}
                    className="rounded-full border border-line bg-paper px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-ink-muted"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
