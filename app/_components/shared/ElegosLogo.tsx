import type { CSSProperties } from "react";

interface Props {
  /** Tailwind width class, e.g. "w-64" or "w-20" */
  className?: string;
  /** CSS color value for the accent (letters) layer. Defaults to var(--accent). */
  accentColor?: string;
}

const maskBase: CSSProperties = {
  WebkitMaskSize: "contain",
  maskSize: "contain",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
};

export default function ElegosLogo({ className = "w-64", accentColor }: Props) {
  return (
    <div
      className={`relative select-none ${className}`}
      style={{ aspectRatio: "638 / 211" }}
      role="img"
      aria-label="élegos"
    >
      {/* Base stroke — ink color */}
      <div
        className="absolute inset-0"
        style={{
          ...maskBase,
          WebkitMaskImage: "url('/elegos_mark.svg')",
          maskImage: "url('/elegos_mark.svg')",
          backgroundColor: "var(--ink)",
        }}
      />
      {/* Letter glyphs — accent color */}
      <div
        className="absolute inset-0"
        style={{
          ...maskBase,
          WebkitMaskImage: "url('/elegos_letters.svg')",
          maskImage: "url('/elegos_letters.svg')",
          backgroundColor: accentColor ?? "var(--accent)",
        }}
      />
    </div>
  );
}
