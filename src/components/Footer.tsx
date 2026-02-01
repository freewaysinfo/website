'use client';

import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/10 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start justify-between">
        <div className="flex flex-col gap-6 col-span-1 md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
              <span className="text-black font-black text-2xl italic">F</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-xl tracking-tighter uppercase text-white">Freeways</span>
              <span className="font-bold text-[10px] tracking-[0.2em] uppercase text-primary -mt-0.5">GmbH</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
            Ihr professioneller Partner für Essenslieferung, Kurier- und Logistikdienstleistungen in Nordrhein-Westfalen.
          </p>
          <div className="space-y-3 text-sm font-bold text-gray-300">
            <p>Wipperfürther Str. 29–31</p>
            <p>51103 Köln, Deutschland</p>
            <p className="text-primary hover:text-white transition-colors">
              <a href="tel:022346808219">📞 02234 6808219</a>
            </p>
            <p className="text-primary hover:text-white transition-colors">
              <a href="mailto:info@freeways.de">📧 info@freeways.de</a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 md:gap-24 col-span-1 md:col-span-2">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm uppercase tracking-widest text-white">Services</h4>
            <ul className="flex flex-col gap-2 text-sm font-bold text-gray-400">
              <li><Link href="#services" className="hover:text-white transition-colors text-xs uppercase tracking-widest">Essenslieferung</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors text-xs uppercase tracking-widest">Kurierdienste</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors text-xs uppercase tracking-widest">Logistik</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm uppercase tracking-widest text-white">Unternehmen</h4>
            <ul className="flex flex-col gap-2 text-sm font-bold text-gray-400">
              <li><Link href="#karriere" className="hover:text-white transition-colors text-xs uppercase tracking-widest text-primary">Karriere</Link></li>
              <li><Link href="/impressum" className="hover:text-white transition-colors text-xs uppercase tracking-widest">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-white transition-colors text-xs uppercase tracking-widest">Datenschutz</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600">
        <p>© 2026 Freeways GmbH. Alle Rechte vorbehalten.</p>
        <p>Created by MVMNTS.</p>
      </div>
    </footer>
  );
};
