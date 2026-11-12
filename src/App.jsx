import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1b1f27] text-slate-100 antialiased selection:bg-sky-500 selection:text-white">
      {/* Floating Neumorphic Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="space-y-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
