"use client";

import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="text-white font-bold text-2xl tracking-tighter mb-6 block">
              FREEWAYS<span className="text-[#059669]">.</span>
            </Link>
            <p className="max-w-sm mb-8 leading-relaxed">
              Ihr professioneller Partner für Logistik- & Lieferdienste in Nordrhein-Westfalen. 
              Zuverlässig, schnell und flexibel für Ihr Business.
            </p>
            <p className="text-sm">© 2026 Freeways GmbH. Alle Rechte vorbehalten.</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Leistungen</h4>
            <ul className="space-y-3">
              <li><Link href="#leistungen" className="hover:text-white transition-colors">Essenslieferung</Link></li>
              <li><Link href="#leistungen" className="hover:text-white transition-colors">Express-Kurier</Link></li>
              <li><Link href="#leistungen" className="hover:text-white transition-colors">Logistik-Support</Link></li>
              <li><Link href="#karriere" className="hover:text-white transition-colors">Fahrer werden</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Rechtliches</h4>
            <ul className="space-y-3">
              <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
              <li><Link href="#kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium">Systemstatus: <span className="text-[#059669]">Online</span></p>
          <div className="flex gap-6">
            <span className="text-xs uppercase tracking-[0.2em]">Designed in Germany</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
