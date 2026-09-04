import { useRef, useState } from "react";
import { ALL_ASSETS } from "../../data/assets";

export default function HorizonGallery() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "Complete Archive" },
    { id: "fleet", label: "Fleet & Aerofoils" },
    { id: "atelier", label: "Material Atelier" },
    { id: "ritual", label: "Cabin Sanctuaries" },
  ];

  const filteredAssets = activeFilter === "all" 
    ? ALL_ASSETS 
    : ALL_ASSETS.filter((a) => a.category === activeFilter);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-[#F9F7F2] border-t border-[#0F172A]/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-14 space-y-8 sm:space-y-10">
        
        {/* Section Header & Interactive Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
              <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-[#7E7467]">
                02 // VISUAL ARCHIVE ({ALL_ASSETS.length} ASSETS)
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight">
              The flight archive.
            </h2>
          </div>

          {/* Filter Pills & Navigation */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <div className="flex items-center gap-1.5 p-1 bg-[#F2EEE5] rounded-full border border-[#0F172A]/8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-3 sm:px-3.5 py-1 rounded-full font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeFilter === cat.id
                      ? "bg-[#0F172A] text-white shadow-sm"
                      : "text-[#7E7467] hover:text-[#0F172A]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-1.5">
              <button
                onClick={() => scroll("left")}
                className="w-8 h-8 rounded-full bg-white border border-[#0F172A]/10 flex items-center justify-center text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors cursor-pointer"
                aria-label="Scroll left"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-8 h-8 rounded-full bg-white border border-[#0F172A]/10 flex items-center justify-center text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors cursor-pointer"
                aria-label="Scroll right"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ─── SLIDING MASONRY STRIP ───────────────────────────────────── */}
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto pb-4 pt-1 scroll-smooth no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {filteredAssets.map((asset, idx) => (
            <div
              key={asset.id}
              className="w-[260px] sm:w-[320px] md:w-[360px] shrink-0 snap-start space-y-3 group"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F2EEE5] border border-[#0F172A]/8 shadow-sm">
                <img
                  src={asset.src}
                  alt={asset.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-[#F9F7F2]/90 backdrop-blur-md font-mono text-[8px] font-bold uppercase tracking-wider text-[#0F172A]">
                  [ ARCHIVE // 0{idx + 1} ]
                </div>
              </div>

              <div className="space-y-0.5">
                <span className="font-mono text-[8px] uppercase tracking-widest text-[#7E7467]">
                  {asset.subtitle}
                </span>
                <h4 className="font-serif text-base sm:text-lg font-semibold text-[#0F172A]">
                  {asset.title}
                </h4>
                <p className="font-sans text-xs text-[#7E7467] leading-relaxed line-clamp-2">
                  {asset.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
