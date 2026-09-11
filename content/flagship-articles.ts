export interface ProjectArticle {
  slug: string;
  title: string;
  dek: string;
  readingTime: string;
  paragraphs: {
    type: "p" | "h2" | "quote";
    text: string;
    link?: { label: string; href: string };
  }[];
}

export const projectArticles: ProjectArticle[] = [
  {
    slug: "state-of-kenyas-health-system-2026",
    title:
      "What would it take to improve Kenya's health system? A look at the evidence",
    dek: "Clinical rotations showed where the disparities are. The data clarifies why they are difficult to close.",
    readingTime: "6 min read",
    paragraphs: [
      {
        type: "p",
        text: "During clinical rotations across five departments in two counties, outpatient rehabilitation in Mombasa, orthopaedics, neurology, paediatrics, and cardiopulmonary care in Nairobi, differences in caseload, equipment, and specialist availability between facilities were consistently observable. This piece examines whether national data corroborates that observation, and what it implies for investment sequencing.",
      },
      {
        type: "h2",
        text: "Workforce distribution",
      },
      {
        type: "p",
        text: "Kenya's national health workforce density is approximately 30 doctors, nurses and clinical officers per 10,000 population, against a WHO threshold of 44.5. This national figure understates the degree of geographic variation: roughly half of the country's specialist physicians are concentrated in three cities, Nairobi, Mombasa and Kisumu, and workforce density in Turkana is estimated at approximately one doctor per 70,000 residents. National averages and county-level figures describe substantially different conditions of access.",
      },
      {
        type: "h2",
        text: "The SHA transition: registration versus functioning coverage",
      },
      {
        type: "p",
        text: "Kenya's transition from NHIF to the Social Health Authority shows a marked difference between registration and verified coverage. Over 19 million people had registered within the scheme's first year, but only approximately 3.3 million had completed the means-testing process that determines premium level and entitlement. SHA reported approximately 30 billion shillings in pending bills owed to providers as of late 2025, a liability largely carried over from NHIF.",
      },
      {
        type: "p",
        text: "An interactive dashboard presenting these figures alongside Kenya's core health indicators is available below.",
        link: {
          label: "View the analytics dashboard →",
          href: "/digital-health-projects/state-of-kenyas-health-system-2026/analytics",
        },
      },
      {
        type: "h2",
        text: "Prioritisation under budget constraint",
      },
      {
        type: "p",
        text: "A common response to these findings is to recommend increased investment generally. This does not resolve the operative question, which is sequencing: workforce deployment, provider payment infrastructure, and means-testing throughput cannot all be addressed simultaneously within a constrained budget, so some ordering is required.",
      },
      {
        type: "p",
        text: "This is a recognised category of problem in health policy, typically addressed through Multi-Criteria Decision Analysis (MCDA). The World Health Organization's CAPACITI tool and the World Bank's Health Interventions Prioritization Tool apply this method to comparable prioritisation problems in other countries, making trade-offs explicit rather than presenting a single predictive ranking.",
      },
      {
        type: "h2",
        text: "An interactive prioritisation tool",
      },
      {
        type: "p",
        text: "An interactive version of this method was built for three near-term investment priorities identified in the accompanying Executive Summary: clearing the SHA provider payment backlog, workforce deployment to understaffed counties, and closing the means-testing gap. Each is scored against four criteria, equity impact, urgency, feasibility, and cost efficiency. The scores reflect analytical judgment based on the evidence summarised above, not a measured or predictive dataset.",
      },
      {
        type: "p",
        text: "The ranking is sensitive to how the criteria are weighted. Weighting equity impact most heavily moves capacity-weighted workforce deployment to the top of the ranking, the intervention with the longest implementation timeline. Weighting urgency and feasibility instead favours clearing the payment backlog, which is largely an administrative rather than an infrastructural intervention. Both weightings are internally consistent; they reflect different priorities rather than different readings of the evidence.",
        link: {
          label: "Try the Investment Priority Scoring Tool →",
          href: "/digital-health-projects/state-of-kenyas-health-system-2026/engineering",
        },
      },
      {
        type: "h2",
        text: "A tentative conclusion",
      },
      {
        type: "p",
        text: "Under the default equal weighting, clearing the SHA payment backlog scores highest, primarily on feasibility and urgency grounds: a financing system that providers do not trust constrains the effectiveness of investment elsewhere, including workforce deployment. This conclusion is offered with the same caveat that applies to the tool itself, it depends on the weighting applied to competing priorities, and should be treated as a starting point for discussion rather than a settled recommendation.",
      },
    ],
  },
];