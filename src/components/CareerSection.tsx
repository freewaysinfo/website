'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2, Users } from 'lucide-react';

const benefits = [
  "Erfahrenes und zuverlässiges Team",
  "Moderne Fahrzeuge",
  "Einsatz in ganz NRW",
  "Professionelle und strukturierte Abläufe"
];

export const CareerSection = () => {
  return (
    <section id="karriere" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-primary/10 text-black rounded-full">
              Karriere bei Freeways
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight text-black">
              Fahrer (m/w/d) gesucht – <br />
              <span className="text-secondary">Jetzt bewerben</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
              Wir suchen zuverlässige Fahrer für Liefer- und Kurierdienste. 
              Wir bieten faire Bezahlung, flexible Arbeitszeiten und ein professionelles Arbeitsumfeld.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>

            <a 
              href="https://wa.me/4922346808219" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white font-black rounded-2xl hover:scale-105 transition-transform shadow-xl shadow-green-500/20 group"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              👉 Jetzt bewerben per WhatsApp
            </a>
            <p className="mt-4 text-sm text-gray-400 font-medium">
              Oder telefonisch: 02234 6808219
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-gray-50 rounded-[4rem] flex items-center justify-center p-12 border border-gray-100">
               {/* Decorative elements or illustration could go here */}
               <div className="w-full h-full bg-linear-to-br from-primary/20 via-transparent to-secondary/20 rounded-[3rem] animate-pulse" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-32 h-32 text-black/10" />
               </div>
            </div>
            {/* Stats or trust badges */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-3xl border border-white/20 shadow-xl max-w-[200px]">
              <p className="text-3xl font-black text-black leading-none mb-1">NRW</p>
              <p className="text-xs uppercase tracking-widest font-bold text-gray-500">Einsatzgebiet</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
