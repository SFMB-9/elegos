import Link from "next/link";

export default function CatalogPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center gap-4 px-6 py-16 bg-wall text-center">
      <h1 className="font-serif italic text-3xl text-ink">Seasonal Catalog</h1>
      <p className="max-w-sm text-sm text-ink-soft">
        The curated seasonal catalog is still being bound. Check back soon.
      </p>
      <Link
        href="/gallery"
        className="mt-4 text-sm font-serif italic text-accent hover:text-accent-soft transition-colors"
      >
        ← back to the gallery
      </Link>
    </main>
  );
}
