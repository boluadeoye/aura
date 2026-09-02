import { useState } from "react";
import { ATELIER_MATERIALS } from "../../data/assets";

export default function MaterialityAtelier() {
  const [activeId, setActiveId] = useState(ATELIER_MATERIALS[0].id);
  const activeMaterial = ATELIER_MATERIALS.find((m) => m.id === activeId) || ATELIER_MATERIALS[0];

  return (
    <section id="atelier" className="py-20 md:py-32 bg-[#F2EEE5]/60 border-t border-[#0F172A]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-14 space-y-12 md:space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
              <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-[#7E7467]">
                02 // THE CRAFT
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#0F172A] tracking-tight">
              Materials of quiet luxury.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#7E7467] max-w-md leading-relaxed">
            We commission raw cashmere, unbleached silk, open-pore timber, and solid aerospace titanium to create a completely tactile cabin environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {ATELIER_MATERIALS.map((mat) => {
              const isActive = mat.id === activeId;
              return (
                <button
                  key={mat.id}
                  onClick={() => setActiveId(mat.id)}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? "bg-white border-black/10 shadow-md translate-x-2"
                      : "bg-white/40 border-transparent hover:bg-white/70"
                  }`}
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#7E7467]">
                      {mat.origin}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-[#0F172A]">
                      {mat.title}
                    </h3>
                  </div>
                  <div className={`w-2 h-2 rounded-full transition-all ${isActive ? "bg-[#0F172A] scale-125" : "bg-black/10"}`} />
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white p-4 shadow-xl border border-black/5">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  src={activeMaterial.image}
                  alt={activeMaterial.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#D4C5B9]">
                    {activeMaterial.material}
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed max-w-lg">
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
