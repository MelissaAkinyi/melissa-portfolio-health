# Melissa Akinyi — Academic & Research Portfolio

An editorial, academic-styled portfolio for Melissa Akinyi, physiotherapist
and emerging health systems researcher. Built with Next.js (App Router),
TypeScript and Tailwind CSS, ready for Vercel.

## Design

- **Palette:** warm ivory paper, near-black ink, deep muted teal accent,
  restrained gold for "published" states. No corporate blue gradients.
- **Type:** Newsreader (serif, editorial headings) + Inter (sans, UI/body) +
  IBM Plex Mono (utility labels, eyebrows, tags — the "data" register).
- **Signature element:** the pathway diagram (`components/PathwayDiagram.tsx`),
  a thin connecting line running through the stages Patient → Provider →
  Health Service → Health System → Population Outcomes. It appears in the
  hero and on the Research page, and stands in for the brief's core idea
  that the seven research interests are one connected pathway, not an
  unrelated list.

## Project structure

```
app/
  layout.tsx          Root layout — fonts, nav, footer, SEO defaults
  page.tsx             Home
  research/page.tsx    Research
  projects/page.tsx    Projects
  publications/page.tsx Publications
  writing/page.tsx     Writing ("Research & Commentary")
  cv/page.tsx           CV
  about/page.tsx        About
  sitemap.ts / robots.ts
components/
  Nav.tsx, Footer.tsx, PathwayDiagram.tsx, StatusBadge.tsx, ProjectCard.tsx
content/
  research-areas.ts    The 7 research interests + pathway labels
  projects.ts           Project entries
  publications.ts        Publication entries (currently empty)
  writing.ts             Writing/commentary entries
lib/
  types.ts               Shared TypeScript types for all content
public/
  cv/melissa-akinyi-cv.pdf   Replace with the real CV PDF
```

Content lives in plain TypeScript data files under `content/`, typed by
`lib/types.ts`. Adding an entry does not require touching any page or
component code.

## Local development

Requires Node.js 18.18+ (or 20+) and npm.

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build locally
```

## Deploying to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. In Vercel, choose **New Project** and import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables
   are required for the base site.
4. Deploy. Vercel will build and host the site, including `sitemap.xml` and
   `robots.txt`, generated automatically from `app/sitemap.ts` and
   `app/robots.ts`.
5. After the first deploy, update the `siteUrl` constant in
   `app/layout.tsx`, `app/sitemap.ts` and `app/robots.ts` to match the real
   production domain, then redeploy.

## Adding a project

Open `content/projects.ts` and add an object to the `projects` array:

```ts
{
  slug: "your-project-slug",
  title: "Project Title",
  tags: ["Health Systems", "Digital Health"],
  description: "One or two sentences on what the project explores.",
  status: "Research Interest", // | "Concept Development" | "Research Proposal"
                                 // | "Ongoing" | "Completed" | "Published"
  // optional, add as the project develops:
  researchQuestion: "...",
  methodology: "...",
  date: "2026",
  collaborators: ["Name, Institution"],
  outputs: ["..."],
  pdfUrl: "/projects/your-project.pdf",
  doi: "https://doi.org/...",
  githubUrl: "https://github.com/...",
}
```

Only mark a project `"Published"` once it genuinely has a peer-reviewed
output — see "Content rules" below.

## Adding a publication

Open `content/publications.ts` and add an object to the `publications`
array, matching the `Publication` type in `lib/types.ts`:

```ts
{
  slug: "unique-slug",
  title: "Publication Title",
  authors: "Akinyi M, Coauthor B",
  year: 2027,
  journal: "Journal Name",           // optional
  abstract: "Short abstract text.",  // optional
  doi: "https://doi.org/...",        // optional
  scholarUrl: "https://scholar.google.com/...", // optional
  pdfUrl: "/publications/paper.pdf", // optional
  category: "Peer-Reviewed Publications",
  // | "Conference Abstracts" | "Posters & Presentations"
  // | "Working Papers" | "Policy Briefs"
}
```

The page groups entries by `category` automatically and only shows
categories that exist — never invent a publication that hasn't happened.

## Adding a research/commentary article

Open `content/writing.ts` and add an object to the `writingPieces` array:

```ts
{
  slug: "unique-slug",
  title: "Article Title",
  category: "Commentary", // | "Evidence Review" | "Policy Analysis" | "Research Note"
  dek: "One-sentence summary shown on the Writing page.",
  status: "Planned", // | "Draft" | "Published"
  date: "2026-09", // optional, add once published
}
```

To publish the full text of an article (not just its listing), the
simplest next step is to add an MDX page per article under
`app/writing/[slug]/page.mdx`, or extend `WritingPiece` with a `body`
field. The current build intentionally ships the listing only, since no
articles are written yet.

## Replacing the CV

Replace `public/cv/melissa-akinyi-cv.pdf` with the real CV file, keeping
the same filename — the "Download Academic CV" button on `/cv` links to
it directly. If a different filename is preferred, update the `href` in
`app/cv/page.tsx`.

## Connecting Google Scholar / ORCID / LinkedIn

Placeholder links live in two places:

- `components/Footer.tsx` — the `profiles` array
- `app/about/page.tsx` — the `profiles` array

Replace each `href: "#"` with the real profile URL, e.g.:

```ts
{ label: "Google Scholar", href: "https://scholar.google.com/citations?user=..." }
{ label: "ORCID", href: "https://orcid.org/0000-0000-0000-0000" }
{ label: "LinkedIn", href: "https://www.linkedin.com/in/..." }
```

## Content rules (please keep to these)

- Never mark a project `"Completed"` or `"Published"` unless it truly is.
- Never add a publication, affiliation, award or collaborator that hasn't
  happened yet.
- Writing/commentary pieces are clearly separated from Publications —
  don't move an essay into the Publications page just because it's
  finished; that page is for peer-reviewed and formally submitted outputs.
