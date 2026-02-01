'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Users, Zap } from 'lucide-react';

const services = [
  {
    title: "Essenslieferung",
    description: "Professionelle und pünktliche Lieferung von warmen Speisen direkt zum Kunden – zuverlässig und effizient.",
    icon: Truck,
  },
  {
    title: "Kurier- & Expressdienste",
    description: "Flexible Kurierlösungen für Unternehmen und Partner in ganz NRW – schnell, sicher und termingerecht.",
    icon: Zap,
  },
  {
    title: "Logistik & Fahrerbereitstellung",
    description: "Bereitstellung geschulter Fahrer und geeigneter Fahrzeuge für Plattformen, Unternehmen und Großkunden.",
    icon: Users,
  }
];

export const ServiceGrid = () => {
  return (
    <section className="py-20 px-6 bg-[#f8f9fa]">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-start gap-6 hover:shadow-md transition-shadow"
          >
            <div className="p-3 rounded-xl bg-gray-50 text-black shrink-0">
              <service.icon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2 text-black">{service.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
