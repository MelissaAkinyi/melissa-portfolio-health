import { ResearchArea } from "@/lib/types";

// The seven interests are written as a connected pathway, not a flat list —
// each one is the condition that makes the next possible. `order` reflects
// that pathway from system-level structure down to global-health application.

export const researchAreas: ResearchArea[] = [
  {
    slug: "health-systems",
    title: "Health Systems",
    summary:
      "Understanding how healthcare systems are structured, organised and improved.",
    focus: [
      "Healthcare organisation",
      "Service delivery",
      "Access",
      "Health workforce",
      "Resource allocation",
      "Health-system strengthening",
    ],
  },
  {
    slug: "health-services-research",
    title: "Health Services Research",
    summary:
      "Studying how healthcare is delivered, accessed and experienced.",
    focus: [
      "Service utilisation",
      "Quality of care",
      "Patient outcomes",
      "Continuity of care",
      "Healthcare access",
      "Service evaluation",
    ],
  },
  {
    slug: "patient-centred-care",
    title: "Patient-Centred Care",
    summary:
      "Exploring patient experience, continuity of care, communication and shared decision-making.",
    focus: [
      "Patient experience",
      "Continuity of care",
      "Provider communication",
      "Shared decision-making",
    ],
  },
  {
    slug: "healthcare-quality",
    title: "Healthcare Quality",
    summary:
      "Improving the safety, effectiveness, accessibility and efficiency of healthcare delivery.",
    focus: ["Patient safety", "Effectiveness", "Accessibility", "Efficiency"],
  },
  {
    slug: "rehabilitation-systems",
    title: "Rehabilitation Systems",
    summary:
      "Improving the integration and accessibility of physiotherapy and rehabilitation services.",
    focus: [
      "Access to rehabilitation",
      "Integration into health systems",
      "Physiotherapy services",
      "Rehabilitation workforce",
      "Chronic disease management",
    ],
  },
  {
    slug: "digital-health",
    title: "Digital Health",
    summary:
      "Exploring how technology, health data and digital interventions can strengthen healthcare delivery.",
    focus: [
      "Digital healthcare delivery",
      "Patient follow-up",
      "Health information systems",
      "Data-driven healthcare",
      "Digital interventions",
    ],
  },
  {
    slug: "global-health",
    title: "Global Health",
    summary:
      "Examining health-system challenges and opportunities, particularly in low- and middle-income countries and African contexts.",
    focus: ["Kenya", "Africa", "LMIC health systems", "Health equity", "Strengthening healthcare delivery"],
  },
];

// The pathway used for the signature diagram in the hero and Research page.
export const systemPathway = [
  "Patient",
  "Provider",
  "Health Service",
  "Health System",
  "Population Outcomes",
];
