import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Navbar } from "@/components/freeways/Navbar";
import { Footer } from "@/components/freeways/Footer";

export default function Datenschutz() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Section>
          <Container className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-10">Datenschutzerklärung</h1>
            
            <div className="space-y-8 text-white/70">
              <section>
                <h2 className="text-xl font-bold text-white mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="font-bold mb-2 text-white">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">2. Hosting und Content Delivery Networks (CDN)</h2>
                <p>Wir hosten unsere Website bei Vercel. Anbieter ist die Vercel Inc., 440 N Barranca Ave #4133 Covina, CA 91723, USA.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">4. Datenerfassung auf dieser Website</h2>
                <h3 className="font-bold mb-2 text-white">Kontaktformular / E-Mail / Telefon</h3>
                <p>
                  Wenn Sie uns per Kontaktformular, E-Mail oder Telefon Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">5. Ihre Rechte</h2>
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                </p>
              </section>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
