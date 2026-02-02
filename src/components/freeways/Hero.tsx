"use client";

import { Container } from "@/components/layout/Container";
import { Stack } from "@/components/layout/Stack";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 bg-linear-to-br from-(--brand-light) via-white to-(--brand-green)/5 overflow-hidden">
      <Container className="relative z-10">
        <Stack gap={10} className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-(--brand-dark)">
              Zuverlässiger <br className="hidden md:block" />
              <span className="text-(--brand-green)">Liefer- & Logistikservice</span> <br className="hidden md:block" />
              in NRW
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-xl text-(--brand-gray) max-w-2xl leading-relaxed"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="bg-(--brand-green) hover:bg-(--brand-green)/90 text-white px-8"
              aria-label="Jetzt ein unverbindliches Angebot anfragen"
            >
              Jetzt anfragen
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-(--brand-border) text-(--brand-dark) px-8" 
              asChild
            >
              <a href={siteConfig.links.career} aria-label="Informationen für Bewerber und Fahrer anzeigen">
                Fahrer werden
              </a>
            </Button>
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
