import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, 
  FileText, 
  Swords, 
  Archive, 
  Users, 
  Package, 
  History,
  ShieldAlert,
  Flame,
  Crown,
  Lock,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { ARCHIVE_FILES, MEMORIES_DATA, CONTRACT_TERMS } from '../data/characterData';

export default function SectionViews({ activeTab, character, onOpenContract }) {
  const [selectedArchive, setSelectedArchive] = useState(ARCHIVE_FILES[0]);
  const [activeMemory, setActiveMemory] = useState(MEMORIES_DATA[0]);

  return (
    <div className="flex-1 min-w-0 p-4 lg:p-8 relative z-10 overflow-y-auto max-h-[calc(100vh-60px)]">
      
      {/* LINEAGE & GENEALOGY VIEW */}
      {(activeTab === 'LINEAGE' || activeTab === 'GENEALOGY') && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="border-b border-[#4A5568]/30 pb-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#8B0000] tracking-widest uppercase font-bold">
              <GitBranch className="w-4 h-4" />
              <span>PHANTOMHIVE HOUSEHOLD // ARISTOCRACY RECORD</span>
            </div>
            <h2 className="text-3xl font-headline font-bold text-[#E2E8F0] mt-1">
              THE WATCHDOG BLOODLINE
            </h2>
            <p className="text-sm font-subhead italic text-[#718096] mt-1">
              "Behind the glittering facade of Victorian nobility lies the blood-stained mantle of the Queen's Watchdog."
            </p>
          </div>

          {/* Family Tree Hierarchy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-[#121214] border border-[#4A5568]/40 relative">
              <span className="text-[9px] font-mono text-[#718096] tracking-widest block uppercase">PREVIOUS HEAD</span>
              <h3 className="text-lg font-headline font-bold text-[#E2E8F0] mt-1">Vincent Phantomhive</h3>
              <p className="text-xs font-mono text-[#8B0000] mt-0.5">DECEASED (1888 FIRE)</p>
              <p className="text-xs font-subhead text-[#718096] mt-2">
                Former Queen's Watchdog. Murdered alongside Rachel Phantomhive on Ciel's 10th birthday.
              </p>
              <div className="gothic-corner-tl !w-2 !h-2" />
            </div>

            <div className="p-5 bg-[#160d0d] border-2 border-[#8B0000] relative shadow-[0_0_20px_rgba(139,0,0,0.3)]">
              <span className="text-[9px] font-mono text-[#8B0000] tracking-widest block uppercase font-bold">CURRENT HEAD</span>
              <h3 className="text-lg font-headline font-bold text-[#E2E8F0] mt-1">Earl Ciel Phantomhive</h3>
              <p className="text-xs font-mono text-[#8B0000] mt-0.5">BOUND TO DEMON 666-C</p>
              <p className="text-xs font-subhead text-[#E2E8F0] mt-2">
                10th Earl of Phantomhive. Owner of Funtom Corp. Traded soul to avenge his family.
              </p>
              <div className="gothic-corner-tr !w-2 !h-2" />
              <div className="gothic-corner-bl !w-2 !h-2" />
            </div>

            <div className="p-5 bg-[#121214] border border-[#4A5568]/40 relative">
              <span className="text-[9px] font-mono text-[#718096] tracking-widest block uppercase">INFERNAL EXECUTIVE</span>
              <h3 className="text-lg font-headline font-bold text-[#E2E8F0] mt-1">Sebastian Michaelis</h3>
              <p className="text-xs font-mono text-[#8B0000] mt-0.5">HEAD BUTLER / DEMON</p>
              <p className="text-xs font-subhead text-[#718096] mt-2">
                Demon bound by Faustian pact. Serves as head butler and absolute guardian of the lineage.
              </p>
              <div className="gothic-corner-br !w-2 !h-2" />
            </div>
          </div>

          {/* Phantomhive Manor Burned Legacy Record */}
          <div className="p-6 bg-[#121214] border border-[#8B0000]/40 relative">
            <div className="flex items-center space-x-3 text-[#8B0000] mb-2">
              <Flame className="w-5 h-5 animate-pulse" />
              <h4 className="text-sm font-mono tracking-widest font-bold uppercase">
                THE 1888 MANOR DESTRUCTION RECORD
              </h4>
            </div>
            <p className="text-sm font-subhead text-[#E2E8F0] leading-relaxed">
              On December 14, 1888, the Phantomhive Manor was engulfed in unholy flames. The Earl Vincent and Countess Rachel were slain, and their twin offspring abducted by a secret aristocratic cult. The estate was rebuilt in 1889 following Ciel's return with Sebastian Michaelis.
            </p>
          </div>
        </motion.div>
      )}

      {/* CONTRACT VIEW */}
      {activeTab === 'CONTRACT' && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="border-b border-[#4A5568]/30 pb-4 flex justify-between items-end">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CONTRACT_TERMS.clauses.map((c) => (
              <div key={c.no} className="p-5 bg-[#121214] border-l-4 border-[#8B0000] border-y border-r border-[#4A5568]/30 space-y-2 relative">
                <span className="text-xs font-mono text-[#8B0000] font-bold tracking-widest">
                  ARTICLE {c.no}
                </span>
                <h4 className="text-base font-headline font-bold text-[#E2E8F0]">{c.title}</h4>
                <p className="text-sm font-subhead italic text-[#718096] leading-relaxed">
                  "{c.text}"
                </p>
                <div className="gothic-corner-tr !w-1.5 !h-1.5" />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ARSENAL VIEW */}
      {activeTab === 'ARSENAL' && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="border-b border-[#4A5568]/30 pb-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#8B0000] tracking-widest uppercase font-bold">
              <Swords className="w-4 h-4" />
              <span>COMBAT & CAPABILITY DIRECTORY</span>
            </div>
            <h2 className="text-3xl font-headline font-bold text-[#E2E8F0] mt-1">
              {character.name.toUpperCase()}'S ARSENAL
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {character.arsenal.map((item, idx) => (
              <div key={idx} className="p-5 bg-[#121214] border border-[#4A5568]/40 space-y-3 relative group hover:border-[#8B0000] transition-colors">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono text-[#718096] tracking-widest uppercase">
                    {item.type}
                  </span>
                  <span className="px-2 py-0.5 bg-[#8B0000]/20 border border-[#8B0000] text-[#8B0000] text-[10px] font-mono font-bold tracking-widest">
                    {item.rating}
                  </span>
                </div>

                <h3 className="text-lg font-headline font-bold text-[#E2E8F0] group-hover:text-[#8B0000] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-[#718096] leading-relaxed">
                  {item.description}
                </p>
                <div className="gothic-corner-bl !w-2 !h-2" />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ARCHIVE VIEW */}
      {activeTab === 'ARCHIVE' && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="border-b border-[#4A5568]/30 pb-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#8B0000] tracking-widest uppercase font-bold">
              <Archive className="w-4 h-4" />
              <span>RESTRICTED ARCHIVE DATABASE</span>
            </div>
            <h2 className="text-3xl font-headline font-bold text-[#E2E8F0] mt-1">
              VICTORIAN OCCULT FILES
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
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
            </div>

            <div className="lg:col-span-2 p-6 bg-[#121214] border border-[#8B0000] relative space-y-4">
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
              <div className="gothic-corner-tr !w-3 !h-3" />
            </div>
          </div>
        </motion.div>
      )}

      {/* INVENTORY VIEW */}
      {activeTab === 'INVENTORY' && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="border-b border-[#4A5568]/30 pb-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#8B0000] tracking-widest uppercase font-bold">
              <Package className="w-4 h-4" />
              <span>ESTATE INVENTORY INSPECTION</span>
            </div>
            <h2 className="text-3xl font-headline font-bold text-[#E2E8F0] mt-1">
              ITEMIZED VAULT REGISTER
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {character.inventory.map((item, idx) => (
              <div key={idx} className="p-5 bg-[#121214] border border-[#4A5568]/40 relative group hover:border-[#8B0000] transition-colors">
                <span className="text-[9px] font-mono text-[#8B0000] block">ITEM #00{idx + 1}</span>
                <h4 className="text-base font-headline font-bold text-[#E2E8F0] mt-1">{item.item}</h4>
                <p className="text-xs font-mono text-[#718096] mt-2">{item.detail}</p>
                <div className="gothic-corner-tl !w-2 !h-2" />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* MEMORIES VIEW */}
      {activeTab === 'MEMORIES' && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="border-b border-[#4A5568]/30 pb-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#8B0000] tracking-widest uppercase font-bold">
              <History className="w-4 h-4" />
              <span>FLASHBACK RECOLLECTIONS</span>
            </div>
            <h2 className="text-3xl font-headline font-bold text-[#E2E8F0] mt-1">
              CINEMATIC MEMORY FRAGMENTS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MEMORIES_DATA.map((mem, idx) => (
              <div key={idx} className="p-6 bg-[#121214] border border-[#8B0000]/50 relative space-y-3">
                <div className="flex justify-between items-center">
                  <span className="px-2 py-0.5 bg-[#8B0000] text-white font-mono text-xs font-bold">
                    YEAR {mem.year}
                  </span>
                  <span className="text-[10px] font-mono text-[#718096] tracking-widest uppercase">
                    {mem.tag}
                  </span>
                </div>

                <h3 className="text-xl font-headline font-bold text-[#E2E8F0]">{mem.title}</h3>
                <p className="text-xs font-mono text-[#8B0000]">{mem.subtitle}</p>
                <p className="text-sm font-subhead italic text-[#718096] leading-relaxed">
                  "{mem.description}"
                </p>
                <div className="gothic-corner-tr !w-2 !h-2" />
                <div className="gothic-corner-bl !w-2 !h-2" />
              </div>
            ))}
          </div>
        </motion.div>
      )}

    </div>
  );
}
