"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
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
    <Section className="bg-(--brand-light) py-0 overflow-hidden">
      <div className="relative h-[600px] md:h-[800px] w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
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
            <div className="absolute inset-0 bg-linear-to-t from-(--brand-dark) via-(--brand-dark)/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <Container className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-white"
          >
            <span className="text-(--brand-yellow) font-bold text-sm uppercase tracking-widest mb-4 block">
              Freeways Performance
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {slides[currentIndex].title}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {slides[currentIndex].description}
            </p>
          </motion.div>

          {/* Controls */}
          <div className="absolute bottom-10 right-10 flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-(--brand-dark) transition-all cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-(--brand-dark) transition-all cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="ml-4 flex items-center gap-2">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 transition-all duration-300 ${
                    currentIndex === i ? "w-8 bg-(--brand-yellow)" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
