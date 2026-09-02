
import { useInView, animate } from "framer-motion";
import { ALL_ASSETS } from "../../data/assets";

// High-Performance Micro-Counter Component
function KineticCounter({ value, decimals = 0, duration = 2.5 }: { value: number; decimals?: number; duration?: number }) {
  const elementRef = useRef<HTMLSpanElement>(null);
  
  // Clean-Room Viewport Trigger (Removed the restrictive negative margin for mobile stability)
  const isInView = useInView(elementRef, { once: true, margin: "0px" });

  useEffect(() => {
    if (!isInView || !elementRef.current) return;

    // Trigger high-precision spring animation on layout mounting
    const controls = animate(0, value, {
      duration: duration,
      ease: [0.16, 1, 0.3, 1], // Liquid Deceleration Curve
      onUpdate(latest) {
        if (elementRef.current) {
          // Format numbers dynamically with thousands-separator commas
          const formatted = latest.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          elementRef.current.textContent = formatted;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, value, decimals, duration]);

  return <span ref={elementRef}>0</span>;
}

export default function CloudDriftAtmosphere() {
  const clouds = ALL_ASSETS[5]; // Asset 06

  const TELEMETRY_CARDS = [
    {
      label: "Service Ceiling",
      value: 45000,
      decimals: 0,
      unit: "FT",
      detail: "Above 98% of civil air traffic"
    },
    {
      label: "High-Speed Cruise",
      value: 0.925,
      decimals: 3,
      unit: "MACH",
      detail: "Non-stop transcontinental range"
    },
    {
      label: "Cabin Acoustic Level",
      value: 42,
      decimals: 0,
      unit: "dBA",
      detail: "Quieter than an open library"
    },
    {
      label: "Internal Altitude",
      value: 3200,
      decimals: 0,
      unit: "FT",
      detail: "Zero fatigue upon arrival"
    }
  ];

  return (
    <section id="telemetry" className="relative py-24 md:py-36 bg-[#0F172A] text-white overflow-hidden">
      
      {/* Background Cloud Layer */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src={clouds.src}
          alt={clouds.title}
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-14 space-y-16 md:space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#D4C5B9]">
            FLIGHT ENVELOPE DYNAMICS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white">
            Performance in absolute silence.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed font-light">
            Cruising above civil traffic layers ensures smooth, turbulence-free flight corridors across international routes.
          </p>
        </div>

        {/* 4 Telemetry Metrics with Active Kinetic Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TELEMETRY_CARDS.map((spec) => (
            <div
              key={spec.label}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 space-y-4 hover:border-white/20 transition-all"
            >
              <span className="font-mono text-[9px] uppercase tracking-wider text-white/50 block">
                {spec.label}
              </span>
              <div className="flex items-baseline gap-1.5 font-mono">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  <KineticCounter value={spec.value} decimals={spec.decimals} />
                </span>
                <span className="text-xs font-bold text-[#D4C5B9]">
                  {spec.unit}
                </span>
              </div>
              <p className="font-sans text-xs text-white/60 pt-1 leading-relaxed">
                {spec.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
