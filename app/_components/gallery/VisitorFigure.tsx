"use client";

import { motion } from "framer-motion";

export default function VisitorFigure({ stepTrigger }: { stepTrigger: number }) {
  return (
    <div className="absolute bottom-8 left-[26%] h-16 w-10" aria-hidden="true">
      <motion.svg
        key={stepTrigger}
        viewBox="0 0 40 64"
        className="h-full w-full text-ink"
        initial={{ y: 4, opacity: 0.5 }}
        animate={{ y: 0, opacity: 0.85 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <circle cx="20" cy="10" r="7" fill="currentColor" />
        <path
          d="M20 17v22"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M20 24l-10 8M20 24l10 8"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M20 39l-9 20M20 39l9 20"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
}
