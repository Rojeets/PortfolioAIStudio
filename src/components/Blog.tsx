'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { getBlog } from '@/data/portfolio';

export default function Blog() {
  const blog = getBlog();

  return (
    <section className="px-6 lg:px-12 py-32 relative overflow-hidden" id="blog">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500 mb-4">
            Writing
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {blog.sectionTitle}
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">{blog.sectionSubtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blog.items.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-xs text-white/40">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold tracking-tight mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-white/40 mb-4 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400/80 border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/40">
                      +{post.tags.length - 3}
                    </span>
                  )}
                </div>

                <a
                  href={`${blog.postsPath}/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Read more
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
