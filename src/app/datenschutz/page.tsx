import React from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container-custom pt-32 pb-20">
        <h1 className="text-4xl font-bold text-zinc-900 mb-12">Datenschutzerklärung</h1>
        
        <div className="space-y-8 text-zinc-600 leading-relaxed max-w-4xl">
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-sm">1. Datenschutz auf einen Blick</h2>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen 
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-sm">2. Datenerfassung auf unserer Website</h2>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <p className="mt-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
              Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-sm">3. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die 
              Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-sm">4. Analyse-Tools und Tools von Drittanbietern</h2>
            <p>
              Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. 
              Das erfolgt vor allem mit Cookies und mit sogenannten Analyseprogrammen.
            </p>
          </section>
          
          <section>
             <h2 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider text-sm">5. Kontaktformular</h2>
             <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                wir nicht ohne Ihre Einwilligung weiter.
             </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
