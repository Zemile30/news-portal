import ActionIcons from "./ActionIcons";
import ArticleLink from "./ArticleLink";

export default function NewsCard({ story, view = "grid" }) {
  const isList = view === "list";

  const imageBoxClass = `relative shrink-0 bg-gray-200 ${
    isList ? "w-2/5 min-h-48" : "w-full aspect-[16/9]"
  }`;

  const imageContent = (
    <>
      {story.image && (
        <img
          src={story.image}
          alt={story.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {story.category && (
        <span className="absolute bottom-2 right-0 bg-brand text-white text-[9px] font-medium tracking-wide px-2 py-0.5 uppercase">
          {story.category}
        </span>
      )}
    </>
  );

  return (
    <article
      className={`bg-white shadow-sm flex h-full ${isList ? "flex-row" : "flex-col"}`}
    >
      <ArticleLink
        article={story.raw}
        className={`block ${imageBoxClass}`}
        aria-label={story.title}
      >
        {imageContent}
      </ArticleLink>

      <div className="flex flex-col flex-1 min-w-0">
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-serif font-bold text-sm leading-snug text-gray-900">
            <ArticleLink article={story.raw} className="hover:text-brand">
              {story.title}
            </ArticleLink>
          </h3>

          {story.excerpt && (
            <p className="mt-2 text-xs text-gray-600 leading-relaxed line-clamp-4">
              {story.excerpt}
            </p>
          )}

          <div className="mt-auto pt-4 flex items-center gap-3 text-[10px] text-gray-500">
            <span>{story.time}</span>
            <span className="truncate">By {story.author}</span>
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