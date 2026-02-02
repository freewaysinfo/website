'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const CareersSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/4922346808219', '_blank');
  };

  return (
    <section id="karriere" className="py-sectionMobile md:py-sectionDesktop bg-muted scroll-mt-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 items-center lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Karriere
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6">
              Fahrer (m/w/d) gesucht – Jetzt bewerben
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Werden Sie Teil unseres Teams! Wir suchen motivierte Fahrer für flexible Einsätze in ganz NRW. Faire Bezahlung, moderne Fahrzeuge und ein professionelles Arbeitsumfeld warten auf Sie.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="accent"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Jetzt per WhatsApp bewerben</span>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+4922346808219">Telefonisch melden</a>
              </Button>
            </div>
            <p className="mt-4 text-muted-foreground text-sm">
              Tel: 02234 6808219
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-background p-8 shadow-xl">
            <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Ihr Einstieg bei Freeways
            </div>
            <div className="mt-6 grid gap-4 text-sm text-foreground">
              <div className="flex items-center justify-between rounded-xl border border-border bg-muted px-4 py-3">
                <span>Onboarding</span>
                <span className="text-muted-foreground">2 Tage</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border bg-muted px-4 py-3">
                <span>Einsätze</span>
                <span className="text-muted-foreground">flexibel</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border bg-muted px-4 py-3">
                <span>Kontakt</span>
                <span className="text-muted-foreground">direkt per WhatsApp</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
