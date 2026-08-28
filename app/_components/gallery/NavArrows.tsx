export default function NavArrows({
  onPrev,
  onNext,
  canPrev,
  canNext,
  offsetBottom = 0,
}: {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
  offsetBottom?: number;
}) {
  // Center arrows in the wall area (above the floor) by shifting up half the floor height
  const style = offsetBottom
    ? { top: `calc(50% - ${offsetBottom / 2}px)` }
    : undefined;

  return (
    <>
      <button
        type="button"
        onClick={onPrev}
        disabled={!canPrev}
        aria-label="Previous piece"
        style={style}
        className="absolute left-4 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 bg-paper/80 text-ink transition-opacity disabled:opacity-30 disabled:pointer-events-none hover:bg-paper cursor-pointer z-10"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={!canNext}
        aria-label="Next piece"
        style={style}
        className="absolute right-4 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 bg-paper/80 text-ink transition-opacity disabled:opacity-30 disabled:pointer-events-none hover:bg-paper cursor-pointer z-10"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </>
  );
}
