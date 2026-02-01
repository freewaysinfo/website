'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Company', href: '#company' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "py-2 glass border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
              <span className="text-black font-black text-2xl italic">F</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-xl tracking-tighter uppercase text-white">Freeways</span>
              <span className="font-bold text-[10px] tracking-[0.2em] uppercase text-primary -mt-0.5">GmbH</span>
            </div>
          </div>
          <div className="hidden lg:block h-8 w-px bg-white/10 mx-2" />
          <span className="hidden lg:block text-[11px] uppercase tracking-widest text-secondary/80 font-medium">
            Liefern - Fahren - Arbeiten
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-2.5 bg-secondary text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-secondary/80 transition-base shadow-lg shadow-secondary/20">
            Jetzt anfragen
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass absolute top-full left-0 right-0 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-xl font-bold uppercase tracking-tighter text-white hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/10 w-full" />
              <button className="w-full py-4 bg-secondary text-white font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-secondary/20">
                Jetzt anfragen
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
