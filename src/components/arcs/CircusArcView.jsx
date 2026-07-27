import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { 
  Sparkles, 
  Flame, 
  Eye, 
  Skull, 
  ShieldAlert, 
  Feather, 
  Volume2, 
  Activity, 
  Lock, 
  Unlock,
  ChevronRight,
  Maximize2,
  AlertTriangle
} from 'lucide-react';
import ScrambleText from '../ScrambleText';

export default function CircusArcView({ arc, handleOpenZoom }) {
  const [activeDossierSection, setActiveDossierSection] = useState('Performers');
  const [selectedPerformerIndex, setSelectedPerformerIndex] = useState(0);
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);
  const [hoveredNode, setHoveredNode] = useState(null);

  const performer = arc.performers[selectedPerformerIndex] || arc.performers[0];

  // Radial / Tent Canopy Sections
  const canopySections = [
    { id: 'Performers', label: 'THE FIRST TIER', color: '#5C1A1B' },
    { id: 'Doctor', label: 'THE DOCTOR', color: '#8B4513' },
    { id: 'Kelvin', label: 'BARON KELVIN', color: '#B8954F' },
    { id: 'Workhouse', label: 'THE WORKHOUSE TRUTH', color: '#8B0000' },
  ];

  // Marionette Wire Nodes
  const nodes = [
    { id: 'kelvin', label: 'BARON KELVIN', role: 'FINANCIER / CULTIST', x: 50, y: 15, color: '#B8954F' },
    { id: 'doctor', label: 'THE DOCTOR', role: 'VIVISECTIONIST', x: 50, y: 40, color: '#A0A0A0' },
    { id: 'joker', label: 'JOKER', role: 'RIGHT ARM PROSTHETIC', x: 20, y: 75, color: '#5C1A1B' },
    { id: 'beast', label: 'BEAST', role: 'RIGHT LEG PROSTHETIC', x: 40, y: 80, color: '#5C1A1B' },
    { id: 'dagger', label: 'DAGGER', role: 'HAND PROSTHETICS', x: 60, y: 80, color: '#5C1A1B' },
    { id: 'doll', label: 'DOLL', role: 'LEFT ARM & LEG PROSTHETICS', x: 80, y: 75, color: '#5C1A1B' },
  ];

  const wireLines = [
    { from: 'kelvin', to: 'doctor' },
    { from: 'doctor', to: 'joker' },
    { from: 'doctor', to: 'beast' },
    { from: 'doctor', to: 'dagger' },
    { from: 'doctor', to: 'doll' },
  ];

  return (
    <div className="space-y-10 text-[#E2E8F0] font-body">

      {/* MODULE 1: THE BIG TOP NAVIGATOR (Tent Canopy Radial / Panel Bar) */}
      <div className="p-6 bg-[#121214]/90 border border-[#5C1A1B]/80 relative overflow-hidden backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-[#5C1A1B]/40 pb-3 mb-6">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-[#B8954F] animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-[#B8954F] uppercase font-bold">
              THE BIG TOP NAVIGATOR // CIRCUS DOSSIER
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#A0A0A0] uppercase tracking-widest">
            SELECT CANOPY PANEL
          </span>
        </div>

        {/* Tent Canopy Panels */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {canopySections.map((sec) => {
            const isActive = activeDossierSection === sec.id;
            return (
              <motion.button
                key={sec.id}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveDossierSection(sec.id)}
                className={`relative p-4 border text-center transition-all duration-300 ${
                  isActive
                    ? 'bg-[#5C1A1B]/40 border-[#B8954F] text-white shadow-[0_0_20px_rgba(184,149,79,0.4)]'
                    : 'bg-[#0A0A0A] border-[#4A5568]/40 text-[#718096] hover:text-[#E2E8F0] hover:border-[#5C1A1B]'
                }`}
              >
                {/* Tent Panel Canopy Ripple Effect on Hover */}
                <span className="text-xs font-mono font-bold tracking-widest block relative z-10">
                  {sec.label}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="canopyLanternGlow"
                    className="absolute inset-0 bg-gradient-to-t from-[#B8954F]/20 via-transparent to-transparent pointer-events-none"
                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                  />
                )}
                <div className="gothic-corner-tl !w-1.5 !h-1.5" />
                <div className="gothic-corner-br !w-1.5 !h-1.5" />
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* MODULE 2: THE RINGMASTER'S BOX & CAROUSEL (Spotlight Stage) */}
      {activeDossierSection === 'Performers' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#5C1A1B]/40 pb-2">
            <h3 className="text-xl font-headline font-bold text-[#E2E8F0] flex items-center space-x-2">
              <Eye className="w-5 h-5 text-[#B8954F]" />
              <span>THE RINGMASTER'S BOX // FIRST TIER CAROUSEL</span>
            </h3>
            <span className="text-xs font-mono text-[#B8954F] tracking-widest uppercase">
              ARTIFICIAL LIMB RECIPIENTS
            </span>
          </div>

          {/* Spotlight Circle Stage */}
          <div className="relative bg-[#050505] border border-[#5C1A1B]/60 p-6 sm:p-10 min-h-[420px] flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
            
            {/* Ambient Spotlight Circle Effect */}
            <motion.div 
              animate={{ rotate: [ -5, 5, -5 ] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 pointer-events-none flex items-center justify-center"
            >
              <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-radial from-[#F5F5F5]/10 via-[#B8954F]/5 to-transparent blur-xl" />
            </motion.div>

            {/* Performer Portrait (Trapeze Swing Entrance) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={performer.id}
                initial={{ rotate: -15, y: -200, opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                exit={{ rotate: 15, y: 200, opacity: 0 }}
                transition={{ type: "spring", stiffness: 70, damping: 14 }}
                className="relative z-10 w-full md:w-5/12 aspect-[3/4] max-w-[300px] ornate-frame bg-black overflow-hidden group shrink-0"
              >
                <img
                  src={performer.image}
                  alt={performer.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop';
                  }}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

                <button
                  onClick={() => handleOpenZoom({ url: performer.image, caption: `${performer.name} — ${performer.role}` })}
                  className="absolute top-3 right-3 p-1.5 bg-[#0A0A0A]/80 border border-[#B8954F] text-[#E2E8F0] opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Expand Spotlight Portrait"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>

                <div className="absolute bottom-3 left-3 right-3 bg-[#0A0A0A]/90 border border-[#5C1A1B] p-2 text-center backdrop-blur-md">
                  <span className="text-[10px] font-mono text-[#B8954F] tracking-widest font-bold block uppercase">
                    {performer.role}
                  </span>
                  <span className="text-base font-headline font-bold text-white block">
                    {performer.name}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Performer Dossier & Juggling Stats */}
            <div className="relative z-10 flex-1 space-y-5">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 bg-[#5C1A1B]/40 border border-[#5C1A1B] text-[10px] font-mono text-[#F5F5F5] uppercase tracking-widest">
                    PROSTHETIC: {performer.limb}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-headline font-bold text-white mt-1">
                  {performer.name}
                </h2>
                <p className="text-sm font-subhead text-[#E2E8F0] italic leading-relaxed mt-2">
                  "{performer.trait}"
                </p>
              </div>

              {/* Snake Serpent Whisper (Slithering Sinusoidal Text) */}
              {performer.serpentWhisper && (
                <div className="p-3 bg-[#0A0A0A] border border-[#B8954F]/60 relative">
                  <span className="text-[10px] font-mono text-[#B8954F] font-bold tracking-widest block uppercase mb-1">
                    SERPENT DIALOGUE (EMILY / OSCAR):
                  </span>
                  <p className="text-xs font-mono text-[#C8D6AF] tracking-wider">
                    {performer.serpentWhisper.split('').map((char, index) => (
                      <motion.span
                        key={index}
                        animate={{ y: [0, -3, 0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.05 }}
                        className="inline-block"
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </p>
                </div>
              )}

              {/* Juggling Stats (Staggered Ball Toss Animation) */}
              <div className="space-y-3 pt-2">
                <span className="text-[10px] font-mono text-[#A0A0A0] uppercase tracking-widest font-bold block">
                  COMBAT & ARTIFICIALITY ATTRIBUTES:
                </span>
                
                {Object.entries(performer.stats).map(([statKey, statVal], idx) => (
                  <div key={statKey} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#A0A0A0] uppercase tracking-wider">{statKey}</span>
                      <motion.span 
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, delay: idx * 0.15, repeat: 1 }}
                        className="text-[#B8954F] font-bold"
                      >
                        {statVal}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-[#121214] h-2 border border-[#4A5568]/40 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${statVal}%` }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-[#5C1A1B] to-[#B8954F]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Performer Selector Strip */}
              <div className="flex items-center space-x-2 pt-2 overflow-x-auto no-scrollbar">
                {arc.performers.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPerformerIndex(idx)}
                    className={`px-3 py-1.5 text-xs font-mono tracking-widest uppercase border transition-all ${
                      selectedPerformerIndex === idx
                        ? 'bg-[#5C1A1B] border-[#B8954F] text-white font-bold shadow-[0_0_10px_rgba(184,149,79,0.5)]'
                        : 'bg-[#121214] border-[#4A5568]/40 text-[#718096] hover:text-[#E2E8F0]'
                    }`}
                  >
                    {p.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODULE 3: MARIONETTE CONTROL PANEL (Artificial Limb Node Wire SVG) */}
      <div className="p-6 bg-[#121214] border border-[#5C1A1B]/60 space-y-4">
        <div className="border-b border-[#5C1A1B]/40 pb-2 flex items-center justify-between">
          <h3 className="text-xl font-headline font-bold text-[#E2E8F0] flex items-center space-x-2">
            <Activity className="w-5 h-5 text-[#A0A0A0]" />
            <span>MARIONETTE CONTROL PANEL // PROSTHETIC NETWORK</span>
          </h3>
          <span className="text-xs font-mono text-[#A0A0A0] tracking-widest uppercase">
            DOCTOR & KELVIN PULLEY WIRES
          </span>
        </div>

        <div className="relative w-full h-[280px] bg-[#0A0A0A] border border-[#4A5568]/40 overflow-hidden p-4">
          {/* SVG Connecting Wires */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {wireLines.map((wire, idx) => {
              const fromNode = nodes.find(n => n.id === wire.from);
              const toNode = nodes.find(n => n.id === wire.to);
              const isHovered = hoveredNode === wire.from || hoveredNode === wire.to;
              return (
                <motion.line
                  key={idx}
                  x1={`${fromNode.x}%`}
                  y1={`${fromNode.y}%`}
                  x2={`${toNode.x}%`}
                  y2={`${toNode.y}%`}
                  stroke={isHovered ? '#B8954F' : '#5C1A1B'}
                  strokeWidth={isHovered ? 3 : 1.5}
                  strokeDasharray={isHovered ? 'none' : '4 4'}
                  animate={isHovered ? { strokeDashoffset: [0, 10] } : {}}
                  transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
                />
              );
            })}
          </svg>

          {/* Render Limb Nodes */}
          {nodes.map((node) => {
            const isHovered = hoveredNode === node.id;
            return (
              <motion.div
                key={node.id}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                whileHover={{ scale: 1.15 }}
                className="-translate-x-1/2 -translate-y-1/2 absolute cursor-pointer flex flex-col items-center"
              >
                <div 
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    isHovered
                      ? 'bg-[#B8954F] border-white shadow-[0_0_15px_#B8954F]'
                      : 'bg-[#121214] border-[#5C1A1B]'
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                </div>
                <span className="text-[10px] font-mono font-bold text-[#E2E8F0] tracking-widest mt-1 whitespace-nowrap bg-[#0A0A0A]/90 px-1.5 border border-[#5C1A1B]/40">
                  {node.label}
                </span>
                <span className="text-[8px] font-mono text-[#A0A0A0] tracking-tighter block whitespace-nowrap">
                  {node.role}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MODULE 4: TICKET STUB EVIDENCE & VINTAGE POSTERS */}
      <div className="space-y-4">
        <div className="border-b border-[#5C1A1B]/40 pb-2 flex items-center justify-between">
          <h3 className="text-xl font-headline font-bold text-[#E2E8F0] flex items-center space-x-2">
            <Feather className="w-5 h-5 text-[#B8954F]" />
            <span>TICKET STUB EVIDENCE & RECOVERED ARTIFACTS</span>
          </h3>
          <span className="text-xs font-mono text-[#B8954F] tracking-widest uppercase">
            WORKHOUSE & PERFORMANCES
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'NOAH\'S ARK TICKET', detail: 'Vintage performance stub collected at London gates. Torn serrated edge.', code: 'TICKET #0492' },
            { title: 'WORKHOUSE LEDGER', detail: 'Registry of missing orphans dated Spring 1889 signed by Baron Kelvin.', code: 'LEDGER #88-C' },
            { title: 'PROSTHETIC BLUEPRINT', detail: 'Doctor\'s vivisection diagrams grafting bone-china to human joint.', code: 'BLUEPRINT #06' }
          ].map((ticket, idx) => (
            <motion.div
              key={idx}
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: idx * 0.15 }}
              className="p-5 bg-[#121214] border-2 border-dashed border-[#B8954F]/60 relative space-y-2 group hover:border-[#B8954F] transition-colors"
            >
              <div className="flex justify-between items-center text-[10px] font-mono text-[#B8954F]">
                <span>{ticket.code}</span>
                <span>VALID FOR 1 ADMISSION</span>
              </div>
              <h4 className="text-lg font-headline font-bold text-white group-hover:text-[#B8954F] transition-colors">
                {ticket.title}
              </h4>
              <p className="text-xs font-subhead text-[#E2E8F0] leading-relaxed">
                {ticket.detail}
              </p>
              <div className="gothic-corner-tl !w-2 !h-2" />
              <div className="gothic-corner-br !w-2 !h-2" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODULE 5: CURTAIN REVEAL SYSTEM (Velvet Curtains Parting) */}
      <div className="p-6 bg-[#0F0505] border border-[#8B0000] relative space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#8B0000] font-bold tracking-widest uppercase">
            <Flame className="w-4 h-4 text-[#8B0000] animate-pulse" />
            <span>CLASSIFIED ARC LORE BOMB // CURTAIN REVEAL</span>
          </div>
          <button
            onClick={() => setIsCurtainOpen(!isCurtainOpen)}
            className="px-3 py-1 bg-[#8B0000] border border-white text-white text-xs font-mono tracking-widest uppercase hover:bg-[#5C1A1B] transition-colors flex items-center space-x-1"
          >
            {isCurtainOpen ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
            <span>{isCurtainOpen ? 'CLOSE CURTAINS' : 'PART CURTAINS'}</span>
          </button>
        </div>

        {/* Velvet Curtain Container */}
        <div className="relative min-h-[160px] bg-black border border-[#5C1A1B] overflow-hidden flex items-center justify-center p-6 text-center">
          {/* Unveiled Secret Lore Content */}
          <div className="space-y-3 relative z-0">
            <h4 className="text-2xl font-headline font-bold text-[#8B0000]">
              {arc.kelvinHorror.title}
            </h4>
            <p className="text-xs font-mono text-[#B8954F]">
              {arc.kelvinHorror.subtitle}
            </p>
            <p className="text-sm font-subhead text-[#E2E8F0] max-w-2xl mx-auto leading-relaxed">
              {arc.kelvinHorror.details}
            </p>
            <p className="text-xs font-mono italic text-[#8B0000] font-bold">
              {arc.kelvinHorror.quote}
            </p>
          </div>

          {/* Left Velvet Curtain */}
          <motion.div
            animate={isCurtainOpen ? { x: '-100%' } : { x: '0%' }}
            transition={{ type: "spring", stiffness: 40, damping: 15 }}
            className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#5C1A1B] border-r-2 border-[#B8954F] z-10 flex items-center justify-end pr-4 shadow-[5px_0_25px_rgba(0,0,0,0.9)]"
          >
            <span className="text-xs font-mono tracking-widest text-[#B8954F] writing-mode-vertical rotate-180 uppercase font-bold">
              VELVET CURTAIN [CLICK TO PART]
            </span>
          </motion.div>

          {/* Right Velvet Curtain */}
          <motion.div
            animate={isCurtainOpen ? { x: '100%' } : { x: '0%' }}
            transition={{ type: "spring", stiffness: 40, damping: 15 }}
            className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#5C1A1B] border-l-2 border-[#B8954F] z-10 flex items-center justify-start pl-4 shadow-[-5px_0_25px_rgba(0,0,0,0.9)]"
          >
            <span className="text-xs font-mono tracking-widest text-[#B8954F] writing-mode-vertical rotate-180 uppercase font-bold">
              VELVET CURTAIN [RESTRICTED]
            </span>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
