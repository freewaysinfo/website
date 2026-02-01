"use client";

import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const GeminiAssistant: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-8 right-8 z-50 group"
    >
      <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
      <button className="relative w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
        <Sparkles className="text-emerald-500" size={24} />
      </button>
    </motion.div>
  );
};
