"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MapPin, Users, Zap, Clock, ShieldCheck, TrendingUp, X, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

interface Location {
  id: string;
  name: string;
  x: number; // Percentage from left
  y: number; // Percentage from top
  kpi: string;
  description: string;
  icon: LucideIcon;
  painPoint: string;
}

const locations: Location[] = [
  {
    id: "koeln",
    name: "Köln",
    x: 45,
    y: 65,
    kpi: ">150 Fahrer",
    description: "Hauptstandort & Logistik-Hub.",
    icon: Users,
    painPoint: "24/7 Support für Gastronomie-Spitzenzeiten."
  },
  {
    id: "bonn",
    name: "Bonn / Troisdorf",
    x: 52,
    y: 78,
    kpi: "<25 Min Zustellung",
    description: "Express-Korridor Köln-Bonn.",
    icon: Zap,
    painPoint: "Hocheffiziente Zustellung in der Metropolregion."
  },
  {
    id: "duesseldorf",
    name: "Düsseldorf / Neuss",
    x: 42,
    y: 48,
    kpi: "B2B Expertise",
    description: "Wirtschaftszentrum & Kurierdienste.",
    icon: ShieldCheck,
    painPoint: "Sichere Dokumenten- & Warenlogistik."
  },
  {
    id: "aachen",
    name: "Aachen",
    x: 15,
    y: 72,
    kpi: "E-Flotten Fokus",
    description: "Grenzregion & Nachhaltigkeit.",
    icon: TrendingUp,
    painPoint: "Umweltfreundliche Logistik für die Innenstadt."
  },
  {
    id: "leverkusen",
    name: "Leverkusen",
    x: 48,
    y: 55,
    kpi: "99.9% Pünktlichkeit",
    description: "Industrielle Anbindung.",
    icon: Clock,
    painPoint: "Präzises Zeitmanagement für Firmenkunden."
  },
  {
    id: "moenchengladbach",
    name: "Mönchengladbach",
    x: 28,
    y: 45,
    kpi: "Skalierbare Teams",
    description: "Flexible Personal-Logistik.",
    icon: Users,
    painPoint: "Schnelle Reaktionszeiten bei Personalbedarf."
  },
  {
    id: "bergisch-gladbach",
    name: "Bergisch Gladbach",
    x: 55,
    y: 62,
    kpi: "Lokale Dominanz",
    description: "Nahverdichtung im Umland.",
    icon: MapPin,
    painPoint: "Lokale Präsenz für schnellere Wege."
  },
  {
    id: "frechen",
    name: "Frechen",
    x: 40,
    y: 68,
    kpi: "Logistik-Tor",
    description: "Westliche Anbindung Köln.",
    icon: Zap,
    painPoint: "Perfekter Knotenpunkt für West-NRW."
  }
];

