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
  const scrollToExplore = () => document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" });
  const scrollToCommission = () => document.getElementById("commission")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen bg-[#F9F7F2] text-[#0F172A] selection:bg-[#0F172A] selection:text-white">
      <Navbar onOpenInquiry={scrollToCommission} />
      <Hero onExplore={scrollToExplore} />
      <FleetShowcase />
      <HorizonGallery />
      <MaterialityAtelier />
      <SanctuaryExperience />
      <CloudDriftAtmosphere />
      <Testimonials />
      <BespokeConsultation />
      <Footer />
    </div>
  );
}
