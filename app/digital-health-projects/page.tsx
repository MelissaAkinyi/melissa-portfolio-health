import type { Metadata } from "next";
import FlagshipProjectCard from "@/components/FlagshipProjectCard";
import { flagshipProjects } from "@/content/flagship-projects";

export const metadata: Metadata = {
  title: "Flagship Digital Health Projects",
  description:
    "Executive-level digital health and health systems work by Melissa Akinyi, built across four layers — Executive, Analytics, Engineering and Thought Leadership.",
};

export default function DigitalHealthProjectsPage() {
  return (
    <div className="container-px mx-auto max-w-content py-16 sm:py-20">
      <p className="eyebrow mb-3">Digital Health</p>
      <h1 className="max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
        Flagship Digital Health Projects
      </h1>
      <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
        Executive-level work spanning health systems performance, digital
        health investment and national strategy. Each project is built
        across four layers &mdash; Executive, Analytics, Engineering and
        Thought Leadership &mdash; moving from{" "}
        <span className="text-ink">Analyse</span> to{" "}
        <span className="text-ink">Advise</span> to{" "}
        <span className="text-ink">Build</span>. Status labels reflect
        exactly how far each layer has progressed.
      </p>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {flagshipProjects.map((p) => (
          <FlagshipProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}