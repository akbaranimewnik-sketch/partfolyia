import React from 'react';
import { Cpu, CheckCircle2, Flame, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            Salohiyat
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ko'nikmalar & Texnologiyalar
          </h2>
          <p className="text-slate-400 text-base">
            Foundation (C++, Python) va zamonaviy Frontend (React, JS, Tailwind) bo'yicha mustahkam bilimlarim
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((categoryGroup, index) => (
            <div
              key={index}
              className="p-7 sm:p-9 rounded-3xl neu-flat space-y-7"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl neu-inset-sm flex items-center justify-center text-sky-400">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {categoryGroup.category}
                </h3>
              </div>

              <div className="space-y-6">
                {categoryGroup.items.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2.5">
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <span className="font-bold text-slate-200">
                          {skill.name}
                        </span>
                        {skill.desc && (
                          <span className="text-xs text-slate-500 ml-2 hidden sm:inline">
                            ({skill.desc})
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-xs font-bold text-sky-400 neu-inset-sm px-2.5 py-1 rounded-lg">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Neumorphic Inset Progress Track */}
                    <div className="w-full h-3 rounded-full neu-inset-sm p-0.5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(56,189,248,0.4)]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Neumorphic Badges */}
        <div className="mt-14 p-8 rounded-3xl neu-flat text-center space-y-5">
          <p className="text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-400" />
            Amaliyotda faol qo'llanilgan vositalar
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "React 18",
              "Python 3",
              "C++",
              "Tailwind CSS",
              "JavaScript ES6+",
              "HTML5 & CSS3",
              "Algoritmlar",
              "Problem Solving",
              "Vite",
              "Git & GitHub",
              "Responsive Web"
            ].map((badge, bIdx) => (
              <span
                key={bIdx}
                className="px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-slate-300 neu-btn hover:text-sky-300 cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
