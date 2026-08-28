"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  "aria-label"?: string;
}

export default function TransitionLink({ href, children, className, style, "aria-label": ariaLabel }: Props) {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    if (leaving) return;
    setLeaving(true);
    setTimeout(() => router.push(href), 280);
  }

  return (
    <>
      {leaving && (
        <motion.div
          className="fixed inset-0 bg-wall z-50 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.22 }}
        />
      )}
      <a href={href} onClick={handleClick} className={className} style={style} aria-label={ariaLabel}>
        {children}
      </a>
    </>
  );
}
