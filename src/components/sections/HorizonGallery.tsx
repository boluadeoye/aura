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
    <section id="gallery" className="py-20 md:py-32 bg-[#F2EEE5]/50 border-t border-[#0F172A]/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-14 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
              <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-[#7E7467]">
                02 // VISUAL ARCHIVE ({ALL_ASSETS.length} ASSETS)
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#0F172A] tracking-tight leading-tight">
              The flight archive.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 p-1 bg-[#F9F7F2] rounded-full border border-[#0F172A]/10">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full font-mono text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeFilter === cat.id
                      ? "bg-[#0F172A] text-white shadow-sm"
                      : "text-[#7E7467] hover:text-[#0F172A]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-9 h-9 rounded-full bg-[#F9F7F2] border border-[#0F172A]/10 flex items-center justify-center text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors cursor-pointer"
                aria-label="Scroll left"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-9 h-9 rounded-full bg-[#F9F7F2] border border-[#0F172A]/10 flex items-center justify-center text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors cursor-pointer"
                aria-label="Scroll right"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {filteredAssets.map((asset, idx) => (
            <div
              key={asset.id}
              className="w-[280px] sm:w-[340px] md:w-[400px] shrink-0 snap-start space-y-4 group"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F2EEE5] border border-[#0F172A]/8 shadow-sm">
                <img
                  src={asset.src}
                  alt={asset.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#F9F7F2]/90 backdrop-blur-md font-mono text-[8px] font-bold uppercase tracking-wider text-[#0F172A]">
                  [ ARCHIVE // 0{idx + 1} ]
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[8px] uppercase tracking-widest text-[#7E7467]">
                  {asset.subtitle}
                </span>
                <h4 className="font-serif text-lg font-semibold text-[#0F172A]">
                  {asset.title}
                </h4>
                <p className="font-sans text-xs text-[#7E7467] leading-relaxed">
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
