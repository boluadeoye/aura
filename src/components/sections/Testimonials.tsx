
import { motion, AnimatePresence } from "framer-motion";
import { aeroSectionFold } from "../../utils/motion";

const TESTIMONIALS = [
  {
    id: 1,
    patron: "Lord Sterling Vance",
    office: "Principal, Vance Family Office",
    city: "Zurich / London",
    quote: "The acoustic isolation at 45,000 feet is extraordinary. Traveling from Geneva to Dubai feels like sitting inside a quiet private library in Mayfair.",
    commission: "Bespoke Transcontinental Cabin Commission"
  },
  {
    id: 2,
    patron: "Dr. Elena Rostova",
    office: "Aeronautical Architect & Collector",
    city: "Geneva",
    quote: "The tactile hand-stitched cashmere partitions and planar titanium joinery set a new precedent for private aviation interiors.",
    commission: "Custom Ultra-Long Airframe Architecture"
  },
  {
    id: 3,
    patron: "Jean-Paul Delacroix",
    office: "Managing Director, Delacroix Capital",
    city: "Paris / Tokyo",
    quote: "Zero vibration, flawless natural light ingress, and unmatched Swiss structural precision. AURA is the definitive standard of flight.",
    commission: "High-Speed Transpacific Sanctuary"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = TESTIMONIALS[activeIndex];

  return (
    <motion.section
      id="patrons"
      variants={aeroSectionFold}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 md:py-32 bg-[#F9F7F2] border-t border-[#0F172A]/8"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-14 space-y-12 md:space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
              <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-[#7E7467]">
                05 // PATRON COMMISSIONS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#0F172A] tracking-tight">
              Quiet endorsements.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#7E7467] max-w-md leading-relaxed">
            Reflections from principals who have commissioned custom AURA airframe sanctuaries.
          </p>
        </div>

        {/* Dialogue Card Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Active Quote Dialogue Showcase */}
          <div className="lg:col-span-8 p-8 sm:p-12 md:p-16 rounded-3xl bg-[#F2EEE5]/60 border border-[#0F172A]/8 flex flex-col justify-between space-y-8 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <span className="font-serif text-6xl text-[#D4C5B9] leading-none block">“</span>
                <p className="font-serif italic text-xl sm:text-3xl md:text-4xl text-[#0F172A] leading-snug font-normal -mt-6">
                  {active.quote}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="pt-6 border-t border-[#0F172A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <h4 className="font-serif text-lg font-bold text-[#0F172A]">{active.patron}</h4>
                <p className="font-sans text-xs text-[#7E7467]">{active.office} — {active.city}</p>
              </div>
              <span className="font-mono text-[9px] font-bold uppercase text-[#0F172A] bg-white/80 px-3 py-1 rounded-full border border-[#0F172A]/10 w-fit">
                {active.commission}
              </span>
            </div>
          </div>

          {/* Patron Selectors */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-3">
            {TESTIMONIALS.map((t, idx) => (
              <motion.button
                key={t.id}
                onClick={() => setActiveIndex(idx)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`p-5 rounded-2xl text-left transition-all duration-300 border cursor-pointer flex-1 flex flex-col justify-center space-y-1 ${
                  activeIndex === idx
                    ? "bg-[#0F172A] text-white border-[#0F172A] shadow-md translate-x-1"
                    : "bg-white/60 border-black/5 hover:bg-white text-[#0F172A]"
                }`}
              >
                <span className={`font-mono text-[8px] font-bold uppercase tracking-wider ${activeIndex === idx ? "text-[#D4C5B9]" : "text-[#7E7467]"}`}>
                  COMMISSION 0{idx + 1} // {t.city}
                </span>
                <h5 className="font-serif text-base font-semibold">{t.patron}</h5>
                <p className={`font-sans text-[11px] truncate ${activeIndex === idx ? "text-white/70" : "text-[#7E7467]"}`}>
                  {t.office}
                </p>
              </motion.button>
            ))}
          </div>

        </div>

      </div>
    </motion.section>
  );
}
