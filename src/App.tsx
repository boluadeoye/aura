import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import FleetShowcase from "./components/sections/FleetShowcase";
import HorizonGallery from "./components/sections/HorizonGallery";
import MaterialityAtelier from "./components/sections/MaterialityAtelier";
import SanctuaryExperience from "./components/sections/SanctuaryExperience";
import CloudDriftAtmosphere from "./components/sections/CloudDriftAtmosphere";
import Testimonials from "./components/sections/Testimonials";
import BespokeConsultation from "./components/sections/BespokeConsultation";
import Footer from "./components/layout/Footer";

export default function App() {
  const scrollToExplore = () => {
    const el = document.getElementById("fleet");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCommission = () => {
    const el = document.getElementById("commission");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen bg-[#F9F7F2] text-[#0F172A] selection:bg-[#0F172A] selection:text-white">
      {/* 1. Whisper-Thin Architectural Header */}
      <Navbar onOpenInquiry={scrollToCommission} />

      {/* 2. Haute Couture Stratospheric Hero */}
      <Hero onExplore={scrollToExplore} />

      {/* 3. Aerodynamic Fleet Engineering */}
      <FleetShowcase />

      {/* 4. Visual Archive Carousel */}
      <HorizonGallery />

      {/* 5. Tactile Materiality Atelier */}
      <MaterialityAtelier />

      {/* 6. Interior Sanctuary */}
      <SanctuaryExperience />

      {/* 7. Cloud-Drift Telemetry Matrix */}
      <CloudDriftAtmosphere />

      {/* 8. Patron Dialogue Testimonials */}
      <Testimonials />

      {/* 9. Bespoke Commission Portal */}
      <BespokeConsultation />

      {/* 10. Expanding Holo-Glow Footer */}
      <Footer />
    </div>
  );
}
