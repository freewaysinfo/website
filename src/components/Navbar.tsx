'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/Layout';
import { FreewaysLogoIcon } from './ui/FreewaysLogo';

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
    { name: 'Leistungen', href: '#services' },
    { name: 'Karriere', href: '#career' },
    { name: 'Impressum', href: '/impressum' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        isScrolled ? "py-4 bg-obsidian/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-[var(--spacing-container)] flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <FreewaysLogoIcon className="w-full h-full drop-shadow-lg" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-2xl tracking-tighter uppercase text-white group-hover:text-primary transition-base">Freeways</span>
              <span className="font-bold text-[10px] tracking-[0.3em] uppercase text-primary">GmbH</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-base"
              >
                {link.name}
              </a>
            ))}
          </div>
          <Button size="sm">
            JETZT ANFRAGEN
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-base"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-obsidian z-[90] flex flex-col justify-center px-12"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.name} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  href={link.href}
                  className="text-5xl font-black uppercase tracking-tighter text-white hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12"
              >
                <Button size="lg" className="w-full">
                  JETZT ANFRAGEN
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
