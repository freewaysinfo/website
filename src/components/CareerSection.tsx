"use client";

import React from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

export const CareerSection: React.FC = () => {
  return (
    <div id="karriere" className="py-24 bg-zinc-50/50">
      <div className="container mx-auto px-6">
        <div className="bg-emerald-600 rounded-[3.5rem] p-8 lg:p-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
                Fahrer (m/w/d) gesucht – <br />
                <span className="text-amber-400">Jetzt bewerben.</span>
              </h2>
              <p className="text-emerald-50 text-xl mb-10 font-medium">
                Wir suchen zuverlässige Fahrer für Liefer- und Kurierdienste. Werden Sie Teil unseres dynamischen Teams in Köln und Umgebung.
              </p>
              
              <div className="space-y-4 mb-12">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-amber-400" size={24} />
                  <span className="font-bold">Faire Bezahlung</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-amber-400" size={24} />
                  <span className="font-bold">Flexible Arbeitszeiten</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-amber-400" size={24} />
                  <span className="font-bold">Professionelles Arbeitsumfeld</span>
                </div>
              </div>

              <a 
                href="https://wa.me/4922346808219" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-white text-emerald-900 px-10 py-5 rounded-2xl font-black text-xl hover:bg-zinc-100 transition-all shadow-2xl shadow-black/10"
              >
                <MessageCircle size={28} />
                Jetzt bewerben per WhatsApp
              </a>
              <p className="mt-4 text-emerald-100/70 text-sm font-bold">Oder telefonisch: 02234 6808219</p>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-[500px] rounded-[3rem] overflow-hidden border-8 border-emerald-500 shadow-2xl rotate-3 translate-x-8">
                  <img 
                    src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1200" 
                    alt="Happy Logistics Driver" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-amber-400 p-8 rounded-3xl shadow-xl -rotate-6">
                  <span className="text-emerald-900 font-black text-2xl">BE JOINED!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
