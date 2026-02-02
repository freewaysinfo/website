'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { motion } from 'framer-motion';
import { Award, Car, MapPin, CheckCircle } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

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
    <section id="vorteile" className="py-sectionMobile md:py-sectionDesktop bg-muted scroll-mt-24 section-frame">
      <SectionTitle preTitle="Vorteile" title="Warum Freeways?">
        Ihre Vorteile bei der Zusammenarbeit mit uns
      </SectionTitle>
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="premium-card flex items-start space-x-4 p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
