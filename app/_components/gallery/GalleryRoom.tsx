"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { pieces } from "@/app/_data/gallery";
import FramedPiece from "./FramedPiece";
import NavArrows from "./NavArrows";
import PamphletLink from "./PamphletLink";
import PieceLabel from "./PieceLabel";
import ElegosLogo from "@/app/_components/shared/ElegosLogo";


const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "110vw" : "-110vw",
  }),
  center: { x: 0 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-110vw" : "110vw",
  }),
};

// Floor height in px — keep in sync with the floor div's h-* class
const FLOOR_H = 112; // h-28

export default function GalleryRoom() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const canPrev = index > 0;
  const canNext = index < pieces.length - 1;

  const go = useCallback((delta: number) => {
    setIndex((i) => {
      const next = Math.min(Math.max(i + delta, 0), pieces.length - 1);
      if (next !== i) setDirection(delta);
      return next;
    });
  }, []);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("galleryIndex");
      const n = saved !== null ? parseInt(saved, 10) : 0;

      if (isFinite(n) && n >= 0 && n < pieces.length) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIndex(n);
      }
    } catch {
      // noop
    }
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem("galleryIndex", String(index));
    } catch {
      // noop
    }
  }, [index]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const piece = pieces[index];

  return (
    <div className="relative flex-1 flex flex-col overflow-hidden bg-wall">
      {/* Logo */}
      <div className="absolute top-5 left-6 z-10">
        <Link href="/" aria-label="élegos">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <ElegosLogo className="w-36 opacity-70 hover:opacity-100 transition-opacity" />
        </Link>
      </div>

      {/* Counter */}
      <div className="absolute top-6 right-6 font-serif italic text-sm text-ink-soft select-none z-10">
        {index + 1} / {pieces.length}
      </div>

      {/* Wall — centers painting with breathing room on all sides */}
      <div className="flex-1 flex flex-col items-center justify-center py-10 px-6 overflow-hidden">
        <AnimatePresence mode="popLayout" custom={direction} initial={false}>
          <motion.div
            key={piece.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col items-center"
          >
            <FramedPiece piece={piece} />
            <PieceLabel piece={piece} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Orthographic floor */}
      <div className="h-28 flex-shrink-0 bg-floor border-t-2 border-floor-deep" />

      {/* Nav arrows span the wall area only */}
      <NavArrows
        onPrev={() => go(-1)}
        onNext={() => go(1)}
        canPrev={canPrev}
        canNext={canNext}
        offsetBottom={FLOOR_H}
      />

      <PamphletLink />
    </div>
  );
}
