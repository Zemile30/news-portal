"use client";

import { useState } from "react";
import Image from "next/image";

export default function AuthorCard({ author }) {
  const [following, setFollowing] = useState(false);

  if (!author) return null;

  return (
    <section className="mt-6 flex flex-col gap-4 pb-10 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex items-start gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-gray-200">
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-[11px] text-gray-500">Author</p>
          <h4 className="text-sm font-medium text-gray-900">{author.name}</h4>
          <p className="mt-2 max-w-sm text-[11px] leading-4 text-gray-600">
            {author.bio}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setFollowing((v) => !v)}
        aria-pressed={following}
        className="flex shrink-0 items-center gap-2 border border-red-200 bg-red-50 px-6 py-2 text-[10px] font-medium tracking-widest text-red-600 hover:bg-red-100"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 5.8c-.7.3-1.5.6-2.400.7.900-.5 1.500-1.300 1.800-2.300-.8.5-1.700.8-2.600 1a4.100 4.100 0 0 0-7 3.700A11.600 11.600 0 0 1 3.400 4.600a4.100 4.100 0 0 0 1.300 5.500c-.7 0-1.300-.2-1.900-.5 0 2 1.400 3.700 3.300 4.100-.6.2-1.200.2-1.800.1.500 1.600 2 2.800 3.800 2.800A8.200 8.200 0 0 1 2 18.300 11.600 11.600 0 0 0 8.300 20c7.500 0 11.700-6.300 11.700-11.700v-.5c.8-.6 1.500-1.300 2-2z" />
        </svg>
        {following ? "FOLLOWING" : "FOLLOW"}
      </button>
    </section>
  );
}