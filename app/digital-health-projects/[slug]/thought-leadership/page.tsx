import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { flagshipProjects } from "@/content/flagship-projects";
import { projectArticles } from "@/content/flagship-articles";

export function generateStaticParams() {
  return projectArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = projectArticles.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.dek,
  };
}

export default function ProjectArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const project = flagshipProjects.find((p) => p.slug === params.slug);
  const article = projectArticles.find((a) => a.slug === params.slug);
  if (!project || !article) notFound();

  return (
    <div className="container-px mx-auto max-w-content py-16 sm:py-20">
      <Link
        href={`/digital-health-projects/${project.slug}`}
        className="link-underline font-mono text-[12px] uppercase tracking-widest2 text-teal-deep"
      >
        ← {project.title}
      </Link>

      <p className="eyebrow mb-3 mt-8">Thought Leadership</p>
      <h1 className="max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
        {article.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
        {article.dek}
      </p>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
        Melissa Akinyi · {article.readingTime}
      </p>

      <article className="mt-12 max-w-2xl">
        {article.paragraphs.map((p, i) => {
          if (p.type === "h2") {
            return (
              <h2
                key={i}
                className="mt-10 font-serif text-2xl text-ink first:mt-0"
              >
                {p.text}
              </h2>
            );
          }
          return (
            <div key={i} className="mt-5">
              <p className="text-[17px] leading-[1.8] text-ink">{p.text}</p>
              {p.link && (
                <Link
                  href={p.link.href}
                  className="link-underline mt-2 inline-block font-mono text-[13px] text-teal-deep"
                >
                  {p.link.label}
                </Link>
              )}
            </div>
          );
        })}
      </article>
    </div>
  );
}