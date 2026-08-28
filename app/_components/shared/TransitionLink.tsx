"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import type {
  AnchorHTMLAttributes,
  MouseEvent,
} from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function TransitionLink({
  href,
  children,
  className,
  style,
  ...props
}: Props) {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    if (leaving) return;

    setLeaving(true);

    setTimeout(() => {
      router.push(href);
    }, 280);
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

      <a
        href={href}
        onClick={handleClick}
        className={className}
        style={style}
        {...props}
      >
        {children}
      </a>
    </>
  );
}
