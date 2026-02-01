import React from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container-custom pt-32 pb-20">
        <h1 className="text-4xl font-bold text-zinc-900 mb-12">Impressum</h1>
        
        <div className="space-y-8 text-zinc-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-sm">Angaben gemäß § 5 TMG</h2>
            <p>
              Freeways GmbH<br />
              Wipperfürther Str. 29–31<br />
              51103 Köln
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-sm">Vertreten durch</h2>
            <p>Geschäftsführung: [Name einfügen]</p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-sm">Kontakt</h2>
            <p>
              Telefon: 02234 6808219<br />
              E-Mail: info@freeways.de
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-sm">Registereintrag</h2>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Köln<br />
              Registernummer: [Nummer einfügen]
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-sm">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              [ID einfügen]
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-sm">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              [Name einfügen]<br />
              Wipperfürther Str. 29–31<br />
              51103 Köln
            </p>
          </section>
          
          <section className="pt-8 border-t border-zinc-100">
             <p className="text-sm">
                Hinweis: Die Freeways GmbH übernimmt keine Haftung für die Inhalte externer Links. 
                Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
             </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
