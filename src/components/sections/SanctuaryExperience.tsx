import React from "react";
import { motion } from "framer-motion";
import { ALL_ASSETS } from "../../data/assets";
import { aeroSectionFold } from "../../utils/motion";
import GForceCard from "../ui/GForceCard";

export default function SanctuaryExperience() {
  const cabin = ALL_ASSETS[3];
  const crystal = ALL_ASSETS[4];
  const morningSun = ALL_ASSETS[13];

  return (
    <motion.section
      id="sanctuary"
      variants={aeroSectionFold}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 md:py-32 bg-[#F9F7F2] border-t border-[#0F172A]/8"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-14 space-y-14 md:space-y-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
              <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-[#7E7467]">
                04 // INTERIOR SANCTUARY
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#0F172A] tracking-tight">
              An acoustic sanctuary.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#7E7467] max-w-md leading-relaxed">
            Eliminating overhead bins and visual noise, our cabin architecture utilizes indirect floor illumination and decoupled bulkheads for deep rest.
          </p>
        </div>

        {/* Asymmetric Gallery Layout with Interactive G-Force Tilts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Cabin Image */}
          <div className="lg:col-span-7 space-y-3">
            <GForceCard tiltIntensity={6}>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#F2EEE5] shadow-md border border-[#0F172A]/8 group">
                <img
                  src={cabin.src}
                  alt={cabin.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-md bg-[#F9F7F2]/90 backdrop-blur-md font-mono text-[9px] uppercase tracking-wider text-[#0F172A]">
                  Continuous Salon Architecture
                </div>
              </div>
            </GForceCard>
            <p className="font-sans text-xs text-[#7E7467] leading-relaxed max-w-xl pt-2">
              {cabin.description}
            </p>
          </div>

          {/* Staggered Secondary Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Crystal Card */}
            <GForceCard tiltIntensity={8} className="space-y-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F2EEE5] shadow-sm border border-[#0F172A]/8 group">
                <img
                  src={crystal.src}
                  alt={crystal.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-[#0F172A]/80 backdrop-blur-md font-mono text-[8px] text-white uppercase tracking-wider">
                  Prismatic Glassware
                </div>
              </div>
              <h4 className="font-serif text-base font-semibold text-[#0F172A]">{crystal.title}</h4>
            </GForceCard>

            {/* Morning Light Card */}
            <GForceCard tiltIntensity={8} className="space-y-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F2EEE5] shadow-sm border border-[#0F172A]/8 group">
                <img
                  src={morningSun.src}
                  alt={morningSun.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-[#0F172A]/80 backdrop-blur-md font-mono text-[8px] text-white uppercase tracking-wider">
                  Photon Ingress
                </div>
              </div>
              <h4 className="font-serif text-base font-semibold text-[#0F172A]">{morningSun.title}</h4>
            </GForceCard>

          </div>

        </div>
      </div>
    </motion.section>
  );
}
