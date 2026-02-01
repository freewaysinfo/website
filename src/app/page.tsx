import { Hero } from "@/components/Hero";
import { ServiceNav } from "@/components/ServiceNav";
import { ServiceGrid } from "@/components/ServiceGrid";
import { CareerSection } from "@/components/CareerSection";
import { NRWFokus } from "@/components/NRWFokus";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServiceNav />
      <ServiceGrid />
      <NRWFokus />
      <CareerSection />
    </main>
  );
}
