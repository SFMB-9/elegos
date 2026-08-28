"use client";

import { useState } from "react";
import TransitionLink from "@/app/_components/shared/TransitionLink";
import { motion, AnimatePresence } from "framer-motion";
import { artistName, type Piece } from "@/app/_data/gallery";
import { pieceWidth } from "@/app/_components/gallery/FramedPiece";

export default function PieceLabel({ piece }: { piece: Piece }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TransitionLink
      href={`/gallery/${piece.id}`}
      className="mt-3 block border border-paper-edge bg-paper/90 px-4 py-2 text-center transition-colors hover:bg-paper"
      style={{ width: pieceWidth(piece) }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <p className="font-serif italic text-sm text-ink">{piece.title}</p>
      <p className="text-[11px] uppercase tracking-wide text-ink-soft">
        {artistName(piece.artistId)}
      </p>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-[11px] uppercase tracking-wide text-ink-soft">
              {piece.year} · {piece.medium}
            </p>
            <p className="mt-1 text-xs text-ink-soft leading-relaxed">
              {piece.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionLink>
  );
}
