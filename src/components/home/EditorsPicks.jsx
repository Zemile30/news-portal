'use client';
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import ActionIcons from "@/components/ui/ActionIcons";
import { StarIcon } from "@/components/icons";
import { editorsPicks } from "@/lib/mockData";

const GAP = 32; // gap-8

export default function EditorsPicks() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [pages, setPages] = useState(2);

  const measure = () => {
    const el = trackRef.current;
    if (!el) return;
    setPages(Math.max(1, Math.round(el.scrollWidth / el.clientWidth)));
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const handleScroll = (e) => {
    const el = e.currentTarget;
    setActive(Math.round(el.scrollLeft / (el.clientWidth + GAP)));
  };

  const goTo = (i) => {
    const el = trackRef.current;
    el.scrollTo({ left: i * (el.clientWidth + GAP), behavior: "smooth" });
  };

  return (
    <section>
      <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-900">
        Editor&apos;s Picks <StarIcon />
      </h2>

      {/* Üfüqi slider */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="mt-4 flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {editorsPicks.map((pick) => (
          <article
            key={pick.id}
            className="snap-start shrink-0 w-full md:w-[calc(50%-16px)] flex gap-4"
          >
            <div className="relative w-40 sm:w-44 h-28 shrink-0">
              <Image
                src={pick.image}
                alt={pick.title}
                fill
                sizes="176px"
                className="object-cover"
              />
              {pick.category && (
                <span className="absolute top-2 right-0 bg-brand text-white text-[9px] tracking-wide px-2 py-0.5">
                  {pick.category}
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 pt-6 pb-1.5 bg-linear-to-t from-black/60 to-transparent">
                <ActionIcons
                  id={pick.id}
                  likes={pick.likes}
                  shares={pick.shares}
                  tone="text-white"
                  className="justify-center gap-3"
                />
              </div>
            </div>

            <div className="min-w-0">
              <h3 className="font-serif font-bold text-sm leading-snug text-gray-900">
                {pick.title}
              </h3>
              <p className="mt-2 text-[11px] text-gray-600 leading-relaxed line-clamp-4">
                {pick.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination nöqtələri */}
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Page ${i + 1}`}
            className={`h-0.5 transition-all ${
              i === active ? "w-5 bg-brand" : "w-3 bg-brand/25"
            }`}
          />
        ))}
      </div>
    </section>
  );
}