'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Utensils, Box, ShieldCheck, ArrowRight } from 'lucide-react';
import { Section } from './ui/Layout';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Gastronomie-Logistik",
    description: "Spezialisierte Auslieferung für Restaurants und Ghost-Kitchens. Wir garantieren temperaturgeführte Pünktlichkeit und höchste Hygiene-Standards.",
    icon: Utensils,
    image: "/images/service-gastronomy.png"
  },
  {
    id: "02",
    title: "Express-Kurier",
    description: "Time-critical Delivery für Dokumente und Waren in ganz NRW. Unser Express-Netzwerk sichert Ihre geschäftskritischen Termine ab.",
    icon: Box,
    image: "/images/service-express.png"
  },
  {
    id: "03",
    title: "Logistik-Management",
    description: "Ganzheitliche Steuerung Ihrer Lieferflotte. Wir stellen nicht nur Fahrer, sondern optimieren Ihre gesamte Last-Mile-Performance.",
    icon: ShieldCheck,
    image: "/images/service-logistics.png"
  }
];

export const ServiceGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section 
      ref={containerRef}
      className="bg-secondary overflow-hidden border-y border-border"
    >
      <div className="mb-24 max-w-3xl">
        <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-gold-premium mb-6">
          Systematische Excellence
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-emerald-deep leading-[1.1] tracking-tight">
          LOGISTIK AUF EINEM <br />
          <span className="italic font-light">NEUEN LEVEL.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="service-card group relative bg-background border border-border rounded-2xl overflow-hidden transition-base hover:border-accent hover:shadow-2xl hover:shadow-emerald-deep/5"
          >
            {/* Image Header */}
            <div className="relative h-64 overflow-hidden">
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
              
              <div className="absolute top-8 right-8 p-3 rounded-lg bg-background/80 backdrop-blur-md text-emerald-deep border border-emerald-deep/10">
                <service.icon className="w-5 h-5" />
              </div>
              
              <span className="absolute bottom-4 left-8 text-emerald-deep/10 text-6xl font-black select-none">{service.id}</span>
            </div>

            <div className="p-12 pt-4">
              <h3 className="text-2xl font-black mb-4 text-emerald-deep tracking-tight">
                {service.title}
              </h3>
              <p className="text-emerald-deep/60 font-medium leading-relaxed mb-8">
                {service.description}
              </p>
              
              <div className="flex items-center gap-2 text-emerald-deep font-bold text-[10px] tracking-[0.2em] uppercase">
                DETAILS
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
