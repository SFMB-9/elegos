import type { Piece } from "@/app/_data/gallery";
import ArtworkArt from "@/app/_components/shared/ArtworkArt";

export default function FramedPiece({ piece }: { piece: Piece }) {
  return (
    <div
      className="relative flex items-center justify-center border-[6px] border-ink bg-paper shadow-2xl"
      style={{ aspectRatio: piece.aspect, width: "min(56vw, 380px)" }}
    >
      <div className="absolute inset-2 border border-paper-edge pointer-events-none" />
      <ArtworkArt kind={piece.art} className="w-2/3 h-2/3 text-ink" />
    </div>
  );
}
