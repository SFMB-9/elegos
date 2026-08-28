import Link from "next/link";

export default function CatalogPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center gap-4 px-6 py-16 bg-wall text-center">
      <h1 className="font-serif italic text-3xl text-ink">Catálogo de temporada</h1>
      <p className="max-w-sm text-sm text-ink-soft">
        El catálogo de temporada está siendo encuadernado. Vuelve pronto.
      </p>
      <Link
        href="/gallery"
        className="mt-4 text-sm font-serif italic text-accent hover:text-accent-soft transition-colors"
      >
        ← volver a la galería
      </Link>
    </main>
  );
}
