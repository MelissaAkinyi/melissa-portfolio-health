import { Project } from "@/lib/types";

// Placeholder projects, clearly labelled by status. Update or add entries
// here as research develops — see README for instructions.

export const projects: Project[] = [
  {
    slug: "rehabilitation-access-kenya",
    title: "Rehabilitation Access in Kenya",
    tags: ["Health Systems", "Rehabilitation", "Health Equity"],
    description:
      "Exploring barriers to accessing physiotherapy and rehabilitation services in Kenya, including geographic, financial, workforce and health-system factors.",
    status: "Concept Development",
  },
  {
    slug: "digital-health-continuity-of-care",
    title: "Digital Health & Continuity of Care",
    tags: ["Digital Health", "Patient-Centred Care", "Health Services"],
    description:
      "Investigating how digital tools could improve communication, follow-up and continuity of care between patients and healthcare providers.",
    status: "Research Interest",
  },
  {
    slug: "healthcare-workforce-service-delivery",
    title: "Healthcare Workforce & Service Delivery",
    tags: ["Health Systems", "Health Workforce"],
    description:
      "Exploring how healthcare workforce distribution, workload and skill mix influence healthcare delivery and quality.",
    status: "Research Interest",
  },
];
