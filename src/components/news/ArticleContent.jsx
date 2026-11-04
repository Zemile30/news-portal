import Image from "next/image";

export default function ArticleContent({ content = [] }) {
  return (
    <div className="space-y-6">
      {content.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className="text-sm leading-7 text-gray-700">
                {block.text}
              </p>
            );

          case "heading":
            return (
              <h2
                key={index}
                className="pt-2 font-serif text-2xl font-bold text-gray-900"
              >
                {block.text}
              </h2>
            );

          case "quote":
            return (
              <blockquote
                key={index}
                className="my-10 border-y border-brand py-6 font-serif text-2xl leading-snug text-gray-800"
              >
                {block.text}
              </blockquote>
            );

          case "image":
            return (
              <figure key={index} className="my-10">
                <div className="relative mx-auto aspect-[7/5] w-full max-w-[350px] overflow-hidden">
                  <Image
                    src={block.src}
                    alt={block.caption ?? ""}
                    fill
                    sizes="350px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mx-auto mt-3 max-w-[350px] border-l border-brand pl-3 text-[11px] leading-4 text-gray-500">
                  {block.caption}
                  {block.credit && (
                    <span className="ml-1 text-brand">{block.credit}</span>
                  )}
                </figcaption>
              </figure>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}