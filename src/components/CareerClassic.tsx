import React from 'react';
import { SectionContainer } from './SectionContainer';
import { Euro, Clock, Truck, Check } from 'lucide-react';

const benefits = [
   {
      icon: Euro,
      title: 'Top Gehalt',
      desc: 'Faire Bezahlung, pünktlich auf dem Konto. Wir schätzen Ihre Arbeit wert.'
   },
   {
      icon: Clock,
      title: 'Flexibilität',
      desc: 'Moderne Schichtplanung per App. Arbeit, die zu Ihrem Leben passt.'
   },
   {
      icon: Truck,
      title: 'Top Flotte',
      desc: 'Neueste Fahrzeuge von Mercedes-Benz. Sicher und komfortabel unterwegs.'
   }
];

export const CareerClassic = () => {
  return (
    <SectionContainer id="career" className="bg-white">
       <div className="bg-emerald-900 rounded-[3rem] p-12 lg:p-24 text-center overflow-hidden relative">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
             <h2 className="text-sm font-bold text-emerald-300 uppercase tracking-widest mb-6">Karriere bei Freeways</h2>
             <h3 className="text-4xl lg:text-6xl font-black text-white mb-16">
               Mehr als nur <br/> ein Job.
             </h3>

             <div className="grid md:grid-cols-3 gap-8 mb-16">
                {benefits.map((b, i) => (
                   <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-left hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
                         <b.icon className="text-emerald-400" size={24} />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{b.title}</h4>
                      <p className="text-emerald-100/70 font-medium leading-relaxed text-sm">
                         {b.desc}
                      </p>
                   </div>
                ))}
             </div>

             <button className="bg-white text-emerald-900 px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-black/20">
                Jetzt bewerben
             </button>
             <p className="mt-6 text-emerald-200/60 text-sm font-bold">Dauer: 2 Minuten • Keine Dokumente nötig</p>
          </div>
       </div>
    </SectionContainer>
  );
};
