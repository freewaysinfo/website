"use client";

import React from 'react';
import { Section, Button } from './ui/Layout';
import { MessageCircle, CheckCircle2, QrCode } from 'lucide-react';

const benefits = [
  "Faire Bezahlung",
  "Flexible Arbeitszeiten",
  "Neuer Fuhrpark",
  "Junges, dynamisches Team",
  "Pünktliche Auszahlung"
];

export const CareerSection = () => {
  return (
    <Section id="karriere" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <span className="inline-block px-3 py-1 bg-[#FBBF24]/10 text-[#f59e0b] rounded-lg text-sm font-bold mb-6 uppercase tracking-wider">
            Karriere
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8 tracking-tight">
            Fahrer (m/w/d) gesucht – <br />
            Jetzt bewerben
          </h2>
          <p className="text-lg text-zinc-600 mb-8 leading-relaxed max-w-lg font-medium">
            Wir suchen zuverlässige Fahrer für Liefer- und Kurierdienste. 
            Wir bieten ein professionelles Umfeld und modernste Logistik-Infrastruktur.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 text-zinc-700 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-[#059669]" />
                {benefit}
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Button 
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white border-none w-full sm:w-auto"
              onClick={() => window.open('https://wa.me/4922346808219', '_blank')}
            >
              <MessageCircle className="w-6 h-6 mr-3 fill-current" />
              WHATSAPP BEWERBUNG
            </Button>
            <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest">
              Oder: <span className="text-zinc-900 border-b border-zinc-200">02234 6808219</span>
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-4/3 bg-zinc-50 rounded-4xl border border-zinc-100 p-12 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FBBF24]/10 blur-[60px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#059669]/10 blur-[80px] rounded-full" />
            
            <div className="relative z-10 flex justify-between items-start">
               <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-[0.3em] mb-2">Join the Fleet</p>
                  <p className="text-3xl font-bold text-zinc-900 tracking-tight">Einfach & <br />Schnell</p>
               </div>
               <div className="w-16 h-16 bg-white rounded-2xl border border-zinc-100 flex items-center justify-center shadow-lg">
                  <QrCode className="w-8 h-8 text-zinc-900" />
               </div>
            </div>
            
            <div className="relative z-10 p-8 bg-zinc-900 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4 text-white">
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <p className="text-sm font-bold uppercase tracking-widest opacity-60">Status</p>
                <p className="text-sm font-bold">HIRING NOW IN NRW</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
