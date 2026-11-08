"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import NewsCard from "@/components/ui/NewsCard";
import useNews from "@/hooks/useNews";

const PAGE_SIZE = 4;

const tabs = [
  { id: "latest", label: "Latest", category: "general" },
  { id: "business", label: "Business", category: "business" },
  { id: "technology", label: "Technology", category: "technology" },
  { id: "sports", label: "Sports", category: "sports" },
  { id: "health", label: "Health", category: "health" },
  { id: "science", label: "Science", category: "science" },
];

function timeAgo(dateString) {
  if (!dateString) return "";
  const diff = Math.floor((Date.now() - new Date(dateString).getTime()) / 1000);
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

function cleanTitle(title = "") {
  return title.replace(/\s+-\s+[^-]+$/, "");
}

function toStory(article, section) {
  return {
    id: article.url,
    url: article.url,
    title: cleanTitle(article.title),
    image: article.urlToImage,
    excerpt: article.description,
    author: article.author || article.source?.name || "Unknown",
    source: article.source?.name,
    time: timeAgo(article.publishedAt),
    section,
    category: section === "latest" ? "general" : section,
    raw: article,
  };
}

function CardsSkeleton({ view }) {
  return (
    <div
      className={`mt-2 grid gap-x-6 xl:gap-x-9 gap-y-6 xl:gap-y-8 animate-pulse ${view === "grid" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
        }`}
    >
      {Array.from({ length: PAGE_SIZE }).map((_, i) => (
        <div key={i} className="space-y-3">
          <div className="w-full aspect-[3/2] bg-gray-200" />
          <div className="h-4 w-4/5 bg-gray-200" />
          <div className="h-3 w-full bg-gray-200" />
        </div>
      ))}
    </div>
  );
}

export default function LatestStories() {
  const [activeTab, setActiveTab] = useState("latest");
  const [view, setView] = useState("grid");
  const [auto, setAuto] = useState(false);
  const [page, setPage] = useState(1);
  const sentinelRef = useRef(null);

  const category = useMemo(
    () => tabs.find((t) => t.id === activeTab)?.category || "general",
    [activeTab]
  );

  const { data, loading, error, hasMore } = useNews({
    category,
    page,
    pageSize: PAGE_SIZE,
  });

  const stories = useMemo(() => {
    const seen = new Set();
    return data
      .filter((a) => a.url && !seen.has(a.url) && seen.add(a.url))
      .map((a) => toStory(a, activeTab));
  }, [data, activeTab]);

  const handleTab = (id) => {
    if (id === activeTab) return;
    setActiveTab(id);
    setPage(1);
    setAuto(false);
  };

  const handleViewMore = () => {
    setPage((p) => p + 1);
    setAuto(true);
  };

  useEffect(() => {
    if (!auto || !hasMore || loading || error) return;
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setPage((p) => p + 1);
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [auto, hasMore, loading, error, stories.length]);

  const isFirstLoad = loading && page === 1;

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
                onClick={() => handleTab(tab.id)}
                className={`relative pb-1 text-xs xl:text-sm transition-colors ${isActive
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
            className="w-5 h-5 xl:w-6 xl:h-6 object-contain"
          />
        </button>
      </div>

      {isFirstLoad ? (
        <CardsSkeleton view={view} />
      ) : error && stories.length === 0 ? (
        <p className="mt-6 text-center text-sm text-red-600">
          Xəbərlər yüklənmədi: {error}
        </p>
      ) : stories.length === 0 ? (
        <p className="mt-6 text-center text-sm text-gray-500">
          Bu kateqoriyada xəbər tapılmadı.
        </p>
      ) : (
        <div
          className={`mt-2 grid gap-x-6 xl:gap-x-9 gap-y-6 xl:gap-y-8 ${view === "grid" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
            }`}
        >
          {stories.map((story) => (
            <NewsCard key={story.id} story={story} view={view} />
          ))}
        </div>
      )}

      {loading && page > 1 && (
        <p className="mt-6 text-center text-xs text-gray-500">Loading...</p>
      )}

      {error && stories.length > 0 && (
        <p className="mt-6 text-center text-xs text-red-600">
          Daha çox xəbər yüklənmədi: {error}
        </p>
      )}

      {!auto && hasMore && !loading && stories.length > 0 && (
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