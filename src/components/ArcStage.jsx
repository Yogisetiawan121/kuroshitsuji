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
  Layers,
  Search,
  Anchor,
  HelpCircle,
  Eye,
  Film,
  Compass,
  Lock,
  Unlock,
  Key,
  Flame as FireIcon
} from 'lucide-react';
import ScrambleText from './ScrambleText';
import { ARCS_DATA } from '../data/arcData';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.98, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { staggerChildren: 0.08, delayChildren: 0.05, duration: 0.4 }
  },
  exit: { 
    opacity: 0, 
    scale: 0.96, 
    filter: 'blur(10px)',
    transition: { duration: 0.25, ease: 'easeIn' } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20, mass: 0.8 } }
};

export default function ArcStage({ activeTab, onOpenContract, setActiveTab }) {
  const validArcKeys = ['WESTON_COLLEGE', 'WOLFS_GORGE', 'NOAHS_ARK', 'MANOR_MURDERS', 'THE_CAMPANIA'];
  const arcKey = validArcKeys.includes(activeTab) ? activeTab : 'WESTON_COLLEGE';
  const arc = ARCS_DATA[arcKey] || ARCS_DATA.WESTON_COLLEGE;

  const [selectedHouse, setSelectedHouse] = useState(0);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);

  // Circus Arc Interactive States
  const [selectedCircusPanel, setSelectedCircusPanel] = useState(0);
  const [curtainsOpen, setCurtainsOpen] = useState({ workhouse: false, ritual: false });
  const [wireHovered, setWireHovered] = useState(null);

  // Manor Murders Interactive States
  const [selectedClue, setSelectedClue] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isCorpseHovered, setIsCorpseHovered] = useState(false);
  const [doorUnlocked, setDoorUnlocked] = useState(false);

  // Campania Interactive States
  const [phoenixUnlocked, setPhoenixUnlocked] = useState(false);
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [portholeWiped, setPortholeWiped] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const currentImage = arc.images[selectedImgIndex] || arc.images[0];

  const handleOpenZoom = (imgObj) => {
    setZoomedImage(imgObj);
    setIsZoomed(true);
  };

  return (
    <div className="flex-1 min-w-0 p-4 lg:p-8 flex flex-col space-y-8 relative z-10 overflow-y-auto max-h-[calc(100dvh-60px)] touch-scroll pb-28 lg:pb-32">
      
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
            <div className="gothic-corner-tr !w-2 !h-2 !top-[-9px]" />
          </motion.blockquote>

          {/* ARC 1: WESTON COLLEGE */}
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
                        <div className="relative aspect-[3/4] mb-3 overflow-hidden border bg-black border-[#4A5568]/40 group-hover:border-white/40 transition-colors">
                          <img
                            src={house.image}
                            alt={house.name}
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

                      <p className="text-xs font-subhead text-[#CBD5E1] mt-2 leading-snug">
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
                  <div className="gothic-corner-tl !w-2 !h-2 !top-[-12px]" />
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
                  <div className="gothic-corner-tr !w-2 !h-2 !top-[-12px]" />
                  <div className="gothic-corner-bl !w-2 !h-2" />
                </motion.div>
              </div>
            </>
          )}

          {/* ARC 2: OPERATION WOLF'S GORGE */}
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
                      className="p-6 bg-[#121214] border border-[#1B4D3E] relative space-y-4 group hover:border-[#9ACD32] transition-colors"
                    >
                      {char.image && (
                        <div className="relative aspect-[16/10] overflow-hidden border bg-black border-[#4A5568]/40 group-hover:border-[#9ACD32]/60 transition-colors">
                          <img
                            src={char.image}
                            alt={char.name}
                            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-70" />
                          <button
                            onClick={() => handleOpenZoom({ url: char.image, caption: `${char.name} — ${char.title}` })}
                            className="absolute top-2 right-2 p-1.5 bg-[#0A0A0A]/80 border border-[#9ACD32] text-[#E2E8F0] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#1B4D3E]"
                            title="Zoom Character Portrait"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}

                      <div>
                        <span className="text-xs font-mono text-[#9ACD32] font-bold tracking-widest block uppercase">
                          {char.title}
                        </span>
                        <h4 className="text-2xl font-headline font-bold text-[#E2E8F0] group-hover:text-[#9ACD32] transition-colors">{char.name}</h4>
                      </div>

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
                      <div className="gothic-corner-tl !w-2 !h-2 !top-[-17px]" />
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
                  <div className="gothic-corner-tl !w-2 !h-2 !top-[-13px]" />
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
                  <div className="gothic-corner-tr !w-2 !h-2 !top-[-12px]" />
                  <div className="gothic-corner-bl !w-2 !h-2" />
                </motion.div>
              </div>
            </>
          )}

          {/* ARC 3: NOAH'S ARK CIRCUS */}
          {arcKey === 'NOAHS_ARK' && (
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
          )}

          {/* ARC 4: PHANTOMHIVE MANOR MURDERS */}
          {arcKey === 'MANOR_MURDERS' && (
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
                        <img src={g.image} alt={g.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
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
          )}

          {/* ARC 5: THE CAMPANIA INCIDENT */}
          {arcKey === 'THE_CAMPANIA' && (
            <>
              {/* KEY ENTITIES: UNDERTAKER, ELIZABETH, REAPERS, STOKER */}
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="border-b border-[#0F1C2E]/60 pb-2 flex items-center justify-between">
                  <h3 className="text-xl font-headline font-bold text-[#E2E8F0] tracking-wider flex items-center space-x-2">
                    <Anchor className="w-5 h-5 text-[#8B7355]" />
                    <span>KEY ENTITIES & BIZARRE DOLL RECONSTRUCTS</span>
                  </h3>
                  <span className="text-xs font-mono text-[#8B7355] tracking-widest uppercase">
                    RMS CAMPANIA
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {arc.keyEntities.map((ent) => (
                    <motion.div
                      key={ent.id}
                      whileHover={{ y: -4, scale: 1.02 }}
                      onClick={() => {
                        const matchIdx = arc.images.findIndex(img => img.url === ent.image);
                        if (matchIdx !== -1) setSelectedImgIndex(matchIdx);
                      }}
                      className="p-4 bg-[#121214] border border-[#0F1C2E] relative flex flex-col justify-between group hover:border-[#8B7355] transition-all cursor-pointer"
                    >
                      <div>
                        <div className="relative aspect-[3/4] mb-3 overflow-hidden border bg-black border-[#4A5568]/40 group-hover:border-[#8B7355]/60 transition-colors">
                          <img
                            src={ent.image}
                            alt={ent.name}
                            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-70" />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenZoom({ url: ent.image, caption: `${ent.name} — ${ent.title}` });
                            }}
                            className="absolute top-2 right-2 p-1.5 bg-[#0A0A0A]/80 border border-[#8B7355] text-[#E2E8F0] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#0F1C2E]"
                            title="Zoom Entity Portrait"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <span className="text-[9px] font-mono tracking-widest font-bold uppercase block text-[#8B7355]">
                          {ent.title}
                        </span>
                        <h4 className="text-base font-headline font-bold text-[#E2E8F0] group-hover:text-[#8B7355] transition-colors">{ent.name}</h4>
                      </div>

                      <p className="text-xs font-subhead text-[#CBD5E1] mt-2 leading-snug">
                        {ent.details}
                      </p>
                      <div className="gothic-corner-tr !w-1.5 !h-1.5" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* PHOENIX GESTURE & CINEMATIC RECORD PLAYER */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phoenix Gesture Seal Unlock */}
                <motion.div variants={itemVariants} className="p-6 bg-[#121214] border border-[#0F1C2E] relative space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#8B7355] font-bold tracking-widest uppercase flex items-center space-x-1">
                      <Sparkles className="w-4 h-4" />
                      <span>AURORA SOCIETY PHOENIX GESTURE</span>
                    </span>
                    <button
                      onClick={() => setPhoenixUnlocked(!phoenixUnlocked)}
                      className="px-3 py-1 bg-[#0F1C2E] border border-[#8B7355] text-[#E2E8F0] font-mono text-xs uppercase"
                    >
                      {phoenixUnlocked ? 'RELOCK SEAL' : 'PERFORM PHOENIX POSE'}
                    </button>
                  </div>

                  <div className="p-4 bg-[#0A0A0A] border border-[#4A5568]/40 space-y-2">
                    <p className="text-xs font-mono text-[#8B7355] font-bold uppercase">
                      STATUS: {phoenixUnlocked ? 'UNLOCKED // SALVATION REVEALED' : 'LOCKED // REQUIRE SALUTE'}
                    </p>
                    <p className="text-sm font-subhead text-[#CBD5E1] leading-relaxed">
                      {phoenixUnlocked 
                        ? 'The Bizarre Dolls are created by forcible reinsertion of altered Cinematic Records into deceased flesh. The brain seeks memories to fill the void, driving the corpse to devour living souls.'
                        : 'Raise both arms in wing formation ("The Phoenix") to access classified Aurora Society reanimation schematics.'}
                    </p>
                  </div>
                  <div className="gothic-corner-tl !w-2 !h-2 !top-[-13px]" />
                </motion.div>

                {/* Cinematic Record Film Strips */}
                <motion.div variants={itemVariants} className="p-6 bg-[#121214] border border-[#8B7355]/40 relative space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#8B7355] font-bold tracking-widest uppercase">
                    <Film className="w-4 h-4" />
                    <span>CINEMATIC RECORDS // FILM REEL MEMORIES</span>
                  </div>

                  <div className="space-y-2">
                    {arc.records.map((r, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedRecord(idx)}
                        className={`p-3 border cursor-pointer transition-all ${
                          selectedRecord === idx
                            ? 'bg-[#0F1C2E]/60 border-[#8B7355] text-white shadow-[0_0_15px_rgba(139,115,85,0.4)]'
                            : 'bg-[#0A0A0A] border-[#4A5568]/40 text-[#CBD5E1] hover:border-[#8B7355]/60'
                        }`}
                      >
                        <span className="text-[10px] font-mono text-[#8B7355] font-bold block">{r.title}</span>
                        <p className="text-xs font-subhead text-[#CBD5E1] mt-1">{r.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="gothic-corner-br !w-2 !h-2" />
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
