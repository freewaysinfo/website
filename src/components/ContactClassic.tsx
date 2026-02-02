import React from 'react';
import { SectionContainer } from './SectionContainer';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export const ContactClassic = () => {
  return (
    <SectionContainer id="contact" className="bg-zinc-50">
       <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info Side */}
          <div>
             <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Kontakt</h2>
             <h3 className="text-4xl lg:text-5xl font-black text-zinc-900 mb-8">Starten Sie Ihr Projekt.</h3>
             <p className="text-xl text-zinc-500 font-medium mb-12 leading-relaxed">
               Wir sind bereit. Erzählen Sie uns von Ihrer Herausforderung und wir entwickeln die passende Logistik-Lösung.
             </p>

             <div className="space-y-8">
                <div className="flex items-start gap-6">
                   <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shadow-sm text-emerald-600 shrink-0">
                      <Phone size={24} />
                   </div>
                   <div>
                      <div className="text-xl font-bold text-zinc-900 mb-1">02234 6808219</div>
                      <div className="text-zinc-500 font-medium">Mo-Fr, 08:00 - 18:00 Uhr</div>
                   </div>
                </div>

                <div className="flex items-start gap-6">
                   <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shadow-sm text-emerald-600 shrink-0">
                      <Mail size={24} />
                   </div>
                   <div>
                      <div className="text-xl font-bold text-zinc-900 mb-1">info@freeways.de</div>
                      <div className="text-zinc-500 font-medium">Wir antworten schnell.</div>
                   </div>
                </div>

                <div className="flex items-start gap-6">
                   <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shadow-sm text-emerald-600 shrink-0">
                      <MapPin size={24} />
                   </div>
                   <div>
                      <div className="text-xl font-bold text-zinc-900 mb-1">Zentrale Köln</div>
                      <div className="text-zinc-500 font-medium max-w-xs">Wipperfürther Str. 29–31<br/>51103 Köln</div>
                   </div>
                </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-10 lg:p-12 rounded-3xl border border-zinc-100 shadow-xl shadow-zinc-200/40">
             <form className="space-y-6">
                <div>
                   <label className="block text-sm font-bold text-zinc-700 mb-2">Ihr Name</label>
                   <input type="text" className="w-full px-4 py-4 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all font-medium" placeholder="Max Mustermann" />
                </div>
                <div>
                   <label className="block text-sm font-bold text-zinc-700 mb-2">E-Mail Adresse</label>
                   <input type="email" className="w-full px-4 py-4 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all font-medium" placeholder="max@firma.de" />
                </div>
                <div>
                   <label className="block text-sm font-bold text-zinc-700 mb-2">Nachricht</label>
                   <textarea rows={4} className="w-full px-4 py-4 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all font-medium resize-none" placeholder="Wie können wir helfen?"></textarea>
                </div>
                <button className="w-full py-4 bg-zinc-900 text-white rounded-xl font-bold text-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-3">
                   Nachricht senden <Send size={20} />
                </button>
             </form>
          </div>
       </div>
    </SectionContainer>
  );
};
