import { Navbar } from "@/components/freeways/Navbar";
import { Hero } from "@/components/freeways/Hero";
import { Services } from "@/components/freeways/Services";
import { Benefits } from "@/components/freeways/Benefits";
import { Careers } from "@/components/freeways/Careers";
import { Contact } from "@/components/freeways/Contact";
import { ServiceShowcase } from "@/components/freeways/ServiceShowcase";
import { LocationsMap } from "@/components/freeways/LocationsMap";
import { Footer } from "@/components/freeways/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <Hero />
        <Services />
        <ServiceShowcase />
        <Benefits />
        <Careers />
        <LocationsMap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
