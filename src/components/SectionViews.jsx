import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GitBranch, 
  FileText, 
  Swords, 
  Archive, 
  Users, 
  Package, 
  History,
  Flame,
  GraduationCap,
  TreePine,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ARCHIVE_FILES, MEMORIES_DATA, CONTRACT_TERMS } from '../data/characterData';
import { ARCS_DATA } from '../data/arcData';

const viewContainerVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } }
};

const viewItemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20, mass: 0.8 } }
};

export default function SectionViews({ activeTab, character, onOpenContract, setActiveTab }) {
  const [selectedArchive, setSelectedArchive] = useState(ARCHIVE_FILES[0]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
     <div ref={containerRef} className="flex-1 min-w-0 p-4 lg:p-8 relative z-10 overflow-y-auto max-h-[calc(100dvh-60px)] touch-scroll pb-28 lg:pb-32">
        <AnimatePresence mode="wait">
      
      {/* LINEAGE & GENEALOGY VIEW */}
      {(activeTab === 'LINEAGE' || activeTab === 'GENEALOGY') && (
       <motion.div key="lineage" variants={viewContainerVariants} initial="hidden" animate="show" exit="exit" className="space-y-6">
          <motion.div variants={viewItemVariants} className="border-b border-[#4A5568]/30 pb-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#8B0000] tracking-widest uppercase font-bold">
              <GitBranch className="w-4 h-4" />
              <span>PHANTOMHIVE HOUSEHOLD // ARISTOCRACY RECORD</span>
            </div>
            <h2 className="text-3xl font-headline font-bold text-[#E2E8F0] mt-1">
              THE WATCHDOG BLOODLINE
            </h2>
            <p className="text-sm font-subhead italic text-[#CBD5E1] mt-1">
              "Behind the glittering facade of Victorian nobility lies the blood-stained mantle of the Queen's Watchdog."
            </p>
          </motion.div>

          {/* Family Tree Hierarchy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div variants={viewItemVariants} className="p-5 bg-[#121214] border border-[#4A5568]/40 relative">
              <span className="text-xs font-mono text-[#94A3B8] tracking-widest block uppercase font-semibold">PREVIOUS HEAD</span>
              <h3 className="text-xl font-headline font-bold text-[#E2E8F0] mt-1">Vincent Phantomhive</h3>
              <p className="text-sm font-mono text-[#8B0000] mt-0.5 font-bold">DECEASED (1888 FIRE)</p>
              <p className="text-sm font-subhead text-[#CBD5E1] mt-2">
                Former Queen's Watchdog. Murdered alongside Rachel Phantomhive on Ciel's 10th birthday.
              </p>
              <div className="gothic-corner-tl !w-2 !h-2" />
            </motion.div>

            <motion.div variants={viewItemVariants} className="p-5 bg-[#160d0d] border-2 border-[#8B0000] relative shadow-[0_0_20px_rgba(139,0,0,0.3)]">
              <span className="text-xs font-mono text-[#8B0000] tracking-widest block uppercase font-bold">CURRENT HEAD</span>
              <h3 className="text-xl font-headline font-bold text-[#E2E8F0] mt-1">Earl Ciel Phantomhive</h3>
              <p className="text-sm font-mono text-[#8B0000] mt-0.5 font-bold">BOUND TO DEMON 666-C</p>
              <p className="text-sm font-subhead text-[#E2E8F0] mt-2">
                10th Earl of Phantomhive. Owner of Funtom Corp. Traded soul to avenge his family.
              </p>
              <div className="gothic-corner-bl !w-2 !h-2" />
            </motion.div>

            <motion.div variants={viewItemVariants} className="p-5 bg-[#121214] border border-[#4A5568]/40 relative">
              <span className="text-xs font-mono text-[#94A3B8] tracking-widest block uppercase font-semibold">INFERNAL EXECUTIVE</span>
              <h3 className="text-xl font-headline font-bold text-[#E2E8F0] mt-1">Sebastian Michaelis</h3>
              <p className="text-sm font-mono text-[#8B0000] mt-0.5 font-bold">HEAD BUTLER / DEMON</p>
              <p className="text-sm font-subhead text-[#CBD5E1] mt-2">
                Demon bound by Faustian pact. Serves as head butler and absolute guardian of the lineage.
              </p>
              <div className="gothic-corner-br !w-2 !h-2" />
            </motion.div>
          </div>

          {/* Phantomhive Manor Burned Legacy Record */}
          <motion.div variants={viewItemVariants} className="p-6 bg-[#121214] border border-[#8B0000]/40 relative">
            <div className="flex items-center space-x-3 text-[#8B0000] mb-2">
              <Flame className="w-5 h-5 animate-pulse" />
              <h4 className="text-sm font-mono tracking-widest font-bold uppercase">
                THE 1888 MANOR DESTRUCTION RECORD
              </h4>
            </div>
            <p className="text-sm font-subhead text-[#E2E8F0] leading-relaxed">
              On December 14, 1888, the Phantomhive Manor was engulfed in unholy flames. The Earl Vincent and Countess Rachel were slain, and their twin offspring abducted by a secret aristocratic cult. The estate was rebuilt in 1889 following Ciel's return with Sebastian Michaelis.
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* CONTRACT VIEW */}
      {activeTab === 'CONTRACT' && (
        <motion.div key="contract" variants={viewContainerVariants} initial="hidden" animate="show" exit="exit" className="space-y-6">
          <motion.div variants={viewItemVariants} className="border-b border-[#4A5568]/30 pb-4 flex justify-between items-end">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-[#8B0000] tracking-widest uppercase font-bold">
                <FileText className="w-4 h-4" />
                <span>INFERNAL LEGAL RECORD // 666-C</span>
              </div>
              <h2 className="text-3xl font-headline font-bold text-[#E2E8F0] mt-1">
                FAUSTIAN CONTRACT CLAUSES
              </h2>
            </div>

            <button
              onClick={onOpenContract}
              className="px-4 py-2 bg-[#8B0000] text-white font-mono text-xs tracking-widest uppercase shadow-[0_0_15px_rgba(139,0,0,0.4)] hover:bg-[#B22222] transition-colors"
            >
              LAUNCH SEAL MODAL
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CONTRACT_TERMS.clauses.map((c) => (
              <motion.div variants={viewItemVariants} key={c.no} className="p-5 bg-[#121214] border-l-4 border-[#8B0000] border-y border-r border-[#4A5568]/30 space-y-2 relative">
                <span className="text-xs font-mono text-[#8B0000] font-bold tracking-widest">
                  ARTICLE {c.no}
                </span>
                <h4 className="text-base font-headline font-bold text-[#E2E8F0]">{c.title}</h4>
                <p className="text-sm font-subhead italic text-[#CBD5E1] leading-relaxed">
                  "{c.text}"
                </p>
                <div className="gothic-corner-tr !w-1.5 !h-1.5 !top-[-9px]" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ARSENAL VIEW */}
      {activeTab === 'ARSENAL' && (
        <motion.div key="arsenal" variants={viewContainerVariants} initial="hidden" animate="show" exit="exit" className="space-y-6">
          <motion.div variants={viewItemVariants} className="border-b border-[#4A5568]/30 pb-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#8B0000] tracking-widest uppercase font-bold">
              <Swords className="w-4 h-4" />
              <span>COMBAT & CAPABILITY DIRECTORY</span>
            </div>
            <h2 className="text-3xl font-headline font-bold text-[#E2E8F0] mt-1">
              {character.name.toUpperCase()}'S ARSENAL
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {character.arsenal.map((item, idx) => (
              <motion.div variants={viewItemVariants} key={idx} className="p-5 bg-[#121214] border border-[#4A5568]/40 space-y-3 relative group hover:border-[#8B0000] transition-colors">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-[#94A3B8] tracking-widest uppercase font-semibold">
                    {item.type}
                  </span>
                  <span className="px-2 py-0.5 bg-[#8B0000]/20 border border-[#8B0000] text-[#8B0000] text-xs font-mono font-bold tracking-widest">
                    {item.rating}
                  </span>
                </div>

                <h3 className="text-xl font-headline font-bold text-[#E2E8F0] group-hover:text-[#8B0000] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-mono text-[#CBD5E1] leading-relaxed">
                  {item.description}
                </p>
                <div className="gothic-corner-bl !w-2 !h-2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ARCHIVE VIEW */}
      {activeTab === 'ARCHIVE' && (
       <motion.div key="archive" variants={viewContainerVariants} initial="hidden" animate="show" exit="exit" className="space-y-8">
          <motion.div variants={viewItemVariants} className="border-b border-[#4A5568]/30 pb-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#8B0000] tracking-widest uppercase font-bold">
              <Archive className="w-4 h-4" />
              <span>RESTRICTED ARCHIVE DATABASE</span>
            </div>
            <h2 className="text-3xl font-headline font-bold text-[#E2E8F0] mt-1">
              VICTORIAN OCCULT & MISSION FILES
            </h2>
          </motion.div>

          {/* STORY ARC EXPANSION LAUNCHER CARDS */}
          <motion.div variants={viewItemVariants} className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#8B7355] tracking-widest uppercase font-bold">
              <Sparkles className="w-4 h-4 text-[#8B7355]" />
              <span>FEATURED STORY ARCS // MAJOR INVESTIGATIONS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Weston College Launcher */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                onClick={() => setActiveTab && setActiveTab('WESTON_COLLEGE')}
                className="p-6 bg-[#121214] border-2 border-[#7A1F1F] hover:border-[#8B7355] cursor-pointer relative space-y-4 shadow-[0_0_20px_rgba(122,31,31,0.25)] transition-all group"
              >
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 bg-[#7A1F1F]/30 border border-[#7A1F1F] text-[#E2E8F0] font-mono text-[10px] tracking-widest uppercase font-bold flex items-center space-x-1">
                    <GraduationCap className="w-3.5 h-3.5 text-[#8B7355]" />
                    <span>PUBLIC SCHOOL ARC</span>
                  </span>
                  <span className="text-xs font-mono text-[#8B7355]">1889</span>
                </div>

                <div>
                  <h3 className="text-2xl font-headline font-bold text-[#E2E8F0] group-hover:text-[#8B7355] transition-colors">
                    WESTON COLLEGE INFILTRATION
                  </h3>
                  <p className="text-xs font-mono text-[#94A3B8] mt-1">Oxfordshire, England // Sapphire Owl Alias</p>
                </div>

                <p className="text-sm font-subhead text-[#CBD5E1] line-clamp-3 leading-relaxed">
                  {ARCS_DATA.WESTON_COLLEGE.missionBrief}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-[#4A5568]/30">
                  <span className="text-xs font-mono text-[#8B7355] tracking-widest uppercase font-bold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                    <span>ACCESS DOSSIER</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[10px] font-mono text-[#94A3B8]">4 HOUSES // P4 CONSPIRACY</span>
                </div>
                <div className="gothic-corner-tl !w-2 !h-2 !top-[-17px]" />
                <div className="gothic-corner-br !w-2 !h-2" />
              </motion.div>

              {/* Wolf's Gorge Launcher */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                onClick={() => setActiveTab && setActiveTab('WOLFS_GORGE')}
                className="p-6 bg-[#121214] border-2 border-[#1B4D3E] hover:border-[#9ACD32] cursor-pointer relative space-y-4 shadow-[0_0_20px_rgba(27,77,62,0.3)] transition-all group"
              >
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 bg-[#1B4D3E]/40 border border-[#1B4D3E] text-[#9ACD32] font-mono text-[10px] tracking-widest uppercase font-bold flex items-center space-x-1">
                    <TreePine className="w-3.5 h-3.5 text-[#9ACD32]" />
                    <span>EMERALD WITCH ARC</span>
                  </span>
                  <span className="text-xs font-mono text-[#9ACD32]">WINTER 1889</span>
                </div>

                <div>
                  <h3 className="text-2xl font-headline font-bold text-[#E2E8F0] group-hover:text-[#9ACD32] transition-colors">
                    OPERATION WOLF'S GORGE
                  </h3>
                  <p className="text-xs font-mono text-[#94A3B8] mt-1">Wolfsschlucht, Black Forest, Germany</p>
                </div>

                <p className="text-sm font-subhead text-[#CBD5E1] line-clamp-3 leading-relaxed">
                  {ARCS_DATA.WOLFS_GORGE.missionBrief}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-[#4A5568]/30">
                  <span className="text-xs font-mono text-[#9ACD32] tracking-widest uppercase font-bold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                    <span>ACCESS DOSSIER</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[10px] font-mono text-[#94A3B8]">SULFUR GARDEN // WEREWOLVES</span>
                </div>
                <div className="gothic-corner-tr !w-2 !h-2 !top-[-17px]" />
                <div className="gothic-corner-bl !w-2 !h-2" />
              </motion.div>

              {/* Noah's Ark Circus Launcher */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                onClick={() => setActiveTab && setActiveTab('NOAHS_ARK')}
                className="p-6 bg-[#121214] border-2 border-[#5C1A1B] hover:border-[#B8954F] cursor-pointer relative space-y-4 shadow-[0_0_20px_rgba(92,26,27,0.35)] transition-all group"
              >
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 bg-[#5C1A1B]/40 border border-[#5C1A1B] text-[#B8954F] font-mono text-[10px] tracking-widest uppercase font-bold flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#B8954F]" />
                    <span>BOOK OF CIRCUS</span>
                  </span>
                  <span className="text-xs font-mono text-[#B8954F]">SPRING 1889</span>
                </div>

                <div>
                  <h3 className="text-2xl font-headline font-bold text-[#E2E8F0] group-hover:text-[#B8954F] transition-colors">
                    NOAH'S ARK CIRCUS
                  </h3>
                  <p className="text-xs font-mono text-[#94A3B8] mt-1">Traveling Circus // Kelvin Estate</p>
                </div>

                <p className="text-sm font-subhead text-[#CBD5E1] line-clamp-3 leading-relaxed">
                  {ARCS_DATA.NOAHS_ARK.missionBrief}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-[#4A5568]/30">
                  <span className="text-xs font-mono text-[#B8954F] tracking-widest uppercase font-bold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                    <span>ACCESS DOSSIER</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[10px] font-mono text-[#94A3B8]">FIRST TIER // PROSTHETICS</span>
                </div>
                <div className="gothic-corner-tl !w-2 !h-2 !top-[-17px]" />
                <div className="gothic-corner-br !w-2 !h-2" />
              </motion.div>

              {/* Manor Murders Launcher */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                onClick={() => setActiveTab && setActiveTab('MANOR_MURDERS')}
                className="p-6 bg-[#121214] border-2 border-[#3E0000] hover:border-[#D4A373] cursor-pointer relative space-y-4 shadow-[0_0_20px_rgba(62,0,0,0.4)] transition-all group"
              >
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 bg-[#3E0000]/50 border border-[#8B0000] text-[#D4A373] font-mono text-[10px] tracking-widest uppercase font-bold flex items-center space-x-1">
                    <FileText className="w-3.5 h-3.5 text-[#D4A373]" />
                    <span>BOOK OF MURDER</span>
                  </span>
                  <span className="text-xs font-mono text-[#D4A373]">WINTER 1889</span>
                </div>

                <div>
                  <h3 className="text-2xl font-headline font-bold text-[#E2E8F0] group-hover:text-[#D4A373] transition-colors">
                    MANOR MURDER CASE
                  </h3>
                  <p className="text-xs font-mono text-[#94A3B8] mt-1">Phantomhive Estate // Locked Room</p>
                </div>

                <p className="text-sm font-subhead text-[#CBD5E1] line-clamp-3 leading-relaxed">
                  {ARCS_DATA.MANOR_MURDERS.missionBrief}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-[#4A5568]/30">
                  <span className="text-xs font-mono text-[#D4A373] tracking-widest uppercase font-bold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                    <span>ACCESS DOSSIER</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[10px] font-mono text-[#94A3B8]">CLUE BOARD // RATHBONE</span>
                </div>
                <div className="gothic-corner-tr !w-2 !h-2 !top-[-17px]" />
                <div className="gothic-corner-bl !w-2 !h-2" />
              </motion.div>

              {/* The Campania Incident Launcher */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                onClick={() => setActiveTab && setActiveTab('THE_CAMPANIA')}
                className="p-6 bg-[#121214] border-2 border-[#0F1C2E] hover:border-[#8B7355] cursor-pointer relative space-y-4 shadow-[0_0_20px_rgba(15,28,46,0.5)] transition-all group"
              >
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 bg-[#0F1C2E]/60 border border-[#0F1C2E] text-[#8B7355] font-mono text-[10px] tracking-widest uppercase font-bold flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#8B7355]" />
                    <span>BOOK OF ATLANTIC</span>
                  </span>
                  <span className="text-xs font-mono text-[#8B7355]">APRIL 1889</span>
                </div>

                <div>
                  <h3 className="text-2xl font-headline font-bold text-[#E2E8F0] group-hover:text-[#8B7355] transition-colors">
                    THE CAMPANIA INCIDENT
                  </h3>
                  <p className="text-xs font-mono text-[#94A3B8] mt-1">RMS Campania // Atlantic Ocean</p>
                </div>

                <p className="text-sm font-subhead text-[#CBD5E1] line-clamp-3 leading-relaxed">
                  {ARCS_DATA.THE_CAMPANIA.missionBrief}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-[#4A5568]/30">
                  <span className="text-xs font-mono text-[#8B7355] tracking-widest uppercase font-bold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                    <span>ACCESS DOSSIER</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[10px] font-mono text-[#94A3B8]">BIZARRE DOLLS // UNDERTAKER</span>
                </div>
                <div className="gothic-corner-tl !w-2 !h-2 !top-[-17px]" />
                <div className="gothic-corner-br !w-2 !h-2" />
              </motion.div>
            </div>
          </motion.div>

          {/* Standard Occult Files Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
            <motion.div variants={viewItemVariants} className="space-y-2">
              <span className="text-xs font-mono text-[#718096] tracking-widest uppercase block mb-1">
                STANDALONE DOSSIER INDEX
              </span>
              {ARCHIVE_FILES.map((file) => (
                <button
                  key={file.code}
                  onClick={() => setSelectedArchive(file)}
                  className={`w-full p-4 text-left border transition-all duration-300 ${
                    selectedArchive.code === file.code
                      ? 'bg-[#8B0000]/20 border-[#8B0000] text-[#E2E8F0]'
                      : 'bg-[#121214] border-[#4A5568]/30 text-[#718096] hover:text-[#E2E8F0] hover:border-[#4A5568]'
                  }`}
                >
                  <span className="text-[9px] font-mono text-[#8B0000] block">{file.code}</span>
                  <h4 className="text-sm font-mono font-bold mt-0.5">{file.title}</h4>
                </button>
              ))}
            </motion.div>

            <motion.div variants={viewItemVariants} className="lg:col-span-2 p-6 bg-[#121214] border border-[#8B0000] relative space-y-4">
              <div className="flex justify-between items-start border-b border-[#4A5568]/30 pb-3">
                <div>
                  <span className="text-xs font-mono text-[#8B0000] font-bold">{selectedArchive.code}</span>
                  <h3 className="text-xl font-headline font-bold text-[#E2E8F0]">{selectedArchive.title}</h3>
                </div>
                <span className="px-2 py-1 bg-[#8B0000]/30 text-[#E2E8F0] text-[9px] font-mono tracking-widest border border-[#8B0000]">
                  {selectedArchive.classification}
                </span>
              </div>

              <div className="space-y-2 font-mono text-xs text-[#E2E8F0]">
                <p><span className="text-[#718096]">DATE RECORDED:</span> {selectedArchive.date}</p>
                <p><span className="text-[#718096]">CLEARANCE:</span> LEVEL 5 (ROYAL WATCHDOG ONLY)</p>
                <div className="p-4 bg-[#0A0A0A] border border-[#4A5568]/40 mt-4 leading-relaxed font-subhead text-sm text-[#E2E8F0]">
                  {selectedArchive.summary}
                </div>
              </div>
              <div className="gothic-corner-tr !w-3 !h-3 !top-[-17px]" />
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* INVENTORY VIEW */}
      {activeTab === 'INVENTORY' && (
       <motion.div key="inventory" variants={viewContainerVariants} initial="hidden" animate="show" exit="exit" className="space-y-6">
          <motion.div variants={viewItemVariants} className="border-b border-[#4A5568]/30 pb-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#8B0000] tracking-widest uppercase font-bold">
              <Package className="w-4 h-4" />
              <span>ESTATE INVENTORY INSPECTION</span>
            </div>
            <h2 className="text-3xl font-headline font-bold text-[#E2E8F0] mt-1">
              ITEMIZED VAULT REGISTER
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {character.inventory.map((item, idx) => (
              <motion.div variants={viewItemVariants} key={idx} className="p-5 bg-[#121214] border border-[#4A5568]/40 relative group hover:border-[#8B0000] transition-colors">
                <span className="text-xs font-mono text-[#8B0000] font-bold block">ITEM #00{idx + 1}</span>
                <h4 className="text-lg font-headline font-bold text-[#E2E8F0] mt-1">{item.item}</h4>
                <p className="text-sm font-mono text-[#CBD5E1] mt-2">{item.detail}</p>
                <div className="gothic-corner-tl !w-2 !h-2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* MEMORIES VIEW */}
      {activeTab === 'MEMORIES' && (
         <motion.div key="memories" variants={viewContainerVariants} initial="hidden" animate="show" exit="exit" className="space-y-6">
          <motion.div variants={viewItemVariants} className="border-b border-[#4A5568]/30 pb-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#8B0000] tracking-widest uppercase font-bold">
              <History className="w-4 h-4" />
              <span>FLASHBACK RECOLLECTIONS</span>
            </div>
            <h2 className="text-3xl font-headline font-bold text-[#E2E8F0] mt-1">
              CINEMATIC MEMORY FRAGMENTS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MEMORIES_DATA.map((mem, idx) => (
              <motion.div variants={viewItemVariants} key={idx} className="p-6 bg-[#121214] border border-[#8B0000]/50 relative space-y-3">
                <div className="flex justify-between items-center">
                  <span className="px-2 py-0.5 bg-[#8B0000] text-white font-mono text-xs font-bold">
                    YEAR {mem.year}
                  </span>
                  <span className="text-[10px] font-mono text-[#94A3B8] tracking-widest uppercase">
                    {mem.tag}
                  </span>
                </div>

                <h3 className="text-xl font-headline font-bold text-[#E2E8F0]">{mem.title}</h3>
                <p className="text-xs font-mono text-[#8B0000]">{mem.subtitle}</p>
                <p className="text-sm font-subhead italic text-[#CBD5E1] leading-relaxed">
                  "{mem.description}"
                </p>
                <div className="gothic-corner-tr !w-2 !h-2 !top-[-12px]" />
                <div className="gothic-corner-bl !w-2 !h-2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      </AnimatePresence>
    </div>
  );
}
