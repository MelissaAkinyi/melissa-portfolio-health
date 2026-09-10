import Link from "next/link";

const links = [
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/writing", label: "Writing" },
  { href: "/cv", label: "CV" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="container-px mx-auto flex max-w-content items-center justify-between py-5">
        <Link
          href="/"
          className="font-serif text-lg tracking-tight text-ink hover:text-teal-deep transition-colors"
        >
          Melissa Akinyi
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="link-underline font-mono text-[12px] uppercase tracking-widest2 text-ink-muted hover:text-teal-deep transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile: compact link row, no menu system needed at this scale */}
        <ul className="flex items-center gap-4 overflow-x-auto md:hidden">
          {links.map((l) => (
            <li key={l.href} className="shrink-0">
              <Link
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-wide text-ink-muted"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
