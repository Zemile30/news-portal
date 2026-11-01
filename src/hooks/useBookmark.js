'use client';
import { useState, useEffect, useCallback } from "react";

const read = (key) => {
  try { return JSON.parse(localStorage.getItem(key)) || []; }
  catch { return []; }
};

export function useBookmark(id, key = "bookmarks") {
  const [saved, setSaved] = useState(false);

  useEffect(() => { setSaved(read(key).includes(id)); }, [id, key]);

  const toggle = useCallback(() => {
    const list = read(key);
    const next = list.includes(id) ? list.filter((i) => i !== id) : [...list, id];
    try { localStorage.setItem(key, JSON.stringify(next)); } catch {}
    setSaved(next.includes(id));
  }, [id, key]);

  return { saved, toggle };
}