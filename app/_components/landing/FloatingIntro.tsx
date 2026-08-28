import { site } from "@/app/_data/gallery";
import ElegosLogo from "@/app/_components/shared/ElegosLogo";

export default function FloatingIntro() {
  return (
    <div className="text-center select-none">
      <ElegosLogo className="w-96 sm:w-[520px] mx-auto opacity-90" />
      <p className="mt-4 max-w-xs mx-auto text-sm text-ink-soft">
        {site.tagline}
      </p>
    </div>
  );
}
