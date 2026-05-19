'use client';

import { motion } from 'motion/react';
import { MapPin, Calendar, Briefcase, Award, Code } from 'lucide-react';
import { getExperience } from '@/data/portfolio';

export default function Experience() {
  const experience = getExperience();

  return (
    <section className="px-6 lg:px-12 py-32 relative overflow-hidden" id="experience">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500 mb-4">
            Career
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-l-2xl" />

            <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase size={20} className="text-indigo-400" />
                  <h3 className="text-2xl font-bold tracking-tight">{experience.title}</h3>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-white/40">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {experience.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {experience.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-4 flex items-center gap-2">
                <Award size={14} />
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {experience.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 text-sm text-white/60"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-4 flex items-center gap-2">
                <Code size={14} />
                Areas of Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.expertiseAreas.map((area, idx) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 hover:border-indigo-500/30 hover:text-indigo-300 transition-all"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
