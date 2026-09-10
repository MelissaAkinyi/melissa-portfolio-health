"use client";

import { useMemo, useState } from "react";

interface Option {
  name: string;
  scores: number[];
}

export default function InvestmentPriorityTool({
  criteria,
  options,
  methodology,
}: {
  criteria: string[];
  options: Option[];
  methodology: string;
}) {
  const [weights, setWeights] = useState<number[]>(criteria.map(() => 3));

  const ranked = useMemo(() => {
    const totalWeight = weights.reduce((a, b) => a + b, 0) || 1;
    return options
      .map((o) => {
        const raw = o.scores.reduce((sum, s, i) => sum + s * weights[i], 0);
        return { name: o.name, score: Math.round((raw / totalWeight) * 10) / 10 };
      })
      .sort((a, b) => b.score - a.score);
  }, [weights, options]);

  const maxScore = 5;

  return (
    <div className="border border-line bg-paper p-6 sm:p-8">
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
            Adjust how much each factor matters
          </p>
          <div className="mt-5 space-y-5">
            {criteria.map((c, i) => (
              <div key={c}>
                <div className="flex items-center justify-between text-sm text-ink">
                  <span>{c}</span>
                  <span className="font-mono text-ink-muted">{weights[i]}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={5}
                  step={1}
                  value={weights[i]}
                  onChange={(e) => {
                    const next = [...weights];
                    next[i] = Number(e.target.value);
                    setWeights(next);
                  }}
                  className="mt-2 w-full accent-[#0F6E56]"
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => setWeights(criteria.map(() => 3))}
            className="link-underline mt-6 font-mono text-[11px] uppercase tracking-widest2 text-teal-deep"
          >
            Reset to equal weights
          </button>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
            Live ranking
          </p>
          <div className="mt-5 space-y-5">
            {ranked.map((o, rank) => (
              <div key={o.name}>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="text-ink">
                    {rank + 1}. {o.name}
                  </span>
                  <span className="font-mono text-ink-muted">{o.score}</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-paper-alt">
                  <div
                    className="h-full rounded-full bg-teal transition-all"
                    style={{ width: `${(o.score / maxScore) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 max-w-prose border-t border-line pt-5 text-xs leading-relaxed text-ink-faint">
        {methodology}
      </p>
    </div>
  );
}