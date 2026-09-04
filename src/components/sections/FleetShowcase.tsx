import React from "react";
import { ALL_ASSETS } from "../../data/assets";

export default function FleetShowcase() {
  const stabilizer = ALL_ASSETS[6];
  const leadingEdge = ALL_ASSETS[7];
  const nacelle = ALL_ASSETS[8];

  return (
    <section id="fleet" className="py-12 sm:py-16 md:py-20 bg-[#F9F7F2] border-t border-[#0F172A]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-14 space-y-8 sm:space-y-10 md:space-y-12">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
              <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-[#7E7467]">
                01 // EXTERNAL AEROFOIL ENGINEERING
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight">
              Sculpted for zero drag.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#7E7467] max-w-md leading-relaxed font-normal">
            Every contour is finished in multi-stage Champagne enamel, engineered to maintain laminar airflow across the transonic cruise envelope.
          </p>
        </div>

        {/* 3-Column Aerodynamic Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Stabilizer */}
          <div className="group space-y-3">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#F2EEE5] border border-[#0F172A]/8 shadow-sm">
              <img
                src={stabilizer.src}
                alt={stabilizer.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#F9F7F2]/90 backdrop-blur-md font-mono text-[8px] font-bold uppercase tracking-wider text-[#0F172A]">
                [ 01 // EMPENNAGE ]
              </div>
            </div>
            <div className="space-y-0.5">
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#0F172A]">{stabilizer.title}</h3>
              <p className="font-sans text-xs text-[#7E7467] leading-relaxed">{stabilizer.description}</p>
            </div>
          </div>

          {/* Card 2: Leading Edge */}
          <div className="group space-y-3 md:-translate-y-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#F2EEE5] border border-[#0F172A]/8 shadow-sm">
              <img
                src={leadingEdge.src}
                alt={leadingEdge.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#F9F7F2]/90 backdrop-blur-md font-mono text-[8px] font-bold uppercase tracking-wider text-[#0F172A]">
                [ 02 // AEROFOIL ]
              </div>
            </div>
            <div className="space-y-0.5">
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#0F172A]">{leadingEdge.title}</h3>
              <p className="font-sans text-xs text-[#7E7467] leading-relaxed">{leadingEdge.description}</p>
            </div>
          </div>

          {/* Card 3: Engine Intake */}
          <div className="group space-y-3">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#F2EEE5] border border-[#0F172A]/8 shadow-sm">
              <img
                src={nacelle.src}
                alt={nacelle.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#F9F7F2]/90 backdrop-blur-md font-mono text-[8px] font-bold uppercase tracking-wider text-[#0F172A]">
                [ 03 // NACELLE ]
              </div>
            </div>
            <div className="space-y-0.5">
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#0F172A]">{nacelle.title}</h3>
              <p className="font-sans text-xs text-[#7E7467] leading-relaxed">{nacelle.description}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
