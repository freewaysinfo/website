"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  container?: boolean;
}

export const Section = ({ children, className, container = true, ...props }: SectionProps) => {
  return (
    <section 
      className={cn("py-[var(--spacing-section)] relative", className)} 
      {...props}
    >
      {container ? (
        <div className="px-[var(--spacing-container)] max-w-7xl mx-auto">
          {children}
        </div>
      ) : children}
    </section>
  );
};

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: "bg-primary text-obsidian hover:bg-primary/90",
    secondary: "bg-white text-obsidian hover:bg-white/90",
    outline: "border border-border text-foreground hover:bg-white/5",
    ghost: "text-foreground hover:bg-white/5"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "rounded-full font-bold transition-base inline-flex items-center justify-center whitespace-nowrap",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
