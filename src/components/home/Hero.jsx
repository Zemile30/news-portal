"use client";

import ActionIcons from "@/components/ui/ActionIcons";
import  useNews from "@/hooks/useNews";

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

function HeroSkeleton() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-6 md:gap-10 items-center animate-pulse">
      <div className="w-full aspect-[3/2] bg-gray-200" />
      <div className="space-y-3">
        <div className="h-3 w-24 bg-gray-200" />
        <div className="h-7 w-full bg-gray-200" />
        <div className="h-7 w-4/5 bg-gray-200" />
        <div className="h-3 w-full bg-gray-200" />
        <div className="h-3 w-3/4 bg-gray-200" />
      </div>
    </section>
  );
}

export default function Hero() {
  const { data, loading, error } = useNews({ pageSize: 5 });

  if (loading) return <HeroSkeleton />;

  if (error) {
    return (
      <section className="py-10 text-center text-sm text-red-600">
        Xəbərlər yüklənmədi: {error}
      </section>
    );
  }

  const hero = data.find((a) => a.urlToImage) || data[0];

  if (!hero) {
    return (
      <section className="py-10 text-center text-sm text-gray-500">
        Hazırda xəbər tapılmadı.
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-6 md:gap-10 items-center">
      <div className="relative w-full aspect-[3/2] bg-gray-200">
        {hero.urlToImage && (
          <img
            src={hero.urlToImage}
            alt={hero.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>
      <div>
        <div className="flex items-center justify-between">
          <span className="text-brand text-[11px] font-semibold uppercase">
            {hero.source?.name || "News"}
          </span>
          <ActionIcons id={hero.url} className="gap-3" />
        </div>

        <h1 className="mt-3 font-serif font-bold text-2xl lg:text-[26px] leading-tight text-gray-900">
          {cleanTitle(hero.title)}
        </h1>

        {hero.description && (
          <p className="mt-4 text-xs text-gray-600 leading-relaxed">
            {hero.description}
          </p>
        )}

        <div className="mt-4 flex items-center gap-3 text-[10px] text-gray-500">
          <span>{timeAgo(hero.publishedAt)}</span>
          <span>By {hero.author || hero.source?.name || "Unknown"}</span>
        </div>
      </div>
    </section>
  );
}