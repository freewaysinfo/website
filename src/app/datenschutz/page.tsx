import React from 'react';

export default function Datenschutz() {
  return (
    <div className="min-h-screen pt-40 pb-24 px-safe max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter text-emerald-deep uppercase">Datenschutz</h1>
      
      <div className="space-y-16 text-emerald-deep/60 leading-relaxed font-medium">
        <section>
          <h2 className="text-xs font-bold text-emerald-deep mb-6 uppercase tracking-[0.3em] opacity-40">1. Datenschutz auf einen Blick</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-emerald-deep font-bold mb-2">Allgemeine Hinweise</h3>
              <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
            </div>
            
            <div>
              <h3 className="text-emerald-deep font-bold mb-2">Verantwortliche Stelle</h3>
              <p className="text-emerald-deep">
                Freeways GmbH<br />
                Mohamad Hasan<br />
                Wipperfürther Str. 29–31<br />
                D-51103 Köln<br />
                E-Mail: info@freeways.de
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-bold text-emerald-deep mb-6 uppercase tracking-[0.3em] opacity-40">2. Hosting & Infrastructure</h2>
          <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
          <p className="text-emerald-deep font-bold mt-4">Vercel Inc.</p>
          <p className="text-sm">440 N Barranca Ave #4133, Covina, CA 91723, USA.</p>
        </section>

        <section>
          <h2 className="text-xs font-bold text-emerald-deep mb-6 uppercase tracking-[0.3em] opacity-40">3. Allgemeine Pflichtinformationen</h2>
          <div className="space-y-4">
            <h3 className="text-emerald-deep font-bold mb-2">Datenschutz</h3>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften.</p>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-bold text-emerald-deep mb-6 uppercase tracking-[0.3em] opacity-40">4. Datenerfassung</h2>
          <div className="space-y-4">
            <h3 className="text-emerald-deep font-bold mb-2">Technologie</h3>
            <p>Unsere Internetseiten verwenden moderne Web-Technologien zur Bereitstellung einer optimalen User Experience. Dabei werden technisch notwendige Daten verarbeitet.</p>
          </div>
        </section>

        <section className="pt-12 border-t border-border">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30">Hinweis: Dies ist eine verkürzte Darstellung für Demonstrationszwecke.</p>
        </section>
      </div>
    </div>
  );
}
