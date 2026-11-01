import { breakingNews } from "@/lib/mockData";

export default function BreakingBanner() {

  const items = [...breakingNews, ...breakingNews];

  return (
    <section
      aria-label="Breaking news"
      className="bg-brand text-white flex items-center h-12 sm:h-[50px] overflow-hidden"
    >
      <span className="shrink-0 ml-3 sm:ml-[8%] mr-4 sm:mr-12 px-4 py-2 bg-white text-brand text-[11px] sm:text-xs font-medium rounded-sm relative z-10">
        Breaking News
      </span>
      <div className="flex-1 overflow-hidden">
        <div className="flex w-max whitespace-nowrap animate-ticker">
          {items.map((item, i) => (
            <span key={i} className="text-sm pr-20">
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}