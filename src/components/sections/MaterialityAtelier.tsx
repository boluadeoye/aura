import { useState } from "react";
import { ATELIER_MATERIALS } from "../../data/assets";

export default function MaterialityAtelier() {
  const [activeId, setActiveId] = useState(ATELIER_MATERIALS[0].id);
  const activeMaterial = ATELIER_MATERIALS.find((m) => m.id === activeId) || ATELIER_MATERIALS[0];

  return (
    <section id="atelier" className="py-12 sm:py-16 md:py-20 bg-[#F2EEE5]/70 border-t border-[#0F172A]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-14 space-y-8 sm:space-y-10 md:space-y-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
              <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-[#7E7467]">
                03 // THE TACTILE ATELIER
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0F172A] tracking-tight">
              Materials of quiet luxury.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#7E7467] max-w-md leading-relaxed">
            We commission raw cashmere, unbleached silk, open-pore timber, and solid aerospace titanium to create an organic, sound-damped cabin atmosphere.
          </p>
        </div>

        {/* Interactive Material Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
          
          {/* Material Buttons */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            {ATELIER_MATERIALS.map((mat) => {
              const isActive = mat.id === activeId;
              return (
                <button
                  key={mat.id}
                  onClick={() => setActiveId(mat.id)}
                  className={`p-3.5 sm:p-4 rounded-xl text-left transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                    isActive
                      ? "bg-white border-[#0F172A]/15 shadow-sm translate-x-1.5"
                      : "bg-white/40 border-transparent hover:bg-white/70"
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-[#7E7467]">
                      {mat.origin}
                    </span>
                    <h3 className="font-serif text-base font-semibold text-[#0F172A]">
                      {mat.title}
                    </h3>
                  </div>
                  <div className={`w-2 h-2 rounded-full transition-all ${isActive ? "bg-[#0F172A] scale-125" : "bg-black/10"}`} />
                </button>
              );
            })}
          </div>

          {/* Active Material Viewport */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white p-3 shadow-lg border border-[#0F172A]/8">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <img
                  src={activeMaterial.image}
                  alt={activeMaterial.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#D4C5B9]">
                    {activeMaterial.material}
                  </span>
                  <p className="font-sans text-xs text-white/90 leading-relaxed max-w-lg font-normal">
                    {activeMaterial.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
