import { useRef } from "react";
import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: footerRef, offset: ["start end", "end end"] });
  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 25, stiffness: 200 });
  const letterSpacing = useTransform(smoothVelocity, [-1, 0, 1], ["0.28em", "0.14em", "0.28em"]);
  const opacity = useTransform(scrollYProgress, [0.3, 1], [0.12, 0.45]);

  return (
    <footer ref={footerRef} className="relative w-full pt-20 md:pt-32 pb-4 px-6 bg-[#0F172A] text-white overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_120%_90%_at_50%_105%,rgba(212,197,185,0.35)_0%,rgba(212,197,185,0.12)_32%,rgba(15,23,42,0)_75%)] animate-pulse-slow" />
      <div className="max-w-7xl mx-auto relative z-10 w-full px-5 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 max-w-[600px] gap-8 pb-16 md:pb-24">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1">Contact</span>
            <a href="mailto:bolexadeoye2020@gmail.com" className="font-sans text-[13px] font-semibold text-white/80 hover:text-[#D4C5B9] transition-colors">bolexadeoye2020@gmail.com</a>
          </div>
        </div>
        <div className="relative w-full text-center leading-[0.78] -mb-3 select-none pointer-events-none overflow-hidden">
          <motion.span style={{ letterSpacing, opacity }} className="font-serif text-[clamp(80px,19vw,270px)] font-bold text-[#F9F7F2]/35 uppercase inline-block">AURA</motion.span>
        </div>
      </div>
      <div className="border-t border-white/[0.06] mt-4 pt-6 text-center text-white/30 font-mono text-[9px] uppercase tracking-widest">
        © {new Date().getFullYear()} AURA ATELIER. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
