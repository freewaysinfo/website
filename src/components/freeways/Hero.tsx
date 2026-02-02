"use client";

import { Container } from "@/components/layout/Container";
import { Stack } from "@/components/layout/Stack";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 bg-(--brand-anthracite) overflow-hidden">
      <Container className="relative z-10">
        <Stack direction="row" align="center" gap={12} className="flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white">
                Zuverlässiger <br className="hidden md:block" />
                <span className="text-(--brand-green) text-glow-green">Liefer- & Logistikservice</span> <br className="hidden md:block" />
                in NRW
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed font-medium"
            >
              {siteConfig.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Button 
                size="lg" 
                className="bg-(--brand-green) hover:bg-(--brand-green)/90 text-white px-10 rounded-2xl h-16 text-lg font-bold glow-green border-none transition-all active:scale-95"
                aria-label="Jetzt ein unverbindliches Angebot anfragen"
              >
                Jetzt anfragen
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/10 bg-white/5 text-white hover:bg-white/10 px-10 rounded-2xl h-16 text-lg font-bold transition-all active:scale-95" 
                asChild
              >
                <a href={siteConfig.links.career} aria-label="Informationen für Bewerber und Fahrer anzeigen">
                  Fahrer werden
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full lg:w-1/2 relative aspect-video lg:aspect-square"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-(--brand-green)/20 to-transparent rounded-[2.5rem] -rotate-3 translate-x-4 scale-95 blur-xl opacity-50" />
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
              <Image 
                src="/images/hero_van.png"
                alt="Freeways GmbH delivery van in action"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Stats Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-(--brand-anthracite) p-8 rounded-2xl shadow-2xl border border-white/5 hidden md:block glow-green ring-1 ring-white/10"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-(--brand-green)/10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-(--brand-green) animate-pulse shadow-[0_0_15px_rgba(74,222,128,1)]" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white tracking-tight">24/7</div>
                  <div className="text-sm text-gray-400 font-bold uppercase tracking-widest">Bereitschaft</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Stack>
      </Container>
      
      {/* Subtle floating background elements */}
      <motion.div 
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-(--brand-green)/10 rounded-full blur-[120px] -z-10 opacity-30" 
      />
      <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-(--brand-yellow)/5 rounded-full blur-[100px] -z-10 opacity-20" />
    </section>
  );
}
