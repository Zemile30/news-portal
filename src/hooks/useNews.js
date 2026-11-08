"use client";

import { useEffect, useState } from "react";

export default function useNews({
    type = "headlines",
    category = "all",
    query = "",
    page = 1,
    pageSize = 8,
    sortBy = "",
} = {}) {
    const [data, setData] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (type === "search" && !query.trim()) {
            setData([]);
            setTotalResults(0);
            setLoading(false);
            setError(null);
            return;
        }

        const controller = new AbortController();

        async function load() {
            setLoading(true);
            setError(null);

            try {
                const params = new URLSearchParams({
                    type,
                    page: String(page),
                    pageSize: String(pageSize),
                });
                if (type === "headlines" && category) params.set("category", category);
                if (type === "search") params.set("q", query.trim());
                if (sortBy) params.set("sortBy", sortBy);

                const res = await fetch(`/api/news?${params.toString()}`, {
                    signal: controller.signal,
                });
                const json = await res.json();

                if (!res.ok) throw new Error(json.error || "Xəbərlər yüklənmədi.");

                setData((prev) =>
                    page > 1 ? [...prev, ...json.articles] : json.articles
                );
                setTotalResults(json.totalResults);
            } catch (err) {
                if (err.name !== "AbortError") setError(err.message);
            } finally {
                if (!controller.signal.aborted) setLoading(false);
            }
        }

        load();
        return () => controller.abort();
    }, [type, category, query, page, pageSize, sortBy]);

    const hasMore = data.length < Math.min(totalResults, 100);

    return { data, loading, error, totalResults, hasMore };
}