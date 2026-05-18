'use client';

import Logo from '@/components/Logo';
import Hero from '@/components/Hero';
import AIChat from '@/components/AIChat';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Menu, Globe, MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-12 py-10 flex justify-between items-center transition-all duration-500 hover:bg-[#030303]/40 hover:backdrop-blur-xl group" id="main-nav">
        <Logo />
        
        <div className="hidden md:flex gap-10 text-sm font-medium tracking-widest uppercase opacity-60">
          <a href="#about" className="hover:opacity-100 hover:text-indigo-400 transition-all">About</a>
          <a href="#skills" className="hover:opacity-100 hover:text-indigo-400 transition-all">Skills</a>
          <a href="#projects" className="hover:opacity-100 hover:text-indigo-400 transition-all">Projects</a>
          <a href="#contact" className="text-white opacity-100 border-b border-indigo-500 pb-1">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden lg:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-4 py-2 border border-white/10 rounded-full hover:bg-white/5 transition-all">
            <Globe size={14} className="text-indigo-500" />
            Global Context
          </button>
          <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <Hero />

      {/* Stats Section */}
      <section className="px-12 py-24 relative z-10" id="stats-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Stat Card 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md"
          >
            <div className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-4">Client Projects</div>
            <div className="text-4xl font-mono mb-6">27<span className="text-xl opacity-40">+</span></div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '90%' }}
                className="bg-indigo-500 h-full"
              />
            </div>
            <p className="text-[10px] text-white/30 uppercase tracking-widest mt-4">Delivered Successfully</p>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md"
          >
            <div className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-4">Tech Stack</div>
            <div className="text-4xl font-mono mb-6">35<span className="text-xl opacity-40">+</span></div>
            <div className="flex gap-1.5 mt-8">
              <div className="h-1.5 w-2 bg-indigo-500 rounded-full animate-pulse"></div>
              <div className="h-1.5 w-6 bg-indigo-500 rounded-full"></div>
              <div className="h-1.5 w-2 bg-indigo-500/30 rounded-full"></div>
              <div className="h-1.5 w-8 bg-indigo-500 rounded-full"></div>
            </div>
          </motion.div>

          {/* Stat Card 3 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md"
          >
            <div className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-4">Python Models</div>
            <div className="text-4xl font-mono mb-6">15<span className="text-xl opacity-40">+</span></div>
            <div className="flex items-center gap-2 mt-8">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              <span className="text-[10px] text-green-400 font-bold tracking-widest uppercase">Proprietary • AI</span>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-indigo-600 rounded-2xl p-8 flex flex-col justify-between group cursor-pointer shadow-2xl shadow-indigo-500/20"
          >
            <div className="bg-white/20 p-3 rounded-xl self-end">
              <ArrowRightIcon size={20} className="text-white" />
            </div>
            <div>
              <div className="text-lg font-bold uppercase tracking-tight">Hire Me</div>
              <div className="text-xs opacity-80 mt-1">Open to collaboration</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-12 py-32 bg-[#030303]" id="projects">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500 mb-6">Execution</p>
              <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight">Technical Highlights</h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed">
              Enterprise solutions showcasing full-stack expertise across diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Spam Detection Engine", desc: "ML-powered spam classification using Naive Bayes. processes thousands of messages with 97%+ accuracy.", tech: "Python / Scikit-Learn" },
              { title: "Fire Detection System", desc: "CV-based fire and smoke detection using YOLOv8 for real-time CCTV analytics.", tech: "Python / Deep Learning" },
              { title: "Enterprise Leave Management", desc: "Automated balance tracking with multi-stage approval workflows and RBAC.", tech: "Laravel / React / Filament" },
              { title: "Server Monitor Tool", desc: "Uptime monitoring tool with multi-site health checks, Slack alerts, and Prometheus metrics.", tech: "Go / Prometheus / Docker" },
              { title: "AI Referee Tracker", desc: "Football analytics pipeline using YOLOv5, SORT tracking, and team classification.", tech: "OpenCV / YOLO / Flask" },
              { title: "Multi-tenant CMS", desc: "Modular CMS enabling administrators to build complex layouts with Repeater patterns.", tech: "Laravel / Filament / MongoDB" }
            ].map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white/5 border border-white/5 rounded-3xl p-8 hover:bg-white/[0.08] transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                  <ArrowRightIcon size={24} className="text-indigo-400 group-hover:-rotate-45 transition-transform" />
                </div>
                <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-4">{p.tech}</p>
                <h3 className="text-xl font-bold mb-4 tracking-tight">{p.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed mb-6">{p.desc}</p>
                <div className="h-1 w-0 bg-indigo-500 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-12 py-32 border-t border-white/5 bg-[#050505] relative overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500 mb-6">Architectural Vision</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
              Solving complex <br/>
              with <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Precision.</span>
            </h2>
            <p className="text-lg text-white/40 leading-relaxed max-w-xl">
              I specialize in Laravel Filament & Inertia applications, AI-powered computer vision systems, and creating full-stack applications that bridge machine learning with practical user interfaces.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] relative bg-white/5 rounded-3xl border border-white/5 overflow-hidden group">
              <Image 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80" 
                fill
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                alt="Code Arch"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-[4/5] relative bg-white/5 rounded-3xl border border-white/5 overflow-hidden group mt-12">
              <Image 
                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80" 
                fill
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                alt="Vision Arch"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030303] text-white px-12 py-20 border-t border-white/5" id="main-footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <div className="text-3xl font-display font-black tracking-tighter uppercase mb-4">
              &lt;Rojit /&gt;<span className="text-indigo-500">.</span>
            </div>
            <p className="text-white/30 text-xs tracking-widest italic font-medium uppercase">Full Stack Developer | Backend Specialist</p>
          </div>
          
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
            <a href="https://github.com/rojeets" className="hover:text-indigo-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/rojit-pokharel/" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
            <a href="https://rojitpokharel.com.np" className="hover:text-indigo-400 transition-colors">Portfolio</a>
            <a href="mailto:info@rojitpokharel.com.np" className="hover:text-indigo-400 transition-colors">Email</a>
          </div>
          
          <p className="text-[10px] text-white/20 uppercase tracking-widest">© 2026 Rojit Pokharel.</p>
        </div>
      </footer>

      {/* AI Assistant Overlay */}
      <AIChat />
    </main>
  );
}

function ArrowRightIcon({ size, className }: { size: number, className: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
