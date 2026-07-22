import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Layers, Maximize2, UserCheck } from 'lucide-react';

export default function CenterStage({ 
  character, 
  activeCharacter, 
  setActiveCharacter,
  onOpenContract 
}) {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const currentImage = character.images[selectedImgIndex] || character.images[0];

  return (
    <div className="flex-1 min-w-0 p-4 lg:p-8 flex flex-col justify-between space-y-8 relative z-10">
      
      {/* Top Header & Character Selector Toggle */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#4A5568]/30 pb-4">
        <div>
          <div className="flex items-center space-x-2 text-[10px] font-mono tracking-[0.2em] text-[#718096]">
            <span className="w-2 h-2 rounded-full bg-[#8B0000] animate-ping" />
            <span>RESTRICTED OCCULT FILE // ARCHIVE 1889</span>
          </div>
          <p className="text-xs font-jp text-[#718096] mt-0.5 tracking-wider">
            {character.japaneseName}
          </p>
        </div>

        {/* Character Switcher */}
        <div className="flex items-center space-x-1 p-1 bg-[#121214] border border-[#4A5568]/50 rounded-none shadow-inner">
          <button
            onClick={() => {
              setActiveCharacter('sebastian');
              setSelectedImgIndex(0);
            }}
            className={`flex items-center space-x-2 px-4 py-1.5 text-xs font-mono tracking-[0.2em] transition-all duration-300 ${
              activeCharacter === 'sebastian'
                ? 'bg-[#8B0000] text-white shadow-[0_0_15px_rgba(139,0,0,0.5)] border border-[#8B0000]'
                : 'text-[#718096] hover:text-[#E2E8F0] hover:bg-white/[0.03]'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>SEBASTIAN</span>
          </button>
          
          <button
            onClick={() => {
              setActiveCharacter('ciel');
              setSelectedImgIndex(0);
            }}
            className={`flex items-center space-x-2 px-4 py-1.5 text-xs font-mono tracking-[0.2em] transition-all duration-300 ${
              activeCharacter === 'ciel'
                ? 'bg-[#8B0000] text-white shadow-[0_0_15px_rgba(139,0,0,0.5)] border border-[#8B0000]'
                : 'text-[#718096] hover:text-[#E2E8F0] hover:bg-white/[0.03]'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>CIEL</span>
          </button>
        </div>
      </div>

      {/* Main Narrative Header Zone */}
      <AnimatePresence mode="wait">
        <motion.div
          key={character.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {/* Gothic Headline */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold tracking-wider leading-tight">
              <span className="text-[#E2E8F0]">{character.name} </span>
              <span className="text-[#8B0000] drop-shadow-[0_0_10px_rgba(139,0,0,0.4)]">
                {character.surname}
              </span>
            </h1>

            {/* Subtitle rank with thin decorative line */}
            <div className="flex items-center space-x-4 mt-3">
              <div className="h-[1px] w-12 bg-[#8B0000]" />
              <span className="text-xs sm:text-sm font-mono tracking-[0.2em] text-[#8B0000] font-semibold">
                {character.rank}
              </span>
              <div className="h-[1px] flex-1 bg-[#4A5568]/40" />
              <span className="text-xs font-mono text-[#718096] hidden md:inline tracking-widest">
                CONTRACT NO: {character.contractNo}
              </span>
            </div>
          </div>

          {/* Epigraph / Quote in Cormorant Garamond Italic */}
          <blockquote className="relative p-4 sm:p-6 bg-[#121214]/60 border-l-2 border-[#8B0000] backdrop-blur-sm">
            <p className="text-lg sm:text-xl font-subhead italic text-[#E2E8F0] leading-relaxed">
              "{character.quote}"
            </p>
            <div className="gothic-corner-tr !w-2 !h-2" />
            <div className="gothic-corner-bl !w-2 !h-2" />
          </blockquote>

          {/* Character Portrait Area */}
          <div className="relative group">
            {/* Ornate Frame Container */}
            <div className="relative ornate-frame bg-[#0a0a0a] rounded-none overflow-hidden group">
              {/* Corner Ornaments */}
              <div className="gothic-corner-tl" />
              <div className="gothic-corner-tr" />
              <div className="gothic-corner-bl" />
              <div className="gothic-corner-br" />

              {/* Main Image with inner shadow & grayscale-to-color transition */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={currentImage.url}
                  alt={character.name}
                  onError={(e) => {
                    // Fallback to dark gothic placeholder if any file path is unavailable
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop';
                  }}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                />
                
                {/* Red undertone & subtle vignette inner shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute inset-0 bg-[#8B0000]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Hover overlay hint */}
                <button
                  onClick={() => setIsZoomed(true)}
                  className="absolute top-4 right-4 p-2 bg-[#0A0A0A]/80 border border-[#8B0000] text-[#E2E8F0] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#8B0000]"
                  title="Expand Dossier Image"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Image Caption overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end pointer-events-none">
                  <div className="bg-[#0A0A0A]/80 border border-[#4A5568]/60 px-3 py-1 text-[10px] font-mono text-[#E2E8F0] tracking-widest backdrop-blur-md">
                    {currentImage.caption}
                  </div>
                  <span className="text-[10px] font-mono text-[#718096] tracking-widest">
                    IMAGE {selectedImgIndex + 1} OF {character.images.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Thumbnail Selector */}
            <div className="flex items-center space-x-3 mt-3 overflow-x-auto no-scrollbar py-1">
              <span className="text-[10px] font-mono text-[#718096] tracking-widest shrink-0 uppercase flex items-center space-x-1">
                <Layers className="w-3 h-3 text-[#8B0000]" />
                <span>DOSSIER STILLS:</span>
              </span>

              {character.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImgIndex(idx)}
                  className={`relative w-16 h-10 shrink-0 border overflow-hidden transition-all duration-300 ${
                    selectedImgIndex === idx
                      ? 'border-[#8B0000] shadow-[0_0_10px_rgba(139,0,0,0.6)] scale-105'
                      : 'border-[#4A5568]/40 opacity-50 hover:opacity-100 hover:border-[#8B0000]/60'
                  }`}
                >
                  <img 
                    src={img.url} 
                    alt="" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop';
                    }}
                    className="w-full h-full object-cover grayscale" 
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Metadata Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 bg-[#121214] border border-[#4A5568]/30 relative">
              <span className="text-[9px] font-mono text-[#718096] tracking-[0.2em] block uppercase">
                CONTRACT STATUS
              </span>
              <span className="text-xs font-mono font-bold text-[#8B0000] tracking-widest mt-1 block">
                {character.metadata.contractStatus}
              </span>
              <div className="gothic-corner-tl !w-1.5 !h-1.5" />
            </div>

            <div className="p-3 bg-[#121214] border border-[#4A5568]/30 relative">
              <span className="text-[9px] font-mono text-[#718096] tracking-[0.2em] block uppercase">
                SOUL APPRAISAL
              </span>
              <span className="text-xs font-mono font-bold text-[#E2E8F0] tracking-widest mt-1 block">
                {character.metadata.soulAppraisal}
              </span>
              <div className="gothic-corner-tr !w-1.5 !h-1.5" />
            </div>

            <div className="p-3 bg-[#121214] border border-[#4A5568]/30 relative">
              <span className="text-[9px] font-mono text-[#718096] tracking-[0.2em] block uppercase">
                CURRENT MASTER
              </span>
              <span className="text-xs font-mono font-bold text-[#8B0000] tracking-widest mt-1 block">
                {character.metadata.currentMaster}
              </span>
              <div className="gothic-corner-br !w-1.5 !h-1.5" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Image Lightbox Modal */}
      {isZoomed && (
        <div 
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 cursor-pointer"
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] ornate-frame p-2 bg-[#0A0A0A]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={currentImage.url} 
              alt="" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop';
              }}
              className="max-w-full max-h-[80vh] object-contain" 
            />
            <p className="text-center text-xs font-mono text-[#E2E8F0] tracking-widest mt-2">
              {currentImage.caption} // RESTRICTED ARCHIVE EXPOSURE
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
