import Image from "next/image";
import ActionIcons from "./ActionIcons";

export default function NewsCard({ story, view = "grid" }) {
  const isList = view === "list";

  return (
    <article
      className={`bg-white shadow-sm flex h-full ${isList ? "flex-row" : "flex-col"}`}
    >
      <div
        className={`relative shrink-0 ${isList ? "w-2/5 min-h-48" : "w-full aspect-[16/9]"
          }`}
      >
        <Image
          src={story.image}
          alt={story.title}
          fill
          sizes="(min-width: 768px) 300px, 100vw"
          className="object-cover"
        />
        {story.category && (
          <span className="absolute bottom-2 right-0 bg-brand text-white text-[9px] font-medium tracking-wide px-2 py-0.5">
            {story.category}
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-serif font-bold text-sm leading-snug text-gray-900">
            {story.title}
          </h3>
          <p className="mt-2 text-xs text-gray-600 leading-relaxed line-clamp-4">
            {story.excerpt}
          </p>

          <div className="mt-auto pt-4 flex items-center gap-3 text-[10px] text-gray-500">
            <span>{story.time}</span>
            <span>
              By {story.author} | {story.readTime}
            </span>
          </div>
        </div>

        <ActionIcons
          id={story.id}
          likes={story.likes}
          shares={story.shares}
          className="justify-center border-t border-gray-100 py-2.5"
        />
      </div>
    </article>
  );
}