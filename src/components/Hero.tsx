"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { Package, Utensils, Search, ArrowRight, MapPin } from 'lucide-react';
import { Section, Button } from './ui/Layout';
import { cn } from '@/lib/utils';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [activeTab, setActiveTab] = useState<'track' | 'food' | 'express'>('track');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        delay: 0.2
      });
      gsap.from(".hero-element", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.4
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-32 bg-background overflow-hidden"
    >
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
        <Image 
          src="/images/hero_crew.png" 
          alt="" 
          fill 
          className="object-cover grayscale opacity-5"
          priority
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Branding & Message */}
        <div className="text-left">
          <div className="hero-element flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-primary/40" />
            <span className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-primary/60">
              NRW • LOGISTIK • PLATTFORM
            </span>
          </div>
          
          <h1 
            ref={titleRef}
            className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter mb-8 text-primary"
          >
            LOGISTIK.<br />
            <span className="italic font-light text-foreground">BESSER</span><br />
            GELIEFERT.
          </h1>

          <p className="hero-element text-lg md:text-xl text-foreground/60 mb-10 max-w-lg font-medium leading-relaxed">
            Die Infrastruktur für das Unmögliche. Ob Gastronomie, Express oder Medical – wir sind das Betriebssystem für Ihre Logistik in NRW.
          </p>
          
          <div className="hero-element flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-primary/5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary/80">LIVE IN NRW</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-primary/5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary/80">99.8% SLA</span>
            </div>
          </div>
        </div>

        {/* Right: Operational Control Center (The Uber Pattern) */}
        <div className="hero-element relative">
          <div className="glass p-1 rounded-[2.5rem] shadow-premium overflow-hidden border-white/40">
            <div className="bg-white/40 backdrop-blur-3xl rounded-[2.4rem] p-6 md:p-10">
              {/* Tab Switcher */}
              <div className="flex gap-2 p-1 bg-primary/5 rounded-2xl mb-10">
                {(['track', 'food', 'express'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all",
                      activeTab === tab 
                        ? "bg-primary text-white shadow-lg" 
                        : "text-primary/40 hover:text-primary hover:bg-white/50"
                    )}
                  >
                    {tab === 'track' && <Search className="w-3.5 h-3.5" />}
                    {tab === 'food' && <Utensils className="w-3.5 h-3.5" />}
                    {tab === 'express' && <Package className="w-3.5 h-3.5" />}
                    {tab}
                  </button>
                ))}
              </div>

              {/* Dynamic Content Area */}
              <div className="space-y-8">
                {activeTab === 'track' && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <h3 className="text-2xl font-black mb-2 text-primary">Sendung verfolgen</h3>
                    <p className="text-sm text-foreground/50 mb-6">Geben Sie Ihre 12-stellige ID ein</p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 relative">
                        <input 
                          type="text" 
                          placeholder="z.B. FRW-9283-XXXX"
                          className="w-full bg-white border-2 border-primary/5 rounded-2xl px-6 py-4 text-sm font-bold focus:border-primary/20 outline-none transition-all"
                        />
                      </div>
                      <Button variant="primary" size="lg" className="h-[56px] w-[56px] rounded-2xl p-0 flex items-center justify-center">
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                )}

                {activeTab === 'food' && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <h3 className="text-2xl font-black mb-2 text-primary">Food-Logistik</h3>
                    <p className="text-sm text-foreground/50 mb-6">Für Gastronomie & Dark Kitchens</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl border border-primary/5 hover:border-primary/20 transition-all cursor-pointer group">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-[10px] font-black uppercase tracking-widest text-primary/40">Abholort</p>
                          <p className="text-sm font-bold">Restaurant-Adresse wählen</p>
                        </div>
                      </div>
                      <Button variant="primary" className="w-full py-6 rounded-2xl text-[12px] font-black">
                        HÄNDLER-LOGIN
                      </Button>
                    </div>
                  </div>
                )}

                {activeTab === 'express' && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <h3 className="text-2xl font-black mb-2 text-primary">Sofort-Express</h3>
                    <p className="text-sm text-foreground/50 mb-6">Botenfahrten innerhalb von 90 Min.</p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-white/50 p-4 rounded-2xl border border-primary/5 text-center">
                        <p className="text-xl font-black text-primary">NRW</p>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-primary/40">Abdeckung</p>
                      </div>
                      <div className="bg-white/50 p-4 rounded-2xl border border-primary/5 text-center">
                        <p className="text-xl font-black text-primary">&lt; 15m</p>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-primary/40">Anfahrt</p>
                      </div>
                    </div>
                    <Button variant="primary" className="w-full py-6 rounded-2xl text-[12px] font-black">
                      JETZT BUCHEN
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/20 blur-[60px] rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 blur-[80px] rounded-full" />
        </div>
      </div>
    </Section>
  );
};
