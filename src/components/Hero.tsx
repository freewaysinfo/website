"use client";

import React from 'react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Visual orientation - subtle background elements for a professional look */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-50 -z-10 skew-x-[-12deg] translate-x-32" />
      
      <div className="container-custom">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 text-zinc-600 rounded-lg text-sm font-bold mb-8 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Nordrhein-Westfalen
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-8 tracking-tight leading-[1.05]">
            Zuverlässiger Liefer- & <br className="hidden md:block" />
            Logistikservice in NRW
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-600 mb-8 font-medium leading-relaxed max-w-2xl">
            Freeways GmbH ist Ihr professioneller Partner für Essenslieferung, 
            Kurier- und Logistikdienstleistungen in Nordrhein-Westfalen.
          </p>
          
          <p className="text-lg text-zinc-500 mb-12 max-w-3xl leading-relaxed">
            Wir stehen für Schnelligkeit, Zuverlässigkeit und Qualität. 
            Mit erfahrenen Fahrern, modernen Fahrzeugen und klaren Prozessen 
            sorgen wir für reibungslose Lieferungen – jeden Tag.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              href="#kontakt" 
              className="bg-[#18181B] text-white px-10 py-5 rounded-lg text-lg font-bold hover:bg-black transition-all shadow-lg text-center"
            >
              Jetzt anfragen
            </Link>
            <Link 
              href="#karriere" 
              className="bg-white text-zinc-900 border-2 border-zinc-200 px-10 py-5 rounded-lg text-lg font-bold hover:bg-zinc-50 transition-all text-center"
            >
              Fahrer gesucht
            </Link>
          </div>
        </div>
      </div>
      
      {/* Very subtle line for "movement" without being flashy */}
      <div className="absolute bottom-20 right-0 w-1/3 h-px bg-zinc-200" />
      <div className="absolute bottom-24 right-0 w-1/4 h-px bg-zinc-100" />
    </section>
  );
};
