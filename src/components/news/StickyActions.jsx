"use client";

import { useState } from "react";
import { useBookmark } from "@/hooks/useBookmark";

function HeartIcon({ filled }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "#d4141c" : "none"} stroke={filled ? "#d4141c" : "currentColor"} strokeWidth="1.6">
      <path d="M12 21s-7-4.4-9-9c-1.3-3 .5-7 4-7 2 0 3.5 1 5 3 1.5-2 3-3 5-3 3.5 0 5.3 4 4 7-2 4.6-9 9-9 9z" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M21 12a8 8 0 0 1-11.8 7L4 20l1.2-4.4A8 8 0 1 1 21 12z" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 15V3m0 0L8 7m4-4 4 4M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
    </svg>
  );
}

function BookmarkIcon({ filled }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "#0E1E32" : "none"} stroke="currentColor" strokeWidth="1.6">
      <path d="M6 3h12v18l-6-4-6 4V3z" />
    </svg>
  );
}

export default function StickyActions({ story }) {
  const { saved: bookmarked, toggle: toggleBookmark } = useBookmark(story.id);
  const [liked, setLiked] = useState(false);

  // NewsAPI-də like/comment sayı yoxdur, ona görə undefined hallarını idarə edirik
  const likeCount = (story.likes ?? 0) + (liked ? 1 : 0);

  const handleShare = async () => {
    const url = story.url || window.location.href;
    try {
      if (navigator.share) await navigator.share({ title: story.title, url });
      else await navigator.clipboard.writeText(url);
    } catch {}
  };

  return (
    <aside className="flex items-center gap-6 lg:sticky lg:top-24 lg:flex-col lg:items-start lg:gap-0 lg:self-start">
      <div className="hidden lg:mb-8 lg:block">
        <p className="text-[11px] font-medium leading-3 text-gray-800">
          See more
          <br />
          like this?
        </p>
        <div className="mt-2 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          <span className="h-3 w-px bg-gray-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
        </div>
      </div>

      <div className="flex items-center gap-6 lg:flex-col lg:items-start">
        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          aria-label="Like"
          aria-pressed={liked}
          className="flex items-center gap-2 text-gray-700"
        >
          <HeartIcon filled={liked} />
          {likeCount > 0 && (
            <span className="text-[10px] text-gray-600">{likeCount}</span>
          )}
        </button>

        {story.comments !== undefined && (
          <button type="button" aria-label="Comments" className="flex items-center gap-2 text-gray-700">
            <CommentIcon />
            <span className="text-[10px] text-gray-600">{story.comments}</span>
          </button>
        )}

        <button type="button" aria-label="Share" onClick={handleShare} className="text-gray-700">
          <ShareIcon />
        </button>

        <button
          type="button"
          onClick={toggleBookmark}
          aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
          aria-pressed={bookmarked}
          className="text-gray-700"
        >
          <BookmarkIcon filled={bookmarked} />
        </button>
      </div>
    </aside>
  );
}