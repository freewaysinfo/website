'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/Layout';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-obsidian">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero_crew.png" 
          alt="Freeways Crew" 
          fill 
          className="object-cover object-center brightness-[0.4] scale-105" 
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-obsidian/60 via-obsidian/20 to-obsidian pointer-events-none" />
      </div>

      <div className="relative z-10 w-full px-[var(--spacing-container)] max-w-7xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-block text-primary font-bold tracking-[0.2em] uppercase text-sm mb-6"
          >
            Premium Logistik-Partner
          </motion.span>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-white">
            ZUVERLÄSSIGER <br />
            <span className="text-primary italic">LIEFER-SERVICE</span> <br />
            IN GANZ NRW
          </h1>

          <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl font-medium leading-relaxed">
            Wir definieren Logistik neu. Freeways GmbH kombiniert modernste Technik mit hanseatischer Zuverlässigkeit für Ihre Express-Zustellung.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Button size="lg" className="w-full sm:w-auto">
              <Zap className="w-5 h-5 mr-3 fill-current" />
              JETZT ANFRAGEN
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              UNSERE LEISTUNGEN
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 right-[var(--spacing-container)] hidden md:block">
        <div className="flex items-center gap-8 text-white/20 text-xs font-bold tracking-[0.3em] uppercase">
          <span>Köln</span>
          <span>•</span>
          <span>Düsseldorf</span>
          <span>•</span>
          <span>Essen</span>
        </div>
      </div>
    </section>
  );
};
