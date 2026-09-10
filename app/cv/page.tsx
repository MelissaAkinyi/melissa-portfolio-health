import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  description: "Academic CV of Melissa Akinyi.",
};

const sections: { title: string; note: string }[] = [
  { title: "Education", note: "BSc Physiotherapy — JKUAT" },
  {
    title: "Research Interests",
    note: "Health systems, health services research, patient-centred care, healthcare quality, rehabilitation systems, digital health, global health",
  },
  { title: "Research Experience", note: "To be added" },
  { title: "Research Projects", note: "See the Projects page" },
  { title: "Publications", note: "See the Publications page" },
  { title: "Conference Presentations", note: "To be added" },
  { title: "Professional Experience", note: "To be added" },
  { title: "Courses & Training", note: "To be added" },
  { title: "Technical / Data Skills", note: "To be added" },
  { title: "Professional Affiliations", note: "To be added" },
  { title: "Awards / Scholarships", note: "To be added" },
];

export default function CvPage() {
  return (
    <div className="container-px mx-auto max-w-content py-16 sm:py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-3">Curriculum Vitae</p>
          <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Academic CV
          </h1>
        </div>
        <a
          href="/cv/melissa-akinyi-cv.pdf"
          className="rounded-sm bg-teal-deep px-6 py-3 font-mono text-[12px] uppercase tracking-widest2 text-paper transition-colors hover:bg-teal"
          download
        >
          Download Academic CV
        </a>
      </div>

      <p className="mt-6 max-w-prose text-ink-muted">
        The button above links to a placeholder file at{" "}
        <code className="rounded bg-paper-alt px-1.5 py-0.5 font-mono text-sm">
          /public/cv/melissa-akinyi-cv.pdf
        </code>
        . Replace it with a real PDF — see the README for instructions.
      </p>

      <div className="mt-14 divide-y divide-line border-t border-line">
        {sections.map((s) => (
          <div key={s.title} className="grid gap-2 py-8 sm:grid-cols-[0.35fr_0.65fr]">
            <h2 className="font-serif text-xl text-ink">{s.title}</h2>
            <p className="text-sm leading-relaxed text-ink-muted">{s.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
