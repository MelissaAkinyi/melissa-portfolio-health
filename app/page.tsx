import Link from "next/link";
import PathwayDiagram from "@/components/PathwayDiagram";
import { researchAreas, systemPathway } from "@/content/research-areas";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="container-px mx-auto max-w-content pb-16 pt-16 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow mb-6">
              Health Systems &middot; Health Services Research &middot;
              Rehabilitation &middot; Digital Health
            </p>
            <h1 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-[3.4rem]">
              Melissa Akinyi
            </h1>
            <p className="mt-3 font-serif text-xl italic text-teal-deep sm:text-2xl">
              Physiotherapist &amp; Emerging Health Systems Researcher
            </p>

            <p className="mt-8 max-w-prose text-lg leading-relaxed text-ink">
              I am interested in understanding how healthcare is delivered,
              experienced, and improved.
            </p>
            <p className="mt-4 max-w-prose leading-relaxed text-ink-muted">
              My research interests sit at the intersection of health
              systems, health services research, patient-centred care,
              rehabilitation, healthcare quality and digital health.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/research"
                className="rounded-sm bg-teal-deep px-6 py-3 font-mono text-[12px] uppercase tracking-widest2 text-paper transition-colors hover:bg-teal"
              >
                Explore my research
              </Link>
              <Link
                href="/cv"
                className="link-underline font-mono text-[12px] uppercase tracking-widest2 text-ink-muted hover:text-teal-deep"
              >
                View CV
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-sm border border-line bg-paper-alt/60 p-6">
              <p className="eyebrow mb-2">A connected pathway</p>
              <PathwayDiagram
                labels={systemPathway}
                orientation="vertical"
                className="mx-auto h-[420px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research interests — presented as a connected pathway, not a list */}
      <section className="border-t border-line bg-paper-alt/50">
        <div className="container-px mx-auto max-w-content py-20">
          <div className="mb-14 max-w-prose">
            <p className="eyebrow mb-3">Research Interests</p>
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">
              Research interests
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              These areas overlap in practice. How a health system is
              organised shapes the services it delivers, and that in turn
              shapes what a patient actually experiences during
              rehabilitation.
            </p>
          </div>

          <ol className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area, i) => (
              <li key={area.slug} className="bg-paper p-7">
                <span className="font-mono text-xs text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-xl text-ink">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {area.summary}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <Link
              href="/research"
              className="link-underline font-mono text-[12px] uppercase tracking-widest2 text-teal-deep"
            >
              Read the full research page &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Focus */}
      <section className="container-px mx-auto max-w-content py-20">
        <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr]">
          <p className="eyebrow">Focus</p>
          <p className="max-w-prose text-lg leading-relaxed text-ink">
            My clinical background is in physiotherapy. I&rsquo;m currently
            building research and analytical experience in health systems and
            digital health, with the goal of working at the intersection of
            clinical care and health systems strategy.
          </p>
        </div>
      </section>
    </>
  );
}