interface BarDatum {
  label: string;
  value: number;
  isReference?: boolean;
}

export default function BarChart({
  title,
  unit,
  data,
  sourceNote,
}: {
  title: string;
  unit: string;
  data: BarDatum[];
  sourceNote?: string;
}) {
  const width = 640;
  const height = 220;
  const padTop = 28;
  const padBottom = 44;
  const padX = 24;
  const chartHeight = height - padTop - padBottom;
  const max = Math.max(...data.map((d) => d.value)) * 1.15;
  const barGap = 28;
  const barWidth =
    (width - padX * 2 - barGap * (data.length - 1)) / data.length;

  return (
    <div className="border border-line bg-paper p-6">
      <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
        {title}
      </p>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="mt-4 w-full"
        role="img"
        aria-label={title}
      >
        <line
          x1={padX}
          y1={padTop + chartHeight}
          x2={width - padX}
          y2={padTop + chartHeight}
          className="stroke-line"
          strokeWidth={1}
        />
        {data.map((d, i) => {
          const barHeight = (d.value / max) * chartHeight;
          const x = padX + i * (barWidth + barGap);
          const y = padTop + chartHeight - barHeight;
          return (
            <g key={d.label}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                className={d.isReference ? "fill-gold" : "fill-teal"}
              />
              <text
                x={x + barWidth / 2}
                y={y - 10}
                textAnchor="middle"
                className="fill-ink font-mono text-[13px] font-semibold"
              >
                {d.value.toLocaleString()}
              </text>
              <text
                x={x + barWidth / 2}
                y={padTop + chartHeight + 20}
                textAnchor="middle"
                className="fill-ink-muted font-mono text-[11px]"
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="mt-2 flex items-center justify-between">
        <span className="font-mono text-[11px] text-ink-faint">{unit}</span>
        {sourceNote && (
          <span className="text-right font-mono text-[10px] italic text-ink-faint">
            {sourceNote}
          </span>
        )}
      </div>
    </div>
  );
}