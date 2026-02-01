'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Section } from './ui/Layout';

const cities = [
  { name: 'Düsseldorf', x: '40%', y: '50%' },
  { name: 'Köln', x: '45%', y: '70%' },
  { name: 'Dortmund', x: '65%', y: '35%' },
  { name: 'Essen', x: '55%', y: '45%' },
  { name: 'Duisburg', x: '45%', y: '42%' },
];

export const NRWFokus = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".city-badge", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 70%",
        }
      });
      
      gsap.from(".map-path", {
        drawSVG: 0,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 70%",
        }
      });
    }, mapRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section className="bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
        <div className="w-full md:w-1/2">
          <span className="inline-block text-[10px] font-black tracking-[0.3em] uppercase text-primary mb-6">Regional Excellence</span>
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tighter">
            NRW <br />
            <span className="italic font-light">IM FOKUS.</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-md mb-10 leading-relaxed">
            Wir sind dort, wo NRW pulsiert. Mit strategischen Standorten in den wichtigsten Ballungszentren garantieren wir Express-Lieferzeiten und maximale Verfügbarkeit.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {cities.map(city => (
              <div key={city.name} className="flex items-center gap-3 p-4 rounded-xl border border-primary/5 bg-primary/5">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-bold text-primary">{city.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div ref={mapRef} className="w-full md:w-1/2 relative aspect-square flex items-center justify-center">
          {/* Abstract Map Representation */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <svg viewBox="0 0 100 100" className="w-[120%] h-[120%] stroke-primary fill-none stroke-[0.5]">
              <path d="M30 40 Q 50 20 70 40 T 70 80 Q 50 90 30 80 T 30 40" className="map-path" />
              <path d="M40 50 L 60 50 M 50 40 L 50 60" className="map-path" opacity="0.5" />
            </svg>
          </div>

          {/* City Pins */}
          {cities.map((city) => (
            <div 
              key={city.name}
              className="city-badge absolute flex flex-col items-center gap-2 group"
              style={{ left: city.x, top: city.y } as React.CSSProperties}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-40 scale-150" />
                <div className="relative w-4 h-4 rounded-full bg-accent border-4 border-white shadow-xl" />
              </div>
              <div className="glass px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-base -translate-y-2">
                <span className="text-[10px] font-black uppercase text-primary">{city.name}</span>
              </div>
            </div>
          ))}
          
          {/* Central Logo Indicator */}
          <div className="relative z-10 w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center border border-primary/10">
            <div className="text-center">
              <p className="text-[8px] font-black text-primary/30 uppercase tracking-[0.2em] mb-1">HQ NRW</p>
              <p className="text-sm font-black text-primary tracking-tight">FREEWAYS</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
