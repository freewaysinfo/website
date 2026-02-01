'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from './ui/Layout';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-24 pb-12 border-t border-border">
      <Section container={true}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-10">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <Image 
                  src="/images/freeways-logo.png" 
                  alt="Freeways Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-2xl tracking-tighter uppercase text-emerald-deep">Freeways</span>
                <span className="font-bold text-[9px] tracking-[0.4em] uppercase text-emerald-deep/40">GmbH</span>
              </div>
            </div>
            <p className="text-emerald-deep/50 font-medium max-w-sm leading-relaxed">
              Ihr Premium-Partner für High-End Logistik in NRW. <br />
              Präzision in jeder Meile.
            </p>
          </div>

          <div>
            <h4 className="text-emerald-deep font-bold uppercase tracking-widest text-[10px] mb-10 opacity-40">Navigation</h4>
            <div className="flex flex-col gap-4 text-emerald-deep text-[11px] font-bold uppercase tracking-[0.2em]">
              <Link href="#services" className="hover:text-gold-premium transition-base">Leistungen</Link>
              <Link href="#career" className="hover:text-gold-premium transition-base">Karriere</Link>
              <Link href="/impressum" className="hover:text-gold-premium transition-base">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-gold-premium transition-base">Datenschutz</Link>
            </div>
          </div>

          <div>
            <h4 className="text-emerald-deep font-bold uppercase tracking-widest text-[10px] mb-10 opacity-40">Kontakt</h4>
            <div className="flex flex-col gap-4 text-emerald-deep text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed">
              <p>Wipperfürther Str. 29–31</p>
              <p>51103 Köln</p>
              <p className="mt-4 text-emerald-deep/40">02234 6808219</p>
              <p className="text-emerald-deep/40">info@freeways.de</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-deep/20">
            © {currentYear} Freeways GmbH. Excellence in Motion.
          </p>
          <div className="flex items-center gap-8 text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-deep/20">
             <span>NRW Logistics Network</span>
             <span className="opacity-50">•</span>
             <span>Design by MVMNTS</span>
          </div>
        </div>
      </Section>
    </footer>
  );
};
