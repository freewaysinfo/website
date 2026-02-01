'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero_crew.png" 
          alt="Freeways Crew" 
          fill 
          className="object-cover object-center brightness-[0.7]" 
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-white pointer-events-none" />
      </div>

      <div className="z-10 text-center max-w-4xl px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-4xl shadow-2xl border border-white/20"
        >
          <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-black">
            Zuverlässiger Liefer- & <br />
            <span className="text-secondary">Logistikservice in NRW</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Freeways GmbH ist Ihr professioneller Partner für Essenslieferung, Kurier- und Logistikdienstleistungen in Nordrhein-Westfalen.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-secondary text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-secondary/90 transition-base shadow-xl shadow-secondary/30 group">
              <Zap className="w-5 h-5 fill-current" />
              Jetzt anfragen
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
