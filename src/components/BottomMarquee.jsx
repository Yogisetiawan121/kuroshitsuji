import React from 'react';
import { motion } from 'framer-motion';

export default function BottomMarquee() {
  const marqueeText = "mors vincit omnia // the butler is always ready // ";
  const fullText = Array(10).fill(marqueeText).join("");

  return (
    <div className="fixed bottom-0 left-0 right-0 h-7 bg-[#0A0A0A] border-t border-[#8B0000]/60 z-30 flex items-center overflow-hidden pointer-events-none select-none shadow-[0_-5px_15px_rgba(139,0,0,0.2)]">
      <motion.div 
        className="whitespace-nowrap flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#8B0000] font-bold px-4">
          {fullText}
        </span>
        <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#8B0000] font-bold px-4">
          {fullText}
        </span>
      </motion.div>
    </div>
  );
}
