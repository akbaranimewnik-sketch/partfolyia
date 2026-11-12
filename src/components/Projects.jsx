import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Eye, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web App', 'Foundation', 'E-Commerce'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-purple-400 text-xs font-bold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mening Loyihalarim
          </h2>
          <p className="text-slate-400 text-base">
            Foundation (C++, Python) va Frontend (React, JS, Tailwind) yo'nalishlarida yaratilgan amaliy ishlarim
          </p>
        </div>

        {/* Neumorphic Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'neu-inset text-sky-400 border border-sky-500/20 shadow-[inset_4px_4px_8px_rgba(11,14,18,0.9),inset_-4px_-4px_8px_rgba(46,56,72,0.4)]'
                    : 'neu-btn text-slate-400 hover:text-white'
                }`}
              >
                {cat === 'All' ? 'Barchasi' : cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl neu-flat p-4 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Image with Inset border */}
              <div className="relative h-52 rounded-2xl overflow-hidden neu-inset-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay with Quick View Button */}
                <div className="absolute inset-0 bg-[#1b1f27]/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-11 h-11 neu-circle flex items-center justify-center text-white"
                    title="Batafsil ko'rish"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 neu-circle flex items-center justify-center text-sky-400"
                    title="Jonli Sayt (Demo)"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 neu-circle flex items-center justify-center text-purple-400"
                    title="GitHub Kodi"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-xl text-[11px] font-bold neu-flat-sm text-sky-400">
                    {project.category}
                  </span>
                </div>

                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-xl text-[11px] font-bold neu-flat-sm text-amber-300 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      Tanlangan
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-semibold text-slate-300 neu-inset-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-800/60">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      Demo Ko'rish
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for project details */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
            <div className="neu-flat-lg rounded-3xl max-w-2xl w-full p-4 overflow-hidden space-y-4">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden neu-inset-sm">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full neu-circle flex items-center justify-center text-white hover:text-rose-400 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-400 neu-inset-sm px-3 py-1 rounded-lg">
                    {selectedProject.category}
                  </span>
                  <div className="flex gap-2.5">
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl neu-btn-primary text-white text-xs font-bold flex items-center gap-1.5"
                    >
                      Demo <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl neu-btn text-white text-xs font-bold flex items-center gap-1.5"
                    >
                      Kod <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{selectedProject.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.tags.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg text-xs font-semibold text-slate-300 neu-inset-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
