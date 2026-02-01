"use client";

import React from 'react';
import { Section, Button } from './ui/Layout';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactSection = () => {
  return (
    <Section id="kontakt" className="bg-zinc-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <span className="inline-block px-3 py-1 bg-[#059669]/10 text-[#059669] rounded-lg text-sm font-bold mb-6 uppercase tracking-wider">
            Kontakt
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8 tracking-tight">
            Sprechen wir über Ihre Logistik
          </h2>
          <p className="text-lg text-zinc-600 mb-12 leading-relaxed max-w-lg">
            Haben Sie Fragen zu unseren Dienstleistungen oder benötigen Sie ein 
            individuelles Angebot? Unser Team in Köln freut sich auf Ihre Nachricht.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-zinc-100 flex items-center justify-center text-[#059669] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-1">Adresse</p>
                <p className="text-lg font-bold text-zinc-900">Wipperfürther Str. 29–31, 51103 Köln</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-zinc-100 flex items-center justify-center text-[#059669] shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-1">Telefon</p>
                <p className="text-lg font-bold text-zinc-900">02234 6808219</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-zinc-100 flex items-center justify-center text-[#059669] shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-1">E-Mail</p>
                <p className="text-lg font-bold text-zinc-900 underline">info@freeways.de</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-4xl border border-zinc-100 shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900 ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="Ihr Name"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:border-[#059669] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900 ml-1">Unternehmen</label>
                <input 
                  type="text" 
                  placeholder="Optional"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:border-[#059669] transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-900 ml-1">E-Mail</label>
              <input 
                type="email" 
                placeholder="name@beispiel.de"
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:border-[#059669] transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-900 ml-1">Nachricht</label>
              <textarea 
                rows={4}
                placeholder="Wie können wir Ihnen helfen?"
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:border-[#059669] transition-all"
              />
            </div>
            
            <Button className="w-full py-4 rounded-xl text-lg group">
              Anfrage senden
              <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
            
            <p className="text-xs text-zinc-400 text-center font-medium">
              Mit dem Absenden akzeptieren Sie unsere Datenschutzbestimmungen.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
};
