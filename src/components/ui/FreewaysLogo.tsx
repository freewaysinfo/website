"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

export const FreewaysLogo = ({ className }: LogoProps) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#facc15" />
          <stop offset="50%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Stylized Dynamic "F" */}
      <motion.path
        d="M20 20 H80 L70 45 H45 L35 70 H25 Z"
        fill="url(#logoGradient)"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      {/* Middle Bar */}
      <motion.path
        d="M38 38 H65 L60 50 H33 Z"
        fill="url(#logoGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
    </svg>
  );
};

// Simplified version for actual use context
export const FreewaysLogoIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#facc15" />
        <stop offset="100%" stopColor="#a16207" />
      </linearGradient>
    </defs>
    {/* High-speed stylized F */}
    <path 
      d="M15 15 L85 15 L78 38 L45 38 L38 65 L60 65 L54 85 L10 85 L25 55 L20 55 L30 38 L25 38 Z" 
      fill="url(#goldGrad)"
      stroke="rgba(0,0,0,0.1)"
      strokeWidth="1"
    />
    <path 
      d="M38 45 L70 45 L65 58 L33 58 Z" 
      fill="url(#goldGrad)" 
      opacity="0.9"
    />
  </svg>
);
