import FloatingIntro from "@/app/_components/landing/FloatingIntro";
import GalleryFacade from "@/app/_components/landing/GalleryFacade";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center gap-10 px-6 py-16 bg-wall">
      <FloatingIntro />
      <GalleryFacade />
    </main>
  );
}
