'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Terminal, X, BrainCircuit } from 'lucide-react';

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse('');
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: `You are the digital assistant of Rojit Pokharel, a Full Stack Developer specializing in Laravel, Django, React, and Computer Vision. Help the user with this request: ${prompt}` }),
      });
      const data = await res.json();
      setResponse(data.text);
    } catch (error) {
      console.error(error);
      setResponse("System error. Please reconnect to the atelier.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-indigo-600 text-white p-4 rounded-2xl shadow-2xl hover:bg-indigo-500 transition-all group scale-110"
        id="open-chat-btn"
      >
        <BrainCircuit size={24} className="group-hover:rotate-12 transition-transform" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-50 w-[90vw] md:w-[400px] h-[550px] bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-[2rem] flex flex-col overflow-hidden"
            id="chat-window"
          >
            {/* Header */}
            <div className="bg-white/5 p-6 flex justify-between items-center border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 grid place-items-center shadow-lg shadow-indigo-500/20">
                  <Terminal size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold leading-tight text-white tracking-tight">ROJEETS CORE</h3>
                  <p className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">Protocol v4.2</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-transparent">
              {!response && !loading && (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-white/5 rounded-3xl mx-auto mb-6 grid place-items-center border border-white/5">
                    <BrainCircuit size={40} className="text-indigo-400 opacity-50" />
                  </div>
                  <p className="text-sm font-medium text-white/40 uppercase tracking-widest leading-loose">
                    Initialize connection <br/>
                    with the framework.
                  </p>
                </div>
              )}
              
              {loading && (
                <div className="flex gap-2 p-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce" />
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:-.3s]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:-.5s]" />
                </div>
              )}

              {response && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 p-5 rounded-2xl rounded-tl-none border border-white/10 text-sm leading-relaxed text-white/80"
                >
                  {response}
                </motion.div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleGenerate} className="p-6 bg-white/5 border-t border-white/5 flex gap-3">
              <input 
                type="text" 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Interface with ROJEETS..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all placeholder:text-white/20"
                disabled={loading}
              />
              <button 
                type="submit" 
                className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/20"
                disabled={loading || !prompt.trim()}
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
