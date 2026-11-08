"use client";

import useNews from "@/hooks/useNews";
import ArticleLink from "../ui/ArticleLink";

function cleanTitle(title = "") {
  return title.replace(/\s+-\s+[^-]+$/, "");
}

export default function BreakingBanner() {
  const { data, loading, error } = useNews({ pageSize: 6 });

  if (error) return null;

  const headlines = data.filter((a) => a.title).slice(0, 6);

  const items = [...headlines, ...headlines];

  return (
    <section
      aria-label="Breaking news"
      className="bg-brand text-white flex items-center h-12 sm:h-[50px] overflow-hidden"
    >
      <span className="shrink-0 ml-3 sm:ml-[8%] mr-4 sm:mr-12 px-4 py-2 bg-white text-brand text-[11px] sm:text-xs font-medium rounded-sm relative z-10">
        Breaking News
      </span>

      <div className="flex-1 overflow-hidden">
        {loading ? (
          <div className="h-3 w-2/3 bg-white/30 rounded animate-pulse" />
        ) : (
          <div className="flex w-max whitespace-nowrap animate-ticker hover:[animation-play-state:paused]">
            {items.map((item, i) => (
              <ArticleLink
                key={`${item.url}-${i}`}
                article={item}
                className="text-sm pr-20 hover:underline"
              >
                {cleanTitle(item.title)}
              </ArticleLink>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}