'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "h-16 bg-white/90 backdrop-blur-md border-b border-zinc-100 shadow-sm" : "h-20 bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between h-full">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#059669] flex items-center justify-center rounded-xl shadow-lg shadow-emerald-600/20">
            <span className="text-white font-black text-2xl">F</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-tighter uppercase text-zinc-900 group-hover:text-[#059669] transition-colors">Freeways</span>
            <span className="text-[10px] text-[#FBBF24] font-bold tracking-[0.2em] uppercase">GmbH Logistik</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-bold text-zinc-600 hover:text-[#059669] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <Link 
            href="#kontakt" 
            className="bg-[#059669] hover:bg-[#057a55] text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-md shadow-emerald-600/10"
          >
            Anfrage <ChevronRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-900 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-16 bg-white z-40 flex flex-col p-8 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-2xl font-bold text-zinc-900 border-b border-zinc-100 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Link 
                href="#kontakt" 
                className="bg-[#059669] text-white p-5 rounded-2xl text-center font-bold text-lg shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Jetzt anfragen
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
