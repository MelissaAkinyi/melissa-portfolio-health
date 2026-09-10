import type { Metadata } from "next";
import { publications } from "@/content/publications";
import { PublicationCategory } from "@/lib/types";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Peer-reviewed publications, conference abstracts, posters and working papers by Melissa Akinyi.",
};

const categories: PublicationCategory[] = [
  "Peer-Reviewed Publications",
  "Conference Abstracts",
  "Posters & Presentations",
  "Working Papers",
  "Policy Briefs",
];

export default function PublicationsPage() {
  return (
    <div className="container-px mx-auto max-w-content py-16 sm:py-20">
      <p className="eyebrow mb-3">Publications</p>
      <h1 className="max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
        Academic outputs
      </h1>
      <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
        Publications will be added as research projects progress. This page
        will hold peer-reviewed papers, conference abstracts, posters,
        working papers and policy briefs as they become available.
      </p>

      <div className="mt-16 space-y-16">
        {categories.map((cat) => {
          const items = publications.filter((p) => p.category === cat);
          return (
            <section key={cat} className="border-t border-line pt-8">
              <h2 className="font-serif text-2xl text-ink">{cat}</h2>

              {items.length === 0 ? (
                <p className="mt-4 text-sm text-ink-faint">
                  No entries yet.
                </p>
              ) : (
                <ul className="mt-6 space-y-8">
                  {items.map((pub) => (
                    <li key={pub.slug} className="max-w-prose">
                      <p className="font-serif text-lg text-ink">
                        {pub.title}
                      </p>
                      <p className="mt-1 text-sm text-ink-muted">
                        {pub.authors} &middot; {pub.year}
                        {pub.journal ? ` \u00b7 ${pub.journal}` : ""}
                      </p>
                      {pub.abstract && (
                        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                          {pub.abstract}
                        </p>
                      )}
                      <div className="mt-2 flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-wide text-teal-deep">
                        {pub.doi && <a href={pub.doi}>DOI</a>}
                        {pub.scholarUrl && (
                          <a href={pub.scholarUrl}>Google Scholar</a>
                        )}
                        {pub.pdfUrl && <a href={pub.pdfUrl}>PDF</a>}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
