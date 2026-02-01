"use client";

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ServiceGrid } from '@/components/ServiceGrid';
import { NRWMap } from '@/components/NRWMap';
import { Stats } from '@/components/Stats';
import { CareerSection } from '@/components/CareerSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { GeminiAssistant } from '@/components/GeminiAssistant';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <Stats />

        <section id="services" className="py-24 bg-zinc-50/50">
          <ServiceGrid />
        </section>

        <section id="regions" className="py-24">
          <NRWMap />
        </section>

        <CareerSection />

        <section id="contact" className="py-24 bg-emerald-900 text-white">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
      
      {/* Floating AI Assistant */}
      <GeminiAssistant />
    </div>
  );
}
