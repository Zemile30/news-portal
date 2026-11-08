"use client";

import { useState } from "react";
import { useBookmark } from "@/hooks/useBookmark";

export default function ArticleTags({ tags = [], story }) {
  const { saved, toggle } = useBookmark(story.id);
  const [liked, setLiked] = useState(false);

  // NewsAPI-də like/comment/share sayı yoxdur, ona görə yalnız mövcud olanı göstəririk
  const likeCount = (story.likes ?? 0) + (liked ? 1 : 0);

  return (
    <div className="mt-8">
      {/* Etiketlər */}
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className="rounded-full bg-red-100 px-4 py-1.5 text-[9px] font-medium tracking-widest text-red-600 hover:bg-red-200"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* İkon sətri */}
      <div className="mt-6 flex items-center justify-between border-b border-gray-200 pb-5 text-gray-700">
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => setLiked((v) => !v)}
            aria-pressed={liked}
            aria-label="Like"
            className="flex items-center gap-2 text-[10px]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={liked ? "#d4141c" : "none"} stroke={liked ? "#d4141c" : "currentColor"} strokeWidth="1.6">
              <path d="M12 21s-7-4.4-9-9c-1.3-3 .5-7 4-7 2 0 3.5 1 5 3 1.5-2 3-3 5-3 3.5 0 5.3 4 4 7-2 4.6-9 9-9 9z" />
            </svg>
            {likeCount > 0 && likeCount}
          </button>

          {story.comments !== undefined && (
            <span className="flex items-center gap-2 text-[10px]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M21 12a8 8 0 0 1-11.8 7L4 20l1.2-4.4A8 8 0 1 1 21 12z" />
              </svg>
              {story.comments} responses
            </span>
          )}
        </div>

        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5 text-[10px]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 15V3m0 0L8 7m4-4 4 4M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
            </svg>
            {story.shares !== undefined && story.shares}
          </span>

          <button
            type="button"
            onClick={toggle}
            aria-pressed={saved}
            aria-label={saved ? "Remove bookmark" : "Add bookmark"}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill={saved ? "#0E1E32" : "none"} stroke="currentColor" strokeWidth="1.6">
              <path d="M6 3h12v18l-6-4-6 4V3z" />
            </svg>
          </button>

          <button type="button" aria-label="More" className="text-sm leading-none">
            ···
          </button>
        </div>
      </div>
    </div>
  );
}