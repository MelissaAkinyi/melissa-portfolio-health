import { ProjectStatus } from "@/lib/types";

const styles: Record<ProjectStatus, string> = {
  "Research Interest": "text-ink-muted border-line",
  "Concept Development": "text-teal-deep border-teal/40 bg-teal-soft",
  "Research Proposal": "text-teal-deep border-teal/40 bg-teal-soft",
  Ongoing: "text-teal-deep border-teal bg-teal-soft",
  Completed: "text-ink border-ink/30 bg-paper-alt",
  Published: "text-gold border-gold/50 bg-gold-soft",
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest2 ${styles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
