import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PortfolioProject } from '../types';
import {
  ExternalLink,
  Layers,
  Sparkles,
  ArrowRight,
  Eye,
  CheckCircle2
} from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const { portfolio, setIsQuoteModalOpen } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const categories = ['All', 'Websites', 'Graphic Design', 'AI Content', 'Digital Projects'];

  const filteredProjects = portfolio.filter((item) => {
    return activeCategory === 'All' || item.category === activeCategory;
  });

  return (
    <section id="portfolio" className="py-20 bg-[#060c1d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading">
            Our Client &amp; Student <span className="gh-gold-text">Portfolio</span>
          </h2>
          <p className="mt-3 text-base text-slate-300">
            A showcase of client websites, commercial graphic design, AI content creation, and software systems built right here in Ghana.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group rounded-2xl bg-[#091533] border border-slate-800 hover:border-amber-400/50 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091533] via-transparent to-transparent"></div>

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[10px] font-bold bg-slate-900/90 text-amber-300 border border-amber-400/30 backdrop-blur-sm">
                    {project.category}
                  </span>

                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-900/80 text-slate-300 backdrop-blur-sm">
                    {project.completedYear}
                  </span>

                  <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      View Details
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 space-y-2">
                  <span className="text-[11px] text-amber-400 font-semibold block truncate">
                    Client: {project.client}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors font-heading leading-snug line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags footer */}
              <div className="px-4 pb-4 pt-1 flex flex-wrap gap-1">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[10px] border border-slate-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="bg-[#091533] border-2 border-amber-500/40 rounded-3xl max-w-xl w-full p-6 relative shadow-2xl space-y-5">
              <div className="relative h-64 rounded-xl overflow-hidden border border-slate-800">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/90 text-amber-300 text-xs font-bold border border-amber-400/30">
                  {activeProject.category}
                </div>
              </div>

              <div>
                <span className="text-xs text-amber-400 font-semibold uppercase">
                  Client: {activeProject.client} ({activeProject.completedYear})
                </span>
                <h3 className="text-2xl font-bold text-white font-heading mt-0.5">
                  {activeProject.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeProject.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-blue-900/40 text-blue-200 text-xs border border-blue-700/40"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-800">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors cursor-pointer"
                >
                  Request Similar Project
                </button>
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
