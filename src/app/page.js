import Hero from "@/components/home/Hero";
import BreakingBanner from "@/components/home/BreakingBanner";
import SidePanel from "@/components/home/SidePanel";
import NewsCard from "@/components/ui/NewsCard";
import { stories } from "@/lib/mockData";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <Hero />
      <BreakingBanner />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 lg:gap-12">
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stories.slice(0, 4).map((story) => (
            <NewsCard key={story.id} story={story} view="grid" />
          ))}
        </section>

        <SidePanel />
      </div>
    </main>
  );
}