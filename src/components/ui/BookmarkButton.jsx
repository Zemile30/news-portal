'use client';
import { useBookmark } from "@/hooks/useBookmark";
import { BookmarkIcon } from "@/components/icons";

export default function BookmarkButton({ id }) {
  const { saved, toggle } = useBookmark(id, "bookmarks");

  return (
    <button
      onClick={toggle}
      aria-label={saved ? "Remove bookmark" : "Add bookmark"}
      aria-pressed={saved}
      className="hover:text-brand"
    >
      <BookmarkIcon filled={saved} />
    </button>
  );
}