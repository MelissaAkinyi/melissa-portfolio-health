export default function StatCard({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit?: string;
}) {
  return (
    <div className="border border-line bg-paper p-6">
      <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
        {label}
      </p>
      <p className="mt-3 font-serif text-3xl text-ink">
        {value}
        {unit && (
          <span className="ml-1.5 font-sans text-sm text-ink-muted">
            {unit}
          </span>
        )}
      </p>
    </div>
  );
}