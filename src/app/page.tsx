import dynamic from "next/dynamic";
import { Navbar } from "@/components/freeways/Navbar";
import { Hero } from "@/components/freeways/Hero";
import { Footer } from "@/components/freeways/Footer";

// Dynamic imports for improved performance
const Services = dynamic(() => import("@/components/freeways/Services").then((mod) => mod.Services));
const ServiceShowcase = dynamic(() => import("@/components/freeways/ServiceShowcase").then((mod) => mod.ServiceShowcase));
const Benefits = dynamic(() => import("@/components/freeways/Benefits").then((mod) => mod.Benefits));
const Careers = dynamic(() => import("@/components/freeways/Careers").then((mod) => mod.Careers));
const LocationsMap = dynamic(() => import("@/components/freeways/LocationsMap").then((mod) => mod.LocationsMap));
const Contact = dynamic(() => import("@/components/freeways/Contact").then((mod) => mod.Contact));

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
