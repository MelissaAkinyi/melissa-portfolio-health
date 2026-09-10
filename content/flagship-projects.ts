import { FlagshipProject, FlagshipLayer } from "@/lib/types";

// Scaffolding only — every layer starts "Not started" with no outputs.
// Fill in `summary` and `outputs` on each layer as the real work happens.
// See README content rules: never mark progress that hasn't happened yet.
const emptyLayers = (): FlagshipProject["layers"] => ({
  Executive: { status: "Not started" },
  Analytics: { status: "Not started" },
  Engineering: { status: "Not started" },
  "Thought Leadership": { status: "Not started" },
});

export const flagshipProjects: FlagshipProject[] = [
   {
    slug: "state-of-kenyas-health-system-2026",
    number: 1,
    title: "State of Kenya's Health System 2026",
    objective:
      "National health-system performance, county comparisons, international benchmarking and strategic investment priorities.",
    status: "Ongoing",
    layers: {
      Executive: {
        status: "Complete",
        summary:
          "A researched executive brief covering national performance indicators, the NHIF-to-SHA transition, county-level workforce and access disparities, and benchmarking against Rwanda and Ghana — closing with three evidence-based investment priorities.",
        outputs: [
          {
            label: "Executive Summary (PDF)",
            href: "/reports/state-of-kenyas-health-system-2026-executive-summary.pdf",
          },
        ],
      },
      Analytics: { status: "Not started" },
      Engineering: { status: "Not started" },
      "Thought Leadership": { status: "Not started" },
    },
  },
   {
    slug: "national-digital-health-investment-strategy",
    number: 2,
    title: "National Digital Health Investment Strategy",
    objective:
      "Evaluate EHRs, telemedicine, tele-rehabilitation, AI and remote monitoring to determine where Kenya should invest.",
    status: "Ongoing",
    layers: {
      Executive: {
        status: "Complete",
        summary:
          "A researched brief assessing EHR interoperability, telemedicine, AI-assisted care, remote monitoring and tele-rehabilitation on current readiness in Kenya, with a sequencing table and four investment recommendations — including flagging tele-rehabilitation as a genuine evidence gap rather than a mature area.",
        outputs: [
          {
            label: "Executive Summary (PDF)",
            href: "/reports/national-digital-health-investment-strategy-executive-summary.pdf",
          },
        ],
      },
      Analytics: { status: "Not started" },
      Engineering: { status: "Not started" },
      "Thought Leadership": { status: "Not started" },
    },
  },
  {
    slug: "climate-resilience-investment-strategy-nairobi",
    number: 3,
    title: "Climate Resilience Investment Strategy for Nairobi County",
    objective:
      "Map climate-health risks, identify vulnerable populations and prioritise adaptation investments.",
    status: "Concept Development",
    layers: emptyLayers(),
  },
  {
    slug: "kenya-digital-health-strategy-2030",
    number: 4,
    title: "Kenya Digital Health Strategy 2030",
    objective:
      "A national digital-health transformation roadmap covering technology, governance, financing, implementation and KPIs.",
    status: "Concept Development",
    layers: emptyLayers(),
  },
  {
    slug: "kenya-health-equity-index",
    number: 5,
    title: "Kenya Health Equity Index (KHEI)",
    objective:
      "An original data-driven index measuring healthcare inequality across counties, translated into investment recommendations.",
    status: "Concept Development",
    layers: emptyLayers(),
  },
  {
    slug: "universal-healthcare-2035",
    number: 6,
    title: "Universal Healthcare 2035",
    objective:
      "Capstone: a comprehensive national strategy integrating financing, primary care, workforce, digital health, AI, climate resilience and rehabilitation.",
    status: "Concept Development",
    layers: emptyLayers(),
  },
];