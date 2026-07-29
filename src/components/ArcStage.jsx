import React, { useState, useEffect, useRef, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, 
  MapPin, 
  Clock, 
  Maximize2, 
  Layers
} from 'lucide-react';
import ScrambleText from './ScrambleText';
import { ARCS_DATA } from '../data/arcData';

// React.lazy code-split: each arc loads only when navigated to (~10KB each vs 52KB monolith)
const ArcWeston = React.lazy(() => import('./arcs/ArcWeston'));
const ArcWolfs = React.lazy(() => import('./arcs/ArcWolfs'));
const ArcCircus = React.lazy(() => import('./arcs/ArcCircus'));
const ArcMurder = React.lazy(() => import('./arcs/ArcMurder'));
const ArcCampania = React.lazy(() => import('./arcs/ArcCampania'));

const containerVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.05, duration: 0.3 }
  },
  exit: { 
    opacity: 0, 
    scale: 0.96, 
    y: -10,
    transition: { duration: 0.2, ease: 'easeIn' } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20, mass: 0.8 } }
};

// Skeleton fallback while lazy chunks load
function ArcSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 bg-[#121214] border border-[#4A5568]/20 w-3/4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-48 bg-[#121214] border border-[#4A5568]/20" />
        <div className="h-48 bg-[#121214] border border-[#4A5568]/20" />
      </div>
      <div className="h-32 bg-[#121214] border border-[#4A5568]/20" />
    </div>
  );
}

