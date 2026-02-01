"use client";

import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  container?: boolean;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, container = true, ...props }, ref) => {
    return (
      <section 
        ref={ref}
        className={cn("py-section relative", className)} 
        {...props}
      >
        {container ? (
          <div className="px-safe max-w-max-width mx-auto w-full">
            {children}
          </div>
        ) : children}
      </section>
    );
  }
);

Section.displayName = "Section";

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
    primary: "bg-[#059669] text-white hover:bg-[#057a55] shadow-lg shadow-[#059669]/20",
    secondary: "bg-[#FBBF24] text-zinc-900 hover:bg-[#f59e0b] shadow-lg shadow-[#FBBF24]/20",
    outline: "border-2 border-[#059669] text-[#059669] hover:bg-[#059669] hover:text-white",
    ghost: "text-[#059669] hover:bg-[#059669]/5"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-10 py-5 text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "rounded-xl font-bold transition-all duration-200 inline-flex items-center justify-center whitespace-nowrap",
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
