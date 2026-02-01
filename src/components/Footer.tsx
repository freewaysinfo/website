'use client';

import React from 'react';
import Link from 'next/link';
import { Section } from './ui/Layout';
import { FreewaysLogoIcon } from './ui/FreewaysLogo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsidian pt-20 pb-10 border-t border-white/5">
      <Section container={true}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 flex items-center justify-center">
                <FreewaysLogoIcon className="w-full h-full" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-3xl tracking-tighter uppercase text-white">Freeways</span>
                <span className="font-bold text-[10px] tracking-[0.4em] uppercase text-primary">GmbH</span>
              </div>
            </div>
            <p className="text-white/40 font-medium max-w-sm leading-relaxed mb-8">
              Ihr Premium-Partner für High-End Logistik und Express-Lösungen in Nordrhein-Westfalen. Innovation trifft Präzision.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <div className="flex flex-col gap-4 text-white/40 text-[11px] font-bold uppercase tracking-[0.2em]">
              <Link href="#services" className="hover:text-primary transition-base">Leistungen</Link>
              <Link href="#career" className="hover:text-primary transition-base">Karriere</Link>
              <Link href="/impressum" className="hover:text-primary transition-base">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-primary transition-base">Datenschutz</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Kontakt</h4>
            <div className="flex flex-col gap-4 text-white/40 text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed">
              <p>Wipperfürther Str. 29–31</p>
              <p>51103 Köln</p>
              <p className="mt-4 text-white">02234 6808219</p>
              <p className="text-white">info@freeways.de</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
            © {currentYear} Freeways GmbH. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
             <span>Handelsregister Köln HRB 112389</span>
             <span>Design by MVMNTS</span>
          </div>
        </div>
      </Section>
    </footer>
  );
};
