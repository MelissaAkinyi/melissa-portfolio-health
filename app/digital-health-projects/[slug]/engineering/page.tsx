import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InvestmentPriorityTool from "@/components/InvestmentPriorityTool";
import { flagshipProjects } from "@/content/flagship-projects";
import { projectEngineering } from "@/content/flagship-engineering";

export function generateStaticParams() {
  return projectEngineering.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = flagshipProjects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} — Engineering`,
    description: `Interactive decision-support tool for ${project.title}.`,
  };
}

export default function ProjectEngineeringPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = flagshipProjects.find((p) => p.slug === params.slug);
  const engineering = projectEngineering.find((e) => e.slug === params.slug);
  if (!project || !engineering) notFound();

  return (
    <div className="container-px mx-auto max-w-content py-16 sm:py-20">
      <Link
        href={`/digital-health-projects/${project.slug}`}
        className="link-underline font-mono text-[12px] uppercase tracking-widest2 text-teal-deep"
      >
        ← {project.title}
      </Link>

      <p className="eyebrow mb-3 mt-8">Engineering Layer</p>
      <h1 className="max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
        {engineering.toolTitle}
      </h1>
      <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
        {engineering.intro}
      </p>

      <div className="mt-14">
        <InvestmentPriorityTool
          criteria={engineering.criteria}
          options={engineering.options}
          methodology={engineering.methodology}
        />
      </div>
    </div>
  );
}