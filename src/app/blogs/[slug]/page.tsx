import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Tag, Menu, Globe } from 'lucide-react';
import Logo from '@/components/Logo';
import { getBlog, getMeta, getPersonal, getNavigation } from '@/data/portfolio';

export function generateStaticParams() {
  const blog = getBlog();
  return blog.items.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlog();
  const post = blog.items.find((p) => p.slug === slug);
  const meta = getMeta();

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} - ${meta.author}`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlog();
  const post = blog.items.find((p) => p.slug === slug);
  const personal = getPersonal();
  const nav = getNavigation();

  if (!post) {
    notFound();
  }

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

      <article className="max-w-4xl mx-auto px-6 lg:px-12 py-24 pt-32">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to articles
        </Link>

        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-white/40 mb-8">
          <span className="flex items-center gap-2">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400/80 border border-indigo-500/20"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-white/60 leading-relaxed mb-8">{post.excerpt}</p>
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
            <p className="text-white/40 text-sm">
              Full article content coming soon. This is a placeholder for the blog post.
            </p>
          </div>
        </div>
      </article>

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
    </main>
  );
}
