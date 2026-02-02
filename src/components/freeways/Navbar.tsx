"use client";

import { Container } from "@/components/layout/Container";
import { Stack } from "@/components/layout/Stack";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-(--brand-border)">
      <Container>
        <Stack direction="row" align="center" justify="between" className="h-16 md:h-20">
          <Link href="/" className="text-xl md:text-2xl font-bold text-(--brand-dark) hover:text-(--brand-green) transition-colors">
            {siteConfig.name}
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#services" className="text-sm font-medium hover:text-(--brand-green) transition-colors">Leistungen</Link>
            <Link href="/#warum-wir" className="text-sm font-medium hover:text-(--brand-green) transition-colors">Vorteile</Link>
            <Link href="/#karriere" className="text-sm font-medium hover:text-(--brand-green) transition-colors">Karriere</Link>
            <Button variant="outline" size="sm" asChild>
              <a href={siteConfig.contact.phoneUrl}>{siteConfig.contact.phone}</a>
            </Button>
            <Button size="sm" className="bg-(--brand-green) hover:bg-(--brand-green)/90 text-white" asChild>
              <Link href="/#kontakt">Anfragen</Link>
            </Button>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </Stack>
      </Container>
    </header>
  );
}
