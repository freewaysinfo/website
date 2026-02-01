"use client";

import React, { useRef } from 'react';
import { Zap, Utensils, Users, LucideIcon, ArrowUpRight } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

interface ServiceItem {
  title: string;
  desc: string;
  Icon: LucideIcon;
  color: string;
  colSpan?: string;
}

const serviceList: ServiceItem[] = [
  {
    title: 'Essenslieferung Premium',
    desc: 'Heiße, pünktliche Lieferung für Gastronomie-Partner. Wir repräsentieren Ihre Marke an der Haustür.',
    Icon: Utensils,
    color: 'from-emerald-500/20 to-emerald-500/5',
    colSpan: "md:col-span-2"
  },
  {
    title: 'Express Kurier',
    desc: 'Sofortige Abholung und direkte Zustellung in ganz NRW.',
    Icon: Zap,
    color: 'from-amber-500/20 to-amber-500/5'
  },
  {
    title: 'Flottenmanagement',
    desc: 'Komplette Fahrer- & Fahrzeuglösungen für Ihren Logistik-Bedarf.',
    Icon: Users,
    color: 'from-blue-500/20 to-blue-500/5'
  },
  {
    title: 'Infrastruktur',
    desc: 'Skalierbare Logistik-Lösungen für Großkunden und Netzwerke.',
    Icon: ArrowUpRight,
    color: 'from-zinc-500/20 to-zinc-500/5',
    colSpan: "md:col-span-2"
  }
];

const TiltCard = ({ service }: { service: ServiceItem }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useMotionTemplate`calc(${mouseYSpring} * -0.5deg)`;
  const rotateY = useMotionTemplate`calc(${mouseXSpring} * 0.5deg)`;

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
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative group rounded-[2.5rem] bg-white border border-zinc-100 p-10 overflow-hidden hover:shadow-2xl hover:shadow-emerald-900/5 transition-shadow duration-500 ${service.colSpan || ""}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative z-10 flex flex-col h-full bg-transparent transform-style-3d">
        <div className="w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm group-hover:bg-white group-hover:shadow-md">
          <service.Icon size={32} className="text-zinc-900" />
        </div>
        
        <h4 className="text-2xl font-bold mb-3 text-zinc-900">{service.title}</h4>
        <p className="text-zinc-500 font-medium leading-relaxed">{service.desc}</p>
        
        <div className="mt-auto pt-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
           <span className="text-sm font-bold text-emerald-700 flex items-center gap-2">Mehr erfahren <ArrowUpRight size={16} /></span>
        </div>
      </div>
    </motion.div>
  );
};

export const ServiceGrid: React.FC = () => {
  return (
    <section id="leistungen" className="relative py-32 bg-zinc-50/50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">Was wir tun</h2>
        <h3 className="text-5xl lg:text-6xl font-black mb-8 text-zinc-900 tracking-tight">Unsere <span className="text-gradient">Kompetenzen.</span></h3>
        <p className="text-zinc-500 max-w-2xl mx-auto text-xl font-medium">
          Wir decken das gesamte Spektrum der modernen Last-Mile-Logistik ab.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {serviceList.map((service, idx) => (
          <TiltCard key={idx} service={service} />
        ))}
      </div>
      </div>
    </section>
  );
};
