'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2, MapPin, Truck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted to-background py-sectionMobile md:py-sectionDesktop scroll-mt-24">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      </div>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative grid gap-12 items-center lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="text-center lg:text-left">
            <span className="section-badge">Premium B2B Logistik</span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-[1.05]">
              Zuverlässiger Liefer- & Logistikservice in NRW
            </h1>
            <p className="mt-6 text-base md:text-lg max-w-2xl leading-relaxed">
              Freeways GmbH ist Ihr professioneller Partner für Essenslieferung, Kurier- und Logistikdienstleistungen in Nordrhein-Westfalen.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Zuverlässige Zustellung und feste Ansprechpartner
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Truck className="h-4 w-4 text-primary" />
                Flexible Einsätze für Gastronomie, Kurier und Logistik
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                NRW-weit im Einsatz, 7 Tage pro Woche
              </div>
            </div>
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
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="rounded-full border border-border bg-background/80 px-3 py-1">50+ Fahrer</span>
              <span className="rounded-full border border-border bg-background/80 px-3 py-1">NRW-weit</span>
              <span className="rounded-full border border-border bg-background/80 px-3 py-1">7 Tage/Woche</span>
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
