import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import StatusBadge from "@/components/StatusBadge";
import { flagshipProjects } from "@/content/flagship-projects";
import { FlagshipLayerKey, LayerStatus } from "@/lib/types";

const layerOrder: FlagshipLayerKey[] = [
  "Executive",
  "Analytics",
  "Engineering",
  "Thought Leadership",
];

const layerDotStyles: Record<LayerStatus, string> = {
  "Not started": "bg-line",
  "In progress": "bg-teal",
  Complete: "bg-gold",
};

export function generateStaticParams() {
  return flagshipProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = flagshipProjects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.objective,
  };
}

export default function FlagshipProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = flagshipProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="container-px mx-auto max-w-content py-16 sm:py-20">
      <Link
        href="/digital-health-projects"
        className="link-underline font-mono text-[12px] uppercase tracking-widest2 text-teal-deep"
      >
        ← All flagship projects
      </Link>

      <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="eyebrow mb-3">
            Flagship Project {String(project.number).padStart(2, "0")}
          </p>
          <h1 className="max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
            {project.title}
          </h1>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
        {project.objective}
      </p>

      <div className="mt-16 divide-y divide-line border-t border-line">
        {layerOrder.map((key) => {
          const layer = project.layers[key];
          return (
            <div
              key={key}
              className="grid gap-3 py-10 sm:grid-cols-[0.3fr_0.7fr] sm:gap-8"
            >
              <div>
                <h2 className="font-serif text-xl text-ink">{key}</h2>
                <span className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-ink-muted">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${layerDotStyles[layer.status]}`}
                  />
                  {layer.status}
                </span>
              </div>

              <div>
                {layer.summary ? (
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {layer.summary}
                  </p>
                ) : (
                  <p className="text-sm leading-relaxed text-ink-faint">
                    Not started yet.
                  </p>
                )}

                                {layer.outputs && layer.outputs.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {layer.outputs.map((o) =>
                      o.href ? (
                        <li key={o.label}>
                          <Link
                            href={o.href}
                            className="link-underline font-mono text-[13px] text-teal-deep"
                            target={o.href.startsWith("/") ? undefined : "_blank"}
                          >
                            {o.label} ↓
                          </Link>
                        </li>
                      ) : (
                        <li
                          key={o.label}
                          className="font-mono text-[13px] text-teal-deep"
                        >
                          {o.label}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}