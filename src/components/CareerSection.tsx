'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Section, Button } from './ui/Layout';

const benefits = [
  "Erfahrenes & zuverlässiges Team",
  "Moderne Fahrzeugflotte",
  "NRW-weites Einsatzgebiet",
  "Strukturierte Arbeitsabläufe"
];

export const CareerSection = () => {
  return (
    <Section id="career" className="bg-obsidian border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-6 block"
          >
            JOBS BEI FREEWAYS
          </motion.span>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter text-white">
            FAHRER <span className="text-primary italic">GESUCHT</span>
          </h2>
          
          <p className="text-xl text-white/40 mb-12 leading-relaxed font-medium max-w-lg">
            Wir suchen Macher. Werde Teil unseres Elite-Teams und steuere die Zukunft der Logistik in NRW. Faire Deals, moderne Technik, echte Chancen.
          </p>
          
          <div className="space-y-6 mb-12">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center gap-4 text-white font-bold"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                {benefit}
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#25D366]/90 border-none"
              onClick={() => window.open('https://wa.me/4922346808219', '_blank')}
            >
              <MessageCircle className="w-6 h-6 mr-3 fill-current" />
              WHATSAPP BEWERBUNG
            </Button>
            <a href="tel:022346808219" className="text-white/40 hover:text-white transition-base font-bold flex items-center gap-2">
              02234 6808219 <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          <div className="aspect-[4/5] glass rounded-[3rem] overflow-hidden flex items-center justify-center p-12 relative">
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-primary/5 group-hover:opacity-50 transition-base" />
            
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="text-8xl font-black text-white/5 tracking-tighter absolute -top-20 -left-10 select-none">JOIN</div>
              <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center shadow-2xl">
                <ArrowUpRight className="w-16 h-16 text-obsidian" />
              </div>
              <div className="text-8xl font-black text-white/5 tracking-tighter absolute -bottom-10 -right-10 select-none">US</div>
            </motion.div>

            {/* Float Badge */}
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="absolute bottom-10 left-10 p-6 glass rounded-2xl border border-white/10 shadow-2xl"
            >
              <p className="text-4xl font-black text-white leading-none">NRW</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-primary mt-2">Homebase Köln</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
