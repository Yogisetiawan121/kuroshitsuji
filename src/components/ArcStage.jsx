import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  Maximize2, 
  Award, 
  Skull, 
  Swords, 
  Sparkles, 
  Biohazard, 
  Flame, 
  UserCheck, 
  FileText,
  CheckCircle2,
  ChevronRight,
  Shield,
  Layers
} from 'lucide-react';
import ScrambleText from './ScrambleText';
import { ARCS_DATA } from '../data/arcData';

const containerVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
};

export default function ArcStage({ activeTab, onOpenContract }) {
  const arcKey = activeTab === 'WOLFS_GORGE' ? 'WOLFS_GORGE' : 'WESTON_COLLEGE';
  const arc = ARCS_DATA[arcKey];

  const [selectedHouse, setSelectedHouse] = useState(0);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);

  const currentImage = arc.images[selectedImgIndex] || arc.images[0];

  const handleOpenZoom = (imgObj) => {
    setZoomedImage(imgObj);
    setIsZoomed(true);
  };

  return (
    <div className="flex-1 min-w-0 p-4 lg:p-8 flex flex-col space-y-8 relative z-10 overflow-y-auto max-h-[calc(100vh-60px)]">
      
      {/* Top Dossier Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#4A5568]/30 pb-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono tracking-[0.2em] text-[#718096]">
            <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: arc.badgeColor }} />
            <span>TACTICAL STORY ARC // {arc.classification}</span>
          </div>
          <p className="text-sm font-mono text-[#718096] mt-0.5 tracking-wider uppercase">
            {arc.subtitle}
          </p>
        </div>

        {/* Arc Classification Badge */}
        <div className="px-3 py-1.5 border font-mono text-xs tracking-widest uppercase flex items-center space-x-2 shadow-inner" style={{ borderColor: arc.badgeColor, backgroundColor: `${arc.badgeColor}25` }}>
          <AlertTriangle className="w-3.5 h-3.5" style={{ color: arc.badgeColor }} />
          <span className="font-bold text-[#E2E8F0]">{arc.classification}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
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
          <motion.blockquote variants={itemVariants} className="relative p-5 sm:p-6 bg-[#121214]/80 border-l-4 backdrop-blur-md space-y-2" style={{ borderLeftColor: arc.badgeColor }}>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest font-bold uppercase" style={{ color: arc.badgeColor }}>
              <ShieldAlert className="w-4 h-4" />
              <span>MISSION BRIEFING</span>
            </div>
            <p className="text-base sm:text-lg font-subhead italic text-[#E2E8F0] leading-relaxed">
              "{arc.missionBrief}"
            </p>
            <div className="gothic-corner-tr !w-2 !h-2" />
            <div className="gothic-corner-bl !w-2 !h-2" />
          </motion.blockquote>

          {/* ARC SPECIFIC CONTENT: WESTON COLLEGE */}
          {arcKey === 'WESTON_COLLEGE' && (
            <>
              {/* THE FOUR HOUSES & THE P4 PREFECTS */}
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="border-b border-[#4A5568]/30 pb-2 flex items-center justify-between">
                  <h3 className="text-xl font-headline font-bold text-[#E2E8F0] tracking-wider flex items-center space-x-2">
                    <Award className="w-5 h-5 text-[#8B7355]" />
                    <span>THE FOUR HOUSES & THE P4 PREFECTS</span>
                  </h3>
                  <span className="text-xs font-mono text-[#8B7355] tracking-widest uppercase">
                    ACADEMIC TRADITION
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {arc.p4Houses.map((house, idx) => (
                    <motion.div
                      key={house.id}
                      whileHover={{ scale: 1.02, y: -4 }}
                      onClick={() => {
                        setSelectedHouse(idx);
                        // Find matching image index in main gallery if present
                        const galleryIdx = arc.images.findIndex(img => img.url === house.image);
                        if (galleryIdx !== -1) setSelectedImgIndex(galleryIdx);
                      }}
                      className={`p-4 bg-[#121214] border cursor-pointer relative flex flex-col justify-between transition-all duration-300 group ${
                        selectedHouse === idx
                          ? 'shadow-[0_0_20px_rgba(0,0,0,0.8)] border-l-4'
                          : 'border-[#4A5568]/30 opacity-85 hover:opacity-100'
                      }`}
                      style={{
                        borderColor: selectedHouse === idx ? house.color : undefined,
                        borderLeftColor: house.color
                      }}
                    >
                      <div>
                        {/* Prefect Portrait Container */}
                        <div className="relative aspect-[3/4] mb-3 overflow-hidden border bg-black border-[#4A5568]/40 group-hover:border-white/40 transition-colors">
                          <img
                            src={house.image}
                            alt={house.name}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop';
                            }}
                            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-70" />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenZoom({ url: house.image, caption: `${house.name} — ${house.house}` });
                            }}
                            className="absolute top-2 right-2 p-1.5 bg-[#0A0A0A]/80 border text-[#E2E8F0] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black"
                            style={{ borderColor: house.color }}
                            title="Zoom Prefect Portrait"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="flex justify-between items-start mb-1">
                          <span className="text-[9px] font-mono tracking-widest font-bold uppercase px-2 py-0.5" style={{ backgroundColor: `${house.color}35`, color: house.color }}>
                            {house.symbol}
                          </span>
                          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: house.color }} />
                        </div>

                        <h4 className="text-base font-headline font-bold text-[#E2E8F0] group-hover:text-white transition-colors">{house.name}</h4>
                        <p className="text-xs font-mono font-bold mt-0.5" style={{ color: house.color }}>
                          {house.house}
                        </p>
                      </div>

                      <p className="text-xs font-subhead text-[#718096] mt-2 leading-snug">
                        {house.description}
                      </p>

                      <div className="gothic-corner-tr !w-1.5 !h-1.5" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* DERRICK ARDEN CONSPIRACY & CRICKET MATCH */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="p-6 bg-[#121214] border border-[#7A1F1F]/60 relative space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#7A1F1F] font-bold tracking-widest uppercase">
                    <Skull className="w-4 h-4" />
                    <span>CONSPIRACY INVESTIGATION</span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-[#E2E8F0]">{arc.conspiracy.title}</h3>
                  <p className="text-xs font-mono text-[#8B7355]">{arc.conspiracy.subtitle}</p>
                  <p className="text-sm font-subhead text-[#E2E8F0] leading-relaxed">
                    {arc.conspiracy.text}
                  </p>
                  <div className="gothic-corner-tl !w-2 !h-2" />
                  <div className="gothic-corner-br !w-2 !h-2" />
                </motion.div>

                <motion.div variants={itemVariants} className="p-6 bg-[#121214] border border-[#2C3E6B]/60 relative space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#2C3E6B] font-bold tracking-widest uppercase">
                    <Swords className="w-4 h-4" />
                    <span>TACTICAL TOURNAMENT</span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-[#E2E8F0]">{arc.cricketMatch.title}</h3>
                  <p className="text-xs font-mono text-[#8B7355]">{arc.cricketMatch.subtitle}</p>
                  <p className="text-sm font-subhead text-[#E2E8F0] leading-relaxed">
                    {arc.cricketMatch.text}
                  </p>
                  <div className="gothic-corner-tr !w-2 !h-2" />
                  <div className="gothic-corner-bl !w-2 !h-2" />
                </motion.div>
              </div>
            </>
          )}

          {/* ARC SPECIFIC CONTENT: WOLF'S GORGE */}
          {arcKey === 'WOLFS_GORGE' && (
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
                      className="p-6 bg-[#121214] border border-[#1B4D3E] relative space-y-3"
                    >
                      <span className="text-xs font-mono text-[#9ACD32] font-bold tracking-widest block uppercase">
                        {char.title}
                      </span>
                      <h4 className="text-2xl font-headline font-bold text-[#E2E8F0]">{char.name}</h4>
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
                      <div className="gothic-corner-tl !w-2 !h-2" />
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
                  <div className="gothic-corner-tl !w-2 !h-2" />
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
                  <div className="gothic-corner-tr !w-2 !h-2" />
                  <div className="gothic-corner-bl !w-2 !h-2" />
                </motion.div>
              </div>
            </>
          )}

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
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop';
                  }}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
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
                  <div className="bg-[#0A0A0A]/80 border border-[#4A5568]/60 px-3 py-1.5 text-xs font-mono text-[#E2E8F0] tracking-widest backdrop-blur-md">
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
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop';
                    }}
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
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 cursor-pointer"
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] ornate-frame p-2 bg-[#0A0A0A]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={zoomedImage?.url || currentImage.url} 
              alt="" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop';
              }}
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
