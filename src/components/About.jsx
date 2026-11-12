import React from 'react';
import { User, Award, CheckCircle, Flame, Rocket, HeartHandshake, Code2, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: Terminal,
      title: "Foundation Asoslari",
      desc: "C++ va Python yordamida chuqur mantiqiy fikrlash, algoritmlar va ma'lumotlar tuzilmasi.",
      iconColor: "text-indigo-400"
    },
    {
      icon: Code2,
      title: "Frontend & React",
      desc: "HTML5, CSS3, JavaScript va React.js asosida zamonaviy interaktiv interfeyslar yaratish.",
      iconColor: "text-sky-400"
    },
    {
      icon: Rocket,
      title: "Tez O'rganish & Intilish",
      desc: "Yangi texnologiyalar, eng so'nggi dasturlash trendlari va amaliy loyihalarga bo'lgan katta qiziqish.",
      iconColor: "text-emerald-400"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-sky-400 text-xs font-bold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            Ma'lumot
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Men Haqimda
          </h2>
          <p className="text-slate-400 text-base">
            Dasturlash olamida o'z qobiliyatimni mustahkam poydevor va zamonaviy texnologiyalar bilan rivojlantirib borayotgan yosh dasturchiman.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Bio & Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl neu-inset text-indigo-300 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Tug'ilgan sana: <strong className="text-white">2013-yil 4-avgust</strong> (13 yosh)</span>
            </div>

            <h3 className="text-2xl font-bold text-white leading-snug">
              Dasturlash — bu mantiq, ijodkorlik va cheksiz imkoniyatlar maydoni!
            </h3>
            
            <p className="text-slate-300 leading-relaxed text-base">
              Men Jaloliddinman. Dasturlash sohasiga qiziqishim juda erta boshlangan. Dastlabki bosqichda kompyuter fanlari va dasturlash poydevorini mustahkamlash maqsadida <strong>Foundation</strong> yo'nalishini (<strong>C++</strong> va <strong>Python</strong>) o'rganib chiqdim. Bu menga algoritmlar, ma'lumotlar tuzilmasi va muammolarni mantiqiy hal qilish bo'yicha kuchli baza berdi.
            </p>

            <p className="text-slate-400 leading-relaxed text-base">
              Keyinchalik <strong>Frontend</strong> olamiga qiziqib, <strong>HTML, CSS, JavaScript</strong> va zamonaviy <strong>React.js</strong> kutubxonasini, shuningdek, chiroyli dizaynlar uchun <strong>Tailwind CSS</strong> tizimini to'liq o'zlashtirdim va ko'plab amaliy loyihalarni yakunladim.
            </p>

            {/* Highlights Neumorphic Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="p-5 rounded-2xl neu-flat space-y-3">
                    <div className="w-10 h-10 rounded-xl neu-inset-sm flex items-center justify-center">
                      <IconComponent className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Stats Grid Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-5">
            {personal.stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl neu-flat text-center space-y-2 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto rounded-2xl neu-inset-sm flex items-center justify-center mb-3">
                  <Award className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold gradient-text block">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-slate-400 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
