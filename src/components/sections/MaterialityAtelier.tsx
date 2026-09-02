import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ATELIER_MATERIALS } from "../../data/assets";
import { aeroSectionFold } from "../../utils/motion";

export default function MaterialityAtelier() {
  const [activeId, setActiveId] = useState(ATELIER_MATERIALS[0].id);
  const activeMaterial = ATELIER_MATERIALS.find((m) => m.id === activeId) || ATELIER_MATERIALS[0];

  return (
    <motion.section
      id="atelier"
      variants={aeroSectionFold}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 md:py-32 bg-[#F2EEE5]/60 border-t border-[#0F172A]/8"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-14 space-y-12 md:space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
              <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-[#7E7467]">
                03 // THE TACTILE ATELIER
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#0F172A] tracking-tight">
              Materials of quiet luxury.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#7E7467] max-w-md leading-relaxed">
            We commission raw cashmere, unbleached silk, open-pore timber, and solid aerospace titanium to create an organic, sound-damped cabin atmosphere.
          </p>
        </div>

        {/* Interactive Material Showcase with Liquid Morph Transitions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-center">
          
          {/* Material Buttons */}
          <div className="lg:col-span-5 flex flex-col space-y-2.5">
            {ATELIER_MATERIALS.map((mat) => {
              const isActive = mat.id === activeId;
              return (
                <motion.button
                  key={mat.id}
                  onClick={() => setActiveId(mat.id)}
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  className={`p-4 sm:p-5 rounded-xl text-left transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                    isActive
                      ? "bg-white border-[#0F172A]/15 shadow-md translate-x-2"
                      : "bg-white/40 border-transparent hover:bg-white/70"
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[#7E7467]">
                      {mat.origin}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-semibold text-[#0F172A]">
                      {mat.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ scale: isActive ? 1.25 : 1, opacity: isActive ? 1 : 0.3 }}
                    className={`w-2 h-2 rounded-full ${isActive ? "bg-[#0F172A]" : "bg-black/20"}`}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Active Material Viewport with Liquid Reveal Scale */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white p-3 sm:p-4 shadow-xl border border-[#0F172A]/8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMaterial.id}
                  initial={{ opacity: 0, scale: 0.94, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full rounded-xl overflow-hidden"
                >
                  <img
                    src={activeMaterial.image}
                    alt={activeMaterial.title}
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#D4C5B9]">
                      {activeMaterial.material}
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed max-w-lg font-normal">
                      {activeMaterial.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
