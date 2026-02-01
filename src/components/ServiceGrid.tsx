'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Utensils, Box, Stethoscope, Zap, Star, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Section, Button } from './ui/Layout';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "gastronomy",
    num: "01",
    title: "Gastronomie-Logistik",
    description: "Der Standard für Highend-Gastronomie. Wir liefern nicht nur Essen – wir liefern Ihr Markenerlebnis direkt an die Haustür.",
    icon: Utensils,
    image: "/Users/mvmnts/.gemini/antigravity/brain/4aaec726-7423-47ef-b88c-ec10c8563706/freeways_food_delivery_premium_1769986557001_1769985383904.png",
    stat: "Durchschnitt: 42 Min.",
    tag: "Premium Service"
  },
  {
    id: "express",
    num: "02",
    title: "Sofort-Express",
    description: "Wenn Zeit die wichtigste Währung ist. Unsere Kuriere sind innerhalb von 15 Minuten bei Ihnen – garantiert.",
    icon: Box,
    image: "/Users/mvmnts/.gemini/antigravity/brain/4aaec726-7423-47ef-b88c-ec10c8563706/freeways_express_parcel_premium_1769986557002_1769985397531.png",
    stat: "Tracking Live",
    tag: "Time Critical"
  },
  {
    id: "medical",
    num: "03",
    title: "Medical Logistics",
    description: "Präzision für das wertvollste Gut. Zertifizierte Transporte für Proben, Medikamente und Medizintechnik.",
    icon: Stethoscope,
    image: "/images/service-logistics.png",
    stat: "GDP Zertifiziert",
    tag: "Sicher & Sauber"
  }
];

export const ServiceGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        y: 30,
        opacity: 0,
        duration: 0.18,
        ease: "power2.out",
        stagger: 0.1,
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
      <div className="mb-24 md:mb-32">
        <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-primary/40 mb-6">
          Systematische Excellence
        </span>
        <h2 className="text-4xl md:text-7xl font-black text-primary leading-[1.05] tracking-tighter">
          LOGISTIK AUF EINEM <br />
          <span className="italic font-light">NEUEN LEVEL.</span>
        </h2>
      </div>

      <div className="space-y-48">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={cn(
              "service-card flex flex-col md:flex-row gap-16 md:gap-32 items-center",
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            )}
          >
            {/* Immersive Visual Component */}
            <div className="w-full md:w-3/5 aspect-[4/3] relative rounded-[3rem] overflow-hidden shadow-premium group cursor-pointer hover-tactile">
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Stat Stickers */}
              <div className="absolute top-8 left-8 flex flex-col gap-2">
                <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">{service.stat}</span>
                </div>
                <div className="bg-primary/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">{service.tag}</span>
                </div>
              </div>

              {/* Icon Badge */}
              <div className="absolute bottom-8 right-8 w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-all duration-500">
                <service.icon className="w-7 h-7" />
              </div>
            </div>

            {/* Premium Content Component */}
            <div className="w-full md:w-2/5 p-4">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-primary font-black text-6xl opacity-10 leading-none">{service.num}</span>
                <div className="h-px flex-1 bg-primary/10" />
              </div>
              
              <h3 className="text-4xl md:text-6xl font-black mb-8 text-primary leading-tight tracking-tighter">
                {service.title}
              </h3>
              
              <p className="text-lg md:text-xl text-foreground/70 font-medium leading-relaxed mb-12">
                {service.description}
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/5 p-4 rounded-2xl border border-primary/5">
                    <Zap className="w-5 h-5 text-primary mb-2" />
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest leading-none">High Speed</p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-2xl border border-primary/5">
                    <Star className="w-5 h-5 text-primary mb-2" />
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest leading-none">Premium</p>
                  </div>
                </div>
                <Button variant="primary" size="lg" className="w-full py-8 text-[12px] font-black rounded-3xl group">
                  INFOS ANFORDERN
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
