"use client";

import React from 'react';
import { motion } from 'framer-motion';

const cities = [
  'Düsseldorf', 'Köln', 'Dortmund', 'Essen', 'Duisburg', 'Bochum', 
  'Wuppertal', 'Bielefeld', 'Bonn', 'Münster', 'Gelsenkirchen', 'Mönchengladbach'
];

export const NRWMap = () => {
  return (
    <section id="gb" className="py-32 bg-zinc-50/50 overflow-hidden relative">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>

      <div className="container-custom grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="order-2 lg:order-1">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-6xl font-black mb-8 text-zinc-900 leading-tight tracking-tight">
              Grenzenlose Präsenz <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-emerald-400">in ganz NRW.</span>
            </h2>
            <p className="text-zinc-600 text-xl mb-12 leading-relaxed font-medium">
              Von der Rheinschiene bis ins Ruhrgebiet – Freeways GmbH ist dort, wo Sie uns brauchen. 
              Wir vernetzen die Wirtschaftszentren des Landes mit präziser Logistik.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {cities.map((city, i) => (
                <motion.span 
                  key={city}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 rounded-full bg-white border border-zinc-100 text-sm font-bold text-zinc-700 hover:border-emerald-500 hover:text-emerald-600 transition-colors cursor-default flex items-center gap-2 shadow-sm hover:shadow-md"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div> {city}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="order-1 lg:order-2 relative aspect-square">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-emerald-50/50 rounded-[3rem] border border-emerald-100 flex items-center justify-center overflow-hidden premium-shadow backdrop-blur-3xl"
          >
            <svg viewBox="0 0 400 400" className="w-4/5 h-4/5 text-emerald-900/5">
              <motion.path 
                d="M100,100 Q150,50 200,100 T300,100 Q350,150 300,200 T300,300 Q250,350 200,300 T100,300 Q50,250 100,200 T100,100" 
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
              
              {/* Networking Lines Animation */}
              {[
                "M200,200 L150,150", 
                "M200,200 L250,250", 
                "M200,200 L120,280", 
                "M200,200 L280,120",
                "M150,150 L100,100",
                "M250,250 L300,300"
              ].map((path, i) => (
                <motion.path
                  key={i}
                  d={path}
                  stroke="#059669"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ delay: 1 + (i * 0.2), duration: 1.5 }}
                />
              ))}

              {/* Pulsing Dots for Cities */}
              <motion.circle cx="200" cy="200" r="8" fill="#059669">
                <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.4;1" dur="3s" repeatCount="indefinite" />
              </motion.circle>
              
              {/* Connection Nodes */}
              <circle cx="150" cy="150" r="5" fill="#FBBF24" />
              <circle cx="250" cy="250" r="5" fill="#FBBF24" />
              <circle cx="120" cy="280" r="5" fill="#059669" opacity="0.5" />
              <circle cx="280" cy="120" r="5" fill="#059669" opacity="0.5" />
              <circle cx="100" cy="100" r="4" fill="#059669" opacity="0.3" />
              <circle cx="300" cy="300" r="4" fill="#059669" opacity="0.3" />
            </svg>
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-9xl font-black text-emerald-900/5 select-none rotate-12 tracking-tighter">NRW</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
