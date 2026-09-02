import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

export default function Navbar({ onOpenInquiry }: { onOpenInquiry: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [zurichTime, setZurichTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenu]);

  const navLinks = [
    { label: "Fleet", href: "#fleet" },
    { label: "Gallery", href: "#gallery" },
    { label: "Atelier", href: "#atelier" },
    { label: "Sanctuary", href: "#sanctuary" },
    { label: "Telemetry", href: "#telemetry" },
    { label: "Patrons", href: "#patrons" },
  ];

  const menuVariants: Variants = {
    closed: { x: "100%", transition: { type: "spring", stiffness: 380, damping: 38 } },
    opened: { x: 0, transition: { type: "spring", stiffness: 380, damping: 38 } },
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F9F7F2]/95 backdrop-blur-xl border-b border-[#0F172A]/8 py-3.5 shadow-[0_4px_24px_rgba(15,23,42,0.03)]"
          : "bg-transparent border-b border-[#0F172A]/0 py-4 sm:py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-14 flex items-center justify-between">
          
          {/* Brandmark */}
          <a href="#" className="flex items-center gap-3 group">
            <div className={`w-5 h-5 rounded-sm flex items-center justify-center transition-transform duration-500 group-hover:rotate-45 shrink-0 ${
              scrolled ? "bg-[#0F172A]" : "bg-white/10 border border-white/20"
            }`}>
              <div className={`w-1.5 h-1.5 rounded-sm ${scrolled ? "bg-[#D4C5B9]" : "bg-[#DCEE2D]"}`} />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className={`font-serif text-lg sm:text-xl font-bold tracking-[0.18em] uppercase transition-colors duration-300 ${
                scrolled ? "text-[#0F172A]" : "text-white"
              }`}>
                AURA
              </span>
              <span className={`hidden sm:inline font-mono text-[8px] font-bold tracking-[0.3em] uppercase transition-colors duration-300 ${
                scrolled ? "text-[#7E7467]" : "text-white/60"
              }`}>
                // ATELIER
              </span>
            </div>
          </a>

          {/* Center: Live Swiss Chronometer */}
          <div className={`hidden lg:flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase transition-colors duration-300 ${
            scrolled ? "text-[#7E7467]" : "text-white/60"
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${scrolled ? "bg-emerald-700" : "bg-[#DCEE2D]"}`} />
            <span>ZURICH {zurichTime || "15:18 CET"}</span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-sans text-[11px] font-semibold uppercase tracking-[0.2em] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] transition-colors duration-300 ${
                    scrolled 
                      ? "text-[#0F172A]/70 hover:text-[#0F172A] after:bg-[#0F172A]" 
                      : "text-white/80 hover:text-white after:bg-white"
                  } hover:after:w-full after:transition-all`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              onClick={onOpenInquiry}
              className={`px-4 sm:px-5 py-2 rounded-full font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] active:scale-95 transition-all flex items-center gap-2 cursor-pointer shadow-sm border ${
                scrolled
                  ? "bg-[#0F172A] text-white border-[#0F172A] hover:bg-transparent hover:text-[#0F172A]"
                  : "bg-[#DCEE2D] text-[#0F172A] border-[#DCEE2D] hover:bg-white hover:text-[#0F172A] hover:border-white shadow-[0_0_15px_rgba(220,238,45,0.3)]"
              }`}
            >
              <span>Commission</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={scrolled ? "text-[#D4C5B9]" : "text-[#0F172A]"}>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>

            <button
              onClick={() => setMobileMenu(true)}
              className="md:hidden p-2 flex flex-col justify-center gap-1.5 w-8 h-8 cursor-pointer"
              aria-label="Open Navigation"
            >
              <span className={`h-[1.5px] transition-all duration-300 w-5 ${scrolled ? "bg-[#0F172A]" : "bg-white"}`} />
              <span className={`h-[1.5px] transition-all duration-300 w-3.5 self-end ${scrolled ? "bg-[#0F172A]" : "bg-white"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
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
                className="w-full py-4 rounded-xl bg-[#0F172A] text-white font-sans text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2"
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
