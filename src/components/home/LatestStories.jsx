'use client';
import { useState, useMemo } from "react";
import Image from "next/image";
import NewsCard from "@/components/ui/NewsCard";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { stories, tabs } from "@/lib/mockData";

export default function LatestStories() {
  const [activeTab, setActiveTab] = useState("latest");
  const [view, setView] = useState("grid");
  const [auto, setAuto] = useState(false);

  const filtered = useMemo(
    () =>
      activeTab === "latest"
        ? stories
        : stories.filter((s) => s.section === activeTab),
    [activeTab]
  );

  const { visible, hasMore, loadMore, sentinelRef } = useInfiniteScroll(
    filtered,
    4,
    activeTab,
    auto
  );

  const handleViewMore = () => {
    loadMore();
    setAuto(true);
  };

  return (
    <section>
      <div className="bg-white flex items-center justify-between h-10 xl:h-12 px-3 xl:px-4">
        <div role="tablist" className="flex items-center gap-6 xl:gap-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-1 text-xs xl:text-sm transition-colors ${
                  isActive
                    ? "font-semibold text-gray-900"
                    : "font-medium text-gray-800 hover:text-brand"
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-brand" />
                )}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setView((v) => (v === "grid" ? "list" : "grid"))}
          aria-label={
            view === "grid" ? "Switch to list view" : "Switch to grid view"
          }
          aria-pressed={view === "list"}
          className="shrink-0"
        >
          <Image
            src="/images/menu.png"
            alt=""
            width={24}
            height={24}
            className="w-5 xl:w-6 h-auto object-contain"
          />
        </button>
      </div>
      <div
        className={`mt-2 grid gap-x-6 xl:gap-x-9 gap-y-6 xl:gap-y-8 ${
          view === "grid" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {visible.map((story) => (
          <NewsCard key={story.id} story={story} view={view} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleViewMore}
            className="border border-brand/30 text-brand text-[10px] tracking-widest uppercase px-12 py-3 hover:bg-brand hover:text-white transition-colors"
          >
            View More
          </button>
        </div>
      )}

      {auto && hasMore && <div ref={sentinelRef} className="h-1" />}
    </section>
  );
}