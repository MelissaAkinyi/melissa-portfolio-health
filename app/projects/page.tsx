import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Research projects and proposals by Melissa Akinyi, spanning health systems, rehabilitation and digital health, at various stages of development.",
};

export default function ProjectsPage() {
  return (
    <div className="container-px mx-auto max-w-content py-16 sm:py-20">
      <p className="eyebrow mb-3">Projects</p>
      <h1 className="max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
        Research in progress
      </h1>
      <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
        Projects here span from early research interests to completed and
        published work. Status labels reflect exactly how far each project
        has progressed &mdash; nothing here is presented as further along
        than it is.
      </p>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
