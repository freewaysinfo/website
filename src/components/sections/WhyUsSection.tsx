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
    <section id="vorteile" className="py-16 md:py-28 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            Warum Freeways?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                className="flex items-start space-x-4 p-6 bg-white rounded-xl"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
