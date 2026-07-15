import { artistName, type Piece } from "@/app/_data/gallery";

export default function Placard({ piece }: { piece: Piece }) {
  return (
    <div className="max-w-xs text-center border-t border-paper-edge pt-3">
      <h2 className="font-serif italic text-lg text-ink">{piece.title}</h2>
      <p className="mt-1 text-xs uppercase tracking-wide text-ink-soft">
        {artistName(piece.artistId)} · {piece.year} · {piece.medium}
      </p>
      <p className="mt-2 text-sm text-ink-soft">{piece.description}</p>
    </div>
  );
}
