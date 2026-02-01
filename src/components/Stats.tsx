"use client";

import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

const stats = [
  { label: 'Erfolgreiche Touren', value: 25000, suffix: '+' },
  { label: 'Geschulte Fahrer', value: 150, suffix: '+' },
  { label: 'Ø Reaktionszeit', value: 12, suffix: ' Min.' },
  { label: 'Premium Rating', value: 99.8, suffix: '%' },
];

const Counter = ({ value, suffix, decimals = 0 }: { value: number, suffix: string, decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 60, damping: 15 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(decimals) + suffix;
      }
    });
  }, [springValue, decimals, suffix]);

  return <span ref={ref} />;
};

export const Stats: React.FC = () => {
  return (
    <div className="bg-zinc-50/50 relative overflow-hidden">
      {/* Background Decor */}
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 divide-x divide-zinc-200/50">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group cursor-default">
              <div className="text-4xl lg:text-5xl font-extrabold text-emerald-800 mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500 ease-out inline-block">
                <Counter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  decimals={stat.label === 'Premium Rating' ? 1 : 0} 
                />
              </div>
              <div className="text-xs font-bold text-amber-500 uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
