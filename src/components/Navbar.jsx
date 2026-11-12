import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Asosiy', href: '#home' },
    { name: 'Men haqimda', href: '#about' },
    { name: 'Ko\'nikmalar', href: '#skills' },
    { name: 'Loyihalar', href: '#projects' },
    { name: 'Xizmatlar', href: '#services' },
    { name: 'Aloqa', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <nav className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
        scrolled 
          ? 'neu-flat py-3 px-5 sm:px-6' 
          : 'bg-[#1b1f27]/80 backdrop-blur-md py-4 px-4 sm:px-6'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl neu-btn flex items-center justify-center text-sky-400 group-hover:text-sky-300 transition-colors">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-sky-400 transition-colors">
              Jaloliddin<span className="text-sky-400">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1.5 p-1 rounded-2xl neu-inset-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-sky-400 hover:shadow-[inset_2px_2px_4px_rgba(11,14,18,0.7),inset_-2px_-2px_4px_rgba(46,56,72,0.3)] transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Button */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white neu-btn-primary"
            >
              Bog'lanish
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-xl neu-btn text-slate-300 hover:text-white"
              aria-label="Menyu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-slate-800/60 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-sky-400 neu-btn"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white neu-btn-primary"
              >
                Bog'lanish
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
