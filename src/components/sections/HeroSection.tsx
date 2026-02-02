'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-background py-sectionMobile md:py-sectionDesktop scroll-mt-24 section-frame">
      <Container className="flex flex-wrap items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex w-full items-center lg:w-1/2"
        >
          <div className="max-w-2xl text-center lg:text-left">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Freeways GmbH
            </div>
            <h1 className="mt-4 text-4xl font-semibold leading-snug tracking-tight text-foreground sm:text-5xl lg:text-5xl xl:text-6xl">
              Zuverlässiger Liefer- & Logistikservice in NRW
            </h1>
            <p className="py-5 text-lg leading-normal text-muted-foreground lg:text-xl">
              Freeways GmbH ist Ihr professioneller Partner für Essenslieferung, Kurier- und Logistikdienstleistungen in Nordrhein-Westfalen.
            </p>
            <div className="flex flex-col items-center space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 sm:justify-start">
              <Button size="lg" asChild>
                <a href="#kontakt">Jetzt anfragen</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/4922346808219" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="premium-card overflow-hidden">
            <Image
              src="/images/hero_crew.png"
              alt="Freeways Team im Einsatz"
              width={640}
              height={640}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
