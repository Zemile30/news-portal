export default function ArticleHero({ story }) {
  return (
    <section>
      <div className="bg-[#0E1E32] px-4 pb-6 pt-10 text-center">
        <h1 className="mx-auto max-w-3xl font-serif text-2xl font-bold leading-snug text-white md:text-4xl">
          {story.title}
        </h1>
      </div>

      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-[#0E1E32]" />

        <div className="relative mx-auto grid max-w-[1262px] grid-cols-1 gap-x-10 px-4 lg:grid-cols-[140px_minmax(0,1fr)_256px]">
          <div className="lg:col-span-2 lg:col-start-2">
            <div className="relative aspect-[5/2] w-full overflow-hidden bg-gray-300">
              {story.image && (
                <img
                  src={story.image}
                  alt={story.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}