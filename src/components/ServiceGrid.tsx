import React from 'react';
import { Zap, Utensils, Users, LucideIcon } from 'lucide-react';

interface ServiceItem {
  title: string;
  desc: string;
  Icon: LucideIcon;
  color: string;
}

const serviceList: ServiceItem[] = [
  {
    title: 'Essenslieferung',
    desc: 'Professionelle und pünktliche Lieferung von warmen Speisen direkt zum Kunden – zuverlässig und effizient.',
    Icon: Utensils,
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    title: 'Kurier- & Expressdienste',
    desc: 'Flexible Kurierlösungen für Unternehmen und Partner in ganz NRW – schnell, sicher und termingerecht.',
    Icon: Zap,
    color: 'bg-amber-50 text-amber-600'
  },
  {
    title: 'Logistik & Fahrerbereitstellung',
    desc: 'Bereitstellung geschulter Fahrer und geeigneter Fahrzeuge für Plattformen, Unternehmen und Großkunden.',
    Icon: Users,
    color: 'bg-blue-50 text-blue-600'
  }
];

export const ServiceGrid: React.FC = () => {
  return (
    <section id="leistungen" className="container mx-auto px-6 py-24">
      <div className="text-center mb-20">
        <h2 className="text-amber-500 font-black uppercase tracking-[0.3em] text-xs mb-4">Was wir tun</h2>
        <h3 className="text-4xl lg:text-5xl font-black mb-6 text-zinc-900">Unsere <span className="text-emerald-600">Kernkompetenzen.</span></h3>
        <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-medium">
          Wir decken das gesamte Spektrum der modernen Last-Mile-Logistik ab.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {serviceList.map((service, idx) => (
          <div 
            key={idx} 
            className="group p-10 rounded-[2.5rem] bg-white border border-zinc-100 hover:border-emerald-200 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-600/5 cursor-default flex flex-col items-center text-center"
          >
            <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 ${service.color} transition-all group-hover:scale-110 shadow-sm`}>
              {/* Fix: Render the Icon component directly with the size prop to resolve TypeScript overload mismatch in cloneElement */}
              <service.Icon size={36} />
            </div>
            <h4 className="text-2xl font-black mb-4 text-zinc-900 group-hover:text-emerald-600 transition-colors">{service.title}</h4>
            <p className="text-zinc-500 leading-relaxed font-medium">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
