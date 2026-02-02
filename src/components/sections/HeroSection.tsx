'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-muted via-background to-background py-sectionMobile md:py-sectionDesktop scroll-mt-24">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      </div>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative grid gap-12 items-center lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Premium B2B Logistik
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-[1.05]">
              Zuverlässiger Liefer- & Logistikservice in NRW
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Freeways GmbH ist Ihr professioneller Partner für Essenslieferung, Kurier- und Logistikdienstleistungen in Nordrhein-Westfalen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="primary" asChild>
                <a href="#kontakt">Jetzt anfragen</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/4922346808219" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span>NRW-weit</span>
              <span>7 Tage/Woche</span>
              <span>50+ Fahrer</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-background to-accent/10" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-background shadow-2xl">
              <Image
                src="/images/hero_crew.png"
                alt="Freeways Team im Einsatz"
                width={960}
                height={720}
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
