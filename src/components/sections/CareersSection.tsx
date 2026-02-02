'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const CareersSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/4922346808219', '_blank');
  };

  return (
    <section id="karriere" className="py-sectionMobile md:py-sectionDesktop bg-muted scroll-mt-24 section-frame">
      <SectionTitle preTitle="Karriere" title="Fahrer (m/w/d) gesucht – Jetzt bewerben">
        Werden Sie Teil unseres Teams! Wir suchen motivierte Fahrer für flexible Einsätze in ganz NRW. Faire Bezahlung, moderne Fahrzeuge und ein professionelles Arbeitsumfeld warten auf Sie.
      </SectionTitle>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border bg-background px-6 py-6 md:px-10"
        >
          <div>
            <div className="text-sm font-semibold text-muted-foreground">Tel: 02234 6808219</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
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
        </motion.div>
      </Container>
    </section>
  );
};
