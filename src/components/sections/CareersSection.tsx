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
    <section id="karriere" className="py-sectionMobile md:py-sectionDesktop bg-muted">
      <Container className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6">
            Fahrer (m/w/d) gesucht – Jetzt bewerben
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
            Werden Sie Teil unseres Teams! Wir suchen motivierte Fahrer für flexible Einsätze in ganz NRW. Faire Bezahlung, moderne Fahrzeuge und ein professionelles Arbeitsumfeld warten auf Sie.
          </p>
          <Button
            size="lg"
            variant="accent"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Jetzt per WhatsApp bewerben</span>
          </Button>
          <p className="mt-4 text-muted-foreground text-sm">
            Tel: 02234 6808219
          </p>
        </motion.div>
      </Container>
    </section>
  );
};
