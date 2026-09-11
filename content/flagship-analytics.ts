export interface AnalyticsStatCard {
  label: string;
  value: string;
  unit?: string;
}

export interface AnalyticsBarChart {
  title: string;
  unit: string;
  data: { label: string; value: number; isReference?: boolean }[];
  sourceNote: string;
}

export interface ProjectAnalytics {
  slug: string;
  methodology: string;
  statCards: AnalyticsStatCard[];
  barCharts: AnalyticsBarChart[];
  sources: string;
}

export const projectAnalytics: ProjectAnalytics[] = [
  {
    slug: "state-of-kenyas-health-system-2026",
    methodology:
      "This dashboard visualises publicly reported national indicators cited in the Executive Summary above — it is a macro-level view, not yet a county-level statistical model. A full 47-county dataset is planned as this project deepens.",
    statCards: [
      { label: "Life expectancy at birth", value: "66.7", unit: "years" },
      { label: "Government health spend", value: "4.5", unit: "% of GDP" },
      {
        label: "Maternal mortality ratio",
        value: "342",
        unit: "per 100,000 live births",
      },
      {
        label: "Under-five mortality rate",
        value: "42",
        unit: "per 1,000 live births",
      },
    ],
    barCharts: [
      {
        title: "Coverage Indicators",
        unit: "%",
        data: [
          { label: "Skilled birth attendance", value: 89 },
          { label: "Immunisation coverage", value: 80 },
        ],
        sourceNote: "KNBS 2021 / Kenya MoH Health Sector Report",
      },
      {
        title: "Health Workforce Density vs WHO Threshold",
        unit: "per 10,000 population",
        data: [
          { label: "Kenya (2020)", value: 30.14 },
          { label: "WHO SDG threshold", value: 44.5, isReference: true },
        ],
        sourceNote: "PMC9422806, Kenya Health Labour Market Analysis 2023",
      },
      {
        title: "SHA Registration Funnel",
        unit: "million people",
        data: [
          { label: "Registered", value: 19.3 },
          { label: "Means-tested", value: 3.33 },
        ],
        sourceNote: "Daily Nation, Jan 2026 / IEA Kenya SHA assessment, Mar 2026",
      },
      {
        title: "SHA Facility Enrollment",
        unit: "active health facilities",
        data: [
          { label: "Enrolled in SHA", value: 8813 },
          { label: "Not yet enrolled", value: 8942 },
        ],
        sourceNote:
          "Kenya Parliament Health Committee roundtable, Nov 2025 (8,813 of 17,755 active facilities enrolled)",
      },
    ],
    sources:
      "KNBS 2021; Kenya MoH Health Sector Report (National Treasury MTEF); PMC9422806 Kenya Health Labour Market Analysis 2023; Daily Nation, Jan 2026; Kenya Parliament Health Committee roundtable, Nov 2025; IEA Kenya SHA assessment, Mar 2026.",
  },
  {
    slug: "national-digital-health-investment-strategy",
    methodology:
      "This dashboard presents publicly reported market and connectivity figures relevant to the four investment areas assessed in the Executive Summary. It is a macro-level view of market context and infrastructure constraints, not a cost model or Kenya-specific digital health market sizing, which was not identified in available public sources.",
    statCards: [
      { label: "Africa digital health market (2025)", value: "5.58", unit: "USD billion" },
      { label: "Projected by 2029", value: "7.59", unit: "USD billion" },
      { label: "Separate health information systems", value: "49", unit: "MoH + 47 counties + SHA" },
      { label: "Digital health policy iteration", value: "15", unit: "years (2009–2023)" },
    ],
    barCharts: [
      {
        title: "Internet Usage: Urban vs Rural Kenya",
        unit: "% of population, 3-month usage",
        data: [
          { label: "Urban", value: 57 },
          { label: "National average", value: 35, isReference: true },
          { label: "Rural", value: 25 },
        ],
        sourceNote: "Communications Authority of Kenya / KNBS, 2023/24 Kenya Housing Survey",
      },
      {
        title: "Mobile Phone Ownership: Urban vs Rural Kenya",
        unit: "% of population",
        data: [
          { label: "Urban", value: 64.6 },
          { label: "National average", value: 53.7, isReference: true },
          { label: "Rural", value: 48.6 },
        ],
        sourceNote: "Communications Authority of Kenya / KNBS, 2023/24 Kenya Housing Survey",
      },
    ],
    sources:
      "Statista Digital Health Africa Market Forecast (2025); Communications Authority of Kenya / KNBS, 2023/24 Kenya Housing Survey (KICTANet analysis, Jan 2025); PMC12165431 Homa Bay digital health landscape assessment.",
  },
];