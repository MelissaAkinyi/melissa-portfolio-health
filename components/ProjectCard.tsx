import { Project } from "@/lib/types";
import StatusBadge from "@/components/StatusBadge";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col border border-line bg-paper p-7">
      <StatusBadge status={project.status} />
      <h3 className="mt-4 font-serif text-xl text-ink">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
        {project.description}
      </p>
      <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
        {project.tags.map((t) => (
          <li
            key={t}
            className="font-mono text-[11px] uppercase tracking-wide text-teal-deep/80"
          >
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
