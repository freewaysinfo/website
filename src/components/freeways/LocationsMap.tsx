"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MapPin, Users, Zap, Clock, ShieldCheck, TrendingUp, type LucideIcon } from "lucide-react";
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
  const [activeId, setActiveId] = useState<string | null>("koeln");

  const activeLocation = locations.find((l) => l.id === activeId);

  return (
    <Section id="standorte" className="bg-white overflow-hidden py-24 border-y border-gray-100">
      <Container>
        <Stack gap={16}>
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-(--brand-green) font-bold text-sm uppercase tracking-widest block mb-4">
                Regionale Präsenz
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter">
                Ihre Experten für <span className="text-(--brand-green) text-glow-green">NRW</span>
              </h2>
              <p className="text-gray-500 text-lg md:text-xl mt-6 font-medium leading-relaxed">
                Wir decken die wichtigsten Wirtschaftszentren in Nordrhein-Westfalen ab. Mit lokalen Teams garantieren wir maximale Geschwindigkeit und Flexibilität.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="px-8 py-5 bg-gray-50 rounded-3xl border border-gray-100 ring-4 ring-gray-50/50 transition-all hover:scale-105">
                <div className="text-5xl font-black text-black tracking-tighter">8+</div>
                <div className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mt-2">Standorte</div>
              </div>
              <div className="px-8 py-5 bg-(--brand-green)/5 rounded-3xl border border-(--brand-green)/10 ring-4 ring-(--brand-green)/5 glow-green transition-all hover:scale-105">
                <div className="text-5xl font-black text-(--brand-green) tracking-tighter">24/7</div>
                <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mt-2">Einsatzbereit</div>
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Map Container */}
            <div className="lg:col-span-7 relative aspect-4/3 bg-gray-50 rounded-[4rem] p-12 border border-gray-100 shadow-2xl ring-8 ring-gray-50/30">
              {/* Simplified NRW SVG Placeholder/Shape */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <svg viewBox="0 0 500 400" className="w-[85%] h-[85%] fill-current text-white">
                  <path d="M150,50 L350,30 L450,150 L420,300 L250,380 L100,350 L50,200 Z" />
                </svg>
              </div>

              {/* Location Markers */}
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveId(loc.id)}
                  className="absolute group transition-transform hover:scale-110 z-20 cursor-pointer"
                  style={{ "--loc-x": `${loc.x}%`, "--loc-y": `${loc.y}%` } as React.CSSProperties}
                >
                  <div className="relative left-(--loc-x) top-(--loc-y)">
                    {/* Radar Pulse */}
                    <motion.div
                      animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className={`absolute inset-0 rounded-full glow-green ${
                        activeId === loc.id ? "bg-(--brand-green)" : "bg-(--brand-dark)"
                      }`}
                    />
                    <div
                      className={`relative w-5 h-5 rounded-full border-2 border-white shadow-xl transition-all duration-500 ${
                        activeId === loc.id ? "bg-(--brand-green) scale-125" : "bg-white group-hover:bg-(--brand-green)/50"
                      }`}
                    />
                    
                    {/* Label */}
                    <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-black shadow-2xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
                      {loc.name}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Info Card Container */}
            <div className="lg:col-span-5 h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {activeLocation && (
                  <motion.div
                    key={activeLocation.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="bg-white p-12 rounded-[3.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12)] text-black relative overflow-hidden border border-gray-100 ring-8 ring-gray-50/50"
                  >
                    <div className="absolute top-0 right-0 w-80 h-80 bg-(--brand-green)/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="relative z-10 flex flex-col gap-10">
                      <div className="flex items-center justify-between">
                        <div className="p-5 bg-(--brand-green) rounded-[2rem] shadow-xl glow-green">
                          <activeLocation.icon className="h-10 w-10 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-black">Standort</div>
                          <div className="text-3xl font-black tracking-tight">{activeLocation.name}</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="text-6xl font-black text-(--brand-green) tracking-tighter">
                          {activeLocation.kpi}
                        </div>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed">
                          {activeLocation.description}
                        </p>
                      </div>

                      <div className="pt-10 border-t border-gray-100">
                        <div className="text-[10px] text-gray-400 uppercase font-black mb-4 tracking-[0.2em]">
                          Pain Point gelöst:
                        </div>
                        <p className="text-2xl font-bold leading-relaxed tracking-tight text-gray-900">
                          &quot;{activeLocation.painPoint}&quot;
                        </p>
                      </div>

                      <Button className="w-full bg-(--brand-green) hover:bg-(--brand-green)/90 text-white font-bold h-16 rounded-2xl glow-green border-none transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_25px_rgba(74,222,128,0.3)]" asChild>
                        <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer">
                          Jetzt Standort anfragen
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
