import type { ArtworkKind } from "@/app/_data/gallery";

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Plant() {
  return (
    <>
      <path d="M32 82h36l-4-20H36l-4 20Z" {...strokeProps} />
      <path d="M50 62V30" {...strokeProps} />
      <path d="M50 46c-10-2-16-14-14-26 12 2 20 12 14 26Z" {...strokeProps} />
      <path d="M50 40c9-4 13-16 9-27-11 4-17 15-9 27Z" {...strokeProps} />
    </>
  );
}

function Triangle() {
  return (
    <>
      <path d="M50 18 82 78H18Z" {...strokeProps} />
      <path d="M50 38 68 72H32Z" {...strokeProps} />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <line
          key={deg}
          x1="50"
          y1="50"
          x2={50 + 46 * Math.cos((deg * Math.PI) / 180)}
          y2={50 + 46 * Math.sin((deg * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.35"
        />
      ))}
    </>
  );
}

function FlameEye() {
  return (
    <>
      <path d="M14 52c12-18 60-18 72 0-12 18-60 18-72 0Z" {...strokeProps} />
      <circle cx="50" cy="52" r="12" {...strokeProps} />
      <circle cx="50" cy="52" r="4" fill="currentColor" stroke="none" />
      <path
        d="M50 30c-6-8-4-16 2-22-2 8 2 12 6 16 4 4 4 10-2 14-2-4-4-6-6-8Z"
        {...strokeProps}
      />
    </>
  );
}

function Gem() {
  return (
    <>
      <path d="M26 38 50 16l24 22-8 34H34Z" {...strokeProps} />
      <path d="M26 38h48M38 38 50 16M62 38 50 16M34 72 26 38M66 72l8-34" {...strokeProps} strokeWidth={1.5} opacity={0.5} />
    </>
  );
}

function Spiral() {
  return (
    <path
      d="M50 50c0-4 4-6 8-4s6 8 2 12-14 4-18-4 2-20 14-22 24 6 24 20-14 26-30 24"
      {...strokeProps}
    />
  );
}

function Peak() {
  return (
    <>
      <circle cx="72" cy="26" r="8" {...strokeProps} />
      <path d="M12 76 38 34l14 18 8-10 28 34Z" {...strokeProps} />
      <line x1="8" y1="80" x2="92" y2="80" {...strokeProps} />
    </>
  );
}

const artByKind: Record<ArtworkKind, () => React.ReactElement> = {
  plant: Plant,
  triangle: Triangle,
  "flame-eye": FlameEye,
  gem: Gem,
  spiral: Spiral,
  peak: Peak,
};

export default function ArtworkArt({
  kind,
  className,
}: {
  kind: ArtworkKind;
  className?: string;
}) {
  const Art = artByKind[kind];
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-hidden="true"
    >
      <Art />
    </svg>
  );
}
