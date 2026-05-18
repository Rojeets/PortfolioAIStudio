'use client';

import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-12 py-20 overflow-hidden" id="hero-section">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/10 blur-[150px]"></div>
        <div className="absolute top-[20%] right-[15%] w-[30%] h-[30%] rounded-full bg-indigo-500/5 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-3 py-1 mb-8 border border-white/10 bg-white/5 rounded-full"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-indigo-400 flex items-center gap-2">
              <Sparkles size={12} />
              Full Stack Developer
            </span>
          </motion.div>
          
          <h1 className="font-display text-7xl md:text-[8rem] font-bold leading-[0.9] tracking-tighter mb-10">
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Next-Gen</span><br/>
            Ecosystems.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mb-12 leading-relaxed">
            Enterprise Laravel & Django developer building production systems with React, Next.js, and computer vision pipelines.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold uppercase text-xs tracking-widest flex items-center gap-3 group hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20"
              id="cta-primary"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <button className="px-10 py-5 rounded-2xl font-bold uppercase text-xs tracking-widest border border-white/10 hover:bg-white/5 transition-all text-white/70 hover:text-white" id="cta-secondary">
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-30"></div>
    </section>
  );
}
