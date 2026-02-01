"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/design-system/utils/cn";
import { buttonVariants } from "@/design-system/components/atoms/Button";
import { VariantProps } from "class-variance-authority";

interface PremiumButtonProps extends HTMLMotionProps<"button">, VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  loading?: boolean;
}

export const PremiumButton: React.FC<PremiumButtonProps> = ({
  children,
  className,
  variant,
  size,
  icon,
  loading,
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {loading ? <span className="animate-spin mr-2">⟳</span> : icon}
        {children}
      </span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </motion.button>
  );
};
