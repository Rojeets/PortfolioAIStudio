'use client';

import { motion } from 'motion/react';
import { ArrowRight, Code2, Globe, Laptop, Sparkles, Terminal } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 py-24 overflow-hidden bg-[#030303]" id="hero-section">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/10 blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-[140px] md:auto-rows-[160px]">
          
          {/* Main Content Block (spanning 2x2 on small, 7x3 on large) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 lg:row-span-3 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group shadow-2xl backdrop-blur-sm"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Terminal size={120} className="group-hover:rotate-6 transition-transform duration-500" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 mb-6 border border-white/10 bg-white/5 rounded-full w-fit"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-indigo-400 flex items-center gap-2">
                <Sparkles size={12} />
                Full Stack Specialist
              </span>
            </motion.div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60">
              Building <br />
              Digital <span className="text-indigo-500">Backbones.</span>
            </h1>
            
            <p className="text-lg text-white/50 max-w-xl leading-relaxed mb-10">
              I specialize in enterprise Laravel & Django architectures, bridging the gap between high-performance backends and seamless user interfaces.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
                Explore Work <ArrowRight size={14} />
              </button>
              <button className="px-8 py-4 rounded-2xl font-bold uppercase text-[10px] tracking-widest border border-white/10 hover:bg-white/5 transition-all text-white/70 active:scale-95">
                Contact
              </button>
            </div>
          </motion.div>

          {/* Portrait Block (spanning 2x2 on small, 5x3 on large) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 lg:row-span-3 bg-indigo-600/10 border border-indigo-500/20 rounded-[2.5rem] relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10 opacity-60" />
            <Image 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" // Placeholder for Rojit's image
              alt="Rojit Pokharel"
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0"
              referrerPolicy="no-referrer"
              priority
            />
            
            {/* Puzzle Decor */}
            <div className="absolute top-6 right-6 w-12 h-12 border-2 border-indigo-500/50 rounded-lg -rotate-12 group-hover:rotate-12 transition-transform duration-500 z-20 flex items-center justify-center">
              <span className="text-[8px] font-black text-indigo-400 uppercase tracking-tighter">Piece 01</span>
            </div>

            <div className="absolute bottom-10 left-10 z-20">
              <h2 className="text-3xl font-display font-bold tracking-tight mb-1 text-white">Rojit Pokharel</h2>
              <p className="text-xs uppercase tracking-widest text-indigo-400 font-black">Lead Developer</p>
            </div>
          </motion.div>

          {/* Tech Stack Block (1x1 or horizontal on mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 lg:row-span-1 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between group hover:border-indigo-500/30 transition-colors"
          >
            <div className="flex justify-between items-start">
              <Code2 className="text-indigo-400" size={24} />
              <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest group-hover:text-white/40 transition-colors text-right">Primary<br/>Stack</div>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-xs font-bold tracking-tighter text-white/80">Laravel / React / Django</span>
            </div>
          </motion.div>

          {/* Location Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3 lg:row-span-1 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between group hover:border-indigo-500/30 transition-colors"
          >
            <div className="flex justify-between items-start">
              <Globe className="text-indigo-400" size={24} />
              <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest text-right">Available<br/>Worldwide</div>
            </div>
            <div className="text-xs font-bold tracking-tighter text-white/80">Remote / Nepal</div>
          </motion.div>

          {/* Experience/Projects Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2 lg:row-span-1 bg-indigo-600 rounded-3xl p-6 flex flex-col justify-between shadow-xl shadow-indigo-600/10 group cursor-pointer"
          >
            <div className="text-3xl font-mono font-bold leading-none">27+</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">Projects<br/>Shipped</div>
          </motion.div>

          {/* Modern Web Tag */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-4 lg:row-span-1 bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-indigo-600/20 transition-colors">
              <Laptop size={20} className="text-indigo-400" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Infrastructure</div>
              <div className="text-xs font-bold text-white/80">Enterprise Ecosystems</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
