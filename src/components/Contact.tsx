'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { getContact, getSocial } from '@/data/portfolio';

export default function Contact() {
  const contact = getContact();
  const social = getSocial();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = contact.form.mailtoBodyTemplate
      .replace('{name}', formData.name)
      .replace('{email}', formData.email)
      .replace('{message}', formData.message);
    const subject = `${contact.form.mailtoSubject} ${formData.name}`;
    window.location.href = `mailto:${social.email.value}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactIcons: Record<string, typeof Github> = {
    github: Github,
    linkedin: Linkedin,
    email: Mail,
  };

  return (
    <section className="px-6 lg:px-12 py-32 relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500 mb-4">
            Contact
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {contact.sectionTitle}
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">{contact.sectionSubtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6">Let&apos;s Connect</h3>

              <div className="space-y-6 mb-8">
                {contact.contactMethods.map((method) => {
                  const socialEntry = social[method as keyof typeof social];
                  const Icon = contactIcons[method] || Mail;
                  return (
                    <a
                      key={method}
                      href={socialEntry.url}
                      target={method !== 'email' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all group"
                    >
                      <div className="p-3 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                        <Icon size={20} className="text-indigo-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white/80">{socialEntry.label}</div>
                        <div className="text-xs text-white/40">{socialEntry.display}</div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="p-6 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
                <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-2">
                  {contact.availability.title}
                </div>
                <p className="text-sm text-white/60 mb-3">{contact.availability.text}</p>
                <p className="text-xs text-white/40">Response time: {contact.availability.responseTime}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-white/60 mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-white/60 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-white/60 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  {status === 'success' ? (
                    <>
                      <CheckCircle size={16} />
                      {contact.form.successText}
                    </>
                  ) : status === 'error' ? (
                    <>
                      <AlertCircle size={16} />
                      {contact.form.errorText}
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      {contact.form.submitText}
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
