"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MapPin, Users, Zap, Clock, ShieldCheck, TrendingUp, type LucideIcon } from "lucide-react";

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
    <Section id="standorte" className="bg-white overflow-hidden py-24">
      <Container>
        <Stack gap={16}>
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-(--brand-green) font-bold text-sm uppercase tracking-widest block mb-4">
                Regionale Präsenz
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-(--brand-dark)">
                Ihre Experten für <span className="text-(--brand-green)">NRW</span>
              </h2>
              <p className="text-(--brand-gray) text-lg md:text-xl mt-6">
                Wir decken die wichtigsten Wirtschaftszentren in Nordrhein-Westfalen ab. Mit lokalen Teams garantieren wir maximale Geschwindigkeit und Flexibilität.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-4 bg-(--brand-light) rounded-2xl border border-(--brand-border)">
                <div className="text-3xl font-bold text-(--brand-dark)">8+</div>
                <div className="text-sm text-(--brand-gray)">Standorte</div>
              </div>
              <div className="px-6 py-4 bg-(--brand-light) rounded-2xl border border-(--brand-border)">
                <div className="text-3xl font-bold text-(--brand-green)">24/7</div>
                <div className="text-sm text-(--brand-gray)">Einsatzbereit</div>
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Map Container */}
            <div className="lg:col-span-7 relative aspect-4/3 bg-(--brand-light)/30 rounded-[3rem] p-8 border border-(--brand-border)/50">
              {/* Simplified NRW SVG Placeholder/Shape */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <svg viewBox="0 0 500 400" className="w-full h-full fill-current text-(--brand-dark)">
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
                      className={`relative w-4 h-4 rounded-full border-2 border-white shadow-lg transition-colors duration-300 ${
                        activeId === loc.id ? "bg-(--brand-green)" : "bg-(--brand-dark) group-hover:bg-(--brand-green)/50"
                      }`}
                    />
                    
                    {/* Label */}
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold text-(--brand-dark) shadow-sm border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
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
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="bg-(--brand-anthracite) p-10 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden ring-1 ring-white/10 glow-green"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-(--brand-green)/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="relative z-10 flex flex-col gap-8">
                      <div className="flex items-center justify-between">
                        <div className="p-4 bg-(--brand-green) rounded-2xl">
                          <activeLocation.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400 uppercase tracking-widest font-bold">Standort</div>
                          <div className="text-2xl font-bold">{activeLocation.name}</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="text-5xl font-bold text-(--brand-green)">
                          {activeLocation.kpi}
                        </div>
                        <p className="text-lg text-gray-300">
                          {activeLocation.description}
                        </p>
                      </div>

                      <div className="pt-8 border-t border-white/10">
                        <div className="text-sm text-gray-400 uppercase font-bold mb-3 tracking-wide">
                          Pain Pointgelöst:
                        </div>
                        <p className="text-xl font-medium leading-relaxed">
                          &quot;{activeLocation.painPoint}&quot;
                        </p>
                      </div>

                      <button className="w-full py-5 mt-6 bg-(--brand-green) text-white font-bold rounded-xl hover:bg-(--brand-yellow) hover:text-(--brand-dark) transition-all cursor-pointer shadow-lg active:scale-[0.98] glow-green border-none text-lg">
                        Diesen Standort anfragen
                      </button>
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
