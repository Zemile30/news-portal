'use client';
import { useState, useEffect, useRef, useCallback } from "react";

export function useInfiniteScroll(items, step = 4, resetKey = "", autoLoad = false) {
  const [count, setCount] = useState(step);
  const sentinelRef = useRef(null);
  const hasMore = count < items.length;

  const loadMore = useCallback(
    () => setCount((c) => Math.min(c + step, items.length)),
    [step, items.length]
  );

  // tab dəyişəndə başa qayıt
  useEffect(() => { setCount(step); }, [resetKey, step]);

  // scroll ilə avtomatik yükləmə (autoLoad açıqdırsa)
  useEffect(() => {
    if (!autoLoad || !hasMore || !sentinelRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && loadMore(),
      { rootMargin: "100px" }
    );
    obs.observe(sentinelRef.current);
    return () => obs.disconnect();
  }, [autoLoad, hasMore, loadMore]);

  return { visible: items.slice(0, count), hasMore, loadMore, sentinelRef };
}