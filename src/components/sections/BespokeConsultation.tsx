import { useState } from "react";
import { ALL_ASSETS } from "../../data/assets";

export default function BespokeConsultation() {
  const titaniumBillet = ALL_ASSETS[1];
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rangeRequirement: "Transcontinental (3,500+ NM)",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="commission" className="py-12 sm:py-16 md:py-20 bg-[#F9F7F2] border-t border-[#0F172A]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Titanium Spec */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-2">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#7E7467]">
                06 // BESPOKE COMMISSION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0F172A] tracking-tight">
                Commission your sanctuary.
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#7E7467] leading-relaxed">
                Each AURA airframe is configured directly with our master architects in Zurich. Limited to six bespoke cabin commissions per calendar year.
              </p>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#F2EEE5] shadow-sm border border-[#0F172A]/8">
              <img
                src={titaniumBillet.src}
                alt={titaniumBillet.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-[#F9F7F2]/90 backdrop-blur-md font-mono text-[8px] font-bold uppercase text-[#0F172A]">
                Structural Titanium Spar Interface
              </div>
            </div>
          </div>

          {/* Right Column: Portal */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white shadow-md border border-[#0F172A]/8 space-y-4">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#0F172A] text-[#D4C5B9] flex items-center justify-center mx-auto">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl text-[#0F172A]">Commission Brief Received</h3>
                  <p className="font-sans text-xs text-[#7E7467] max-w-sm mx-auto leading-relaxed">
                    Our principal architect in Zurich will review your flight envelope and contact you directly within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block font-mono text-[9px] uppercase tracking-wider text-[#7E7467] mb-1">
                        Principal Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alexander Vance"
                        className="w-full h-10 rounded-lg bg-[#F9F7F2] border border-[#0F172A]/15 px-3.5 font-sans text-xs text-[#0F172A] outline-none focus:border-[#0F172A]"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[9px] uppercase tracking-wider text-[#7E7467] mb-1">
                        Direct Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. bolexadeoye2020@gmail.com"
                        className="w-full h-10 rounded-lg bg-[#F9F7F2] border border-[#0F172A]/15 px-3.5 font-sans text-xs text-[#0F172A] outline-none focus:border-[#0F172A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-wider text-[#7E7467] mb-1">
                      Flight Range Mission
                    </label>
                    <select
                      value={formData.rangeRequirement}
                      onChange={(e) => setFormData({ ...formData, rangeRequirement: e.target.value })}
                      className="w-full h-10 rounded-lg bg-[#F9F7F2] border border-[#0F172A]/15 px-3.5 font-sans text-xs text-[#0F172A] outline-none focus:border-[#0F172A]"
                    >
                      <option value="Transcontinental (3,500+ NM)">Transcontinental (3,500+ NM) — London to Dubai</option>
                      <option value="Global Ultra-Long (7,500+ NM)">Global Ultra-Long (7,500+ NM) — Geneva to Tokyo Non-Stop</option>
                      <option value="Regional High-Speed (1,800 NM)">Regional High-Speed (1,800 NM) — Alpine Express</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-wider text-[#7E7467] mb-1">
                      Custom Cabin Specifications
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Specify cashmere weaves, silk loom requirements, or private stateroom configurations..."
                      className="w-full p-3 rounded-lg bg-[#F9F7F2] border border-[#0F172A]/15 font-sans text-xs text-[#0F172A] outline-none focus:border-[#0F172A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#0F172A] text-white font-sans text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#1E293B] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>Transmit Commission Brief</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4C5B9]">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
