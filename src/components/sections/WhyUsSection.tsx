'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { motion } from 'framer-motion';
import { Award, Car, MapPin, CheckCircle } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Erfahrenes Team',
      description: 'Unser professionelles Team verfügt über langjährige Erfahrung in der Logistikbranche.',
    },
    {
      icon: Car,
      title: 'Moderne Fahrzeuge',
      description: 'Wir setzen auf eine moderne und gepflegte Fahrzeugflotte für zuverlässige Lieferungen.',
    },
    {
      icon: MapPin,
      title: 'NRW-weiter Einsatz',
      description: 'Wir sind in ganz Nordrhein-Westfalen für Sie im Einsatz – schnell und zuverlässig.',
    },
    {
      icon: CheckCircle,
      title: 'Strukturierte Abläufe',
      description: 'Klare Prozesse und professionelle Organisation garantieren reibungslose Abwicklung.',
    },
  ];

  return (
    <section id="vorteile" className="py-sectionMobile md:py-sectionDesktop bg-brand-light">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
            Warum Freeways?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Ihre Vorteile bei der Zusammenarbeit mit uns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-background rounded-xl border border-brand-border"
              >
                <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
