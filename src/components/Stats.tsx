"use client";

import React from 'react';

const stats = [
  { label: 'Erfolgreiche Touren', value: '25.000+' },
  { label: 'Geschulte Fahrer', value: '150+' },
  { label: 'Ø Reaktionszeit', value: '12 Min.' },
  { label: 'Premium Rating', value: '99,8%' },
];

export const Stats: React.FC = () => {
  return (
    <div className="bg-white border-y border-zinc-100">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center lg:text-left group">
              <div className="text-4xl lg:text-5xl font-black text-emerald-700 mb-3 tracking-tighter group-hover:scale-105 transition-transform duration-300 inline-block">{stat.value}</div>
              <div className="text-xs font-black text-amber-500 uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
