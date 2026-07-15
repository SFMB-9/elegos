import { site } from "@/app/_data/gallery";

export default function FloatingIntro() {
  return (
    <div className="text-center select-none">
      <h1 className="font-serif italic text-4xl sm:text-5xl tracking-tight text-ink">
        {site.name}
      </h1>
      <p className="mt-3 max-w-xs mx-auto text-sm text-ink-soft">
        {site.tagline}
      </p>
    </div>
  );
}
