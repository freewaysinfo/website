'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Leistungen', href: '#leistungen' },
    { name: 'Karriere', href: '#karriere' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <>
      <nav 
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out w-[95%] md:w-auto",
          isScrolled 
            ? "glass-dark rounded-full py-3 px-6 shadow-2xl shadow-emerald-900/10 md:min-w-[700px]" 
            : "bg-transparent py-5 px-0 md:min-w-[800px]"
        )}
      >
        <div className="flex items-center justify-between gap-12">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="w-10 h-10 bg-emerald-600 flex items-center justify-center rounded-xl shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-extrabold text-xl">F</span>
            </div>
            <div className={`flex flex-col leading-none transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-zinc-900'}`}>
              <span className="text-lg font-bold tracking-tight uppercase">Freeways</span>
              <span className="text-[10px] text-amber-500 font-bold tracking-[0.2em] uppercase">GmbH Logistik</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className={cn(
              "flex items-center gap-1 p-1.5 rounded-full transition-colors duration-500",
              isScrolled ? "bg-white/10 border border-white/5" : "bg-white/50 border border-white/40 backdrop-blur-md"
            )}>
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={cn(
                    "relative px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 hover:bg-emerald-500/10 hover:text-emerald-500",
                    isScrolled ? "text-zinc-300 hover:text-white" : "text-zinc-600"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <Link 
              href="#kontakt" 
              className="bg-emerald-600 hover:bg-emerald-500 text-white pl-5 pr-2 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-emerald-600/20 ml-2"
            >
              Anfrage
              <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                <ChevronRight size={14} />
              </div>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={cn(
              "md:hidden p-2 rounded-full transition-colors",
              isScrolled ? "text-white bg-white/10" : "text-zinc-900 bg-zinc-100"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-40 md:hidden"
          >
            <div className="glass rounded-3xl p-6 flex flex-col gap-4 border border-white/50 shadow-2xl">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-emerald-50 transition-colors group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-xl font-bold text-zinc-900 group-hover:text-emerald-700">{link.name}</span>
                  <ChevronRight className="text-zinc-300 group-hover:text-emerald-500" />
                </a>
              ))}
              <div className="h-px bg-zinc-100 my-2" />
              <Link 
                href="#kontakt" 
                className="bg-emerald-600 text-white p-4 rounded-xl text-center font-bold text-lg shadow-lg flex items-center justify-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone size={18} /> Projekt starten
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
