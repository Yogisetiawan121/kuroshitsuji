import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Activity, Package, Quote, Scroll, HelpCircle, MapPin, AlertCircle, FileSearch } from 'lucide-react';
import { ARCS_DATA } from '../data/arcData';

const panelVariants = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1, 
    x: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.2, type: "spring", stiffness: 80, damping: 20 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
};

export default function RightPanel({ character, onOpenContract, activeTab = 'STATUS' }) {
  const isArcTab = activeTab === 'WESTON_COLLEGE' || activeTab === 'WOLFS_GORGE' || activeTab === 'NOAHS_ARK' || activeTab === 'MANOR_MURDERS' || activeTab === 'THE_CAMPANIA';
  const arcKey = isArcTab ? activeTab : 'WESTON_COLLEGE';
  const arc = ARCS_DATA[arcKey] || ARCS_DATA.WESTON_COLLEGE;

  return (
    <motion.aside 
      variants={panelVariants}
      initial="hidden"
      animate="show"
      className="w-full lg:w-[380px] shrink-0 p-4 lg:p-6 pb-28 lg:pb-32 bg-[#0A0A0A]/90 border-t lg:border-t-0 lg:border-l border-[#4A5568]/30 flex flex-col space-y-6 relative z-10 backdrop-blur-md min-h-full"
    >
      
      {/* Panel Header */}
      <motion.div variants={itemVariants} className="flex items-center justify-between border-b border-[#4A5568]/40 pb-3">
        <div className="flex items-center space-x-2">
          <Shield className="w-4.5 h-4.5" style={{ color: isArcTab ? arc.badgeColor : '#8B0000' }} />
          <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-[#E2E8F0] font-bold">
            {isArcTab ? 'ARC TACTICAL DATA' : 'TACTICAL READOUT'}
          </h2>
        </div>
        <span className="text-xs font-mono text-[#718096] tracking-widest uppercase">
          {isArcTab ? arc.classification.split('/')[0] : 'SYS.V4.09'}
        </span>
      </motion.div>

      {isArcTab ? (
        <>
          {/* Arc Tactical Specs */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase font-bold flex items-center space-x-1.5" style={{ color: arc.badgeColor }}>
              <span className="w-1.5 h-1.5 inline-block" style={{ backgroundColor: arc.badgeColor }} />
              <span>ARC SPECIFICATIONS</span>
            </h3>

            <div className="border border-[#4A5568]/30 bg-[#121214]/80 divide-y divide-[#4A5568]/20 text-xs font-mono">
              {arc.tacticalSpecs.map((spec, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="p-2.5 flex flex-col sm:flex-row justify-between sm:items-center gap-1 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-xs text-[#718096] tracking-wider uppercase shrink-0">
                    {spec.label}
                  </span>
                  <span className="text-xs text-[#E2E8F0] font-bold tracking-wide sm:text-right">
                    {spec.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Active Arc Mysteries */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase font-bold flex items-center space-x-1.5" style={{ color: arc.badgeColor }}>
              <HelpCircle className="w-3.5 h-3.5" style={{ color: arc.badgeColor }} />
              <span>KEY MYSTERIES & CONSPIRACIES</span>
            </h3>

            <div className="p-3 border border-[#4A5568]/30 bg-[#121214]/80 space-y-2.5">
              {arc.mysteries.map((m, idx) => (
                <div key={idx} className="p-2 border-l-2 bg-[#0A0A0A] space-y-1" style={{ borderLeftColor: arc.badgeColor }}>
                  <p className="text-xs font-mono font-bold text-[#E2E8F0]">{m.title}</p>
                  <p className="text-[10px] font-mono tracking-widest uppercase font-semibold" style={{ color: arc.badgeColor }}>
                    STATUS: {m.status}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Arc Location & Time Brief */}
          <motion.div variants={itemVariants} className="relative p-4 bg-[#121214] border-t-2 border-x border-b border-[#4A5568]/30 space-y-2" style={{ borderTopColor: arc.badgeColor }}>
            <div className="flex items-center space-x-1.5 text-xs font-mono tracking-widest uppercase font-bold" style={{ color: arc.badgeColor }}>
              <MapPin className="w-3.5 h-3.5" />
              <span>THEATER OF OPERATIONS</span>
            </div>
            <p className="text-sm font-subhead italic text-[#E2E8F0] leading-relaxed">
              "{arc.location} — {arc.time}"
            </p>
            <div className="gothic-corner-bl !w-1.5 !h-1.5" />
          </motion.div>

          {/* Open Pact Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={onOpenContract}
            className="w-full py-3 px-4 bg-[#8B0000]/20 hover:bg-[#8B0000] border border-[#8B0000] text-[#E2E8F0] font-mono text-xs tracking-[0.2em] uppercase transition-colors duration-300 flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(139,0,0,0.2)] group"
          >
            <Scroll className="w-4 h-4 text-[#8B0000] group-hover:text-white transition-colors" />
            <span>INSPECT FAUSTIAN PACT</span>
          </motion.button>
        </>
      ) : (
        <>
          {/* Section 1: Tactical Specifications */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="text-xs font-mono tracking-[0.2em] text-[#8B0000] uppercase font-bold flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 bg-[#8B0000] inline-block" />
              <span>TACTICAL SPECIFICATIONS</span>
            </h3>

            <div className="border border-[#4A5568]/30 bg-[#121214]/80 divide-y divide-[#4A5568]/20 text-xs font-mono">
              {character.specifications.map((spec, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="p-2.5 flex flex-col sm:flex-row justify-between sm:items-center gap-1 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-xs text-[#718096] tracking-wider uppercase shrink-0">
                    {spec.label}
                  </span>
                  <span className="text-xs text-[#E2E8F0] font-bold tracking-wide sm:text-right">
                    {spec.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section 2: Attribute Matrix */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="text-xs font-mono tracking-[0.2em] text-[#8B0000] uppercase font-bold flex items-center space-x-1.5">
              <Activity className="w-3.5 h-3.5 text-[#8B0000]" />
              <span>ATTRIBUTE MATRIX</span>
            </h3>

            <div className="p-3 border border-[#4A5568]/30 bg-[#121214]/80 space-y-3">
              {character.attributeMatrix.map((attr, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center text-xs font-mono tracking-widest">
                    <span className="text-[#E2E8F0] font-bold">{attr.name}</span>
                    <span className="text-[#8B0000] font-bold">{attr.value}</span>
                  </div>
                  
                  <div className="h-1.5 w-full bg-[#0A0A0A] border border-[#4A5568]/40 overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${attr.percent}%` }}
                      transition={{ type: "spring", stiffness: 60, damping: 20, delay: idx * 0.1 + 0.3 }}
                      className="h-full bg-gradient-to-r from-[#4A5568] via-[#8B0000] to-[#B22222] shadow-[0_0_8px_#8B0000]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 3: Estate Inventory */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="text-xs font-mono tracking-[0.2em] text-[#8B0000] uppercase font-bold flex items-center space-x-1.5">
              <Package className="w-3.5 h-3.5 text-[#8B0000]" />
              <span>ESTATE INVENTORY</span>
            </h3>

            <ul className="border border-[#4A5568]/30 bg-[#121214]/80 divide-y divide-[#4A5568]/20">
              {character.inventory.map((inv, idx) => (
                <motion.li 
                  key={idx} 
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="p-2.5 flex items-start space-x-2 text-xs font-mono hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-[#8B0000] mt-0.5">•</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#E2E8F0] text-sm font-bold truncate">{inv.item}</p>
                    <p className="text-[#CBD5E1] text-xs tracking-wider mt-0.5">{inv.detail}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Section 4: Philosophical Fragment */}
          <motion.div variants={itemVariants} className="relative p-4 bg-[#121214] border-t-2 border-t-[#8B0000] border-x border-b border-[#4A5568]/30 space-y-2">
            <div className="flex items-center space-x-1.5 text-xs font-mono text-[#8B0000] tracking-widest uppercase font-bold">
              <Quote className="w-3.5 h-3.5" />
              <span>PHILOSOPHICAL FRAGMENT</span>
            </div>
            <p className="text-sm font-subhead italic text-[#E2E8F0] leading-relaxed">
              "{character.philosophyFragment}"
            </p>
            <div className="gothic-corner-bl !w-1.5 !h-1.5" />
          </motion.div>

          {/* Inspect Faustian Contract Trigger Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={onOpenContract}
            className="w-full py-3 px-4 bg-[#8B0000]/20 hover:bg-[#8B0000] border border-[#8B0000] text-[#E2E8F0] font-mono text-xs tracking-[0.2em] uppercase transition-colors duration-300 flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(139,0,0,0.2)] group"
          >
            <Scroll className="w-4 h-4 text-[#8B0000] group-hover:text-white transition-colors" />
            <span>INSPECT FAUSTIAN PACT</span>
          </motion.button>
        </>
      )}

    </motion.aside>
  );
}
