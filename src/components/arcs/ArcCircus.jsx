import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, FileText, Flame, Maximize2 } from 'lucide-react';

export default function ArcCircus({ arc, itemVariants, handleOpenZoom, setSelectedImgIndex }) {
  const [selectedCircusPanel, setSelectedCircusPanel] = useState(0);
  const [curtainsOpen, setCurtainsOpen] = useState({ workhouse: false, ritual: false });

  return (
    <>
      {/* THE BIG TOP NAVIGATOR RADIAL CANOPY MENU */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="border-b border-[#5C1A1B]/50 pb-2 flex items-center justify-between">
          <h3 className="text-xl font-headline font-bold text-[#E2E8F0] tracking-wider flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-[#B8954F]" />
            <span>THE BIG TOP NAVIGATOR // FIRST TIER DOSSIERS</span>
          </h3>
          <span className="text-xs font-mono text-[#B8954F] tracking-widest uppercase">
            CIRCUS CANOPY
          </span>
        </div>

        {/* Big Top Radial Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {arc.firstTier.map((performer, idx) => (
            <motion.div
              key={performer.id}
              whileHover={{ scale: 1.03, y: -2 }}
              onClick={() => {
                setSelectedCircusPanel(idx);
                const matchIdx = arc.images.findIndex(img => img.url === performer.image);
                if (matchIdx !== -1) setSelectedImgIndex(matchIdx);
              }}
              className={`p-2.5 bg-[#121214] border cursor-pointer relative flex flex-col justify-between transition-all duration-300 group ${
                selectedCircusPanel === idx
                  ? 'border-[#B8954F] shadow-[0_0_15px_rgba(184,149,79,0.5)] border-l-4'
                  : 'border-[#4A5568]/40 opacity-85 hover:opacity-100'
              }`}
              style={{ borderLeftColor: performer.color }}
            >
              <div>
                {/* Performer Portrait Thumbnail */}
                <div className="relative aspect-square mb-2 overflow-hidden border bg-black border-[#4A5568]/40 group-hover:border-[#B8954F]/60 transition-colors">
                  <img
                    src={performer.image}
                    alt={performer.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-70" />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenZoom({ url: performer.image, caption: `${performer.name} — ${performer.role}` });
                    }}
                    className="absolute top-1 right-1 p-1 bg-[#0A0A0A]/80 border text-[#E2E8F0] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black"
                    style={{ borderColor: performer.color }}
                    title="Zoom Performer Portrait"
                  >
                    <Maximize2 className="w-3 h-3" />
                  </button>
                </div>

                <span className="text-[9px] font-mono tracking-widest font-bold uppercase block truncate" style={{ color: performer.color }}>
                  {performer.role}
                </span>
                <h4 className="text-xs font-headline font-bold text-[#E2E8F0] group-hover:text-white transition-colors truncate">{performer.name}</h4>
              </div>
              <div className="gothic-corner-tr !w-1.5 !h-1.5" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* MARIONETTE CONTROL PANEL WIRE VISUALIZATION */}
      <motion.div variants={itemVariants} className="p-6 bg-[#121214] border border-[#5C1A1B] relative space-y-4">
        <div className="flex justify-between items-center border-b border-[#4A5568]/30 pb-3">
          <div className="flex items-center space-x-2">
            <Layers className="w-4 h-4 text-[#B8954F]" />
            <h3 className="text-lg font-headline font-bold text-[#E2E8F0]">MARIONETTE CONTROL PANEL // PROSTHETIC WIRES</h3>
          </div>
          <span className="text-xs font-mono text-[#B8954F]">SURGICAL CONTROL</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Selected Performer Spotlight */}
          <div className="md:col-span-1 space-y-3">
            <div className="relative aspect-square border-2 border-[#B8954F] overflow-hidden bg-black shadow-[0_0_20px_rgba(184,149,79,0.3)]">
              <img
                src={arc.firstTier[selectedCircusPanel].image}
                alt={arc.firstTier[selectedCircusPanel].name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-2 left-2 right-2">
                <span className="text-[10px] font-mono text-[#B8954F] font-bold block">
                  {arc.firstTier[selectedCircusPanel].role}
                </span>
                <h4 className="text-lg font-headline font-bold text-[#E2E8F0]">
                  {arc.firstTier[selectedCircusPanel].name}
                </h4>
              </div>
            </div>
          </div>

          {/* Wire Connections Readout */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-mono text-[#B8954F] uppercase tracking-wider font-bold">
              ARTIFICIAL LIMB SPECIFICATION:
            </p>
            <div className="p-3 bg-[#0A0A0A] border border-[#5C1A1B] text-sm font-subhead text-[#CBD5E1]">
              {arc.firstTier[selectedCircusPanel].limb}
            </div>
            <p className="text-sm font-subhead text-[#E2E8F0] leading-relaxed">
              {arc.firstTier[selectedCircusPanel].desc}
            </p>

            {/* Snake's Whisper Wave Animation */}
            {arc.firstTier[selectedCircusPanel].id === 'snake' && (
              <div className="p-3 bg-[#1B4D3E]/20 border border-[#1B4D3E] text-xs font-mono text-[#9ACD32] space-y-1">
                <span className="font-bold">SERPENT WHISPER (WORDSWORTH SAYS):</span>
                <p className="italic text-[#CBD5E1]">"Says Wordsworth... 'We are all locked in cages of someone else\'s design.'"</p>
              </div>
            )}
          </div>
        </div>
        <div className="gothic-corner-tl !w-2 !h-2 !top-[-17px]" />
        <div className="gothic-corner-br !w-2 !h-2" />
      </motion.div>

      {/* TICKET STUB EVIDENCE & CURTAIN REVEAL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vintage Ticket Stubs */}
        <motion.div variants={itemVariants} className="p-6 bg-[#121214] border border-[#B8954F]/50 relative space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#B8954F] font-bold tracking-widest uppercase">
            <FileText className="w-4 h-4" />
            <span>TICKET STUB EVIDENCE</span>
          </div>

          <div className="space-y-3">
            {arc.evidenceTickets.map((t) => (
              <motion.div
                key={t.id}
                initial={{ rotateY: 90 }}
                animate={{ rotateY: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="p-3 bg-[#5C1A1B]/20 border border-[#B8954F]/40 flex justify-between items-center"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#B8954F] font-bold block">{t.title}</span>
                  <p className="text-xs font-mono text-[#CBD5E1] mt-0.5">{t.detail}</p>
                </div>
                <span className="text-xs font-mono text-[#B8954F] font-bold">ADMIT 1</span>
              </motion.div>
            ))}
          </div>
          <div className="gothic-corner-tl !w-2 !h-2 !top-[-13px]" />
        </motion.div>

        {/* Velvet Curtain Reveal System */}
        <motion.div variants={itemVariants} className="p-6 bg-[#121214] border border-[#5C1A1B] relative space-y-4 overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#8B0000] font-bold tracking-widest uppercase flex items-center space-x-1">
              <Flame className="w-4 h-4" />
              <span>THE KELVIN ESTATE BURNING</span>
            </span>
            <button
              onClick={() => setCurtainsOpen(prev => ({ ...prev, workhouse: !prev.workhouse }))}
              className="px-2 py-1 bg-[#5C1A1B] text-white font-mono text-[10px] uppercase border border-[#B8954F]"
            >
              {curtainsOpen.workhouse ? 'CLOSE CURTAINS' : 'PART CURTAINS'}
            </button>
          </div>

          {/* Curtain Motion Overlay */}
          <div className="relative min-h-[140px] bg-[#0A0A0A] border border-[#4A5568]/40 p-4 flex items-center justify-center text-center overflow-hidden">
            <AnimatePresence>
              {!curtainsOpen.workhouse ? (
                <motion.div
                  key="closed"
                  initial={{ opacity: 1 }}
                  exit={{ x: '-100%', opacity: 0 }}
                  transition={{ type: "spring", stiffness: 40, damping: 15 }}
                  className="absolute inset-0 bg-gradient-to-r from-[#5C1A1B] via-[#3E0000] to-[#5C1A1B] flex flex-col items-center justify-center p-4 z-10 border-y border-[#B8954F]"
                >
                  <Flame className="w-8 h-8 text-[#B8954F] animate-pulse mb-1" />
                  <span className="text-xs font-mono text-[#E2E8F0] tracking-widest font-bold uppercase">
                    CLASSIFIED LORE: THE WORKHOUSE & RITUAL
                  </span>
                  <span className="text-[10px] font-mono text-[#B8954F] mt-1">CLICK 'PART CURTAINS' TO REVEAL</span>
                </motion.div>
              ) : (
                <motion.div
                  key="opened"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2 text-left"
                >
                  <h4 className="text-sm font-mono font-bold text-[#8B0000]">THE KELVIN ESTATE RITUAL CHAMBER</h4>
                  <p className="text-xs font-subhead text-[#CBD5E1] leading-relaxed">
                    {arc.curtains[0].text}
                  </p>
                  <p className="text-xs font-subhead text-[#CBD5E1] leading-relaxed mt-2">
                    {arc.curtains[1].text}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="gothic-corner-br !w-2 !h-2" />
        </motion.div>
      </div>
    </>
  );
}
