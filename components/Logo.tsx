'use client';

import { motion } from 'motion/react';

export default function Logo() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 cursor-pointer group"
      id="main-logo"
    >
      <div className="relative flex items-center">
        <span className="font-display text-2xl font-black tracking-tighter uppercase relative z-10 text-white">
          &lt;Rojit /&gt;<span className="text-indigo-500">.</span>
        </span>
        <motion.div 
          className="absolute -bottom-1 left-0 h-1 bg-indigo-500 w-0 group-hover:w-full transition-all duration-300"
          layoutId="logo-underline"
        />
      </div>
    </motion.div>
  );
}
