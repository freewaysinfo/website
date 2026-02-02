'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const CareersSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/4922346808219', '_blank');
  };

  return (
    <section id="karriere" className="py-16 md:py-28 bg-amber-400">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Fahrer (m/w/d) gesucht
          </h2>
          <p className="text-lg md:text-xl text-gray-800 mb-10 leading-relaxed">
            Werden Sie Teil unseres Teams! Wir suchen motivierte Fahrer für flexible Einsätze in ganz NRW. Faire Bezahlung, moderne Fahrzeuge und ein professionelles Arbeitsumfeld warten auf Sie.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Jetzt per WhatsApp bewerben</span>
          </Button>
          <p className="mt-4 text-gray-700 text-sm">
            Tel: 02234 6808219
          </p>
        </motion.div>
      </Container>
    </section>
  );
};
