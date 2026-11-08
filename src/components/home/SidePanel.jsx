"use client";

import useNews from "@/hooks/useNews";
import LocationNews from "./LocationNews";
import ArticleLink from "../ui/ArticleLink";

function cleanTitle(title = "") {
  return title.replace(/\s+-\s+[^-]+$/, "");
}

function LiveSkeleton() {
  return (
    <div className="mt-3 animate-pulse">
      <div className="w-full aspect-[7/5] bg-gray-200" />
      <div className="mt-2 h-4 w-full bg-gray-200" />
      <div className="mt-2 h-4 w-3/4 bg-gray-200" />
    </div>
  );
}

export default function SidePanel() {
  // Hero ilə eyni sorğu (pageSize: 5), ona görə cache-dən gəlir və əlavə limit sərf olunmur
  const { data, loading, error } = useNews({ pageSize: 5 });

  // Hero birinci şəkilli xəbəri götürür, Live ikincini göstərsin ki, təkrar olmasın
  const withImage = data.filter((a) => a.title && a.url && a.urlToImage);
  const live = withImage[1] || withImage[0] || data.find((a) => a.title && a.url);

  return (
    <aside className="space-y-8">
      <section>
        <div className="h-14 flex items-center gap-2 text-brand text-xs font-semibold">
          <span>Live</span>
          <span className="w-2.5 h-2.5 rounded-full bg-brand ring-4 ring-brand/20 animate-pulse" />
        </div>

        {loading ? (
          <LiveSkeleton />
        ) : error ? (
          <p className="mt-3 text-xs text-red-600">
            Live xəbər yüklənmədi: {error}
          </p>
        ) : !live ? (
          <p className="mt-3 text-xs text-gray-500">Hazırda xəbər tapılmadı.</p>
        ) : (
          <article className="mt-3">
            <div className="relative w-full aspect-[7/5] bg-gray-200">
              {live.urlToImage && (
                <img
                  src={live.urlToImage}
                  alt={live.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </div>
            <h3 className="mt-2 font-serif font-bold text-sm leading-snug text-gray-900">
              <ArticleLink article={live} className="hover:text-brand">
                {cleanTitle(live.title)}
              </ArticleLink>
            </h3>
          </article>
        )}
      </section>

      <LocationNews />
    </aside>
  );
}