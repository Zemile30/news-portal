"use client";

import { useState } from "react";

function initials(name = "") {
  return (
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join("") || "?"
  );
}

export default function AuthorCard({ author }) {
  const [following, setFollowing] = useState(false);

  if (!author?.name) return null;

  return (
    <section className="mt-6 flex flex-col gap-4 pb-10 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex items-start gap-4">
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0E1E32] text-sm font-medium text-white">
          {author.avatar ? (
            <img
              src={author.avatar}
              alt={author.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            initials(author.name)
          )}
        </div>

        <div>
          <p className="text-[11px] text-gray-500">Author</p>
          <h4 className="text-sm font-medium text-gray-900">{author.name}</h4>
          {author.bio && (
            <p className="mt-2 max-w-sm text-[11px] leading-4 text-gray-600">
              {author.bio}
            </p>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setFollowing((v) => !v)}
        aria-pressed={following}
        className="flex shrink-0 items-center gap-2 border border-red-200 bg-red-50 px-6 py-2 text-[10px] font-medium tracking-widest text-red-600 hover:bg-red-100"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 5.8c-.7.3-1.5.6-2.4.7.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.8.1.5 1.6 2 2.8 3.8 2.8A8.2 8.2 0 0 1 2 18.3 11.6 11.6 0 0 0 8.3 20c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2z" />
        </svg>
        {following ? "FOLLOWING" : "FOLLOW"}
      </button>
    </section>
  );
}