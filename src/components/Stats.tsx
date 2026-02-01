"use client";

import React, { useRef } from 'react';
import { useInView, motion, useSpring } from 'framer-motion';

const stats = [
  { 
    label: "Erfolgreiche Touren", 
    value: 25000, 
    suffix: "+", 
    subtext: "Seit Gründung" 
  },
  { 
    label: "Geschulte Fahrer", 
    value: 150, 
    suffix: "+", 
    subtext: "Festangestellt & Verifiziert" 
  },
  { 
    label: "Reaktionszeit", 
    value: 12, 
    suffix: " Min.", 
    subtext: "Bei Express-Anfragen" 
  },
  { 
    label: "Premium Rating", 
    value: 99.8, 
    suffix: "%", 
    decimals: 1,
    subtext: "Kundenzufriedenheit" 
  }
];

function Counter({ from, to, decimals = 0 }: { from: number; to: number; decimals?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  const springValue = useSpring(from, {
    mass: 1,
    damping: 20,
    stiffness: 80,
    duration: 3
  }); // Slower, smoother spring

  React.useEffect(() => {
    if (isInView) {
      springValue.set(to);
    }
  }, [isInView, from, to, springValue]);

  React.useEffect(() => {
    return springValue.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = latest.toFixed(decimals);
      }
    });
  }, [springValue, decimals]);

  return <span ref={nodeRef}>{from}</span>;
}

export const Stats: React.FC = () => {
  return (
    <div className="bg-white border-y border-zinc-100 relative overflow-hidden py-10 sm:py-12 lg:py-14 mb-16 sm:mb-20 lg:mb-28">
       {/* Explicit z-index for background elements */}
       <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 -z-10 pointer-events-none" />
       
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10 lg:gap-x-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-100/50">
          {stats.map((stat, idx) => (
            <div key={idx} className={`text-center px-4 ${idx % 2 === 0 ? 'pb-8 lg:pb-0' : 'pt-8 lg:pt-0'} lg:py-0`}>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                 <h4 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tighter">
                  <Counter from={0} to={stat.value} decimals={stat.decimals} />
                  {stat.suffix}
                </h4>
              </div>
              <p className="text-emerald-700 font-bold uppercase tracking-widest text-xs mb-2 opacity-80">{stat.label}</p>
              <p className="text-zinc-500 font-medium text-sm">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
