"use client";

import React from 'react';
import { Package, Truck, Utensils, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-zinc-50/50">
      
      {/* Animated Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -50, 0] 
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] left-[-20%] w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-emerald-100/50 backdrop-blur-md text-emerald-800 text-xs font-bold mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Freeways GmbH – Ihr Partner in NRW
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl lg:text-8xl font-bold leading-[0.95] mb-8 text-zinc-900 tracking-tight"
          >
            Logistik <br />
            <span className="text-gradient">neu definiert.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-zinc-500 text-lg lg:text-xl mb-12 max-w-xl leading-relaxed font-medium"
          >
            Freeways GmbH ist Ihr professioneller Partner für Essenslieferung, Kurier- und Logistikdienstleistungen in Nordrhein-Westfalen. Schnell. Präzise. Premium.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 mb-16"
          >
            <a href="#kontakt" className="group relative overflow-hidden bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-emerald-600/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-600/40">
              <span className="relative z-10 flex items-center gap-2">Auftrag starten <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a href="#karriere" className="bg-white text-emerald-950 border border-emerald-100/50 px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center transition-all hover:bg-amber-50 shadow-xl shadow-zinc-200/50 hover:border-amber-200 hover:text-amber-700">
              Fahrer werden
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-6"
          >
            {[
              { icon: Utensils, label: "Food", sub: "Delivery", color: "bg-emerald-100 text-emerald-600" },
              { icon: Package, label: "Kurier", sub: "Express", color: "bg-amber-100 text-amber-600" },
              { icon: Truck, label: "Logistik", sub: "Full Service", color: "bg-blue-100 text-blue-600" },
            ].map((item, i) => (
              <div key={i} className="glass p-4 rounded-2xl flex flex-col items-center text-center gap-3 hover:scale-105 transition-transform duration-300 cursor-default">
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <div className="font-bold text-zinc-900">{item.label}</div>
                  <div className="text-xs text-zinc-400 font-medium uppercase tracking-wider">{item.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Visual */}
        <motion.div 
           initial={{ opacity: 0, x: 50, scale: 0.9 }}
           animate={{ opacity: 1, x: 0, scale: 1 }}
           transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
           className="relative lg:block hidden"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden border-[10px] border-white/80 shadow-2xl group">
             <img 
              src="https://images.unsplash.com/photo-1526367790999-0150786486a2?auto=format&fit=crop&q=80&w=1200" 
              alt="Professional Logistics Driver" 
              className="w-full h-[700px] object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
            {/* Glass Overlay Card */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-10 left-10 right-10 glass-dark p-8 rounded-3xl border border-white/10"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white">
                  <div className="font-bold text-2xl">25k</div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl">Erfolgreiche Touren</h4>
                  <p className="text-sm text-zinc-400 font-medium uppercase tracking-widest mt-1">Seit Gründung</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Floating Decor Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-12 w-32 h-32 glass rounded-full flex items-center justify-center z-20"
          >
             <Package size={40} className="text-emerald-600" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
