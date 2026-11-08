"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import ActionIcons from "@/components/ui/ActionIcons";
import { StarIcon } from "@/components/icons";
import useNews from "@/hooks/useNews";
import ArticleLink from "../ui/ArticleLink";

const GAP = 32; // gap-8

function cleanTitle(title = "") {
  return title.replace(/\s+-\s+[^-]+$/, "");
}

function PicksSkeleton() {
  return (
    <div className="mt-4 flex gap-8 animate-pulse">
      {[0, 1].map((i) => (
        <div key={i} className="flex gap-4 w-full md:w-[calc(50%-16px)]">
          <div className="w-40 sm:w-44 h-28 shrink-0 bg-gray-200 rounded-[6px]" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-4/5 bg-gray-200" />
            <div className="h-3 w-full bg-gray-200" />
            <div className="h-3 w-3/4 bg-gray-200" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function EditorsPicks() {
  // NewsAPI-də baxış sayı yoxdur, ona görə top-headlines-dən business kateqoriyası götürülür
  const { data, loading, error } = useNews({
    category: "business",
    pageSize: 12,
  });

  const picks = data.filter((a) => a.title && a.url).slice(0, 8);
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [pages, setPages] = useState(4);

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setPages(Math.max(1, Math.round(el.scrollWidth / el.clientWidth)));
  }, []);

  // Data gəldikdən sonra da yenidən ölç
  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure, picks.length]);

  const handleScroll = (e) => {
    const el = e.currentTarget;
    setActive(Math.round(el.scrollLeft / (el.clientWidth + GAP)));
  };

  const goTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * (el.clientWidth + GAP), behavior: "smooth" });
  };

  return (
    <section>
      <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-900">
        Editor&apos;s Picks <StarIcon />
      </h2>

      {loading ? (
        <PicksSkeleton />
      ) : error ? (
        <p className="mt-4 text-sm text-red-600">
          Editor&apos;s Picks yüklənmədi: {error}
        </p>
      ) : picks.length === 0 ? (
        <p className="mt-4 text-sm text-gray-500">Hazırda xəbər tapılmadı.</p>
      ) : (
        <>
          {/* Üfüqi slider */}
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="mt-4 flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {picks.map((pick, i) => (
              <article
                key={pick.url}
                className="snap-start shrink-0 w-full md:w-[calc(50%-16px)] flex gap-4"
              >
                <div className="relative w-40 sm:w-44 h-28 shrink-0 bg-gray-200 rounded-[6px] overflow-hidden">
                  {pick.urlToImage && (
                    <img
                      src={pick.urlToImage}
                      alt={pick.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}

                  {/* Etiket yalnız hər cüt kartın birində, sol tərəfi ox şəklində */}
                  {i % 2 === 0 && pick.category && (
                    <span className="absolute top-2 right-0 bg-brand text-white text-[9px] font-medium tracking-wide uppercase pl-3 pr-2 py-0.5 [clip-path:polygon(8px_0,100%_0,100%_100%,8px_100%,0_50%)]">
                      {pick.category}
                    </span>
                  )}

                  <div className="absolute inset-x-0 bottom-0 pt-6 pb-1.5 bg-linear-to-t from-black/60 to-transparent">
                    <ActionIcons
                      id={pick.url}
                      tone="text-white"
                      className="justify-center gap-3"
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <h3 className="font-serif font-bold text-sm leading-snug text-gray-900">
                    <ArticleLink article={pick} className="hover:text-brand">
                      {cleanTitle(pick.title)}
                    </ArticleLink>
                  </h3>
                  {pick.description && (
                    <p className="mt-2 text-[11px] text-gray-600 leading-relaxed line-clamp-4">
                      {pick.description}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Pagination nöqtələri */}
          {pages > 1 && (
            <div className="mt-4 flex justify-center gap-2">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Page ${i + 1}`}
                  className={`h-0.5 transition-all ${i === active ? "w-5 bg-brand" : "w-3 bg-brand/25"
                    }`}
                />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}