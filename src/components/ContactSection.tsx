"use client";

import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="kontakt" className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-black mb-8 text-white leading-tight">Starten Sie Ihr <br /><span className="text-amber-400 italic">Projekt.</span></h2>
            <p className="text-emerald-100 text-lg mb-12 font-medium opacity-90">
              Ob Einzelauftrag oder langfristige Logistikpartnerschaft – unser Expertenteam berät Sie persönlich und kompetent.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-emerald-800/50 border border-emerald-700/50 backdrop-blur-sm transition-transform hover:translate-x-2 duration-300">
                <div className="w-14 h-14 rounded-2xl bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-400/20">
                  <Phone className="text-emerald-900" size={26} />
                </div>
                <div>
                  <h4 className="font-black text-white text-lg">Direktkontakt</h4>
                  <p className="text-emerald-100/70 font-bold">02234 6808219</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-emerald-800/50 border border-emerald-700/50 backdrop-blur-sm transition-transform hover:translate-x-2 duration-300">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">
                  <Mail className="text-emerald-700" size={26} />
                </div>
                <div>
                  <h4 className="font-black text-white text-lg">Anfrage per Mail</h4>
                  <p className="text-emerald-100/70 font-bold">info@freeways.de</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-emerald-800/50 border border-emerald-700/50 backdrop-blur-sm transition-transform hover:translate-x-2 duration-300">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">
                  <MapPin className="text-emerald-700" size={26} />
                </div>
                <div>
                  <h4 className="font-black text-white text-lg">Zentrale</h4>
                  <p className="text-emerald-100/70 font-bold">Wipperfürther Str. 29–31, 51103 Köln</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-14 rounded-[3.5rem] border border-emerald-700 shadow-[0_30px_100px_rgba(0,0,0,0.3)] relative text-zinc-900">
            {submitted ? (
              <div className="h-[450px] flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4 animate-bounce">
                  <Send size={48} />
                </div>
                <h3 className="text-4xl font-black text-zinc-900">Nachricht erhalten!</h3>
                <p className="text-zinc-500 font-medium max-w-sm">Vielen Dank für Ihr Vertrauen. Ein Premium-Betreuer kontaktiert Sie in den nächsten Minuten.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
                >
                  Zurück zum Formular
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-emerald-700 uppercase tracking-widest">Ihr Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:border-emerald-500 focus:bg-white outline-none transition-all text-zinc-900 font-medium"
                      placeholder="Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-emerald-700 uppercase tracking-widest">E-Mail</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:border-emerald-500 focus:bg-white outline-none transition-all text-zinc-900 font-medium"
                      placeholder="E-Mail"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-emerald-700 uppercase tracking-widest">Ihre Nachricht</label>
                  <textarea 
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 focus:border-emerald-500 focus:bg-white outline-none transition-all text-zinc-900 font-medium resize-none"
                    placeholder="Wie können wir Ihnen helfen?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all text-xl shadow-xl shadow-emerald-600/20"
                >
                  {isSubmitting ? 'Wird übermittelt...' : <>Anfrage senden <Send size={24} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
