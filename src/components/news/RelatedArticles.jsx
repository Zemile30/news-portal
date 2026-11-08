"use client";

import ArticleLink from "@/components/ui/ArticleLink";
import { useBookmark } from "@/hooks/useBookmark";

function HeartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#d4141c" stroke="#d4141c" strokeWidth="1.6">
      <path d="M12 21s-7-4.4-9-9c-1.3-3 .5-7 4-7 2 0 3.5 1 5 3 1.5-2 3-3 5-3 3.5 0 5.3 4 4 7-2 4.6-9 9-9 9z" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 15V3m0 0L8 7m4-4 4 4M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
    </svg>
  );
}

function BookmarkMini({ id }) {
  const { saved, toggle } = useBookmark(id);
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={saved}
      aria-label={saved ? "Remove bookmark" : "Add bookmark"}
      className="text-gray-700"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill={saved ? "#0E1E32" : "none"} stroke="currentColor" strokeWidth="1.6">
        <path d="M6 3h12v18l-6-4-6 4V3z" />
      </svg>
    </button>
  );
}

function CardImage({ story, className = "" }) {
  return (
    <div className={`relative aspect-[4/3] w-full bg-gray-200 ${className}`}>
      {story.image && (
        <img
          src={story.image}
          alt={story.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}

function SideCard({ story }) {
  return (
    <ArticleLink
      article={story.raw}
      className="block bg-white transition-shadow hover:shadow-md"
    >
      <CardImage story={story} />
      <h4 className="p-4 font-serif text-[13px] font-bold leading-[1.35] text-gray-900">
        {story.title}
      </h4>
    </ArticleLink>
  );
}

export function RecommendedSidebar({ recommended = [], basedOnLike }) {
  if (!recommended.length && !basedOnLike) return null;

  return (
    <aside className="space-y-8">
      {recommended.length > 0 && (
        <section>
          <h3 className="mb-3 text-xs font-semibold text-gray-900">
            Recommended for you
          </h3>
          <div className="space-y-4">
            {recommended.map((story) => (
              <SideCard key={story.id} story={story} />
            ))}
          </div>
        </section>
      )}

      {basedOnLike && (
        <section>
          <h3 className="mb-3 text-xs font-semibold text-gray-900">
            Based on Like
          </h3>
          <SideCard story={basedOnLike} />
        </section>
      )}
    </aside>
  );
}

export function RelatedTopics({ stories = [] }) {
  if (!stories.length) return null;

  return (
    <section className="mx-auto mt-4 max-w-[1262px] px-4 pb-16">
      <h3 className="mb-4 text-sm font-semibold text-gray-900">Related Topics</h3>

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:gap-5 lg:overflow-visible">
        {stories.map((story) => (
          <article
            key={story.id}
            className="flex w-[200px] shrink-0 snap-start flex-col bg-white lg:w-auto lg:min-w-0 lg:flex-1"
          >
            <ArticleLink article={story.raw} className="flex flex-1 flex-col">
              <CardImage story={story} />
              <h4 className="flex-1 p-4 font-serif text-[13px] font-bold leading-[1.35] text-gray-900">
                {story.title}
              </h4>
            </ArticleLink>

            <div className="mx-4 flex items-center justify-around border-t border-gray-200 py-3 text-[10px] text-gray-600">
              <span className="flex items-center gap-1.5">
                <HeartIcon />
                {story.likes !== undefined && story.likes}
              </span>
              <span className="flex items-center gap-1.5">
                <ShareIcon />
                {story.shares !== undefined && story.shares}
              </span>
              <BookmarkMini id={story.id} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}