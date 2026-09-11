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
  {
    slug: "national-digital-health-investment-strategy",
    title:
      "Where should Kenya's digital health budget go first? Sequencing four investment areas",
    dek: "EHRs, telemedicine, remote monitoring and tele-rehabilitation all have a case. They do not all have the same evidence behind them.",
    readingTime: "6 min read",
    paragraphs: [
      {
        type: "p",
        text: "Kenya's digital health strategy documents name several priority areas: interoperable electronic health records, telemedicine, AI-assisted care, remote patient monitoring, and tele-rehabilitation. Naming them is straightforward. Sequencing investment across them, given a constrained budget, is not, and the four areas differ substantially in how much evidence currently supports them.",
      },
      {
        type: "h2",
        text: "A fragmentation problem, not an ambition problem",
      },
      {
        type: "p",
        text: "Kenya's Ministry of Health, all 47 county governments, and the Social Health Authority currently operate 49 separate health information systems, with no shared data backbone connecting them. The Digital Health Act (2023) and the accompanying Digital Health Superhighway blueprint address this directly, defining national shared registries and an integration layer. The relevant constraint is not the absence of a policy response; it is that the response is still in progress after 15 years of policy iteration dating to 2009.",
      },
      {
        type: "p",
        text: "This matters for sequencing because every other investment area in this assessment, telemedicine, remote monitoring, AI-assisted triage, depends on data reaching a connected system. An EHR platform that cannot exchange data with county or SHA systems limits the value of investment made downstream of it.",
      },
      {
        type: "h2",
        text: "Telemedicine: piloted, but constrained by connectivity",
      },
      {
        type: "p",
        text: "A hybrid model linking virtual consultations to community health workers has shown measurable results in a Teso North maternal and child health pilot, improving postnatal care timeliness. The constraint is infrastructural rather than clinical: national internet usage stands at approximately 35%, with a wide urban-rural gap, 57% in urban areas against 25% in rural areas, according to the 2023/24 Kenya Housing Survey. A 2025 architecture study proposes edge computing and lightweight on-device AI specifically to address this gap in low-bandwidth settings.",
        link: {
          label: "View the connectivity data →",
          href: "/digital-health-projects/national-digital-health-investment-strategy/analytics",
        },
      },
      {
        type: "h2",
        text: "Tele-rehabilitation: a case built on regional, not local, evidence",
      },
      {
        type: "p",
        text: "As someone trained in physiotherapy, I find this the most personally relevant of the four areas, and the one with the weakest direct evidence base. A 2024 systematic review found measurable gains in functional recovery from tele-rehabilitation across rural Africa broadly. A targeted search for Kenya-specific tele-rehabilitation studies or pilots returned essentially nothing. Kenya's rehabilitation workforce shortage makes a plausible case for the intervention; it does not substitute for local evidence that the intervention performs as expected under Kenya's specific infrastructure and referral conditions.",
      },
      {
        type: "h2",
        text: "A sequencing tool, not a final answer",
      },
      {
        type: "p",
        text: "I built an interactive scoring tool applying the same Multi-Criteria Decision Analysis approach used in Project 01's tool, scoring all four investment areas against readiness, population reach, feasibility, and evidence strength. Tele-rehabilitation scores lowest primarily on the evidence strength criterion, not because it is judged ineffective, but because the local evidence needed to justify scaled investment does not yet exist. The scores are the author's analytical judgment, stated as such, and the ranking is intended to be interrogated rather than accepted.",
        link: {
          label: "Try the Digital Health Investment Scoring Tool →",
          href: "/digital-health-projects/national-digital-health-investment-strategy/engineering",
        },
      },
      {
        type: "h2",
        text: "A tentative recommendation",
      },
      {
        type: "p",
        text: "Under equal weighting, EHR interoperability and telemedicine rank close together at the top of the tool's default ranking, ahead of remote monitoring and tele-rehabilitation. This is consistent with treating interoperability as a near-term foundational investment and tele-rehabilitation as a candidate for a small, evaluated pilot rather than a funded rollout. As with Project 01, this recommendation depends on the weighting applied to the underlying criteria and should be read as a starting point rather than a conclusion.",
      },
    ],
  },
];