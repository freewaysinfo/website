"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/showcase_food.png",
    title: "Premium Food Delivery",
    description: "Höchste Standards für Gastronomie und Cloud Kitchens.",
  },
  {
    image: "/images/showcase_courier.png",
    title: "Urbane Express-Logistik",
    description: "Schnell, diskret und effizient – auch auf der 'letzten Meile'.",
  },
  {
    image: "/images/showcase_logistics.png",
    title: "Moderne Logistik-Hubs",
    description: "Organisierte Prozesse für Ihren Erfolg in ganz NRW.",
  },
  {
    image: "/images/showcase_fleet.png",
    title: "Einsatzbereite Flotte",
    description: "24/7 Zuverlässigkeit mit modernsten Fahrzeugtransportern.",
  },
];

export function ServiceShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section className="bg-white py-12">
      <Container>
        <div className="relative h-[400px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-(--brand-border)/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                fill
                className="object-cover"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-(--brand-dark)/90 via-(--brand-dark)/20 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-10">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-xl text-white"
            >
              <span className="text-(--brand-yellow) font-bold text-xs uppercase tracking-widest mb-2 block">
                Visual Showcase
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {slides[currentIndex].title}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {slides[currentIndex].description}
              </p>
            </motion.div>

            {/* Controls */}
            <div className="absolute bottom-8 right-8 flex items-center gap-4 bg-black/20 backdrop-blur-md p-2 rounded-full border border-white/10">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-(--brand-dark) transition-all cursor-pointer"
                aria-label="Vorheriges Bild"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-1.5 px-1">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      currentIndex === i ? "w-6 bg-(--brand-yellow)" : "w-1.5 bg-white/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-(--brand-dark) transition-all cursor-pointer"
                aria-label="Nächstes Bild"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
