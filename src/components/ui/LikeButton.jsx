'use client';
import { useBookmark } from "@/hooks/useBookmark";
import { HeartIcon } from "@/components/icons";

export default function LikeButton({ id, count }) {
    const { saved, toggle } = useBookmark(id, "likes");

    return (
        <button
            onClick={toggle}
            aria-label="Like"
            aria-pressed={saved}
            className={`flex items-center gap-1.5 ${saved ? "text-brand" : ""}`}
        >
            <HeartIcon filled={saved} />
            {count !== undefined && <span>{count + (saved ? 1 : 0)}</span>}
        </button>
    );
}