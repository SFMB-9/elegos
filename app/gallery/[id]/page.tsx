import { notFound } from "next/navigation";
import { artistName, pieces } from "@/app/_data/gallery";
import OsdViewer from "@/app/_components/gallery/OsdViewer";
import TransitionLink from "@/app/_components/shared/TransitionLink";

export default async function PiecePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const piece = pieces.find((p) => p.id === id);
  if (!piece) notFound();

  return (
    <main className="flex-1 flex flex-col bg-wall">
      {/* Top bar */}
      <div className="flex items-center gap-4 px-6 py-4 border-b border-paper-edge">
        <TransitionLink
          href="/gallery"
          className="font-serif italic text-sm text-ink-soft hover:text-ink transition-colors"
        >
          ← galería
        </TransitionLink>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Viewer */}
        <div className="flex-1 min-h-[50vh] lg:min-h-0 relative">
          {piece.iiif ? (
            <OsdViewer
              src={piece.iiif}
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-ink-soft font-serif italic text-sm">
              Image coming soon
            </div>
          )}
        </div>

        {/* Info panel */}
        <aside className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-6 px-6 py-8 border-t lg:border-t-0 lg:border-l border-paper-edge overflow-y-auto">
          <div>
            <h1 className="font-serif italic text-2xl text-ink">{piece.title}</h1>
            <p className="mt-1 text-xs uppercase tracking-wide text-ink-soft">
              {artistName(piece.artistId)}
            </p>
            <p className="mt-1 text-xs text-ink-soft">
              {piece.year} · {piece.medium}
            </p>
          </div>

          <p className="text-sm text-ink-soft leading-relaxed">{piece.description}</p>

          <div className="mt-auto pt-4 border-t border-paper-edge">
            <button
              type="button"
              className="w-full border border-ink/30 bg-paper px-4 py-2 font-serif italic text-sm text-ink hover:bg-wall transition-colors cursor-pointer"
            >
              Contactar galería
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}
