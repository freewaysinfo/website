import React from 'react';
import { SectionContainer } from './SectionContainer';

export const StatsClassic = () => {
    return (
        <section className="bg-emerald-900 py-20 text-white">
            <SectionContainer className="bg-emerald-900 border-b border-emerald-800 relative overflow-hidden">
               {/* Texture Overlay */}
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
               <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/50 to-transparent"></div>

               <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-emerald-800/50 relative z-10">
                  <div className="p-8 lg:p-12 text-center">
                     <div className="text-4xl lg:text-6xl font-black text-white mb-2 tracking-tighter">25k+</div>
                     <div className="text-emerald-400 font-bold uppercase tracking-widest text-sm">Sendungen / Monat</div>
                  </div>
                  <div className="p-8 lg:p-12 text-center">
                     <div className="text-4xl lg:text-6xl font-black text-white mb-2 tracking-tighter">99.8%</div>
                     <div className="text-emerald-400 font-bold uppercase tracking-widest text-sm">Zustellquote</div>
                  </div>
                  <div className="p-8 lg:p-12 text-center">
                     <div className="text-4xl lg:text-6xl font-black text-white mb-2 tracking-tighter">&lt; 60m</div>
                     <div className="text-emerald-400 font-bold uppercase tracking-widest text-sm">Abholzeit</div>
                  </div>
               </div>
            </SectionContainer>
        </section>
    );
};
