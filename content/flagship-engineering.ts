export interface ProjectEngineering {
  slug: string;
  toolTitle: string;
  intro: string;
  criteria: string[];
  options: { name: string; scores: number[] }[];
  methodology: string;
}

export const projectEngineering: ProjectEngineering[] = [
  {
    slug: "state-of-kenyas-health-system-2026",
    toolTitle: "Investment Priority Scoring Tool",
    intro:
      "The three strategic investment priorities from the Executive Summary, scored against four decision criteria and ranked live as you adjust how much each criterion matters. This applies the same Multi-Criteria Decision Analysis (MCDA) approach used by WHO's CAPACITI tool and the World Bank's Health Interventions Prioritization Tool — a structured way to make trade-offs explicit rather than claiming one objectively correct answer.",
    criteria: ["Equity impact", "Urgency", "Feasibility", "Cost efficiency"],
    options: [
      { name: "Provider payment infrastructure", scores: [4, 5, 4, 4] },
      {
        name: "Capacity-weighted workforce deployment",
        scores: [5, 3, 2, 3],
      },
      { name: "Means-testing throughput", scores: [4, 4, 4, 4] },
    ],
    methodology:
      "Scores (1 to 5) reflect the author's analytical judgment based on the reasoning in the Executive Summary, not measured data — this is intentional: MCDA tools are designed for exactly this kind of decision, where the evidence base is real but not precise enough for a single predictive number. Default weights are equal (3 each); adjust them to see how sensitive the ranking is to what a decision-maker actually cares about.",
  },
  {
    slug: "national-digital-health-investment-strategy",
    toolTitle: "Digital Health Investment Scoring Tool",
    intro:
      "The four digital health investment areas assessed in the Executive Summary, scored against four criteria and ranked live as you adjust how much each criterion matters. As with Project 01's tool, this applies Multi-Criteria Decision Analysis (MCDA) rather than a precise predictive model.",
    criteria: [
      "Readiness today",
      "Population reach",
      "Feasibility",
      "Evidence strength",
    ],
    options: [
      { name: "EHR & Interoperability", scores: [3, 5, 2, 4] },
      { name: "Telemedicine", scores: [3, 4, 4, 4] },
      { name: "Remote Patient Monitoring & AI", scores: [2, 3, 2, 2] },
      { name: "Tele-rehabilitation", scores: [1, 4, 2, 1] },
    ],
    methodology:
      "Scores (1 to 5) reflect analytical judgment based on the reasoning in the Executive Summary, not measured data. Tele-rehabilitation scores lowest on readiness and evidence strength specifically because a targeted search identified no Kenya-specific evidence, not because the intervention itself is judged ineffective. Default weights are equal (3 each); adjust them to see how the ranking responds to different priorities.",
  },
];