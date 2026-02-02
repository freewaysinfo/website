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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/95 backdrop-blur-2xl border-b border-white/5 shadow-2xl transition-all duration-300">
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
            className="md:hidden text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl w-12 h-12 z-50 outline-none transition-all active:scale-95"
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
          <>
            {/* Backdrop for mobile menu to separate it from the header */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="fixed top-0 right-0 w-[85%] h-full z-[70] bg-[#000000] border-l border-white/10 flex flex-col pt-24 px-8 md:hidden shadow-[-20px_0_60px_rgba(0,0,0,1)] overflow-y-auto"
            >
              <div className="flex flex-col gap-8">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-bold text-white hover:text-(--brand-green) transition-colors flex items-center justify-between group py-4"
                    >
                      {item.name}
                      <span className="w-2 h-2 rounded-full bg-(--brand-green) opacity-0 group-hover:opacity-100 glow-green transition-opacity" />
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="h-px bg-white/10 my-4"
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link 
                    href={siteConfig.contact.phoneUrl} 
                    className="text-2xl font-bold text-(--brand-yellow) text-glow-gold"
                  >
                    {siteConfig.contact.phone}
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-4"
                >
                  <Button 
                    size="lg" 
                    className="w-full bg-(--brand-green) hover:bg-(--brand-green)/90 text-white rounded-2xl font-black glow-green border-none h-16 text-xl shadow-2xl active:scale-95 transition-all"
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/#kontakt">Jetzt anfragen</Link>
                  </Button>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-auto pb-12 text-gray-500 text-sm"
              >
                © {new Date().getFullYear()} {siteConfig.name} <br />
                Alle Rechte vorbehalten.
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
