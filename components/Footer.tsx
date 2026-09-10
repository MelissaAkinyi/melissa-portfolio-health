import Link from "next/link";

// Placeholder links — replace with real profile URLs.
// See README: "Connecting Google Scholar / ORCID / LinkedIn".
const profiles = [
  { label: "Google Scholar", href: "#" },
  { label: "ORCID", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-alt">
      <div className="container-px mx-auto max-w-content py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl text-ink">Melissa Akinyi</p>
            <p className="mt-2 max-w-xs text-sm text-ink-muted">
              Physiotherapist &amp; emerging health systems researcher.
              Health systems · health services research · rehabilitation ·
              digital health.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-3">Navigate</p>
            <ul className="space-y-2 text-sm">
              {[
                ["Research", "/research"],
                ["Projects", "/projects"],
                ["Publications", "/publications"],
                ["Writing", "/writing"],
                ["CV", "/cv"],
                ["About", "/about"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-ink-muted hover:text-teal-deep transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-3">Academic Profiles</p>
            <ul className="space-y-2 text-sm">
              {profiles.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    className="text-ink-muted hover:text-teal-deep transition-colors"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Melissa Akinyi.</p>
          <p>Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
}
