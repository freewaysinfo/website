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
    <section className="py-12 md:py-16 bg-muted scroll-mt-24 section-frame">
      <Container>
        <div className="rounded-2xl border border-border bg-background px-6 py-8 md:px-10 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 md:divide-x md:divide-border">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center md:px-6"
            >
              <div className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
                {stat.value}
              </div>
              <Badge variant="secondary" className="text-xs md:text-sm font-semibold uppercase tracking-wider">
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
