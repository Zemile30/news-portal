import Image from "next/image";
import { live } from "@/lib/mockData";
import LocationNews from "./LocationNews";

export default function SidePanel() {
    return (
        <aside className="space-y-8">
            <section>
                <div className="h-14 flex items-center gap-2 text-brand text-xs font-semibold">
                    <span>Live</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-brand ring-4 ring-brand/20 animate-pulse" />
                </div>

                <article className="mt-3">
                    <div className="relative w-full aspect-[7/5]">
                        <Image
                            src={live.image}
                            alt={live.title}
                            fill
                            sizes="(min-width: 1024px) 30vw, 100vw"
                            className="object-cover"
                        />
                    </div>
                    <h3 className="mt-2 font-serif font-bold text-sm leading-snug text-gray-900">
                        {live.title}
                    </h3>
                </article>
            </section>

            <LocationNews />
        </aside>
    );
}