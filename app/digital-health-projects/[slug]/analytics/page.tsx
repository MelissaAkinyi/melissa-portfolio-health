import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import StatCard from "@/components/StatCard";
import BarChart from "@/components/BarChart";
import { flagshipProjects } from "@/content/flagship-projects";
import { projectAnalytics } from "@/content/flagship-analytics";

export function generateStaticParams() {
  return projectAnalytics.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = flagshipProjects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} — Analytics`,
    description: `Data dashboard for ${project.title}.`,
  };
}

export default function ProjectAnalyticsPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = flagshipProjects.find((p) => p.slug === params.slug);
  const analytics = projectAnalytics.find((a) => a.slug === params.slug);
  if (!project || !analytics) notFound();

  return (
    <div className="container-px mx-auto max-w-content py-16 sm:py-20">
      <Link
        href={`/digital-health-projects/${project.slug}`}
        className="link-underline font-mono text-[12px] uppercase tracking-widest2 text-teal-deep"
      >
        ← {project.title}
      </Link>

      <p className="eyebrow mb-3 mt-8">Analytics Layer</p>
      <h1 className="max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
        {analytics.methodology}
      </p>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {analytics.statCards.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} unit={s.unit} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {analytics.barCharts.map((c) => (
          <BarChart
            key={c.title}
            title={c.title}
            unit={c.unit}
            data={c.data}
            sourceNote={c.sourceNote}
          />
        ))}
      </div>

      <p className="mt-10 max-w-prose text-xs text-ink-faint">
        Sources: {analytics.sources}
      </p>
    </div>
  );
}