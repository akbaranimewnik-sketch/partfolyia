import React from 'react';
import { ArrowDown, Mail, ExternalLink, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TelegramIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Soft Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            
            {/* Status Pill with Neumorphic Inset */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full neu-inset text-xs font-semibold text-slate-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
              </span>
              <span>{personal.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Salom, men <br className="hidden sm:inline" />
              <span className="gradient-text">{personal.name}</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-300 flex items-center justify-center lg:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg neu-inset-sm flex items-center justify-center text-sky-400">
                <Sparkles className="w-4 h-4" />
              </div>
              {personal.role}
            </h2>

            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personal.bio}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-2xl font-bold text-sm text-white neu-btn-primary flex items-center gap-2.5"
              >
                Loyihalarni ko'rish
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-2xl font-bold text-sm text-slate-300 hover:text-white neu-btn flex items-center gap-2.5"
              >
                Bog'lanish
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-3.5">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold mr-1">
                Tarmoqlar:
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 neu-circle flex items-center justify-center text-slate-300 hover:text-white"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.telegram}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 neu-circle flex items-center justify-center text-slate-300 hover:text-sky-400"
                title="Telegram"
              >
                <TelegramIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 neu-circle flex items-center justify-center text-slate-300 hover:text-indigo-400"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-11 h-11 neu-circle flex items-center justify-center text-slate-300 hover:text-purple-400"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Neumorphic Code Preview Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-3xl neu-flat-lg p-3 relative group">
              
              {/* Inner Inset Shell */}
              <div className="rounded-2xl neu-inset overflow-hidden p-5 space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 neu-btn inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 neu-btn inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 neu-btn inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    <span>JaloliddinProfile.jsx</span>
                  </div>
                  <div className="w-10"></div>
                </div>

                {/* Code Body */}
                <div className="font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300 space-y-1.5">
                  <p>
                    <span className="text-purple-400 font-semibold">const</span>{' '}
                    <span className="text-sky-300">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">"Jaloliddin"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">birthDate:</span>{' '}
                    <span className="text-emerald-300">"2013-08-04"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">foundation:</span> [
                    <span className="text-amber-300">'C++'</span>,{' '}
                    <span className="text-amber-300">'Python'</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">frontend:</span> [
                    <span className="text-amber-300">'HTML'</span>,{' '}
                    <span className="text-amber-300">'CSS'</span>,{' '}
                    <span className="text-amber-300">'JS'</span>,{' '}
                    <span className="text-amber-300">'React'</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">styling:</span>{' '}
                    <span className="text-emerald-300">"Tailwind CSS"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">status:</span>{' '}
                    <span className="text-sky-300">"Foundation & Frontend Done"</span>
                  </p>
                  <p>&#125;;</p>
                </div>

                {/* Badges */}
                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-xl neu-btn text-sky-400 font-medium">
                    ⚛️ React
                  </span>
                  <span className="px-3 py-1 rounded-xl neu-btn text-indigo-400 font-medium">
                    🐍 Python
                  </span>
                  <span className="px-3 py-1 rounded-xl neu-btn text-purple-400 font-medium">
                    ⚙️ C++
                  </span>
                  <span className="px-3 py-1 rounded-xl neu-btn text-cyan-400 font-medium">
                    🎨 Tailwind
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
