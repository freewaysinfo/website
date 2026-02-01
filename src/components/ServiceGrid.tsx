'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Box, ShieldCheck, ArrowRight } from 'lucide-react';
import { Section } from './ui/Layout';

const services = [
  {
    id: "01",
    title: "Gastronomie-Logistik",
    description: "Spezialisierte Auslieferung für Restaurants und Ghost-Kitchens. Wir garantieren temperaturgeführte Pünktlichkeit und höchste Hygiene-Standards.",
    icon: Utensils,
  },
  {
    id: "02",
    title: "Express-Kurier",
    description: "Time-critical Delivery für Dokumente und Waren in ganz NRW. Unser Express-Netzwerk sichert Ihre geschäftskritischen Termine ab.",
    icon: Box,
  },
  {
    id: "03",
    title: "Logistik-Management",
    description: "Ganzheitliche Steuerung Ihrer Lieferflotte. Wir stellen nicht nur Fahrer, sondern optimieren Ihre gesamte Last-Mile-Performance.",
    icon: ShieldCheck,
  }
];

export const ServiceGrid = () => {
  return (
    <Section className="bg-obsidian overflow-hidden">
      <div className="mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
        >
          Unsere Kompetenzen
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
          LOGISTIK AUF EINEM <br />
          <span className="text-primary">NEUEN LEVEL</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-1 bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative p-10 md:p-14 bg-obsidian hover:bg-white/5 transition-base flex flex-col min-h-[450px]"
          >
            <div className="flex justify-between items-start mb-12">
              <span className="text-white/10 text-6xl font-black">{service.id}</span>
              <div className="p-4 rounded-2xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-obsidian transition-base">
                <service.icon className="w-8 h-8" />
              </div>
            </div>

            <div className="mt-auto">
              <h3 className="text-3xl font-black mb-6 text-white group-hover:text-primary transition-base tracking-tight">
                {service.title}
              </h3>
              <p className="text-white/40 font-medium leading-relaxed mb-8 group-hover:text-white/60 transition-base">
                {service.description}
              </p>
              
              <div className="flex items-center gap-3 text-primary font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-base">
                Details ansehen
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
