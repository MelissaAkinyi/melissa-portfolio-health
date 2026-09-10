import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-px mx-auto flex max-w-content flex-col items-start py-32">
      <p className="eyebrow mb-3">404</p>
      <h1 className="font-serif text-4xl text-ink">Page not found</h1>
      <p className="mt-4 max-w-prose text-ink-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist, or has moved.
      </p>
      <Link
        href="/"
        className="link-underline mt-8 font-mono text-[12px] uppercase tracking-widest2 text-teal-deep"
      >
        Back to home
      </Link>
    </div>
  );
}
