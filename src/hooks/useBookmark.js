'use client';
import { useState, useEffect, useCallback } from "react";

const DEFAULT_KEY = "sv_bookmarks";
const EVENT = "sv-bookmarks-change";

const read = (key) => {
  try { return JSON.parse(localStorage.getItem(key)) || []; }
  catch { return []; }
};

export function useBookmark(id, key = DEFAULT_KEY) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const sync = () => setSaved(read(key).includes(id));
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, [id, key]);

  const toggle = useCallback(() => {
    const list = read(key);
    const next = list.includes(id) ? list.filter((i) => i !== id) : [...list, id];
    try { localStorage.setItem(key, JSON.stringify(next)); } catch {}
    window.dispatchEvent(new Event(EVENT));
  }, [id, key]);

  return { saved, toggle };
}