import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TelegramIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-12 pb-16 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl neu-btn flex items-center justify-center text-sky-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-white tracking-tight">
                Jaloliddin<span className="text-sky-400">.dev</span>
              </p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                &copy; {new Date().getFullYear()} Jaloliddin. Barcha huquqlar himoyalangan.
              </p>
            </div>
          </div>

          {/* Socials & Scroll to Top */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 neu-circle flex items-center justify-center text-slate-400 hover:text-white"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.telegram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 neu-circle flex items-center justify-center text-slate-400 hover:text-sky-400"
                title="Telegram"
              >
                <TelegramIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 neu-circle flex items-center justify-center text-slate-400 hover:text-indigo-400"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Scroll To Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 neu-circle flex items-center justify-center text-slate-300 hover:text-sky-400 cursor-pointer"
              title="Yuqoriga qaytish"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
