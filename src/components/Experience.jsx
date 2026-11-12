import React from 'react';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-amber-400 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            Faoliyat
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ta'lim & Bosqichlar
          </h2>
          <p className="text-slate-400 text-base">
            Dasturlash sohasidagi mustahkam ta'lim va tamomlangan amaliy bosqichlarim
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-36 space-y-12">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-8 sm:pl-10 group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[13px] top-3 w-6 h-6 rounded-full neu-circle border-2 border-sky-400/80 group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              </div>

              {/* Date Box for larger screens */}
              <div className="hidden sm:block absolute -left-40 top-2.5 text-right w-28">
                <span className="text-xs font-mono font-bold text-sky-400 neu-inset-sm px-3 py-1.5 rounded-xl inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>
              </div>

              {/* Neumorphic Content Card */}
              <div className="p-7 sm:p-8 rounded-3xl neu-flat hover:-translate-y-1 transition-all duration-300 space-y-4">
                <span className="sm:hidden text-xs font-mono font-bold text-sky-400 neu-inset-sm px-3 py-1 rounded-lg inline-flex items-center gap-1.5 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.role}
                  </h3>
                  <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold neu-inset-sm text-slate-300">
                    {item.company}
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-xl text-xs font-semibold neu-inset-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
