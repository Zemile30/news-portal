'use client';
import { useState, useMemo } from "react";
import NewsCard from "@/components/ui/NewsCard";
import Image from "next/image";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { stories, tabs } from "@/lib/mockData";

export default function LatestStories() {
    const [activeTab, setActiveTab] = useState("latest");
    const [view, setView] = useState("grid");
    const [auto, setAuto] = useState(false);

    const filtered = useMemo(
        () => (activeTab === "latest" ? stories : stories.filter((s) => s.section === activeTab)),
        [activeTab]
    );

    const { visible, hasMore, loadMore, sentinelRef } = useInfiniteScroll(
        filtered, 4, activeTab, auto
    );

    const handleViewMore = () => {
        loadMore();
        setAuto(true);
    };

    return (
        <section>
            <div className="bg-white flex items-center justify-between px-3 h-9 text-xs">
                <div className="flex items-center gap-6 h-full">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            aria-pressed={activeTab === tab.id}
                            className={`h-full border-b-2 ${activeTab === tab.id
                                ? "border-brand font-semibold text-gray-900"
                                : "border-transparent text-gray-700 hover:text-brand"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => setView((v) => (v === "grid" ? "list" : "grid"))}
                    aria-label={view === "grid" ? "Switch to list view" : "Switch to grid view"}
                    aria-pressed={view === "list"}
                    className="shrink-0"
                >
                    <Image
                        src="/images/menu.png"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-auto object-contain"
                    />
                </button>
            </div>
            <div
                className={`mt-3 grid gap-6 ${view === "grid" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
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