"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PamphletLink() {
  return (
    <Link
      href="/catalog"
      aria-label="Open the seasonal catalog"
      className="group absolute bottom-32 left-6 flex flex-col items-center gap-1 z-10"
    >
      <motion.svg
        viewBox="0 0 40 32"
        className="h-8 w-10 text-ink"
        whileHover={{ y: -3, rotate: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <path
          d="M4 6c6-3 12-3 16 0 4-3 10-3 16 0v20c-6-3-12-3-16 0-4-3-10-3-16 0Z"
          fill="var(--paper)"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M20 6v20" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      </motion.svg>
      <span className="font-serif italic text-[11px] text-ink-soft opacity-70 group-hover:opacity-100 transition-opacity">
        catálogo
      </span>
    </Link>
  );
}
