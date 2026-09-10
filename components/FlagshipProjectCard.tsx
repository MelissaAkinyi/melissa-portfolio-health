import {
  FlagshipProject,
  FlagshipLayerKey,
  LayerStatus,
} from "@/lib/types";
import StatusBadge from "@/components/StatusBadge";

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

export default function FlagshipProjectCard({
  project,
}: {
  project: FlagshipProject;
}) {
  return (
    <article className="flex h-full flex-col border border-line bg-paper p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
          {String(project.number).padStart(2, "0")}
        </span>
        <StatusBadge status={project.status} />
      </div>

      <h3 className="mt-4 font-serif text-xl text-ink">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
        {project.objective}
      </p>

      <ul className="mt-6 space-y-2 border-t border-line pt-5">
        {layerOrder.map((key) => {
          const layer = project.layers[key];
          return (
            <li
              key={key}
              className="flex items-center justify-between gap-3"
            >
              <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-ink-muted">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${layerDotStyles[layer.status]}`}
                />
                {key}
              </span>
              <span className="text-[11px] text-ink-faint">
                {layer.status}
              </span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}