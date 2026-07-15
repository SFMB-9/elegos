"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function GalleryFacade() {
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();
  const [entering, setEntering] = useState(false);

  function handleEnter() {
    if (entering) return;
    if (prefersReducedMotion) {
      router.push("/gallery");
      return;
    }
    setEntering(true);
    window.setTimeout(() => router.push("/gallery"), 650);
  }

  return (
    <div className="relative flex flex-col items-center gap-4">
      <button
        type="button"
        onClick={handleEnter}
        aria-label="Enter the gallery"
        className="group cursor-pointer"
      >
        <svg
          viewBox="0 0 400 320"
          className="w-[min(80vw,420px)] h-auto text-ink"
        >
          <line
            x1="20"
            y1="290"
            x2="380"
            y2="290"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M60 290V120L200 60l140 60v130Z"
            fill="var(--wall-deep)"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M60 120 200 60 340 120"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M120 290v-14h160v14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          />

          <rect
            x="150"
            y="180"
            width="100"
            height="110"
            fill="var(--accent-soft)"
            opacity={entering ? 0.6 : 0.25}
            style={{ transition: "opacity 0.5s ease" }}
          />

          <motion.g
            style={{ transformBox: "fill-box", transformOrigin: "left" }}
            animate={{ scaleX: entering ? 0.06 : 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <rect
              x="150"
              y="180"
              width="40"
              height="110"
              fill="var(--paper)"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <circle cx="182" cy="235" r="2.5" fill="currentColor" />
          </motion.g>

          <motion.g
            style={{ transformBox: "fill-box", transformOrigin: "right" }}
            animate={{ scaleX: entering ? 0.06 : 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.05 }}
          >
            <rect
              x="210"
              y="180"
              width="40"
              height="110"
              fill="var(--paper)"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <circle cx="218" cy="235" r="2.5" fill="currentColor" />
          </motion.g>

          <g transform="translate(300 250)">
            <path
              d="M-14 40h28l-3-16H-11l-3 16Z"
              fill="var(--paper)"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M0 24V6" stroke="currentColor" strokeWidth="2" />
            <path
              d="M0 16c-7-1-11-9-9-17 8 1 13 8 9 17Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M0 12c6-2 9-10 6-18-7 3-11 10-6 18Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </g>
        </svg>
      </button>
      <span className="font-serif italic text-sm text-ink-soft tracking-wide opacity-70 group-hover:opacity-100 transition-opacity">
        enter
      </span>
    </div>
  );
}
