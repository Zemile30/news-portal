'use client';
import LikeButton from "./LikeButton";
import BookmarkButton from "./BookmarkButton";
import { ShareIcon } from "@/components/icons";

export default function ActionIcons({
  id, likes, shares, tone = "text-gray-700", className = "",
}) {
  return (
    <div className={`flex items-center gap-6 text-[10px] ${tone} ${className}`}>
      <LikeButton id={id} count={likes} />
      <button className="flex items-center gap-1.5 hover:text-brand" aria-label="Share">
        <ShareIcon />
        {shares !== undefined && <span>{shares}</span>}
      </button>
      <BookmarkButton id={id} />
    </div>
  );
}