export default function ArcStage({ activeTab, onOpenContract, setActiveTab }) {
  const validArcKeys = ['WESTON_COLLEGE', 'WOLFS_GORGE', 'NOAHS_ARK', 'MANOR_MURDERS', 'THE_CAMPANIA'];
  const arcKey = validArcKeys.includes(activeTab) ? activeTab : 'WESTON_COLLEGE';
  const arc = ARCS_DATA[arcKey] || ARCS_DATA.WESTON_COLLEGE;

  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }, [activeTab]);

  const currentImage = arc.images[selectedImgIndex] || arc.images[0];

  const handleOpenZoom = (imgObj) => {
    setZoomedImage(imgObj);
    setIsZoomed(true);
  };

  return (
    <div ref={containerRef} className="flex-1 min-w-0 p-4 lg:p-8 flex flex-col space-y-8 relative z-10 overflow-y-auto max-h-[calc(100dvh-60px)] touch-scroll pb-28 lg:pb-32">
      
      {/* Top Dossier Header & Arc Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#4A5568]/30 pb-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono tracking-[0.2em] text-[#CBD5E1]">
            <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: arc.badgeColor }} />
            <span>TACTICAL STORY ARC // {arc.classification}</span>
          </div>
          <p className="text-sm font-mono text-[#94A3B8] mt-0.5 tracking-wider uppercase">
            {arc.subtitle}
          </p>
        </div>

        {/* Direct Arc Switcher Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {setActiveTab && (
            <>
              <button
                onClick={() => setActiveTab('WESTON_COLLEGE')}
                className={`px-3 py-1.5 font-mono text-[11px] tracking-widest uppercase border transition-all ${
                  activeTab === 'WESTON_COLLEGE'
                    ? 'bg-[#7A1F1F]/40 border-[#8B7355] text-[#E2E8F0] font-bold shadow-[0_0_10px_rgba(139,115,85,0.4)]'
                    : 'bg-[#121214] border-[#4A5568]/40 text-[#94A3B8] hover:text-[#E2E8F0] hover:border-[#8B7355]/60'
                }`}
              >
                WESTON
              </button>
              <button
                onClick={() => setActiveTab('WOLFS_GORGE')}
                className={`px-3 py-1.5 font-mono text-[11px] tracking-widest uppercase border transition-all ${
                  activeTab === 'WOLFS_GORGE'
                    ? 'bg-[#1B4D3E]/40 border-[#9ACD32] text-[#E2E8F0] font-bold shadow-[0_0_10px_rgba(154,205,50,0.4)]'
                    : 'bg-[#121214] border-[#4A5568]/40 text-[#94A3B8] hover:text-[#E2E8F0] hover:border-[#9ACD32]/60'
                }`}
              >
                WOLF'S GORGE
              </button>
              <button
                onClick={() => setActiveTab('NOAHS_ARK')}
                className={`px-3 py-1.5 font-mono text-[11px] tracking-widest uppercase border transition-all ${
                  activeTab === 'NOAHS_ARK'
                    ? 'bg-[#5C1A1B]/50 border-[#B8954F] text-[#E2E8F0] font-bold shadow-[0_0_10px_rgba(184,149,79,0.4)]'
                    : 'bg-[#121214] border-[#4A5568]/40 text-[#94A3B8] hover:text-[#E2E8F0] hover:border-[#B8954F]/60'
                }`}
              >
                CIRCUS
              </button>
              <button
                onClick={() => setActiveTab('MANOR_MURDERS')}
                className={`px-3 py-1.5 font-mono text-[11px] tracking-widest uppercase border transition-all ${
                  activeTab === 'MANOR_MURDERS'
                    ? 'bg-[#3E0000]/60 border-[#D4A373] text-[#E2E8F0] font-bold shadow-[0_0_10px_rgba(212,163,115,0.4)]'
                    : 'bg-[#121214] border-[#4A5568]/40 text-[#94A3B8] hover:text-[#E2E8F0] hover:border-[#D4A373]/60'
                }`}
              >
                MURDER
              </button>
              <button
                onClick={() => setActiveTab('THE_CAMPANIA')}
                className={`px-3 py-1.5 font-mono text-[11px] tracking-widest uppercase border transition-all ${
                  activeTab === 'THE_CAMPANIA'
                    ? 'bg-[#0F1C2E]/70 border-[#8B7355] text-[#E2E8F0] font-bold shadow-[0_0_10px_rgba(15,28,46,0.6)]'
                    : 'bg-[#121214] border-[#4A5568]/40 text-[#94A3B8] hover:text-[#E2E8F0] hover:border-[#8B7355]/60'
                }`}
              >
                ATLANTIC
              </button>
              <button
                onClick={() => setActiveTab('ARCHIVE')}
                className="px-3 py-1.5 font-mono text-[11px] tracking-widest uppercase border bg-[#121214] border-[#4A5568]/40 text-[#94A3B8] hover:text-[#8B0000] hover:border-[#8B0000]/60 transition-all flex items-center space-x-1"
              >
                <span>← ARCHIVE</span>
              </button>
            </>
          )}
        </div>
      </div>

      <AnimatePresence mode="sync">
        <motion.div
          key={arc.id}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="space-y-8"
        >
          {/* Headline Banner */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-headline font-bold tracking-wider leading-tight">
              <span className="text-[#E2E8F0]">
                <ScrambleText text={arc.title.split(' ')[0]} delay={100} duration={600} />{' '}
              </span>
              <span style={{ color: arc.badgeColor }} className="drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">
                <ScrambleText text={arc.title.split(' ').slice(1).join(' ')} delay={300} duration={800} />
              </span>
            </h1>

            {/* Subtitle Bar with Location & Time */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#E2E8F0]">
              <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-[#121214] border border-[#4A5568]/40">
                <MapPin className="w-3.5 h-3.5 text-[#8B0000]" />
                <span className="tracking-wider">{arc.location}</span>
              </div>

              <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-[#121214] border border-[#4A5568]/40">
                <Clock className="w-3.5 h-3.5 text-[#8B0000]" />
                <span className="tracking-wider">{arc.time}</span>
              </div>
            </div>
          </motion.div>

          {/* Mission Brief Box */}
          <motion.blockquote variants={itemVariants} className="relative p-5 sm:p-6 bg-[#121214]/95 border-l-4 space-y-2" style={{ borderLeftColor: arc.badgeColor }}>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest font-bold uppercase" style={{ color: arc.badgeColor }}>
              <ShieldAlert className="w-4 h-4" />
              <span>MISSION BRIEFING</span>
            </div>
            <p className="text-base sm:text-lg font-subhead italic text-[#E2E8F0] leading-relaxed">
              "{arc.missionBrief}"
            </p>
            <div className="gothic-corner-tr !w-2 !h-2 !top-[-9px]" />
          </motion.blockquote>

          {/* CODE-SPLIT ARC SUB-MODULES (React.lazy) */}
          <Suspense fallback={<ArcSkeleton />}>
            {arcKey === 'WESTON_COLLEGE' && (
              <ArcWeston arc={arc} itemVariants={itemVariants} handleOpenZoom={handleOpenZoom} setSelectedImgIndex={setSelectedImgIndex} />
            )}
            {arcKey === 'WOLFS_GORGE' && (
              <ArcWolfs arc={arc} itemVariants={itemVariants} handleOpenZoom={handleOpenZoom} />
            )}
            {arcKey === 'NOAHS_ARK' && (
              <ArcCircus arc={arc} itemVariants={itemVariants} handleOpenZoom={handleOpenZoom} setSelectedImgIndex={setSelectedImgIndex} />
            )}
            {arcKey === 'MANOR_MURDERS' && (
              <ArcMurder arc={arc} itemVariants={itemVariants} handleOpenZoom={handleOpenZoom} setSelectedImgIndex={setSelectedImgIndex} />
            )}
            {arcKey === 'THE_CAMPANIA' && (
              <ArcCampania arc={arc} itemVariants={itemVariants} handleOpenZoom={handleOpenZoom} setSelectedImgIndex={setSelectedImgIndex} />
            )}
          </Suspense>

          {/* Visual Stills / Media Gallery Frame */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="relative ornate-frame bg-[#0A0A0A] overflow-hidden">
              <div className="gothic-corner-tl" />
              <div className="gothic-corner-tr" />
              <div className="gothic-corner-bl" />
              <div className="gothic-corner-br" />

              <div className="relative aspect-[16/9] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={currentImage.url}
                  alt={arc.title}
                  className="w-30% h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80 pointer-events-none" />

                <button
                  onClick={() => handleOpenZoom(currentImage)}
                  className="absolute top-4 right-4 p-2 bg-[#0A0A0A]/80 border border-[#8B0000] text-[#E2E8F0] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#8B0000]"
                  title="Expand Arc Image"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end pointer-events-none">
                  <div className="bg-[#0A0A0A]/95 border border-[#4A5568]/60 px-3 py-1.5 text-xs font-mono text-[#E2E8F0] tracking-widest">
                    {currentImage.caption}
                  </div>
                  <span className="text-xs font-mono text-[#718096] tracking-widest">
                    STILL {selectedImgIndex + 1} OF {arc.images.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Thumbnail selector strip */}
            <div className="flex items-center space-x-3 mt-3 overflow-x-auto no-scrollbar py-1">
              <span className="text-[10px] font-mono text-[#718096] tracking-widest shrink-0 uppercase flex items-center space-x-1">
                <Layers className="w-3 h-3 text-[#8B0000]" />
                <span>ARC ARCHIVE STILLS:</span>
              </span>

              {arc.images.map((img, idx) => (
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
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale" 
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Image Lightbox Modal */}
      {isZoomed && (
        <div 
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] ornate-frame p-2 bg-[#0A0A0A]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={zoomedImage?.url || currentImage.url} 
              alt="" 
              className="max-w-full max-h-[80vh] object-contain" 
            />
            <p className="text-center text-xs font-mono text-[#E2E8F0] tracking-widest mt-2">
              {zoomedImage?.caption || currentImage.caption} // RESTRICTED ARC ARCHIVE
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
