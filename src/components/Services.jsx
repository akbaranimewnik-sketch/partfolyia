import React from 'react';
import { Briefcase, Code, Smartphone, Cpu, Gauge, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code: Code,
  Smartphone: Smartphone,
  Cpu: Cpu,
  Gauge: Gauge,
};

export default function Services() {
  const { services } = portfolioData;

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            Xizmatlar
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Men Taklif Qiladigan Xizmatlar
          </h2>
          <p className="text-slate-400 text-base">
            G'oyalaringizni professional dasturiy va vizual yechimlar bilan hayotga tatbiq etish
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code;
            return (
              <div
                key={index}
                className="p-7 rounded-3xl neu-flat hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl neu-inset-sm flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <div className="w-5 h-5 rounded-md neu-inset-sm flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Sifatli natija</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
