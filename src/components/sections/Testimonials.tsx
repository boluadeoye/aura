import { useState } from "react";

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
    <section id="patrons" className="py-12 sm:py-16 md:py-20 bg-[#F9F7F2] border-t border-[#0F172A]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-14 space-y-8 sm:space-y-10 md:space-y-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
              <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-[#7E7467]">
                05 // PATRON COMMISSIONS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0F172A] tracking-tight">
              Quiet endorsements.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#7E7467] max-w-md leading-relaxed">
            Reflections from principals who have commissioned custom AURA airframe sanctuaries.
          </p>
        </div>

        {/* Dialogue Card Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Active Quote Dialogue Showcase */}
          <div className="lg:col-span-8 p-6 sm:p-10 md:p-12 rounded-2xl bg-[#F2EEE5]/70 border border-[#0F172A]/8 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-4">
              <span className="font-serif text-4xl sm:text-5xl text-[#D4C5B9] leading-none block">“</span>
              <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-[#0F172A] leading-snug font-normal -mt-4">
                {active.quote}
              </p>
            </div>

            <div className="pt-4 border-t border-[#0F172A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <h4 className="font-serif text-base font-bold text-[#0F172A]">{active.patron}</h4>
                <p className="font-sans text-xs text-[#7E7467]">{active.office} — {active.city}</p>
              </div>
              <span className="font-mono text-[8px] font-bold uppercase text-[#0F172A] bg-white/80 px-2.5 py-0.5 rounded-full border border-[#0F172A]/10 w-fit">
                {active.commission}
              </span>
            </div>
          </div>

          {/* Patron Selectors */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-2.5">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setActiveIndex(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-300 border cursor-pointer flex-1 flex flex-col justify-center space-y-0.5 ${
                  activeIndex === idx
                    ? "bg-[#0F172A] text-white border-[#0F172A] shadow-sm translate-x-1"
                    : "bg-white/60 border-black/5 hover:bg-white text-[#0F172A]"
                }`}
              >
                <span className={`font-mono text-[8px] font-bold uppercase tracking-wider ${activeIndex === idx ? "text-[#D4C5B9]" : "text-[#7E7467]"}`}>
                  COMMISSION 0{idx + 1} // {t.city}
                </span>
                <h5 className="font-serif text-sm font-semibold">{t.patron}</h5>
                <p className={`font-sans text-[10px] truncate ${activeIndex === idx ? "text-white/70" : "text-[#7E7467]"}`}>
                  {t.office}
                </p>
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
