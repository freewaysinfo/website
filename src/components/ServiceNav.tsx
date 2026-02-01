'use client';

import React, { useState, useEffect } from 'react';
import { Utensils, Package, Building2, Stethoscope, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'gastronomy', name: 'Gastronomie', icon: Utensils, color: 'emerald' },
  { id: 'express', name: 'Sofort-Express', icon: Package, color: 'amber' },
  { id: 'management', name: 'Management', icon: Building2, color: 'zinc' },
  { id: 'medical', name: 'Medical', icon: Stethoscope, color: 'rose' },
];

export const ServiceNav = () => {
  const [activeCategory, setActiveCategory] = useState('gastronomy');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className={cn(
      "w-full z-40 transition-all duration-500",
      isSticky ? "fixed top-20 left-0 right-0 py-4" : "relative py-8"
    )}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={cn(
          "glass rounded-2xl md:rounded-full p-2 flex items-center gap-2 overflow-x-auto no-scrollbar",
          isSticky && "shadow-2xl border-white/20 bg-white/80 backdrop-blur-2xl"
        )}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToSection(cat.id)}
              className={cn(
                "flex items-center gap-3 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all shrink-0",
                activeCategory === cat.id 
                  ? "bg-primary text-white shadow-lg scale-105" 
                  : "text-foreground/40 hover:text-primary hover:bg-primary/5"
              )}
            >
              <cat.icon className="w-4 h-4" />
              {cat.name}
            </button>
          ))}
          <div className="ml-auto hidden md:flex items-center gap-2 pr-6">
            <span className="text-[9px] font-bold uppercase tracking-widest text-primary/40 italic">Scroll for more</span>
            <ChevronRight className="w-3 h-3 text-primary/20" />
          </div>
        </div>
      </div>
    </div>
  );
};
