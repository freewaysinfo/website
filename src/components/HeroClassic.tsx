import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const HeroClassic = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-zinc-50">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-emerald-700 font-bold text-sm mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Dienstleister Nr. 1 in NRW
             </div>
             
             <h1 className="text-5xl lg:text-7xl font-black text-zinc-900 tracking-tight leading-[1.1] mb-8">
               Wir bewegen <br/>
               <span className="text-emerald-600">Ihre Logistik.</span>
             </h1>
             
             <p className="text-xl text-zinc-500 font-medium leading-relaxed mb-10 max-w-lg">
               Freeways ist Ihr Partner für Kurierdienste, Expresslieferungen und Flottenmanagement. 
               Pünktlich. Zuverlässig. Persönlich.
             </p>

             <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2">
                   Angebot anfordern <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-xl font-bold text-lg hover:bg-zinc-50 transition-colors flex items-center justify-center">
                   Unsere Services
                </button>
             </div>

             <div className="flex items-center gap-8 text-sm font-bold text-zinc-500">
                <div className="flex items-center gap-2">
                   <CheckCircle2 size={18} className="text-emerald-500" /> 24/7 Support
                </div>
                <div className="flex items-center gap-2">
                   <CheckCircle2 size={18} className="text-emerald-500" /> Express Abholung
                </div>
                <div className="flex items-center gap-2">
                   <CheckCircle2 size={18} className="text-emerald-500" /> Direktfahrten
                </div>
             </div>
          </div>

          {/* Image Side */}
          <div className="relative lg:h-[600px] w-full hidden lg:block">
             <div className="absolute inset-0 bg-emerald-100 rounded-[3rem] rotate-3 transform translate-x-4"></div>
             <div className="absolute inset-0 bg-zinc-200 rounded-[3rem] -rotate-2 transform -translate-x-4"></div>
             <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/freeways-hero.jpg"
                  alt="Freeways Logistic Team"
                  fill
                  className="object-cover"
                  priority
                />
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                   <div className="flex -space-x-4">
                      <div className="w-10 h-10 rounded-full bg-zinc-200 border-2 border-white"></div>
                      <div className="w-10 h-10 rounded-full bg-zinc-300 border-2 border-white"></div>
                      <div className="w-10 h-10 rounded-full bg-zinc-400 border-2 border-white"></div>
                   </div>
                   <div className="font-bold text-zinc-900">+50 Fahrer</div>
                </div>
                <p className="text-zinc-500 text-sm">Bereit für Ihren Einsatz in ganz NRW.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
