"use client";

import { useState } from "react";
import useNews from "@/hooks/useNews";
import ArticleLink from "../ui/ArticleLink";

function timeAgo(dateString) {
  if (!dateString) return "";
  const diff = Math.floor((Date.now() - new Date(dateString).getTime()) / 1000);
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

function cleanTitle(title = "") {
  return title.replace(/\s+-\s+[^-]+$/, "");
}

export default function LocationNews() {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState("");

  // submitted boş olanda hook sorğu göndərmir
  const { data, loading, error } = useNews({
    type: "search",
    query: submitted ? `"${submitted}"` : "",
    pageSize: 10,
  });

  const results = data.filter((a) => a.title && a.url).slice(0, 4);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(value.trim());
  };

  return (
    <section>
      <h2 className="text-sm font-semibold text-gray-900">Location News</h2>

      <form onSubmit={handleSubmit} className="mt-3 bg-white shadow-sm p-4">
        <label htmlFor="location" className="block text-[10px] text-gray-700">
          Get Location specific News
        </label>
        <input
          id="location"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Your Location"
          className="mt-3 w-full h-10 px-3 border border-gray-200 text-xs placeholder:text-gray-400 focus:outline-none focus:border-brand"
        />
        <button
          type="submit"
          disabled={loading}
          className="mt-3 bg-brand text-white text-[10px] font-medium tracking-wider uppercase px-4 py-2 hover:opacity-90 disabled:opacity-60"
        >
          Submit
        </button>

        {submitted && (
          <p className="mt-3 text-[10px] text-gray-500">
            Showing news for: {submitted}
          </p>
        )}
      </form>

      {/* Nəticələr */}
      {submitted && (
        <div className="mt-3">
          {loading ? (
            <ul className="space-y-3 animate-pulse">
              {[0, 1, 2].map((i) => (
                <li key={i} className="flex gap-3">
                  <div className="w-16 h-14 shrink-0 bg-gray-200" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-full bg-gray-200" />
                    <div className="h-3 w-2/3 bg-gray-200" />
                  </div>
                </li>
              ))}
            </ul>
          ) : error ? (
            <p className="text-xs text-red-600">
              Xəbərlər yüklənmədi: {error}
            </p>
          ) : results.length === 0 ? (
            <p className="text-xs text-gray-500">
              &quot;{submitted}&quot; üçün xəbər tapılmadı.
            </p>
          ) : (
            <ul className="space-y-3">
              {results.map((item) => (
                <li key={item.url} className="flex gap-3 bg-white shadow-sm p-2">
                  <div className="relative w-16 h-14 shrink-0 bg-gray-200">
                    {item.urlToImage && (
                      <img
                        src={item.urlToImage}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <ArticleLink
                      article={item}
                      className="block font-serif font-bold text-xs leading-snug text-gray-900 hover:text-brand line-clamp-3"
                    >
                      {cleanTitle(item.title)}
                    </ArticleLink>
                    <p className="mt-1 text-[10px] text-gray-500 truncate">
                      {item.source?.name} · {timeAgo(item.publishedAt)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}