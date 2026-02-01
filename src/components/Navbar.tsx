'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/Layout';

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
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-bold text-2xl tracking-tighter text-zinc-900">
            FREEWAYS<span className="text-[#059669]">.</span>
          </span>
          <span className="bg-zinc-100 text-zinc-500 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-widest">
            GmbH
          </span>
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
          <Link href="#kontakt" className="bg-[#059669] text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-[#057a55] transition-all">
            ANFRAGEN
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-900 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-16 bg-white z-40 flex flex-col p-8 md:hidden"
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
                className="bg-[#059669] text-white px-6 py-4 rounded-xl text-lg font-bold text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ANFRAGEN
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
