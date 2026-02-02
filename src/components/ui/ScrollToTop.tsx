"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] p-4 bg-(--brand-anthracite) text-white rounded-2xl shadow-2xl border border-white/10 glow-green hover:scale-110 active:scale-95 transition-all group overflow-hidden"
          aria-label="Nach oben scrollen"
        >
          <div className="absolute inset-0 bg-(--brand-green)/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <ArrowUp className="h-6 w-6 relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
