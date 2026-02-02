import React from 'react';
import { SectionContainer } from './SectionContainer';
import { MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const cities = [
  'Köln', 'Düsseldorf', 'Dortmund', 'Essen',
  'Münster', 'Bielefeld', 'Bonn', 'Aachen'
];

export const NRWClassic = () => {
  return (
    <SectionContainer id="network" className="bg-zinc-50 border-y border-zinc-100">
       <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
             <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Unser Netzwerk</h2>
             <h3 className="text-4xl lg:text-5xl font-black text-zinc-900 mb-6">NRW weit. <br/>Jederzeit.</h3>
             <p className="text-xl text-zinc-500 font-medium mb-10 leading-relaxed">
               Von der Rheinschiene bis ins tiefste Ruhrgebiet. Wir verbinden die Wirtschaftszentren mit einer Flotte, die niemals schläft.
             </p>
             
             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {cities.map((city) => (
                   <div key={city} className="flex items-center gap-2 text-zinc-700 font-bold text-sm">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      {city}
                   </div>
                ))}
             </div>

             <a href="#" className="inline-flex items-center gap-2 text-zinc-900 font-bold border-b-2 border-zinc-900 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
                Abdeckungskarte ansehen <ArrowRight size={18} />
             </a>
          </div>

          {/* Map Image */}
          <div className="order-1 lg:order-2 relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl shadow-zinc-200/50 bg-white border border-zinc-100 flex items-center justify-center">
             <div className="absolute inset-0 bg-emerald-50/50"></div>
             {/* Abstract Map Placeholder */}
             <div className="text-emerald-900/10 font-black text-9xl select-none">NRW</div>
             <MapPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-600 w-16 h-16 drop-shadow-md animate-bounce" />
             
             {/* Decorative Nodes */}
             <div className="absolute top-1/3 left-1/3 w-4 h-4 rounded-full bg-emerald-400/50"></div>
             <div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-amber-400/50"></div>
          </div>
       </div>
    </SectionContainer>
  );
};
