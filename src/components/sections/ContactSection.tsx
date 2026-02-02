'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: ['Wipperfürther Str. 29–31', '51103 Köln'],
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: ['02234 6808219'],
      link: 'tel:+4922346808219',
    },
    {
      icon: Mail,
      title: 'E-Mail',
      content: ['info@freeways-gmbh.de'],
      link: 'mailto:info@freeways-gmbh.de',
    },
  ];

  return (
    <section id="kontakt" className="py-16 md:py-28 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            Kontakt
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nehmen Sie Kontakt mit uns auf – wir freuen uns auf Ihre Anfrage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="text-gray-600">
                  {info.link ? (
                    <a
                      href={info.link}
                      className="hover:text-emerald-600 transition-colors"
                    >
                      {info.content.map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </a>
                  ) : (
                    info.content.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
