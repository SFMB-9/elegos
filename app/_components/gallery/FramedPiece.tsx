import type { CSSProperties } from "react";
import type { Piece } from "@/app/_data/gallery";
import ArtworkArt from "@/app/_components/shared/ArtworkArt";

interface FrameDef {
  src: string;
  slice: number;
  /** CSS value for border-width — scales with viewport via clamp() */
  width: string;
}

const FRAME_CONFIG: Record<string, FrameDef> = {
  gold:        { src: "/frames/gold.svg",      slice: 50, width: "clamp(14px, 3.5vw, 32px)" },
  "dark-wood": { src: "/frames/dark-wood.svg", slice: 50, width: "clamp(14px, 3.5vw, 32px)" },
  white:       { src: "/frames/white.svg",     slice: 50, width: "clamp(10px, 2.2vw, 20px)" },
};

const SIZE_CONFIG: Record<string, string> = {
  sm: "min(45vw, 260px)",
  md: "min(60vw, 420px)",
  lg: "min(72vw, 580px)",
  xl: "min(82vw, 740px)",
};

export function pieceWidth(piece: Piece): string {
  return SIZE_CONFIG[piece.size ?? "md"] ?? SIZE_CONFIG.md;
}

export default function FramedPiece({ piece }: { piece: Piece }) {
  const frame = piece.frame ? FRAME_CONFIG[piece.frame] : null;
  const width = pieceWidth(piece);

  const frameStyle: CSSProperties = frame
    ? {
        borderImage: `url('${frame.src}') ${frame.slice} / ${frame.width} / 0 stretch`,
        borderWidth: frame.width,
        borderStyle: "solid",
      }
    : {};

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden shadow-2xl${!frame ? " border-[6px] border-ink bg-paper" : ""}`}
      style={{ aspectRatio: piece.aspect, width, ...frameStyle }}
    >
      {/* Inner edge line — separates frame from painting surface */}
      <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none z-10" />

      {/* Fallback mat for unframed pieces */}
      {!frame && (
        <div className="absolute inset-2 border border-paper-edge pointer-events-none z-10" />
      )}

      {piece.iiif ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={piece.iiif}
          alt={piece.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <ArtworkArt kind={piece.art} className="w-2/3 h-2/3 text-ink" />
      )}
    </div>
  );
}
