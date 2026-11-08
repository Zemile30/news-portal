import Hero from "@/components/home/Hero";
import BreakingBanner from "@/components/home/BreakingBanner";
import LatestStories from "@/components/home/LatestStories";
import SidePanel from "@/components/home/SidePanel";
import EditorsPicks from "@/components/home/EditorsPicks";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <Hero />
      <BreakingBanner />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 lg:gap-12">
        <LatestStories />
        <SidePanel />
      </div>

      <EditorsPicks />
    </main>
  );
}