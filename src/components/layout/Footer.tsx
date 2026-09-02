import React, { useRef } from "react";
import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 25, stiffness: 200 });

  // Dynamically expand tracking based on scroll velocity
  const letterSpacing = useTransform(smoothVelocity, [-1, 0, 1], ["0.28em", "0.14em", "0.28em"]);
  const opacity = useTransform(scrollYProgress, [0.3, 1], [0.12, 0.45]);

  const SITE_PAGES = [
    { label: "Home Horizon", href: "#" },
    { label: "Fleet Aerofoils", href: "#fleet" },
    { label: "Visual Archive", href: "#gallery" },
    { label: "Material Atelier", href: "#atelier" },
    { label: "Sanctuary Salon", href: "#sanctuary" },
  ];

  const SOCIAL_LINKS = [
    { label: "Twitter / X", href: "https://twitter.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ];

  const LEGAL_LINKS = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Commission", href: "#" },
  ];

  return (
    <footer ref={footerRef} className="relative w-full pt-20 md:pt-32 pb-4 px-6 bg-[#0F172A] text-white overflow-hidden border-t border-white/5">
      
      {/* ─── ATMOSPHERIC HOLO-GLOW CANVAS ──────────────────────────────── */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_120%_90%_at_50%_105%,rgba(212,197,185,0.35)_0%,rgba(212,197,185,0.12)_32%,rgba(15,23,42,0)_75%)] animate-pulse-slow"
        style={{ willChange: "opacity, transform" }}
      />

      {/* ─── CONTAINER ─────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto relative z-10 w-full px-5 sm:px-8">
        
        {/* Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 max-w-[600px] gap-8 pb-16 md:pb-24">
          
          {/* Col 1: Pages */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1">
              Navigation
            </span>
            {SITE_PAGES.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ x: 4 }}
                className="font-sans text-[13px] font-semibold text-white/80 hover:text-[#D4C5B9] transition-colors inline-block w-fit"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Col 2: Social */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1">
              Social
            </span>
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 4 }}
                className="font-sans text-[13px] font-semibold text-white/80 hover:text-[#D4C5B9] transition-colors inline-block w-fit"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Col 3: Legals */}
          <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
            <span className="font-mono text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1">
              Legals
            </span>
            {LEGAL_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ x: 4 }}
                className="font-sans text-[13px] font-semibold text-white/80 hover:text-[#D4C5B9] transition-colors inline-block w-fit"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

        </div>

        {/* ─── MAJESTIC AURA TRACKING VELOCITY EXPANSION ────────────────── */}
        <div className="relative w-full text-center leading-[0.78] -mb-3 sm:-mb-5 md:-mb-6 select-none pointer-events-none overflow-hidden">
          <motion.span
            style={{ letterSpacing, opacity }}
            className="font-serif text-[clamp(80px,19vw,270px)] font-bold text-[#F9F7F2]/35 uppercase inline-block will-change-[letter-spacing,opacity]"
          >
            AURA
          </motion.span>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06] mt-4">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-white/30 font-mono text-[9px]">
          <p className="tracking-widest uppercase">
            © {new Date().getFullYear()} AURA BESPOKE FLIGHT ATELIER. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4">
            <span>ZURICH / LONDON / DUBAI</span>
            <span className="w-1 h-1 rounded-full bg-[#D4C5B9]" />
            <span>45,000 FT SANCTUARY</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
