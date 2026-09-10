type Props = {
  labels: string[];
  orientation?: "horizontal" | "vertical";
  className?: string;
};

/**
 * The site's signature motif: a thin connecting line running through labelled
 * nodes. It stands in for the idea, stated throughout the brief, that these
 * research interests are stages along one pathway (patient → system →
 * population) rather than an unrelated list of topics.
 */
export default function PathwayDiagram({
  labels,
  orientation = "horizontal",
  className = "",
}: Props) {
  const n = labels.length;
  const isH = orientation === "horizontal";

  const width = isH ? 960 : 220;
  const height = isH ? 160 : 640;

  const positions = labels.map((_, i) => {
    const t = n === 1 ? 0.5 : i / (n - 1);
    const pad = isH ? 60 : 70;
    if (isH) {
      return { x: pad + t * (width - pad * 2), y: height / 2 };
    }
    return { x: width / 2, y: pad + t * (height - pad * 2) };
  });

  const pathD = positions
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label={`Pathway diagram: ${labels.join(" leading to ")}`}
    >
      <path
        d={pathD}
        fill="none"
        stroke="#2B5A63"
        strokeWidth="1.25"
        strokeOpacity="0.35"
      />
      <path
        d={pathD}
        fill="none"
        stroke="#2B5A63"
        strokeWidth="1.25"
        strokeDasharray="1 11"
        strokeLinecap="round"
        className="pathway-line"
        strokeOpacity="0.9"
      />
      {positions.map((p, i) => (
        <g key={i}>
          <circle
            cx={p.x}
            cy={p.y}
            r={i === 0 || i === n - 1 ? 5 : 4}
            fill={i === n - 1 ? "#AD8A46" : "#FAF8F3"}
            stroke="#2B5A63"
            strokeWidth="1.5"
          />
          <text
            x={isH ? p.x : p.x + 18}
            y={isH ? p.y + 26 : p.y + 4}
            textAnchor={isH ? "middle" : "start"}
            className="font-mono"
            fontSize="11"
            fill="#57625B"
            letterSpacing="0.03em"
          >
            {labels[i]}
          </text>
        </g>
      ))}
    </svg>
  );
}
