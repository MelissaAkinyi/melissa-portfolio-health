export type ProjectStatus =
  | "Research Interest"
  | "Concept Development"
  | "Research Proposal"
  | "Ongoing"
  | "Completed"
  | "Published";

export interface Project {
  slug: string;
  title: string;
  tags: string[];
  description: string;
  status: ProjectStatus;
  researchQuestion?: string;
  methodology?: string;
  date?: string;
  collaborators?: string[];
  outputs?: string[];
  pdfUrl?: string;
  doi?: string;
  githubUrl?: string;
}

export type PublicationCategory =
  | "Peer-Reviewed Publications"
  | "Conference Abstracts"
  | "Posters & Presentations"
  | "Working Papers"
  | "Policy Briefs";

export interface Publication {
  slug: string;
  title: string;
  authors: string;
  year: number;
  journal?: string;
  abstract?: string;
  doi?: string;
  scholarUrl?: string;
  pdfUrl?: string;
  category: PublicationCategory;
}

export type WritingCategory =
  | "Commentary"
  | "Evidence Review"
  | "Policy Analysis"
  | "Research Note";

export interface WritingPiece {
  slug: string;
  title: string;
  category: WritingCategory;
  dek: string;
  status: "Planned" | "Draft" | "Published";
  date?: string;
}

export interface ResearchArea {
  slug: string;
  title: string;
  summary: string;
  focus: string[];
}
/**
 * Flagship Projects — executive-level work spanning health systems &
 * digital transformation. Each project is built across four layers
 * (Executive, Analytics, Engineering, Thought Leadership), reflecting
 * the Analyse → Advise → Build framing of this body of work.
 */
export type FlagshipLayerKey =
  | "Executive"
  | "Analytics"
  | "Engineering"
  | "Thought Leadership";

export type LayerStatus = "Not started" | "In progress" | "Complete";

export interface FlagshipLayer {
  status: LayerStatus;
  summary?: string;
  outputs?: string[];
}

export interface FlagshipProject {
  slug: string;
  number: number;
  title: string;
  objective: string;
  status: ProjectStatus;
  layers: Record<FlagshipLayerKey, FlagshipLayer>;
}
