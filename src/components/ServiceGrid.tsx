"use client";

import React, { useRef } from 'react';
import { Zap, Utensils, Users, ArrowUpRight, Box, Truck } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { PremiumButton } from '@/components/ui/PremiumButton';

const serviceList = [
  {
    title: 'Gastronomie Premium',
    desc: 'Exklusive Lieferflotten für High-End Restaurants. Wir sind die Visitenkarte Ihres Hauses.',
    Icon: Utensils,
    color: 'from-emerald-500/10 to-emerald-500/5',
    iconColor: 'text-emerald-600',
    colSpan: "md:col-span-2",
    delay: 0.1
  },
  {
    title: 'Express Kurier',
    desc: 'Sofortige Zustellung in NRW. Wenn jede Minute zählt.',
    Icon: Zap,
    color: 'from-amber-500/10 to-amber-500/5',
    iconColor: 'text-amber-500',
    colSpan: "md:col-span-1",
    delay: 0.2
  },
  {
    title: 'Logistik Management',
    desc: 'Ganzheitliche Flottenlösungen.',
    Icon: Box,
    color: 'from-blue-500/10 to-blue-500/5',
    iconColor: 'text-blue-500',
    colSpan: "md:col-span-1",
    delay: 0.3
  },
  {
    title: 'Infrastruktur',
    desc: 'Skalierbare Netzwerke für Großkunden.',
    Icon: Truck,
    color: 'from-zinc-500/10 to-zinc-500/5',
    iconColor: 'text-zinc-600',
    colSpan: "md:col-span-2",
    delay: 0.4
  }
];

const BentoCard = ({ service }: { service: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useMotionTemplate`calc(${mouseYSpring} * -0.05deg)`; // Very subtle tilt
  const rotateY = useMotionTemplate`calc(${mouseXSpring} * 0.05deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 20);
    y.set(yPct * 20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: service.delay }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative rounded-3xl border bg-white/70 p-7 shadow-sm backdrop-blur-sm sm:p-8 lg:p-10 transition-all duration-500 hover:shadow-xl hover:shadow-black/5 ${service.colSpan || ""}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 rounded-3xl`} />
      
      <div className="relative z-10 flex flex-col h-full bg-transparent transform-style-3d">
        <div className="flex justify-between items-start mb-6 lg:mb-8">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border bg-white shadow-sm group-hover:scale-110 transition-transform duration-500">
            <service.Icon size={24} className={service.iconColor} />
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
             <div className="bg-white rounded-full p-2 border border-zinc-100 shadow-sm">
                <ArrowUpRight size={14} className="text-zinc-400" />
             </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mb-3">{service.title}</h3>
        <p className="text-base leading-relaxed text-neutral-600 font-medium">{service.desc}</p>
        
      </div>
    </motion.div>
  );
};

export const ServiceGrid: React.FC = () => {
  return (
    <section id="leistungen" className="relative py-16 sm:py-20 lg:py-24 scroll-mt-24 bg-zinc-50/50">
        {/* Fix B: Background Glow z-index -10 */}
       <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-30" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-30" />
       </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-5 inline-flex items-center rounded-full border border-neutral-200 bg-white/80 backdrop-blur-sm px-4 py-1 text-xs font-semibold tracking-wide text-emerald-700 shadow-sm"
          >
             PREMIUM SERVICES
          </motion.div>
          
          <h2 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl text-neutral-900 tracking-tight mb-5">
            Logistik <span className="text-neutral-400">Next Level.</span>
          </h2>
          <p className="mt-5 text-base text-neutral-600 sm:text-lg max-w-2xl mx-auto">
            Wir definieren den Standard für die letzte Meile neu.
          </p>
          <p className="mt-2 text-base font-semibold text-neutral-700 sm:text-lg">
            Präzision, die man spüren kann.
          </p>
        </div>

        {/* Fix C: Increased Grid Gap & No Overflow Hidden on Parent */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:grid-cols-3 md:gap-8 lg:gap-10">
          {serviceList.map((service, idx) => (
            <BentoCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
