'use client';

import { motion } from 'motion/react';
import { ClipboardList, Receipt, BarChart3, Palette, ArrowRight, Github } from 'lucide-react';
import { getProjects, getSocial } from '@/data/portfolio';

const iconMap: Record<string, typeof ClipboardList> = {
  ClipboardList,
  Receipt,
  BarChart3,
  Palette,
};

const headerPatterns: Record<string, React.ReactNode> = {
  metrics: (
    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 100">
      {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x, i) => (
        <rect key={i} x={x} y={100 - Math.random() * 60 - 20} width="20" height={Math.random() * 60 + 20} fill="currentColor" rx="2" />
      ))}
    </svg>
  ),
  code: (
    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 100">
      <text x="20" y="30" fontFamily="monospace" fontSize="10" fill="currentColor">const project = await</text>
      <text x="20" y="50" fontFamily="monospace" fontSize="10" fill="currentColor">  fetch('/api/data')</text>
      <text x="20" y="70" fontFamily="monospace" fontSize="10" fill="currentColor">  .then(res =&gt; res.json())</text>
    </svg>
  ),
  terminal: (
    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 100">
      <text x="20" y="30" fontFamily="monospace" fontSize="10" fill="currentColor">$ npm run build</text>
      <text x="20" y="50" fontFamily="monospace" fontSize="10" fill="currentColor">✓ Compiled successfully</text>
      <text x="20" y="70" fontFamily="monospace" fontSize="10" fill="currentColor">$ next start</text>
    </svg>
  ),
  workflow: (
    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 100">
      {[50, 150, 250, 350].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
          {i < 3 && <line x1={x + 15} y1="50" x2={x + 85} y2="50" stroke="currentColor" strokeWidth="2" />}
        </g>
      ))}
    </svg>
  ),
  layers: (
    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 100">
      {[10, 25, 40, 55, 70].map((y, i) => (
        <rect key={i} x="50" y={y} width="300" height="10" fill="currentColor" rx="2" opacity={1 - i * 0.15} />
      ))}
    </svg>
  ),
  blueprint: (
    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 100">
      {Array.from({ length: 20 }).map((_, i) => (
        <circle key={i} cx={(i % 10) * 40 + 20} cy={Math.floor(i / 10) * 50 + 25} r="2" fill="currentColor" />
      ))}
    </svg>
  ),
};

export default function Projects() {
  const projects = getProjects();
  const social = getSocial();

  return (
    <section className="px-6 lg:px-12 py-32 relative overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500 mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {projects.sectionTitle}
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">{projects.sectionSubtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.items.map((project, idx) => {
            const Icon = iconMap[project.icon] || ClipboardList;
            const headerType = project.headerType || 'metrics';

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="relative h-32 bg-indigo-500/5 overflow-hidden">
                  <div className="absolute inset-0 text-indigo-400">
                    {headerPatterns[headerType]}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm inline-block">
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>
                  {project.metric && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm">
                      <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider">
                        {project.metric}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/40 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] text-indigo-400/70 flex items-center gap-1"
                      >
                        <span className="w-1 h-1 rounded-full bg-indigo-400" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/40 mb-6">{projects.ctaText}</p>
          <a
            href={social.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all"
          >
            <Github size={16} />
            {projects.ctaButtonText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
