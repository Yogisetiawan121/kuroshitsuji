import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Biohazard, CheckCircle2, Maximize2 } from 'lucide-react';

export default function ArcWolfs({ arc, itemVariants, handleOpenZoom }) {
  return (
    <>
      {/* KEY CHARACTERS: SIEGLINDE & WOLFRAM */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="border-b border-[#4A5568]/30 pb-2 flex items-center justify-between">
          <h3 className="text-xl font-headline font-bold text-[#E2E8F0] tracking-wider flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-[#9ACD32]" />
            <span>SUBJECTS OF INTEREST: SIEGLINDE & WOLFRAM</span>
          </h3>
          <span className="text-xs font-mono text-[#9ACD32] tracking-widest uppercase">
            GERMAN SECTOR
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {arc.keyCharacters.map((char) => (
            <motion.div
              key={char.id}
              variants={itemVariants}
              className="p-6 bg-[#121214] border border-[#1B4D3E] relative space-y-4 group hover:border-[#9ACD32] transition-colors"
            >
              {char.image && (
                <div className="relative aspect-[16/10] overflow-hidden border bg-black border-[#4A5568]/40 group-hover:border-[#9ACD32]/60 transition-colors">
                  <img
                    src={char.image}
                    alt={char.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-70" />
                  <button
                    onClick={() => handleOpenZoom({ url: char.image, caption: `${char.name} — ${char.title}` })}
                    className="absolute top-2 right-2 p-1.5 bg-[#0A0A0A]/80 border border-[#9ACD32] text-[#E2E8F0] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#1B4D3E]"
                    title="Zoom Character Portrait"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              <div>
                <span className="text-xs font-mono text-[#9ACD32] font-bold tracking-widest block uppercase">
                  {char.title}
                </span>
                <h4 className="text-2xl font-headline font-bold text-[#E2E8F0] group-hover:text-[#9ACD32] transition-colors">{char.name}</h4>
              </div>

              <p className="text-sm font-subhead text-[#E2E8F0] leading-relaxed">
                {char.details}
              </p>

              {char.sulfurGarden && (
                <div className="p-3 bg-[#0A0A0A] border border-[#9ACD32]/50 text-xs font-mono text-[#9ACD32] space-y-1">
                  <span className="font-bold flex items-center space-x-1">
                    <Biohazard className="w-3.5 h-3.5" />
                    <span>CHEMICAL FORMULA: SULFUR GARDEN</span>
                  </span>
                  <p className="text-[#E2E8F0] font-subhead text-xs">{char.sulfurGarden}</p>
                </div>
              )}
              <div className="gothic-corner-tl !w-2 !h-2 !top-[-17px]" />
              <div className="gothic-corner-br !w-2 !h-2" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* HORROR REVEAL & RESOLUTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="p-6 bg-[#121214] border border-[#4A6741]/60 relative space-y-3">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#9ACD32] font-bold tracking-widest uppercase">
            <Biohazard className="w-4 h-4" />
            <span>FACILITY DECEPTION</span>
          </div>
          <h3 className="text-2xl font-headline font-bold text-[#E2E8F0]">{arc.horrorReveal.title}</h3>
          <ul className="space-y-2 text-sm font-subhead text-[#E2E8F0]">
            {arc.horrorReveal.points.map((pt, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-[#9ACD32] font-mono mt-0.5">•</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
          <div className="gothic-corner-tl !w-2 !h-2 !top-[-13px]" />
          <div className="gothic-corner-br !w-2 !h-2" />
        </motion.div>

        <motion.div variants={itemVariants} className="p-6 bg-[#121214] border border-[#1B4D3E]/80 relative space-y-3">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#1B4D3E] font-bold tracking-widest uppercase">
            <CheckCircle2 className="w-4 h-4 text-[#9ACD32]" />
            <span>MISSION OUTCOME</span>
          </div>
          <h3 className="text-2xl font-headline font-bold text-[#E2E8F0]">{arc.resolution.title}</h3>
          <p className="text-xs font-mono text-[#9ACD32]">{arc.resolution.subtitle}</p>
          <p className="text-sm font-subhead text-[#E2E8F0] leading-relaxed">
            {arc.resolution.text}
          </p>
          <div className="gothic-corner-tr !w-2 !h-2 !top-[-12px]" />
          <div className="gothic-corner-bl !w-2 !h-2" />
        </motion.div>
      </div>
    </>
  );
}
