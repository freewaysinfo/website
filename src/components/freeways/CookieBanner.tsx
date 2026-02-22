"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookies_accepted");
    if (hasAccepted) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const acceptCookies = () => {
    localStorage.setItem("cookies_accepted", "true");
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-100 bg-(--brand-anthracite)/95 backdrop-blur-xl border-t border-white/10 p-4 md:p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 pr-8 relative">
          <p className="text-white/80 text-sm md:text-base pr-4">
            Wir verwenden Cookies, um unsere Website und unseren Service zu optimieren. 
            Weitere Informationen finden Sie in unserer{" "}
            <a href="/datenschutz" className="text-(--brand-green) hover:underline font-bold">
              Datenschutzerklärung
            </a>
            .
          </p>
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 right-0 md:hidden text-white/50 hover:text-white"
            aria-label="Cookie Banner schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex w-full md:w-auto gap-4">
          <Button 
            variant="outline" 
            onClick={() => setIsVisible(false)}
            className="flex-1 md:flex-none bg-white/5 border-white/10 text-white hover:bg-white/10"
          >
            Ablehnen
          </Button>
          <Button 
            onClick={acceptCookies}
            className="flex-1 md:flex-none bg-(--brand-green) hover:bg-(--brand-green)/90 text-black font-bold border-none glow-green pl-6 pr-6"
          >
            Alle akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
}
