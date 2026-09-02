"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NEW_HERO_SLIDES = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1788360374/blog_assets/sfft8cvs8qd81ivr2qoo.png",
    alt: "Aura Jet Stratospheric Transit",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1788360396/blog_assets/ubtdyjoyiz3dbzbiszfs.png",
    alt: "Aura Wing Leading Edge Perspective",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1788360403/blog_assets/bf0haezeexopxu7h3uee.png",
    alt: "Aura Engine Nacelle Azure Glow",
  },
];

export default function Hero({ onExplore }: { onExplore: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % NEW_HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[95vh] min-h-[640px] max-h-[1080px] overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8 bg-[#0F172A]">
      
      {/* ─── 1. CRISP SLIDER BACKGROUND ─────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img
              src={NEW_HERO_SLIDES[currentSlide].image}
              alt={NEW_HERO_SLIDES[currentSlide].alt}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtly Dark Mood Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-[#0F172A]/60 z-10 pointer-events-none" />
      </div>

      {/* ─── 2. HERO CONTENT COLUMN ─────────────────────────────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 md:px-14 w-full my-auto py-8 sm:py-12">
        <div className="max-w-3xl space-y-4 sm:space-y-6 flex flex-col items-start text-left">
          
          {/* Responsive Truncated Running Badge */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F172A]/80 backdrop-blur-md border border-white/20 shadow-md mb-2 max-w-[90vw]"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4C5B9] shrink-0">
              <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
              <path d="M17.5 12.6a2 2 0 1 1-1.5-3.6H2" />
              <path d="M20.8 6.4a2 2 0 1 1-1.8-3H2" />
            </svg>
            <span className="font-mono text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#F9F7F2] truncate">
              SPEC 01 // 45,000 FT ALTITUDE
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-2 drop-shadow-md">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F9F7F2] tracking-tight leading-[1.02] uppercase">
              The Architecture
            </h1>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light italic text-[#D4C5B9] tracking-tight leading-[1.02] lowercase">
              of ascent.
            </h1>
          </div>

          {/* Body Prose */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#F9F7F2]/90 max-w-lg leading-relaxed font-normal drop-shadow-sm pt-1">
            Bespoke private jet sanctuaries engineered with hand-stitched cashmere, solid titanium fittings, and 45,000 feet of uninterrupted silence.
          </p>

          {/* Button */}
          <div className="pt-2">
            <motion.button
              onClick={onExplore}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-7 py-3.5 rounded-xl bg-[#F9F7F2] text-[#0F172A] font-sans text-xs font-bold uppercase tracking-[0.18em] border border-[#F9F7F2] hover:bg-[#0F172A] hover:text-[#F9F7F2] hover:border-[#D4C5B9] active:scale-95 transition-all duration-300 shadow-2xl flex items-center gap-2.5 cursor-pointer"
            >
              <span>Explore Sanctuary</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#0F172A] hover:text-[#D4C5B9]">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </motion.button>
          </div>

        </div>
      </div>

      {/* ─── 3. LIVE 3-COLUMN TELEMETRY TICKER STRIP ─────────────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 md:px-14 w-full">
        <div className="grid grid-cols-3 gap-2 sm:gap-6 py-4 sm:py-5 border border-white/15 bg-[#0F172A]/80 backdrop-blur-xl rounded-2xl px-3 sm:px-6 shadow-md text-white">
          
          <div className="space-y-0.5">
            <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-white/60 block">
              Cruise Speed
            </span>
            <p className="font-mono text-xs sm:text-sm md:text-base font-bold text-white">
              0.925 <span className="text-[9px] font-normal text-[#D4C5B9]">MACH</span>
            </p>
          </div>

          <div className="space-y-0.5 border-l border-white/15 pl-2 sm:pl-6">
            <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-white/60 block">
              Cabin Acoustics
            </span>
            <p className="font-mono text-xs sm:text-sm md:text-base font-bold text-white">
              42 <span className="text-[9px] font-normal text-[#D4C5B9]">dBA</span>
            </p>
          </div>

          <div className="space-y-0.5 border-l border-white/15 pl-2 sm:pl-6">
            <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-white/60 block">
              Internal Altitude
            </span>
            <p className="font-mono text-xs sm:text-sm md:text-base font-bold text-white">
              3,200 <span className="text-[9px] font-normal text-[#D4C5B9]">FT</span>
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