export function LocationsMap() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeLocation = locations.find((l) => l.id === activeId);

  return (
    <Section id="standorte" className="bg-[#0a0a0a] overflow-hidden py-24 border-y border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.05),transparent_70%)] pointer-events-none" />
      
      <Container className="relative z-10">
        <Stack gap={16}>
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-(--brand-green) font-bold text-sm uppercase tracking-widest block mb-4 glow-green">
                Regionale Präsenz
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                Ihre Experten für <span className="text-(--brand-green) text-glow-green">NRW</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl mt-6 font-medium leading-relaxed">
                Wir decken die wichtigsten Wirtschaftszentren in Nordrhein-Westfalen ab. Mit lokalen Teams garantieren wir maximale Geschwindigkeit und Flexibilität.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="px-8 py-5 bg-white/5 rounded-3xl border border-white/10 ring-4 ring-white/5 transition-all hover:scale-105 hover:bg-white/10">
                <div className="text-5xl font-black text-white tracking-tighter">8+</div>
                <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mt-2">Standorte</div>
              </div>
              <div className="px-8 py-5 bg-(--brand-green)/10 rounded-3xl border border-(--brand-green)/20 ring-4 ring-(--brand-green)/10 glow-green transition-all hover:scale-105">
                <div className="text-5xl font-black text-(--brand-green) tracking-tighter">24/7</div>
                <div className="text-[10px] text-gray-300 font-black uppercase tracking-[0.2em] mt-2">Einsatzbereit</div>
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Map Container */}
            <div className="lg:col-span-7 relative aspect-square md:aspect-4/3 bg-[#111] rounded-[4rem] p-12 border border-white/10 shadow-2xl ring-8 ring-white/5 overflow-hidden group">
              {/* Subtle Dot Grid Background */}
              <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#fff_1px,transparent_0)] bg-size-[24px_24px]" />
              
              {/* Simplified NRW SVG Placeholder/Shape */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none transition-opacity group-hover:opacity-30">
                <svg viewBox="0 0 500 400" className="w-[90%] h-[90%] fill-current text-gray-500 drop-shadow-2xl">
                  <path d="M150,50 L350,30 L450,150 L420,300 L250,380 L100,350 L50,200 Z" />
                </svg>
              </div>

              {/* Location Markers */}
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveId(loc.id)}
                  className="absolute group/marker transition-transform hover:scale-110 z-20 cursor-pointer -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                >
                  <div className="relative">
                    {/* Radar Pulse - Only animate for active or hovered items */}
                    {activeId === loc.id && (
                      <motion.div
                        animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full glow-green bg-(--brand-green) will-change-transform"
                      />
                    )}
                    <div
                      className={`relative w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-[#111] shadow-xl transition-all duration-500 will-change-transform ${
                        activeId === loc.id ? "bg-(--brand-green) scale-125 shadow-[0_0_20px_rgba(74,222,128,0.8)]" : "bg-white group-hover/marker:bg-(--brand-green) group-hover/marker:scale-110"
                      }`}
                    />
                    
                    {/* Label */}
                    <div className={`absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-xl border border-white/10 transition-all z-30 ${activeId === loc.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90 group-hover/marker:opacity-100 group-hover/marker:scale-100'}`}>
                      {loc.name}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Info Card Container */}
            <div className={`fixed inset-0 z-[50] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm lg:relative lg:inset-auto lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:col-span-5 h-full lg:flex lg:flex-col lg:justify-center pointer-events-none lg:pointer-events-auto transition-all ${activeLocation ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0 lg:opacity-100'}`}>
              <AnimatePresence mode="wait">
                {activeLocation && (
                  <motion.div
                    key={activeLocation.id}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-[#111] w-full max-w-md lg:max-w-none p-10 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] text-white relative overflow-hidden border border-white/10 ring-1 lg:ring-8 ring-white/5"
                    onClick={(e) => e.stopPropagation()}
                  >
                     {/* Close Button for Mobile */}
                    <button 
                      onClick={() => setActiveId(null)}
                      aria-label="Standort-Details schließen"
                      className="absolute top-6 right-6 lg:hidden w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50 pointer-events-auto"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="absolute top-0 right-0 w-80 h-80 bg-(--brand-green)/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col gap-8 lg:gap-10">
                      <div className="flex items-center justify-between">
                        <div className="p-4 lg:p-5 bg-(--brand-green)/10 rounded-[1.5rem] lg:rounded-[2rem] shadow-xl ring-1 ring-(--brand-green)/20 text-(--brand-green)">
                          <activeLocation.icon className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black">Standort</div>
                          <div className="text-2xl lg:text-3xl font-black tracking-tight text-white">{activeLocation.name}</div>
                        </div>
                      </div>

                      <div className="space-y-3 lg:space-y-4">
                        <div className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500 tracking-tighter">
                          {activeLocation.kpi}
                        </div>
                        <p className="text-lg lg:text-xl text-gray-400 font-medium leading-relaxed">
                          {activeLocation.description}
                        </p>
                      </div>

                      <div className="pt-8 lg:pt-10 border-t border-white/10">
                        <div className="text-[10px] text-(--brand-green) uppercase font-black mb-3 lg:mb-4 tracking-[0.2em] glow-green">
                          Pain Point gelöst:
                        </div>
                        <p className="text-xl lg:text-2xl font-bold leading-relaxed tracking-tight text-white">
                          &quot;{activeLocation.painPoint}&quot;
                        </p>
                      </div>

                      <Button className="w-full bg-(--brand-green) hover:bg-(--brand-green)/90 text-(--brand-dark) font-black h-14 lg:h-16 rounded-2xl glow-green border-none transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(74,222,128,0.3)]" asChild>
                        <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer">
                          Jetzt Standort anfragen
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Background click to close on mobile */}
              <div className="absolute inset-0 z-0 lg:hidden" onClick={() => setActiveId(null)} />
            </div>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}

