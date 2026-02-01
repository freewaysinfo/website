"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const FreewaysLogoIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="goldGloss" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF2AD" />
        <stop offset="20%" stopColor="#FBDB5C" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="80%" stopColor="#A16207" />
        <stop offset="100%" stopColor="#422006" />
      </linearGradient>
      <filter id="logoGlow">
        <feGaussianBlur stdDeviation="0.5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    <g filter="url(#logoGlow)">
      {/* Precision Path for the high-end F */}
      <motion.path 
        d="M25 85 L15 85 L35 45 L25 45 L30 35 L90 20 L80 40 L45 40 L40 55 L75 55 L65 70 L35 70 L30 85 Z" 
        fill="url(#goldGloss)"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </g>
  </svg>
);
