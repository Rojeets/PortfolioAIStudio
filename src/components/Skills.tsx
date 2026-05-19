'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Layers, Zap, Cog } from 'lucide-react';
import { getSkills } from '@/data/portfolio';

const iconMap: Record<string, typeof Code2> = {
  Code2,
  Layers,
  Zap,
  Cog,
};

export default function Skills() {
  const skills = getSkills();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCategories = skills.categories.filter(
    (cat) => activeFilter === 'all' || cat.id === activeFilter
  );

  const levelColors: Record<string, { border: string; bg: string; text: string }> = {
    Expert: { border: 'border-emerald-500/50', bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
    Advanced: { border: 'border-sky-400/50', bg: 'bg-sky-400/10', text: 'text-sky-400' },
    Proficient: { border: 'border-indigo-400/50', bg: 'bg-indigo-400/10', text: 'text-indigo-400' },
  };

  return (
    <section className="px-6 lg:px-12 py-32 relative overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500 mb-4">
            Technical {skills.sectionTitleHighlight}
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {skills.sectionTitle}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              {skills.sectionTitleHighlight}
            </span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">{skills.sectionSubtitle}</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skills.filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeFilter === filter.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                  : 'bg-white/5 text-white/40 border border-white/10 hover:bg-white/10 hover:text-white/60'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCategories.map((category, catIdx) => {
              const Icon = iconMap[category.icon] || Code2;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: catIdx * 0.1 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-indigo-500/10">
                      <Icon size={20} className="text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.technologies.map((tech, techIdx) => {
                      const colors = levelColors[tech.level] || levelColors.Proficient;
                      return (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: techIdx * 0.05 }}
                          className="group"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                              {tech.name}
                            </span>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${colors.text}`}>
                              {tech.level}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {tech.subSkills.map((sub) => (
                              <span
                                key={sub}
                                className={`text-[10px] px-2 py-0.5 rounded-full border ${colors.border} ${colors.bg} ${colors.text} opacity-70`}
                              >
                                {sub}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold tracking-tight mb-4 text-center">
            {skills.realWorldTitle}
          </h3>
          <p className="text-white/40 text-center mb-8 max-w-2xl mx-auto">{skills.realWorldSubtitle}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.realWorldApplications.map((app, idx) => (
              <motion.span
                key={app}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 hover:border-indigo-500/30 hover:text-indigo-300 transition-all cursor-default"
              >
                {app}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
