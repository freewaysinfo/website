'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { motion } from 'framer-motion';
import { Truck, Package, Users } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Package,
      title: 'Essenslieferung',
      description: 'Schnelle und zuverlässige Lieferung von Speisen für Restaurants und Gastronomiebetriebe in ganz NRW.',
    },
    {
      icon: Truck,
      title: 'Kurier- & Expressdienste',
      description: 'Professionelle Kurierdienste für zeitkritische Sendungen und Expresslieferungen innerhalb kürzester Zeit.',
    },
    {
      icon: Users,
      title: 'Logistik & Fahrerbereitstellung',
      description: 'Umfassende Logistiklösungen und qualifizierte Fahrer für Ihre individuellen Anforderungen.',
    },
  ];

  return (
    <section id="leistungen" className="py-16 md:py-28 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professionelle Lösungen für alle Ihre Liefer- und Logistikbedürfnisse
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-emerald-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
