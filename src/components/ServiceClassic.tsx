import React from 'react';
import { SectionContainer } from './SectionContainer';
import { Utensils, Zap, Box, Truck, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Gastronomie',
    desc: 'Premium Lieferflotten für Restaurants. Ihre Qualität, bis zur Haustür.',
    icon: Utensils,
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    title: 'Express Kurier',
    desc: 'Wenn es heute noch ankommen muss. Garantierte Zustellung in NRW.',
    icon: Zap,
    color: 'bg-amber-100 text-amber-700',
  },
  {
    title: 'Flottenlösung',
    desc: 'Komplettes Outsourcing Ihrer Logistik. Fahrer, Fahrzeuge, Planung.',
    icon: Box,
    color: 'bg-blue-100 text-blue-700',
  },
];

export const ServiceClassic = () => {
  return (
    <SectionContainer id="services" className="bg-white">
       <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Unsere Leistungen</h2>
          <h3 className="text-4xl font-bold text-zinc-900 mb-6">Logistik nach Maß.</h3>
          <p className="text-xl text-zinc-500">
            Wir bieten nicht nur Transporte, sondern echte Lösungen. 
            Skalierbar, zuverlässig und immer persönlich.
          </p>
       </div>

       <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group h-full flex flex-col p-10 rounded-3xl bg-white border border-zinc-100 shadow-lg shadow-zinc-200/50 hover:shadow-xl hover:shadow-zinc-200/80 transition-all hover:-translate-y-1">
               <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center mb-8 shrink-0`}>
                  <s.icon size={28} />
               </div>
               <h4 className="text-2xl font-bold text-zinc-900 mb-4">{s.title}</h4>
               <p className="text-zinc-500 font-medium mb-8 leading-relaxed flex-grow">
                 {s.desc}
               </p>
               <a href="#" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all mt-auto">
                  Mehr erfahren <ArrowRight size={18} />
               </a>
            </div>
          ))}
       </div>
    </SectionContainer>
  );
};
