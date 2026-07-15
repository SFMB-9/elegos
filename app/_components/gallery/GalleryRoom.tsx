"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { pieces } from "@/app/_data/gallery";
import FramedPiece from "./FramedPiece";
import Placard from "./Placard";
import NavArrows from "./NavArrows";
import VisitorFigure from "./VisitorFigure";
import PamphletLink from "./PamphletLink";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.96,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
    scale: 0.96,
  }),
};

export default function GalleryRoom() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [steps, setSteps] = useState(0);

  const canPrev = index > 0;
  const canNext = index < pieces.length - 1;

  const go = useCallback((delta: number) => {
    setIndex((i) => {
      const next = Math.min(Math.max(i + delta, 0), pieces.length - 1);
      if (next !== i) {
        setDirection(delta);
        setSteps((s) => s + 1);
      }
      return next;
    });
  }, []);

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
    <div
      className="relative flex-1 overflow-hidden bg-wall"
      style={{ perspective: 1200 }}
    >
      <div
        className="absolute inset-y-0 left-0 w-[18%] bg-wall-deep"
        style={{ clipPath: "polygon(0 0, 100% 15%, 100% 85%, 0 100%)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-[18%] bg-wall-deep"
        style={{ clipPath: "polygon(100% 0, 0 15%, 0 85%, 100% 100%)" }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-[32%] bg-floor"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 80% 0, 20% 0)" }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-[32%]"
        style={{
          background: "linear-gradient(to top, var(--floor-deep), transparent)",
          clipPath: "polygon(0 100%, 100% 100%, 80% 0, 20% 0)",
        }}
      />

      <div className="absolute top-6 right-6 font-serif italic text-sm text-ink-soft">
        {index + 1} / {pieces.length}
      </div>

      <div className="relative h-full flex flex-col items-center justify-center gap-6 px-6">
        <div
          className="relative flex items-center justify-center"
          style={{ minHeight: "min(50vh, 420px)" }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={piece.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              <FramedPiece piece={piece} />
            </motion.div>
          </AnimatePresence>
        </div>
        <Placard piece={piece} />
      </div>

      <NavArrows
        onPrev={() => go(-1)}
        onNext={() => go(1)}
        canPrev={canPrev}
        canNext={canNext}
      />
      <VisitorFigure stepTrigger={steps} />
      <PamphletLink />
    </div>
  );
}
