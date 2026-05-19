'use client';

import Logo from '@/components/Logo';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Terminal from '@/components/Terminal';
import AIChat from '@/components/AIChat';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Menu, Globe } from 'lucide-react';
import { getPersonal, getAbout, getNavigation } from '@/data/portfolio';

export default function Home() {
  const personal = getPersonal();
  const about = getAbout();
  const nav = getNavigation();

  return (
    <main className="min-h-screen relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-12 py-10 flex justify-between items-center transition-all duration-500 hover:bg-[#030303]/40 hover:backdrop-blur-xl group" id="main-nav">
        <Logo />
        
        <div className="hidden md:flex gap-10 text-sm font-medium tracking-widest uppercase opacity-60">
          {nav.items.map((item, idx) => (
            <a 
              key={idx}
              href={item.href} 
              className={`hover:opacity-100 hover:text-indigo-400 transition-all ${
                item.href === '/contact' ? 'text-white opacity-100 border-b border-indigo-500 pb-1' : ''
              }`}
            >
              {item.name}
            </a>
          ))}
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
          {about.stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md"
            >
              <div className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-4">{stat.label}</div>
              <div className="text-4xl font-mono mb-6">{stat.value}</div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '90%' }}
                  className="bg-indigo-500 h-full"
                />
              </div>
              <p className="text-[10px] text-white/30 uppercase tracking-widest mt-4">Delivered Successfully</p>
            </motion.div>
          ))}

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
              <div className="text-xs opacity-80 mt-1">{personal.availability}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Highlights */}
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
              {about.bio[1].text.replace(/<[^>]*>/g, '')}
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

        {/* About Highlights */}
        <div className="max-w-7xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {about.highlights.map((highlight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/10"
            >
              <div className="text-4xl font-mono font-bold text-indigo-500/30 mb-4">{highlight.number}</div>
              <h3 className="text-lg font-bold mb-2">{highlight.title}</h3>
              <p className="text-sm text-white/40">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Blog Section */}
      <Blog />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-[#030303] text-white px-12 py-20 border-t border-white/5" id="main-footer">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-3xl font-display font-black tracking-tighter uppercase mb-4">
              {personal.logoTag}<span className="text-indigo-500">.</span>
            </div>
            <p className="text-white/30 text-xs tracking-widest italic font-medium uppercase">{personal.subtitle}</p>
            <p className="text-white/20 text-xs mt-4">{personal.footerDescription}</p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {nav.items.map((item, idx) => (
                <a 
                  key={idx}
                  href={item.href}
                  className="text-sm text-white/50 hover:text-indigo-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="https://github.com/rojeets" className="text-sm text-white/50 hover:text-indigo-400 transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/rojit-pokharel/" className="text-sm text-white/50 hover:text-indigo-400 transition-colors">LinkedIn</a>
              <a href="https://gitlab.com/rojeets" className="text-sm text-white/50 hover:text-indigo-400 transition-colors">GitLab</a>
              <a href="mailto:info@rojitpokharel.com.np" className="text-sm text-white/50 hover:text-indigo-400 transition-colors">Email</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/20 uppercase tracking-widest">© 2026 {personal.copyright}.</p>
          <p className="text-[10px] text-white/20 uppercase tracking-widest">Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>

      {/* AI Assistant Overlay */}
      {/* <AIChat /> */}

      {/* Terminal */}
      <Terminal />
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
