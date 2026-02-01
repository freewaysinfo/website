'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { Section, Button } from './ui/Layout';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.2
      });
      gsap.from(".hero-content", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.5
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section 
      ref={containerRef}
      className="pt-40 pb-24 md:pt-[160px] md:pb-[120px] bg-background overflow-hidden relative"
    >
      {/* Background Visual */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <Image 
          src="/images/hero_crew.png" 
          alt="" 
          fill 
          className="object-cover grayscale"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        <span className="hero-content inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-accent mb-8">
          NRW • Logistik • Exzellenz
        </span>
        
        <h1 
          ref={titleRef}
          className="text-6xl md:text-[clamp(4.5rem,8vw,6.5rem)] font-black leading-[0.95] tracking-tight text-emerald-deep mb-10"
        >
          PRÄZISION TRIFFT <br />
          <span className="italic font-light">BEWEGUNG.</span> <br />
          IHR PARTNER FÜR NRW.
        </h1>

        <p className="hero-content text-xl md:text-2xl text-emerald-deep/60 mb-12 max-w-2xl font-medium leading-relaxed">
          Freeways GmbH definiert Logistik neu: <br className="hidden md:block" />
          Kompakt, zuverlässig und technologisch führend.
        </p>
        
        <div className="hero-content flex flex-col sm:flex-row items-center gap-4">
          <Button size="lg" variant="secondary">
            KOOPERATION STARTEN
          </Button>
          <Button variant="ghost" size="lg">
            UNSER NETZWERK
          </Button>
        </div>
      </div>

      {/* Subtle indicator */}
      <div className="relative z-10 hero-content mt-32 md:mt-48 flex flex-col items-center gap-4 text-emerald-deep/20">
        <div className="w-px h-16 bg-emerald-deep/20" />
        <span className="text-[9px] font-bold uppercase tracking-[0.4em]">Scroll</span>
      </div>
    </Section>
  );
};
