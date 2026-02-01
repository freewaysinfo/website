'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MessageCircle, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Section, Button } from './ui/Layout';

const benefits = [
  "Erfahrenes & zuverlässiges Team",
  "Moderne Fahrzeugflotte",
  "NRW-weites Einsatzgebiet",
  "Strukturierte Arbeitsabläufe"
];

export const CareerSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        x: -40,
        opacity: 0,
        duration: 0.18,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
      gsap.from(visualRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section 
      ref={containerRef}
      id="career" 
      className="bg-background"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
        <div ref={contentRef}>
          <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-8">
            Growth • Opportunity
          </span>
          
          <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[1] tracking-tighter text-emerald-deep">
            KOMMEN SIE <br />
            <span className="italic font-light">INS TEAM.</span>
          </h2>
          
          <p className="text-xl text-emerald-deep/50 mb-12 leading-relaxed font-medium max-w-lg">
            Wir suchen Macher. Werde Teil unseres Elite-Teams und steuere die Zukunft der Logistik in NRW. Faire Konditionen, moderne Technik, echtes Wachstum.
          </p>
          
          <div className="space-y-6 mb-16">
            {benefits.map((benefit, i) => (
              <div 
                key={i}
                className="flex items-center gap-5 text-emerald-deep font-bold text-lg"
              >
                <div className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-deep" />
                </div>
                {benefit}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            <Button 
              size="lg" 
              variant="secondary"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#25D366]/90 border-none text-white px-10"
              onClick={() => window.open('https://wa.me/4922346808219', '_blank')}
            >
              <MessageCircle className="w-6 h-6 mr-3 fill-current" />
              WHATSAPP BEWERBUNG
            </Button>
            <a href="tel:022346808219" className="text-emerald-deep/40 hover:text-emerald-deep transition-base font-bold text-sm tracking-widest flex items-center gap-2">
              02234 6808219 <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div ref={visualRef} className="relative">
          <div className="aspect-[4/5] bg-secondary rounded-2xl overflow-hidden flex items-center justify-center p-12 relative border border-border">
            <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-emerald-deep/5" />
            
            <div className="relative z-10 text-center">
              <div className="text-[12rem] font-black text-emerald-deep/5 tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
                NRW
              </div>
              <div className="w-32 h-32 rounded-2xl bg-emerald-deep flex items-center justify-center shadow-2xl mx-auto mb-8">
                <ArrowUpRight className="w-16 h-16 text-white" />
              </div>
              <p className="text-emerald-deep font-black text-3xl tracking-tight">CAREER PORTAL</p>
              <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-emerald-deep/30 mt-4">Freeways GmbH Excellence</p>
            </div>

            {/* Float Badge */}
            <div className="absolute bottom-10 left-10 right-10 p-8 bg-background border border-border rounded-xl shadow-2xl flex items-center justify-between">
              <div>
                <p className="text-3xl font-black text-emerald-deep leading-none">NRW</p>
                <p className="text-[9px] uppercase font-bold tracking-widest text-emerald-deep/40 mt-2">Homebase Köln</p>
              </div>
              <div className="w-10 h-1 bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
