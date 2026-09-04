import React from "react";
import { ALL_ASSETS } from "../../data/assets";

export default function SanctuaryExperience() {
  const cabin = ALL_ASSETS[3];
  const crystal = ALL_ASSETS[4];
  const morningSun = ALL_ASSETS[13];

  return (
    <section id="sanctuary" className="py-12 sm:py-16 md:py-20 bg-[#F9F7F2] border-t border-[#0F172A]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-14 space-y-8 sm:space-y-10 md:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
              <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-[#7E7467]">
                04 // INTERIOR SANCTUARY
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0F172A] tracking-tight">
              An acoustic sanctuary.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#7E7467] max-w-md leading-relaxed">
            Eliminating overhead bins and visual noise, our cabin architecture utilizes indirect floor illumination and decoupled bulkheads for deep rest.
          </p>
        </div>

        {/* Asymmetric Gallery Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          
          {/* Main Cabin Image */}
          <div className="lg:col-span-7 space-y-2">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#F2EEE5] shadow-sm border border-[#0F172A]/8 group">
              <img
                src={cabin.src}
                alt={cabin.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-md bg-[#F9F7F2]/90 backdrop-blur-md font-mono text-[8px] uppercase tracking-wider text-[#0F172A]">
                Continuous Salon Architecture
              </div>
            </div>
            <p className="font-sans text-xs text-[#7E7467] leading-relaxed max-w-xl pt-1">
              {cabin.description}
            </p>
          </div>

          {/* Staggered Secondary Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Crystal Card */}
            <div className="space-y-1.5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F2EEE5] shadow-sm border border-[#0F172A]/8 group">
                <img
                  src={crystal.src}
                  alt={crystal.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-[#0F172A]/80 backdrop-blur-md font-mono text-[8px] text-white uppercase tracking-wider">
                  Prismatic Glassware
                </div>
              </div>
              <h4 className="font-serif text-sm sm:text-base font-semibold text-[#0F172A]">{crystal.title}</h4>
            </div>

            {/* Morning Light Card */}
            <div className="space-y-1.5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F2EEE5] shadow-sm border border-[#0F172A]/8 group">
                <img
                  src={morningSun.src}
                  alt={morningSun.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-[#0F172A]/80 backdrop-blur-md font-mono text-[8px] text-white uppercase tracking-wider">
                  Photon Ingress
                </div>
              </div>
              <h4 className="font-serif text-sm sm:text-base font-semibold text-[#0F172A]">{morningSun.title}</h4>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
