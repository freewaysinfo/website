'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { motion } from 'framer-motion';

export const StatsSection: React.FC = () => {
  const stats = [
    { value: '50+', label: 'Fahrer' },
    { value: 'NRW-weit', label: 'Aktiv' },
    { value: '7 Tage', label: 'Die Woche' },
  ];

  return (
    <section className="py-16 md:py-20 bg-emerald-600">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-black text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg md:text-xl text-emerald-100 font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
