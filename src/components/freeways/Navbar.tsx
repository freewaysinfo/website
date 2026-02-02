"use client";

import { Container } from "@/components/layout/Container";
import { Stack } from "@/components/layout/Stack";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-(--brand-anthracite)/90 backdrop-blur-xl border-b border-white/5 shadow-2xl">
      <Container>
        <Stack direction="row" align="center" justify="between" className="h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
            <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-105">
              <Image 
                src="/images/logo.png" 
                alt="Freeways GmbH Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {siteConfig.name}
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#services" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">Leistungen</Link>
            <Link href="/#warum-wir" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">Vorteile</Link>
            <Link href="/#karriere" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">Karriere</Link>
            
            <div className="h-6 w-px bg-white/10 mx-2" />

            <Link href={siteConfig.contact.phoneUrl} className="text-sm font-bold text-white hover:text-(--brand-yellow) transition-colors">
              {siteConfig.contact.phone}
            </Link>

            <Button size="sm" className="bg-(--brand-green) hover:bg-(--brand-green)/90 text-white rounded-full px-6 font-bold glow-green border-none" asChild>
              <Link href="/#kontakt">Anfragen</Link>
            </Button>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
            <Menu className="h-6 w-6" />
          </Button>
        </Stack>
      </Container>
    </header>
  );
}
