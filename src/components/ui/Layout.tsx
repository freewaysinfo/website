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
    primary: "bg-accent text-zinc-900 hover:opacity-90 shadow-lg shadow-accent/20",
    secondary: "bg-primary text-white hover:opacity-90",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-primary hover:bg-primary/5"
  };

  const sizes = {
    sm: "px-spacing-s py-spacing-xs text-sm",
    md: "px-spacing-m py-spacing-s text-base",
    lg: "px-spacing-l py-spacing-m text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "rounded-xl font-bold transition-base inline-flex items-center justify-center whitespace-nowrap",
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
