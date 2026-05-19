'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Terminal as TerminalIcon, X, Minus, Square } from 'lucide-react';
import { getTerminal, getSkills, getPersonal, getSocial, getExperience, getProjects } from '@/data/portfolio';

export default function Terminal() {
  const terminal = getTerminal();
  const skills = getSkills();
  const personal = getPersonal();
  const social = getSocial();
  const experience = getExperience();
  const projects = getProjects();

  const [history, setHistory] = useState<{ input: string; output: string }[]>([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const processCommand = (cmd: string): string => {
    const trimmed = cmd.trim().toLowerCase();

    switch (trimmed) {
      case 'help':
        return Object.entries(terminal.commands)
          .map(([c, desc]) => `  ${c.padEnd(12)} ${desc}`)
          .join('\n');

      case 'about':
        return `
  ${personal.name} - ${personal.title}
  ${terminal.responses.about.philosophy}

  Specializations:
  ${terminal.responses.about.specializations.map((s: string) => `  - ${s}`).join('\n')}`;

      case 'skills':
        return skills.categories
          .map(
            (cat) => `
  ${cat.title.toUpperCase()}
  ${cat.technologies.map((tech) => `  ${tech.name.padEnd(20)} ${terminal.levelBars[tech.level as keyof typeof terminal.levelBars] || ''} ${tech.level}`).join('\n')}`
          )
          .join('\n');

      case 'projects':
        return projects.items
          .map((p) => `  - ${p.title}\n    ${p.description.substring(0, 80)}...`)
          .join('\n\n');

      case 'experience':
        return `
  ${experience.title}
  ${experience.period} | ${experience.location}

  Achievements:
  ${experience.achievements.map((a: string) => `  - ${a}`).join('\n')}`;

      case 'contact':
        return `
  Email:    ${social.email.display}
  GitHub:   ${social.github.display}
  LinkedIn: ${social.linkedin.display}
  GitLab:   ${social.gitlab.display}

  ${terminal.responses.contact.responseTime}`;

      case 'social':
        return `
  GitHub:   ${social.github.url}
  LinkedIn: ${social.linkedin.url}
  GitLab:   ${social.gitlab.url}
  Email:    ${social.email.url}
  Website:  ${social.website.url}`;

      case 'clear':
        setHistory([]);
        return '';

      case 'ui':
        setIsOpen(false);
        return 'Switching to UI mode...';

      case '':
        return '';

      default:
        return terminal.commandNotFound.replace('{cmd}', cmd);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const output = processCommand(input);
    setHistory((prev) => [...prev, { input, output }]);
    setInput('');
  };

  if (!isOpen) {
    return (
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-colors"
      >
        <TerminalIcon size={24} />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-4 md:inset-12 lg:inset-20 z-50 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col"
    >
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <TerminalIcon size={14} className="text-indigo-400" />
          <span className="text-xs font-mono text-white/60">{terminal.headerTitle}</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setIsOpen(false)} className="p-1 rounded hover:bg-white/10 transition-colors">
            <Minus size={14} className="text-white/40" />
          </button>
          <button className="p-1 rounded hover:bg-white/10 transition-colors">
            <Square size={12} className="text-white/40" />
          </button>
          <button onClick={() => setIsOpen(false)} className="p-1 rounded hover:bg-red-500/20 transition-colors">
            <X size={14} className="text-white/40 hover:text-red-400" />
          </button>
        </div>
      </div>

      <div ref={terminalRef} className="flex-1 overflow-y-auto p-4 font-mono text-sm">
        <pre className="text-indigo-400 text-xs mb-4 whitespace-pre-wrap">{terminal.asciiArt}</pre>
        <p className="text-white/60 mb-1">{terminal.welcomeMessage}</p>
        <p className="text-white/30 text-xs mb-4">{terminal.helpTip}</p>

        {history.map((entry, idx) => (
          <div key={idx} className="mb-4">
            <div className="flex items-center gap-2 text-green-400">
              <span>{terminal.prompt}</span>
              <span className="text-white/80">{entry.input}</span>
            </div>
            {entry.output && (
              <pre className="text-white/60 mt-2 whitespace-pre-wrap text-xs">{entry.output}</pre>
            )}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center gap-2 text-green-400">
          <span>{terminal.prompt}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-white/80 caret-green-400"
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      </div>

      <div className="px-4 py-2 bg-white/5 border-t border-white/10">
        <span className="text-[10px] text-white/30">{terminal.footerText}</span>
      </div>
    </motion.div>
  );
}
