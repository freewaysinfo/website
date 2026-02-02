"use client";

import { Container } from "@/components/layout/Container";
import { Stack } from "@/components/layout/Stack";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 bg-white overflow-hidden">
      <Container className="relative z-10">
        <Stack direction="row" align="center" gap={12} className="flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-(--brand-dark)">
                Zuverlässiger <br className="hidden md:block" />
                <span className="text-(--brand-green)">Liefer- & Logistikservice</span> <br className="hidden md:block" />
                in NRW
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-lg md:text-xl text-(--brand-gray) max-w-xl leading-relaxed"
            >
              {siteConfig.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-(--brand-green) hover:bg-(--brand-green)/90 text-white px-8 rounded-xl h-14"
                aria-label="Jetzt ein unverbindliches Angebot anfragen"
              >
                Jetzt anfragen
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-(--brand-border) text-(--brand-dark) px-8 rounded-xl h-14" 
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
            <div className="absolute inset-0 bg-linear-to-tr from-(--brand-green)/10 to-transparent rounded-[2rem] -rotate-3 translate-x-4 scale-95" />
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/images/hero_van.png"
                alt="Freeways GmbH delivery van in action"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Stats Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-(--brand-green)/10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-(--brand-green) animate-pulse" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-(--brand-dark)">24/7</div>
                  <div className="text-sm text-(--brand-gray) font-medium">Bereitschaft</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Stack>
      </Container>
      
      {/* Subtle floating background elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-(--brand-green)/5 rounded-full blur-3xl -z-10" 
      />
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[500px] h-[500px] bg-(--brand-yellow)/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
