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
    <Section className="bg-white py-16 md:py-24">
      <Container>
        <div className="relative h-[450px] md:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 ring-4 ring-gray-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
              />
              {/* Overlay Gradient - Refined for light mode context but keeping internal text dark/glassy */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end z-10">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl text-white"
            >
              <span className="text-(--brand-yellow) font-bold text-sm uppercase tracking-[0.3em] mb-4 block text-glow-gold">
                Visual Excellence
              </span>
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-none">
                {slides[currentIndex].title}
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed font-medium max-w-lg">
                {slides[currentIndex].description}
              </p>
            </motion.div>

            {/* Controls */}
            <div className="absolute bottom-10 right-10 flex items-center gap-6 bg-white/10 backdrop-blur-2xl p-3 rounded-3xl border border-white/20 shadow-2xl">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer group active:scale-90"
                aria-label="Vorheriges Bild"
              >
                <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </button>
              <div className="flex items-center gap-2 px-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      currentIndex === i ? "w-10 bg-(--brand-yellow)" : "w-2 bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Gehe zu Bild ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer group active:scale-90"
                aria-label="Nächstes Bild"
              >
                <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
