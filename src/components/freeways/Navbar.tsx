"use client";

import { Container } from "@/components/layout/Container";
import { Stack } from "@/components/layout/Stack";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Leistungen", href: "/#services" },
    { name: "Vorteile", href: "/#warum-wir" },
    { name: "Karriere", href: "/#karriere" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0f0f0f]/95 backdrop-blur-2xl border-b border-white/5 shadow-2xl transition-all duration-300">
      <Container>
        <Stack direction="row" align="center" justify="between" className="h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
            <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-105">
              <Image 
                src="/images/logo.png" 
                alt="Freeways GmbH Logo" 
                width={40}
                height={40}
                sizes="(max-width: 768px) 32px, 40px"
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {siteConfig.name}
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="text-sm font-semibold text-white/90 hover:text-white transition-all relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-(--brand-green) transition-all group-hover:w-full glow-green" />
              </Link>
            ))}
            
            <div className="h-6 w-px bg-white/10 mx-2" />

            <Link href={siteConfig.contact.phoneUrl} className="text-sm font-bold text-white hover:text-(--brand-yellow) transition-colors">
              {siteConfig.contact.phone}
            </Link>

            <Button size="sm" className="bg-(--brand-green) hover:bg-(--brand-green)/90 text-white rounded-full px-6 font-bold glow-green border-none" asChild>
              <Link href="/#kontakt">Anfragen</Link>
            </Button>
          </nav>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl w-12 h-12 z-80 outline-none transition-all active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </Stack>
      </Container>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#050505] md:hidden flex flex-col"
          >
            {/* Background Gradient - Reduced opacity */}
            <div className="absolute inset-0 bg-linear-to-b from-(--brand-green)/5 to-transparent pointer-events-none" />
            
            <Container className="flex-1 flex flex-col relative z-10 w-full h-full">
              <div className="h-16 flex items-center justify-between border-b border-white/10 mb-8">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                  <Image 
                    src="/images/logo.png" 
                    alt="Freeways Logo" 
                    width={32} 
                    height={32} 
                    className="w-8 h-8"
                  />
                  <span className="font-bold text-white text-lg">{siteConfig.name}</span>
                </Link>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full w-10 h-10"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="flex flex-col gap-6 items-center justify-center flex-1">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="w-full text-center"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-4xl font-bold text-white hover:text-(--brand-green) transition-colors py-2 active:scale-95 duration-200"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="w-full max-w-xs mt-8 space-y-6"
                >
                  <Button 
                    size="lg" 
                    className="w-full bg-(--brand-green) hover:bg-(--brand-green)/90 text-(--brand-dark) font-black text-lg h-14 rounded-2xl glow-green border-none shadow-xl"
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/#kontakt">Jetzt anfragen</Link>
                  </Button>
                  
                  <div className="text-center">
                    <p className="text-gray-500 text-sm mb-2 uppercase tracking-widest font-bold">Oder anrufen</p>
                    <a href={siteConfig.contact.phoneUrl} className="text-2xl font-bold text-white hover:text-(--brand-yellow) transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </motion.div>
              </div>

              <div className="py-8 text-center border-t border-white/5">
                <p className="text-gray-600 text-xs">
                  © {new Date().getFullYear()} {siteConfig.name}
                </p>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
