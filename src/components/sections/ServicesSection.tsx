'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { motion } from 'framer-motion';
import { Truck, Package, Users } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Package,
      title: 'Essenslieferung',
      description: 'Schnelle und zuverlässige Lieferung von Speisen für Restaurants und Gastronomiebetriebe in ganz NRW.',
      image: '/images/service-gastronomy.png',
    },
    {
      icon: Truck,
      title: 'Kurier- & Expressdienste',
      description: 'Professionelle Kurierdienste für zeitkritische Sendungen und Expresslieferungen innerhalb kürzester Zeit.',
      image: '/images/service-express.png',
    },
    {
      icon: Users,
      title: 'Logistik & Fahrerbereitstellung',
      description: 'Umfassende Logistiklösungen und qualifizierte Fahrer für Ihre individuellen Anforderungen.',
      image: '/images/service-logistics.png',
    },
  ];

  return (
    <section id="leistungen" className="py-sectionMobile md:py-sectionDesktop bg-background scroll-mt-24">
      <Container>
        <div className="text-center mb-12">
          <span className="section-badge">Leistungen</span>
          <h2 className="section-title">Unsere Leistungen</h2>
          <p className="section-subtitle">
            Professionelle Lösungen für alle Ihre Liefer- und Logistikbedürfnisse
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="premium-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl">
                  <div className="grid gap-0 lg:grid-cols-[1.2fr_1fr]">
                    <div className="relative h-56 lg:h-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="flex h-full flex-col justify-between p-8">
                      <div>
                        <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="mt-6 text-sm font-semibold text-primary">
                        Mehr erfahren →
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
