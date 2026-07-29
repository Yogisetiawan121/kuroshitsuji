import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Eye, Maximize2 } from 'lucide-react';

export default function ArcMurder({ arc, itemVariants, handleOpenZoom, setSelectedImgIndex }) {
  const [selectedClue, setSelectedClue] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isCorpseHovered, setIsCorpseHovered] = useState(false);

  return (
    <>
      {/* THE CLUE BOARD WITH RED STRINGS */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="border-b border-[#3E0000]/60 pb-2 flex items-center justify-between">
          <h3 className="text-xl font-headline font-bold text-[#E2E8F0] tracking-wider flex items-center space-x-2">
            <Search className="w-5 h-5 text-[#D4A373]" />
            <span>THE CLUE BOARD // INVESTIGATION NETWORK</span>
          </h3>
          <span className="text-xs font-mono text-[#D4A373] tracking-widest uppercase">
            CRIME SCENE DATA
          </span>
        </div>

        {/* Guest & Suspect Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {arc.guests.map((g) => (
            <motion.div
              key={g.id}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => {
                setSelectedClue(g.id);
                const matchIdx = arc.images.findIndex(img => img.url === g.image);
                if (matchIdx !== -1) setSelectedImgIndex(matchIdx);
              }}
              className={`p-4 bg-[#121214] border cursor-pointer relative space-y-2 transition-all ${
                selectedClue === g.id
                  ? 'border-[#D4A373] shadow-[0_0_20px_rgba(212,163,115,0.4)]'
                  : 'border-[#4A5568]/40 hover:border-[#D4A373]/60'
              }`}
            >
              <div className="relative aspect-square border bg-black border-[#4A5568]/40 overflow-hidden mb-2">
                <img src={g.image} alt={g.name} loading="lazy" decoding="async" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
              </div>
              <span className="text-[9px] font-mono text-[#D4A373] font-bold block uppercase">{g.role}</span>
              <h4 className="text-sm font-headline font-bold text-[#E2E8F0] truncate">{g.name}</h4>
              <p className="text-[10px] font-mono text-[#8B0000] font-bold uppercase">{g.status}</p>
              <div className="gothic-corner-tr !w-1.5 !h-1.5  !top-[-9px]" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FLOOR PLAN BLUEPRINT & BUTLER'S BODY WIPE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Manor Blueprint Floor Plan */}
        <motion.div variants={itemVariants} className="p-6 bg-[#121214] border border-[#3E0000] relative space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#D4A373] font-bold tracking-widest uppercase">
            <Compass className="w-4 h-4" />
            <span>MANOR ARCHITECTURAL BLUEPRINT</span>
          </div>

          <div className="space-y-3">
            {arc.crimes.map((c) => (
              <div
                key={c.no}
                onClick={() => setSelectedRoom(c.no)}
                className={`p-3 border cursor-pointer transition-all ${
                  selectedRoom === c.no
                    ? 'bg-[#3E0000]/40 border-[#8B0000] text-white shadow-[0_0_15px_rgba(139,0,0,0.5)]'
                    : 'bg-[#0A0A0A] border-[#4A5568]/40 text-[#CBD5E1] hover:border-[#8B0000]/60'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-[#8B0000] font-bold">MURDER #{c.no} // {c.room}</span>
                  <span className="w-2 h-2 rounded-full bg-[#8B0000] animate-ping" />
                </div>
                <h4 className="text-sm font-headline font-bold text-[#E2E8F0] mt-1">VICTIM: {c.victim}</h4>
                <p className="text-xs font-mono text-[#94A3B8] mt-0.5">{c.method}</p>
              </div>
            ))}
          </div>
          <div className="gothic-corner-tl !w-2 !h-2 !top-[-13px]" />
        </motion.div>

        {/* Corpse Report & Rathbone Disguise Wipe */}
        <motion.div variants={itemVariants} className="p-6 bg-[#121214] border border-[#6B7280]/40 relative space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#6B7280] font-bold tracking-widest uppercase flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>THE BUTLER'S STAGED CORPSE REPORT</span>
            </span>
            <span className="text-[10px] font-mono text-[#D4A373]">HOVER TO DISGUISE WIPE</span>
          </div>

          <div 
            onMouseEnter={() => setIsCorpseHovered(true)}
            onMouseLeave={() => setIsCorpseHovered(false)}
            className="relative aspect-[16/9] border border-[#8B0000] bg-black overflow-hidden cursor-pointer group"
          >
            <img
              src={isCorpseHovered ? '/img/Jeremy%20Rathbone/Jeremy%20Rathbone.webp' : '/img/Sebastian%20Michaelis/Sebastian-Michaelis-Book-Of-Murder.avif'}
              alt="Disguise Wipe"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
              <span className="text-xs font-mono font-bold text-[#E2E8F0]">
                {isCorpseHovered ? 'JEREMY RATHBONE (SEBASTIAN IN DISGUISE)' : 'STAGED CORPSE // BUTLER QUARTERS'}
              </span>
              <span className="text-[9px] font-mono text-[#8B0000] uppercase font-bold">
                {isCorpseHovered ? 'EXPOSED' : 'STAGED'}
              </span>
            </div>
          </div>

          {/* Arthur Conan Doyle Notes */}
          <div className="p-3 bg-[#F5F5DC]/10 border border-[#D4A373]/50 text-xs font-mono text-[#D4A373] space-y-1">
            <span className="font-bold block uppercase">{arc.doyleNotes[2].title}</span>
            <p className="italic text-[#E2E8F0] font-subhead text-xs">"{arc.doyleNotes[2].text}"</p>
          </div>
          <div className="gothic-corner-br !w-2 !h-2" />
        </motion.div>
      </div>
    </>
  );
}
