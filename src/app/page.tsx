import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { CareerSection } from "@/components/CareerSection";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="services">
        <ServiceGrid />
      </div>
      <CareerSection />
    </>
  );
}
