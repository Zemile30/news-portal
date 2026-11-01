import Image from "next/image";
import ActionIcons from "@/components/ui/ActionIcons";
import { hero } from "@/lib/mockData";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-6 md:gap-10 items-center">
      {/* Sol: şəkil */}
      <div className="relative w-full aspect-[3/2]">
        <Image
          src={hero.image}
          alt={hero.title}
          fill
          priority
          sizes="(min-width: 768px) 60vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Sağ: mətn */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-brand text-[11px] font-semibold">
            {hero.label}
          </span>
          <ActionIcons id={hero.id} className="gap-3" />
        </div>

        <h1 className="mt-3 font-serif font-bold text-2xl lg:text-[26px] leading-tight text-gray-900">
          {hero.title}
        </h1>

        <p className="mt-4 text-xs text-gray-600 leading-relaxed">
          {hero.excerpt}
        </p>

        <div className="mt-4 flex items-center gap-3 text-[10px] text-gray-500">
          <span>{hero.time}</span>
          <span>
            By {hero.author} | {hero.readTime}
          </span>
        </div>
      </div>
    </section>
  );
}