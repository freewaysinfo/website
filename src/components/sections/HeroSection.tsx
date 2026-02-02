'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-light via-background to-background py-sectionMobile md:py-sectionDesktop">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 items-center text-center lg:text-left lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight">
              Zuverlässiger Liefer- & Logistikservice in NRW
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Freeways GmbH ist Ihr professioneller Partner für Essenslieferung, Kurier- und Logistikdienstleistungen in Nordrhein-Westfalen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="primary" asChild>
                <a href="#kontakt">Jetzt anfragen</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/4922346808219" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-brand-light" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-brand-border bg-background shadow-xl">
              <Image
                src="/images/hero_crew.png"
                alt="Freeways Team im Einsatz"
                width={720}
                height={560}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
