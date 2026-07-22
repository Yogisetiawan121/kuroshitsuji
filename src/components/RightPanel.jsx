import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Activity, Package, Quote, Scroll } from 'lucide-react';

export default function RightPanel({ character, onOpenContract }) {
  return (
    <aside className="w-full lg:w-[350px] shrink-0 p-4 lg:p-6 bg-[#0A0A0A]/90 border-t lg:border-t-0 lg:border-l border-[#4A5568]/30 flex flex-col space-y-6 relative z-10 backdrop-blur-md">
      
      {/* Panel Header */}
      <div className="flex items-center justify-between border-b border-[#4A5568]/40 pb-3">
        <div className="flex items-center space-x-2">
          <Shield className="w-4 h-4 text-[#8B0000]" />
          <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-[#E2E8F0] font-bold">
            TACTICAL READOUT
          </h2>
        </div>
        <span className="text-[9px] font-mono text-[#718096] tracking-widest uppercase">
          SYS.V4.09
        </span>
      </div>

      {/* Section 1: Tactical Specifications */}
      <div className="space-y-3">
        <h3 className="text-[10px] font-mono tracking-[0.2em] text-[#8B0000] uppercase font-bold flex items-center space-x-1.5">
          <span className="w-1.5 h-1.5 bg-[#8B0000] inline-block" />
          <span>TACTICAL SPECIFICATIONS</span>
        </h3>

        <div className="border border-[#4A5568]/30 bg-[#121214]/80 divide-y divide-[#4A5568]/20 text-xs font-mono">
          {character.specifications.map((spec, idx) => (
            <div key={idx} className="p-2.5 flex flex-col sm:flex-row justify-between sm:items-center gap-1 hover:bg-white/[0.02] transition-colors">
              <span className="text-[10px] text-[#718096] tracking-wider uppercase shrink-0">
                {spec.label}
              </span>
              <span className="text-[11px] text-[#E2E8F0] font-medium tracking-wide sm:text-right">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Attribute Matrix */}
      <div className="space-y-3">
        <h3 className="text-[10px] font-mono tracking-[0.2em] text-[#8B0000] uppercase font-bold flex items-center space-x-1.5">
          <Activity className="w-3 h-3 text-[#8B0000]" />
          <span>ATTRIBUTE MATRIX</span>
        </h3>

        <div className="p-3 border border-[#4A5568]/30 bg-[#121214]/80 space-y-3">
          {character.attributeMatrix.map((attr, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between items-center text-[10px] font-mono tracking-widest">
                <span className="text-[#E2E8F0]">{attr.name}</span>
                <span className="text-[#8B0000] font-bold">{attr.value}</span>
              </div>
              
              <div className="h-1.5 w-full bg-[#0A0A0A] border border-[#4A5568]/40 overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${attr.percent}%` }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="h-full bg-gradient-to-r from-[#4A5568] via-[#8B0000] to-[#B22222] shadow-[0_0_8px_#8B0000]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Estate Inventory */}
      <div className="space-y-3">
        <h3 className="text-[10px] font-mono tracking-[0.2em] text-[#8B0000] uppercase font-bold flex items-center space-x-1.5">
          <Package className="w-3 h-3 text-[#8B0000]" />
          <span>ESTATE INVENTORY</span>
        </h3>

        <ul className="border border-[#4A5568]/30 bg-[#121214]/80 divide-y divide-[#4A5568]/20">
          {character.inventory.map((inv, idx) => (
            <li key={idx} className="p-2.5 flex items-start space-x-2 text-xs font-mono hover:bg-white/[0.02] transition-colors">
              <span className="text-[#8B0000] mt-0.5">•</span>
              <div className="flex-1 min-w-0">
                <p className="text-[#E2E8F0] text-[11px] truncate">{inv.item}</p>
                <p className="text-[#718096] text-[9px] tracking-wider">{inv.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 4: Philosophical Fragment */}
      <div className="relative p-3.5 bg-[#121214] border-t-2 border-t-[#8B0000] border-x border-b border-[#4A5568]/30 space-y-2">
        <div className="flex items-center space-x-1.5 text-[9px] font-mono text-[#8B0000] tracking-widest uppercase">
          <Quote className="w-3 h-3" />
          <span>PHILOSOPHICAL FRAGMENT</span>
        </div>
        <p className="text-xs font-subhead italic text-[#E2E8F0] leading-relaxed">
          "{character.philosophyFragment}"
        </p>
        <div className="gothic-corner-bl !w-1.5 !h-1.5" />
      </div>

      {/* Inspect Faustian Contract Trigger Button */}
      <button
        onClick={onOpenContract}
        className="w-full py-3 px-4 bg-[#8B0000]/20 hover:bg-[#8B0000] border border-[#8B0000] text-[#E2E8F0] font-mono text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(139,0,0,0.2)] group"
      >
        <Scroll className="w-4 h-4 text-[#8B0000] group-hover:text-white transition-colors" />
        <span>INSPECT FAUSTIAN PACT</span>
      </button>

    </aside>
  );
}
