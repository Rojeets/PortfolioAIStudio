'use client';

import Blog from '@/components/Blog';
import Terminal from '@/components/Terminal';
import Logo from '@/components/Logo';
import { getPersonal, getNavigation } from '@/data/portfolio';
import { Menu, Globe } from 'lucide-react';

export default function BlogPage() {
  const personal = getPersonal();
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
                item.href === '/blogs' ? 'text-white opacity-100 border-b border-indigo-500 pb-1' : ''
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

      <div className="pt-24" />
      <Blog />

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

      {/* Terminal */}
      <Terminal />
    </main>
  );
}
