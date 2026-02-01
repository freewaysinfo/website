import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { NRWMap } from "@/components/NRWMap";
import { CareerSection } from "@/components/CareerSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServiceGrid />
      <NRWMap />
      <CareerSection />
      <ContactSection />
    </main>
  );
}
