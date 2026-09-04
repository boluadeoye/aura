import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export default function Navbar({ onOpenInquiry }: { onOpenInquiry: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [zurichTime, setZurichTime] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const updateClock = () => {
      const now = new Date();
      setZurichTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/Zurich",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " CET"
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "unset";
  }, [mobileMenu]);

  const navLinks = [
    { label: "Fleet", href: "#fleet" },
    { label: "Gallery", href: "#gallery" },
    { label: "Atelier", href: "#atelier" },
    { label: "Sanctuary", href: "#sanctuary" },
    { label: "Telemetry", href: "#telemetry" },
    { label: "Patrons", href: "#patrons" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F9F7F2]/95 backdrop-blur-xl border-b border-[#0F172A]/8 py-2.5 sm:py-3 shadow-[0_4px_24px_rgba(15,23,42,0.03)]"
          : "bg-transparent border-b border-white/10 py-3.5 sm:py-5"
      }`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-6 lg:px-12 flex items-center justify-between">
          
          {/* ─── ZONE 1: BRANDMARK ───────────────────────────────────────── */}
          <div className="flex-1 flex items-center justify-start min-w-0">
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className={`w-5 h-5 rounded-sm flex items-center justify-center transition-transform duration-500 group-hover:rotate-45 shrink-0 ${
                scrolled ? "bg-[#0F172A]" : "bg-white/10 border border-white/20 backdrop-blur-md"
              }`}>
                <div className={`w-1.5 h-1.5 rounded-sm ${scrolled ? "bg-[#D4C5B9]" : "bg-[#DCEE2D]"}`} />
              </div>
              <div className="flex items-baseline gap-1.5 sm:gap-2">
                <span className={`font-serif text-lg sm:text-xl font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${
                  scrolled ? "text-[#0F172A]" : "text-white"
                }`}>
                  AURA
                </span>
                <span className={`hidden xl:inline font-mono text-[8px] font-bold tracking-[0.3em] uppercase transition-colors duration-300 ${
                  scrolled ? "text-[#7E7467]" : "text-white/50"
                }`}>
                  // ATELIER
                </span>
              </div>
            </a>
          </div>

          {/* ─── ZONE 2: DESKTOP PILL (ACTIVATES AT >= 740px) ─────────────── */}
          <nav className="hidden md:flex flex-none items-center justify-center">
            <div className={`flex items-center gap-3.5 md:gap-4 lg:gap-7 xl:gap-8 px-4 md:px-5 lg:px-6 py-1.5 md:py-2 rounded-full transition-all duration-300 ${
              scrolled 
                ? "bg-[#EEEDE8]/70 border border-[#0F172A]/10" 
                : "bg-white/[0.06] border border-white/15 backdrop-blur-md shadow-sm"
            }`}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-sans text-[10px] md:text-[10.5px] lg:text-[11px] font-medium uppercase tracking-[0.16em] md:tracking-[0.18em] lg:tracking-[0.22em] transition-all duration-200 relative py-1 group/link whitespace-nowrap ${
                    scrolled 
                      ? "text-[#0F172A]/70 hover:text-[#0F172A]" 
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#DCEE2D] opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
                </a>
              ))}
            </div>
          </nav>

          {/* ─── ZONE 3: ACTIONS (EQUAL FLEX-1 BALANCE) ───────────────────── */}
          <div className="flex-1 flex items-center justify-end gap-2 sm:gap-3 md:gap-4">
            {/* Live Chronometer on Wide Desktops */}
            <div className={`hidden 2xl:flex items-center gap-2 font-mono text-[9px] tracking-widest uppercase transition-colors duration-300 ${
              scrolled ? "text-[#7E7467]" : "text-white/60"
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${scrolled ? "bg-emerald-700" : "bg-[#DCEE2D]"}`} />
              <span>ZURICH {zurichTime || "15:18 CET"}</span>
            </div>

            {/* Precision Commission Button */}
            <button
              onClick={onOpenInquiry}
              className={`px-3.5 sm:px-4 md:px-5 py-2 rounded-xl font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] md:tracking-[0.18em] active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm border shrink-0 ${
                scrolled
                  ? "bg-[#0F172A] text-white border-[#0F172A] hover:bg-transparent hover:text-[#0F172A]"
                  : "bg-white/10 text-white border-white/25 backdrop-blur-md hover:bg-[#DCEE2D] hover:text-[#0F172A] hover:border-[#DCEE2D] hover:shadow-[0_0_20px_rgba(220,238,45,0.35)]"
              }`}
            >
              <span>Commission</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>

            {/* Hamburger Trigger (Active Only < 740px) */}
            <button
              onClick={() => setMobileMenu(true)}
              className="md:hidden p-2 flex flex-col justify-center gap-1.5 w-8 h-8 cursor-pointer shrink-0"
              aria-label="Open Navigation"
            >
              <span className={`h-[1.5px] transition-all duration-300 w-5 ${scrolled ? "bg-[#0F172A]" : "bg-white"}`} />
              <span className={`h-[1.5px] transition-all duration-300 w-3.5 self-end ${scrolled ? "bg-[#0F172A]" : "bg-white"}`} />
            </button>
          </div>

        </div>
      </header>

      {/* ─── 100% SOLID FULL-SCREEN DRAWER (< 740px) ────────────────────── */}
      <AnimatePresence>
        {mobileMenu && (
          <div className="md:hidden fixed inset-0 z-[100] bg-[#F9F7F2] flex flex-col justify-between p-6 sm:p-10 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-[#0F172A]/10 pb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-sm bg-[#0F172A] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#D4C5B9]" />
                </div>
                <span className="font-serif text-xl font-bold tracking-[0.18em] uppercase text-[#0F172A]">
                  AURA
                </span>
              </div>

              <button
                onClick={() => setMobileMenu(false)}
                className="w-10 h-10 rounded-full bg-[#0F172A]/5 border border-[#0F172A]/10 flex items-center justify-center text-[#0F172A] cursor-pointer"
                aria-label="Close Navigation"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col space-y-4 my-auto py-6">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className="font-serif text-3xl sm:text-4xl text-[#0F172A] hover:text-[#7E7467] transition-colors flex items-baseline justify-between border-b border-[#0F172A]/5 pb-3"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-[#7E7467]">0{idx + 1}</span>
                </a>
              ))}
            </div>

            <div className="space-y-4 pt-4 border-t border-[#0F172A]/10">
              <button
                onClick={() => {
                  setMobileMenu(false);
                  onOpenInquiry();
                }}
                className="w-full py-4 rounded-xl bg-[#0F172A] text-white font-sans text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Begin Bespoke Commission</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4C5B9]">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </button>

              <div className="flex items-center justify-between font-mono text-[9px] text-[#7E7467] uppercase tracking-widest pt-2">
                <span>Zurich Atelier Operations</span>
                <span>{zurichTime}</span>
              </div>
            </div>

          </div>
        )}
      </AnimatePresence>
    </>
  );
}
