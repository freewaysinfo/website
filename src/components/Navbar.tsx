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
    { name: 'Leistungen', href: '#services' },
    { name: 'Karriere', href: '#career' },
    { name: 'Impressum', href: '/impressum' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-base",
        isScrolled ? "h-16 bg-background/80 backdrop-blur-md border-b border-border" : "h-20 bg-transparent"
      )}
    >
      <div className="max-w-max-width mx-auto px-safe flex items-center justify-between h-full">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
              <Image 
                src="/images/freeways-logo.png" 
                alt="Freeways Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-xl tracking-tighter uppercase text-emerald-deep group-hover:text-gold-premium transition-base">Freeways</span>
              <span className="font-bold text-[8px] tracking-[0.4em] uppercase text-emerald-deep/60">GmbH</span>
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
                className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-deep/60 hover:text-emerald-deep transition-base"
              >
                {link.name}
              </a>
            ))}
          </div>
          <Button size="sm" variant="primary">
            ANFRAGEN
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-emerald-deep p-2 hover:bg-emerald-deep/5 rounded-full transition-base"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-background z-[90] flex flex-col justify-center px-safe"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.name} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  href={link.href}
                  className="text-4xl font-black uppercase tracking-tighter text-emerald-deep hover:text-gold-premium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Button size="lg" className="w-full">
                  ANFRAGEN
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
