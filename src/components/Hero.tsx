"use client";

import React from 'react';
import { Package, Truck, Clock, ArrowRight, Utensils } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-zinc-50/30">
      {/* Soft Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-amber-50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Freeways GmbH – Ihr Partner in NRW
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 text-zinc-900 tracking-tight">
            Zuverlässiger Liefer- & <br />
            <span className="text-gradient">Logistikservice.</span>
          </h1>
          
          <p className="text-zinc-600 text-lg lg:text-xl mb-12 max-w-xl leading-relaxed font-medium">
            Freeways GmbH ist Ihr professioneller Partner für Essenslieferung, Kurier- und Logistikdienstleistungen in Nordrhein-Westfalen. Wir stehen für Schnelligkeit, Zuverlässigkeit und Qualität.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <a href="#kontakt" className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20">
              Auftrag starten <ArrowRight size={22} />
            </a>
            <a href="#karriere" className="bg-amber-400 text-emerald-900 px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center transition-all hover:bg-amber-500 shadow-xl shadow-amber-400/20">
              Fahrer gesucht
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Utensils size={20} />
              </div>
              <span className="text-sm font-bold text-zinc-900">Food Delivery</span>
              <span className="text-xs text-zinc-500">Heiß & Pünktlich</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                <Package size={20} />
              </div>
              <span className="text-sm font-bold text-zinc-900">Kurierdienst</span>
              <span className="text-xs text-zinc-500">Express in NRW</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <Truck size={20} />
              </div>
              <span className="text-sm font-bold text-zinc-900">Logistik</span>
              <span className="text-xs text-zinc-500">Full Service</span>
            </div>
          </div>
        </div>

        <div className="relative lg:block hidden">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-white premium-shadow group">
             <img 
              src="https://images.unsplash.com/photo-1526367790999-0150786486a2?auto=format&fit=crop&q=80&w=1200" 
              alt="Professional Logistics Driver" 
              className="w-full h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-600/20">
                  <Truck className="text-white" size={28} />
                </div>
                <div>
                  <h4 className="font-black text-zinc-900 text-lg">FREEWAYS LOGISTIK</h4>
                  <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest">Reibungslose Lieferung – Jeden Tag</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-amber-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-emerald-600/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};
