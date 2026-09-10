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
      "What would it actually take to fix Kenya's health system? A look at the numbers",
    dek: "Six clinical rotations taught me where the gaps are. The data taught me why closing them is harder than it looks.",
    readingTime: "7 min read",
    paragraphs: [
      {
        type: "p",
        text: "During my final year of physiotherapy training, I rotated through five different departments in two counties: outpatient rehabilitation in Mombasa, orthopaedics, neurology, paediatrics, and cardiopulmonary care in Nairobi. Nothing in a textbook prepares you for the gap between what good rehabilitation looks like on paper and what it looks like when the nearest specialist is a day's travel away. I didn't have language for that gap at the time. I just had the patients in front of me.",
      },
      {
        type: "p",
        text: "This year I went looking for that language in the data, as part of a broader shift toward health systems strategy and digital health work. What I found didn't surprise the clinician in me. It did surprise the analyst.",
      },
      {
        type: "h2",
        text: "The two-Kenya problem, in numbers",
      },
      {
        type: "p",
        text: "Kenya's national health workforce density sits at roughly 30 doctors, nurses and clinical officers per 10,000 people, against a WHO threshold of 44.5. That single national number already tells you the country is understaffed. It does not tell you that roughly half of Kenya's specialist physicians work in just three cities, Nairobi, Mombasa and Kisumu, or that Turkana has approximately one doctor for every 70,000 residents. The national average and the lived reality in Turkana are, for practical purposes, describing two different health systems.",
      },
      {
        type: "p",
        text: "I saw a version of this pattern during my own rotations, though at a smaller scale: the difference in caseload, equipment, and specialist availability between a teaching hospital in Mombasa and a county hospital in Nairobi was already noticeable. Multiply that gap by the distance between Nairobi and Turkana, and you start to understand why national indicators can improve steadily, as Kenya's have, while millions of people still experience a health system that is functionally failing them.",
      },
      {
        type: "h2",
        text: "A financing reform that is working, and straining, at the same time",
      },
      {
        type: "p",
        text: "Kenya's shift from NHIF to the Social Health Authority is genuinely ambitious, and by registration numbers alone, it looks like a success: over 19 million people signed up within its first year. But registration is not coverage. Only about 3.3 million of those registrants have completed means testing, the step that actually determines what they pay and what they are entitled to. And SHA owed healthcare providers roughly 30 billion shillings in pending bills as of late 2025, a debt inherited largely from the old NHIF system.",
      },
      {
        type: "p",
        text: "I built an interactive dashboard laying out these numbers alongside Kenya's core health indicators, because I think this specific gap, between registration and functioning coverage, is the most consequential and least discussed part of the SHA transition. You can look at it directly here.",
        link: {
          label: "View the analytics dashboard →",
          href: "/digital-health-projects/state-of-kenyas-health-system-2026/analytics",
        },
      },
      {
        type: "h2",
        text: "Where these arguments usually go wrong",
      },
      {
        type: "p",
        text: "Most conversations I have encountered about fixing Kenya's health system arrive at the same conclusion: invest more. That is not wrong, but it is not useful either. It skips the actual decision, which is not whether to invest, but where the next shilling should go first, given that workforce deployment, provider payment infrastructure, and means-testing throughput cannot all be fixed simultaneously with a constrained budget.",
      },
      {
        type: "p",
        text: "This is a sequencing problem, and sequencing problems have a name in health policy: priority setting under constraint. The World Health Organization's CAPACITI tool and the World Bank's Health Interventions Prioritization Tool exist because health ministries face this exact problem constantly, and because a defensible answer requires making the trade-offs explicit rather than pretending there is one objectively correct list.",
      },
      {
        type: "h2",
        text: "A tool, not a verdict",
      },
      {
        type: "p",
        text: "I built a small interactive version of this method for Kenya's three most urgent near-term investment priorities: clearing SHA's provider payment backlog, deploying health workers to the most understaffed counties, and closing the means-testing gap. Each priority is scored against four criteria, equity impact, urgency, feasibility, and cost efficiency, using my own analytical judgment grounded in the evidence above, not a precise predictive model I do not have the data to build honestly.",
      },
      {
        type: "p",
        text: "What the tool actually demonstrates is more interesting than a fixed ranking: if you weight equity most heavily, capacity-weighted workforce deployment, the hardest and slowest intervention, rises to the top. If you weight urgency and feasibility instead, clearing the SHA payment backlog wins, because it is largely an administrative fix rather than a multi-year workforce migration problem. Neither answer is wrong. They represent different, entirely legitimate values about what a health system should optimize for first. You can try adjusting the weights yourself.",
        link: {
          label: "Try the Investment Priority Scoring Tool →",
          href: "/digital-health-projects/state-of-kenyas-health-system-2026/engineering",
        },
      },
      {
        type: "h2",
        text: "What I actually think, held loosely",
      },
      {
        type: "p",
        text: "If I had to commit to one answer: I would clear the payment backlog first, not because equity matters less to me, but because a health financing system that providers do not trust cannot deliver equity to anyone, however well the workforce is deployed. But I hold that conclusion loosely, and I think that is the honest position for anyone doing this kind of analysis. The scores in my tool are transparent about being judgment, not measurement, and I would rather show my reasoning and let it be challenged than present a false certainty.",
      },
      {
        type: "p",
        text: "That, more than any specific number in this piece, is what six clinical rotations and a growing interest in health systems strategy have taught me to value: not the appearance of a settled answer, but a clearly reasoned, falsifiable one.",
      },
    ],
  },
];