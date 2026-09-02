
import { motion } from "framer-motion";
import { ALL_ASSETS } from "../../data/assets";
import { aeroSectionFold, aeroStaggerContainer, aeroCardItem } from "../../utils/motion";
import GForceCard from "../ui/GForceCard";

export default function FleetShowcase() {
  const stabilizer = ALL_ASSETS[6];
  const leadingEdge = ALL_ASSETS[7];
  const nacelle = ALL_ASSETS[8];

  return (
    <motion.section
      id="fleet"
      variants={aeroSectionFold}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 md:py-32 bg-[#F9F7F2] border-t border-[#0F172A]/8"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-14 space-y-14 md:space-y-20">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
              <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-[#7E7467]">
                01 // EXTERNAL AEROFOIL ENGINEERING
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#0F172A] tracking-tight leading-tight">
              Sculpted for zero drag.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#7E7467] max-w-md leading-relaxed font-normal">
            Every contour is finished in multi-stage Champagne enamel, engineered to maintain laminar airflow across the transonic cruise envelope.
          </p>
        </div>

        {/* 3-Column Staggered Aerodynamic Cards with G-Force Interactive Tilt */}
        <motion.div
          variants={aeroStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {/* Card 1 */}
          <motion.div variants={aeroCardItem}>
            <GForceCard tiltIntensity={8} className="group space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#F2EEE5] border border-[#0F172A]/8 shadow-sm">
                <img
                  src={stabilizer.src}
                  alt={stabilizer.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-[#F9F7F2]/90 backdrop-blur-md font-mono text-[9px] font-bold uppercase tracking-wider text-[#0F172A]">
                  [ 01 // EMPENNAGE ]
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-semibold text-[#0F172A]">{stabilizer.title}</h3>
                <p className="font-sans text-xs text-[#7E7467] leading-relaxed">{stabilizer.description}</p>
              </div>
            </GForceCard>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={aeroCardItem} className="md:-translate-y-8">
            <GForceCard tiltIntensity={8} className="group space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#F2EEE5] border border-[#0F172A]/8 shadow-sm">
                <img
                  src={leadingEdge.src}
                  alt={leadingEdge.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-[#F9F7F2]/90 backdrop-blur-md font-mono text-[9px] font-bold uppercase tracking-wider text-[#0F172A]">
                  [ 02 // AEROFOIL ]
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-semibold text-[#0F172A]">{leadingEdge.title}</h3>
                <p className="font-sans text-xs text-[#7E7467] leading-relaxed">{leadingEdge.description}</p>
              </div>
            </GForceCard>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={aeroCardItem}>
            <GForceCard tiltIntensity={8} className="group space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#F2EEE5] border border-[#0F172A]/8 shadow-sm">
                <img
                  src={nacelle.src}
                  alt={nacelle.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-[#F9F7F2]/90 backdrop-blur-md font-mono text-[9px] font-bold uppercase tracking-wider text-[#0F172A]">
                  [ 03 // NACELLE ]
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-semibold text-[#0F172A]">{nacelle.title}</h3>
                <p className="font-sans text-xs text-[#7E7467] leading-relaxed">{nacelle.description}</p>
              </div>
            </GForceCard>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}
