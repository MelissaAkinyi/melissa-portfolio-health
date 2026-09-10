import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Melissa Akinyi — physiotherapist and emerging health systems researcher, background and education.",
};

const profiles = [
  { label: "Google Scholar", href: "#" },
  { label: "ORCID", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function AboutPage() {
  return (
    <div className="container-px mx-auto max-w-content py-16 sm:py-20">
      <div className="grid gap-14 lg:grid-cols-[0.65fr_0.35fr]">
        <div>
          <p className="eyebrow mb-3">About</p>
          <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Melissa Akinyi
          </h1>

          <div className="mt-8 max-w-prose space-y-5 text-lg leading-relaxed text-ink">
            <p>
              I am a physiotherapist with an emerging research focus in
              health systems and health services research. My clinical
              training has given me firsthand exposure to the
              patient&ndash;provider relationship and the practical
              realities of healthcare delivery.
            </p>
            <p>
              This experience has shaped my interest in questions that
              extend beyond individual clinical encounters: How accessible
              are essential health services? Where do patients fall through
              gaps in care? How can rehabilitation be better integrated into
              health systems? How can technology and data improve healthcare
              delivery and quality?
            </p>
            <p>
              My developing research interests therefore span health
              systems, health services research, patient-centred care,
              rehabilitation, digital health and global health.
            </p>
            <p>
              I am particularly interested in research that can translate
              into better healthcare policy, service design and patient
              outcomes.
            </p>
          </div>

          <div className="mt-16 border-t border-line pt-10">
            <p className="eyebrow mb-5">Education</p>
            <div>
              <p className="font-serif text-xl text-ink">
                BSc Physiotherapy
              </p>
              <p className="mt-1 text-ink-muted">
                Jomo Kenyatta University of Agriculture and Technology
                (JKUAT)
              </p>
            </div>
          </div>
        </div>

        <aside className="lg:border-l lg:border-line lg:pl-10">
          <p className="eyebrow mb-4">Academic Profiles</p>
          <ul className="space-y-3">
            {profiles.map((p) => (
              <li key={p.label}>
                <a
                  href={p.href}
                  className="link-underline font-mono text-sm text-teal-deep"
                >
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-ink-faint">
            Placeholder links &mdash; update once profiles are live. See the
            README for instructions.
          </p>

          <p className="eyebrow mb-4 mt-12">Based in</p>
          <p className="text-ink-muted">Nairobi, Kenya</p>
        </aside>
      </div>
    </div>
  );
}
