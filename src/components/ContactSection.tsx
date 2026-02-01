"use client";

import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section id="kontakt" className="py-32 bg-zinc-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-6xl font-black mb-8 text-white leading-tight">Starten Sie Ihr <br /><span className="text-amber-400 italic">Projekt.</span></h2>
            <p className="text-emerald-100 text-lg mb-12 font-medium opacity-90">
              Ob Einzelauftrag oder langfristige Logistikpartnerschaft – unser Expertenteam berät Sie persönlich und kompetent.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, title: "Direktkontakt", val: "02234 6808219", bg: "bg-amber-400", iconColor: "text-emerald-900" },
                { icon: Mail, title: "Anfrage per Mail", val: "info@freeways.de", bg: "bg-white", iconColor: "text-emerald-700" },
                { icon: MapPin, title: "Zentrale", val: "Wipperfürther Str. 29–31, 51103 Köln", bg: "bg-white", iconColor: "text-emerald-700" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-6 rounded-[2rem] bg-emerald-800/30 border border-emerald-700/30 backdrop-blur-sm cursor-default"
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center shadow-lg`}>
                    <item.icon className={item.iconColor} size={26} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{item.title}</h4>
                    <p className="text-emerald-100/70 font-medium">{item.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 lg:p-14 rounded-[3.5rem] border border-emerald-700 shadow-[0_30px_100px_rgba(0,0,0,0.3)] relative text-zinc-900"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="h-[450px] flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                    <Send size={48} />
                  </div>
                  <h3 className="text-4xl font-black text-zinc-900">Nachricht erhalten!</h3>
                  <p className="text-zinc-500 font-medium max-w-sm">Vielen Dank für Ihr Vertrauen. Ein Premium-Betreuer kontaktiert Sie in den nächsten Minuten.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
                  >
                    Neue Anfrage
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-8"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-emerald-700 uppercase tracking-widest pl-2">Ihr Name</label>
                      <motion.input 
                        whileFocus={{ scale: 1.02, borderColor: "#10b981" }}
                        type="text" 
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 outline-none transition-all text-zinc-900 font-medium shadow-inner"
                        placeholder="Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-emerald-700 uppercase tracking-widest pl-2">E-Mail</label>
                      <motion.input 
                        whileFocus={{ scale: 1.02, borderColor: "#10b981" }}
                        type="email" 
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 outline-none transition-all text-zinc-900 font-medium shadow-inner"
                        placeholder="E-Mail"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-emerald-700 uppercase tracking-widest pl-2">Ihre Nachricht</label>
                    <motion.textarea 
                      whileFocus={{ scale: 1.02, borderColor: "#10b981" }}
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 outline-none transition-all text-zinc-900 font-medium resize-none shadow-inner"
                      placeholder="Wie können wir Ihnen helfen?"
                    ></motion.textarea>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-70 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all text-xl shadow-xl shadow-emerald-600/20 relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="animate-spin" /> Wird übermittelt...</>
                    ) : (
                      <>Anfrage senden <Send size={24} /></>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
