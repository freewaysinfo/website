"use client";

import React from 'react';

const cities = [
  'Düsseldorf', 'Köln', 'Dortmund', 'Essen', 'Duisburg', 'Bochum', 
  'Wuppertal', 'Bielefeld', 'Bonn', 'Münster', 'Gelsenkirchen', 'Mönchengladbach'
];

export const NRWMap = () => {
  return (
    <section id="leistungen" className="py-24 bg-white overflow-hidden">
      <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-4xl lg:text-5xl font-black mb-8 text-zinc-900 leading-tight">
            Grenzenlose Präsenz <br />
            <span className="text-[#059669]">in ganz NRW.</span>
          </h2>
          <p className="text-zinc-600 text-lg mb-10 leading-relaxed font-medium">
            Von der Rheinschiene bis ins Ruhrgebiet – Freeways GmbH ist dort, wo Sie uns brauchen. 
            Wir vernetzen die Wirtschaftszentren des Landes mit präziser Logistik.
          </p>
          
          <div className="flex flex-wrap gap-4">
            {cities.map(city => (
              <span 
                key={city} 
                className="px-5 py-2.5 rounded-2xl bg-white border border-zinc-100 text-sm font-bold text-zinc-700 hover:border-[#059669] hover:text-[#059669] transition-all cursor-default flex items-center gap-2 shadow-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]"></div> {city}
              </span>
            ))}
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative aspect-square">
          <div className="absolute inset-0 bg-emerald-50/50 rounded-[3rem] border border-emerald-100 flex items-center justify-center overflow-hidden premium-shadow">
            <svg viewBox="0 0 400 400" className="w-4/5 h-4/5 text-[#059669]/10">
              <path d="M100,100 Q150,50 200,100 T300,100 Q350,150 300,200 T300,300 Q250,350 200,300 T100,300 Q50,250 100,200 T100,100" fill="currentColor" />
              
              {/* Pulsing Dots for Cities */}
              <circle cx="200" cy="200" r="6" fill="#059669">
                <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.4;1" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="150" cy="150" r="5" fill="#FBBF24" />
              <circle cx="250" cy="250" r="5" fill="#FBBF24" />
              <circle cx="120" cy="280" r="5" fill="#059669" opacity="0.5" />
              <circle cx="280" cy="120" r="5" fill="#059669" opacity="0.5" />
            </svg>
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-8xl font-black text-[#059669]/5 select-none rotate-12">NRW</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
