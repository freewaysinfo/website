'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
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
    { href: '#leistungen', label: 'Leistungen' },
    { href: '#vorteile', label: 'Vorteile' },
    { href: '#karriere', label: 'Karriere' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/freeways-logo.png"
              alt="Freeways GmbH"
              width={36}
              height={36}
              className="h-9 w-9"
              priority
            />
            <div className="text-lg sm:text-xl font-black text-foreground">
              Freeways GmbH
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-2 text-sm">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://wa.me/4922346808219" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="tel:+4922346808219">Telefon</a>
            </Button>
            <Button size="sm" asChild>
              <a href="#kontakt">Anfrage</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-brand-border">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-brand-green font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="ghost" size="sm" asChild className="w-full justify-start">
                <a href="https://wa.me/4922346808219" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="w-full justify-start">
                <a href="tel:+4922346808219">Telefon</a>
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};
