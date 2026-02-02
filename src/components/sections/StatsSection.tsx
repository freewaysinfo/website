'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';

export const StatsSection: React.FC = () => {
  const stats = [
    { value: '50+', label: 'Fahrer' },
    { value: 'NRW-weit', label: 'Aktiv' },
    { value: '7 Tage', label: 'Die Woche' },
  ];

  return (
    <section className="py-14 md:py-20 bg-accent scroll-mt-24">
      <Container>
        <div className="rounded-3xl border border-accent-foreground/10 bg-accent/90 px-6 py-10 md:px-12 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 md:divide-x md:divide-accent-foreground/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center md:px-6"
            >
              <div className="text-4xl md:text-5xl font-black text-accent-foreground mb-3">
                {stat.value}
              </div>
              <Badge variant="secondary" className="text-xs md:text-sm font-semibold uppercase tracking-wider bg-background/90 text-foreground">
                {stat.label}
              </Badge>
            </motion.div>
          ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
