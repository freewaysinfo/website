"use client";

import React from 'react';
import Image from 'next/image';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const CareerSection: React.FC = () => {
  return (
    <div id="karriere" className="py-32 bg-zinc-50/50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-emerald-600 rounded-[3.5rem] p-8 lg:p-20 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
                Fahrer (m/w/d) gesucht – <br />
                <span className="text-amber-400">Jetzt bewerben.</span>
              </h2>
              <p className="text-emerald-50 text-xl mb-10 font-medium leading-relaxed">
                Wir suchen zuverlässige Fahrer für Liefer- und Kurierdienste. Werden Sie Teil unseres dynamischen Teams in Köln und Umgebung.
              </p>
              
              <div className="space-y-4 mb-12">
                {[
                  "Faire Bezahlung",
                  "Flexible Arbeitszeiten",
                  "Professionelles Arbeitsumfeld"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-amber-400 shrink-0" size={24} />
                    <span className="font-bold text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/4922346808219" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-white text-emerald-900 px-10 py-5 rounded-2xl font-black text-xl hover:bg-zinc-100 transition-all shadow-2xl shadow-black/10"
              >
                <MessageCircle size={28} />
                Jetzt bewerben per WhatsApp
              </motion.a>
              <p className="mt-4 text-emerald-100/70 text-sm font-bold">Oder telefonisch: 02234 6808219</p>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <motion.div 
                  initial={{ rotate: 10, opacity: 0, scale: 0.8 }}
                  whileInView={{ rotate: 3, opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, type: "spring" }}
                  className="w-full h-[500px] rounded-[3rem] overflow-hidden border-8 border-emerald-500 shadow-2xl translate-x-8 bg-zinc-800"
                >
                  <Image 
                    src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1200" 
                    alt="Happy Logistics Driver" 
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
                <motion.div 
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: -6 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="absolute -bottom-8 -left-8 bg-amber-400 p-8 rounded-3xl shadow-xl"
                >
                  <span className="text-emerald-900 font-black text-2xl">BE JOINED!</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
