'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-background py-sectionMobile md:py-sectionDesktop scroll-mt-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 items-center lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="text-center lg:text-left">
            <span className="section-badge">Freeways GmbH</span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground leading-[1.1]">
              Zuverlässiger Liefer- & Logistikservice in NRW
            </h1>
            <p className="mt-5 text-base md:text-lg max-w-2xl leading-relaxed">
              Freeways GmbH ist Ihr professioneller Partner für Essenslieferung, Kurier- und Logistikdienstleistungen in Nordrhein-Westfalen.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
          <div className="premium-card overflow-hidden">
            <Image
              src="/images/hero_crew.png"
              alt="Freeways Team im Einsatz"
              width={960}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
