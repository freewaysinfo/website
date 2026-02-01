"use client";

import { Section } from './ui/Layout';

export const NRWMap = () => {
  return (
    <Section className="bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block px-3 py-1 bg-[#FBBF24]/10 text-[#f59e0b] rounded-lg text-sm font-bold mb-6 uppercase tracking-wider">
            Regionale Stärke
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
            Präsenz in ganz Nordrhein-Westfalen
          </h2>
          <p className="text-lg text-zinc-600 mb-8 leading-relaxed max-w-xl">
            Freeways GmbH ist tief in NRW verwurzelt. Mit unserer Zentrale in Köln 
            decken wir alle wichtigen Knotenpunkte ab – von Düsseldorf bis ins Ruhrgebiet.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <p className="text-2xl font-bold text-[#059669]">Köln</p>
              <p className="text-sm text-zinc-500 font-medium uppercase tracking-widest mt-1">Zentrale & Hub</p>
            </div>
            <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <p className="text-2xl font-bold text-zinc-900">Düsseldorf</p>
              <p className="text-sm text-zinc-500 font-medium uppercase tracking-widest mt-1">Express-Knoten</p>
            </div>
            <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <p className="text-2xl font-bold text-zinc-900">Ruhrgebiet</p>
              <p className="text-sm text-zinc-500 font-medium uppercase tracking-widest mt-1">Last-Mile Fokus</p>
            </div>
            <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <p className="text-2xl font-bold text-zinc-900">Bonn / Rhein-Sieg</p>
              <p className="text-sm text-zinc-500 font-medium uppercase tracking-widest mt-1">Gastronomie-Netz</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          {/* Abstract SVG Map of NRW representing regional strength */}
          <div className="aspect-square bg-zinc-50 rounded-3xl flex items-center justify-center p-12 relative border border-zinc-100 overflow-hidden">
             <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path d="M20,40 Q30,20 50,30 T80,40 T70,80 T30,70 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="1" fill="currentColor" />
                  <path d="M0,0 L100,100 M100,0 L0,100" stroke="currentColor" strokeWidth="0.1" strokeDasharray="2,2" />
                </svg>
             </div>
             
             <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-[#059669] rounded-2xl flex items-center justify-center shadow-2xl mx-auto mb-6 transform rotate-3">
                   <span className="text-white font-black text-4xl">NRW</span>
                </div>
                <p className="text-xl font-bold text-zinc-900">100% Gebietsabdeckung</p>
                <p className="text-sm text-zinc-500 mt-2 font-medium">Zwischen Rhein und Ruhr</p>
             </div>

             {/* Animated "Pings" for major cities */}
             <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-[#059669] rounded-full animate-ping" />
             <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-[#FBBF24] rounded-full animate-ping delay-700" />
             <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#059669] rounded-full animate-ping delay-1000" />
          </div>
        </div>
      </div>
    </Section>
  );
};
