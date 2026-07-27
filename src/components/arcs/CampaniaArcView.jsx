import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Anchor, 
  Waves, 
  Film, 
  ShieldAlert, 
  Maximize2, 
  Sparkles, 
  Swords, 
  Skull, 
  Award,
  Unlock,
  Lock,
  Volume2
} from 'lucide-react';
import ScrambleText from '../ScrambleText';

export default function CampaniaArcView({ arc, handleOpenZoom }) {
  const [selectedDeck, setSelectedDeck] = useState('ballroom');
  const [isPhoenixUnlocked, setIsPhoenixUnlocked] = useState(false);
  const [isHoldingPhoenix, setIsHoldingPhoenix] = useState(false);
  const [selectedFilmIndex, setSelectedFilmIndex] = useState(0);
  const [isUndertakerUnwrapped, setIsUndertakerUnwrapped] = useState(false);
  const [isElizabethDrawn, setIsElizabethDrawn] = useState(false);

  // Decks on RMS Campania
  const decks = [
    { id: 'ballroom', name: 'GRAND BALLROOM', depth: 'DECK A', status: 'OVERRUN BY BIZARRE DOLLS', infected: true },
    { id: 'first_class', name: 'FIRST CLASS CABINS', depth: 'DECK B', status: 'EVACUATING PASSENGERS', infected: false },
    { id: 'engine_room', name: 'ENGINE ROOM', depth: 'DECK D', status: 'WATER INGESTION CRITICAL', infected: true },
    { id: 'stern', name: 'STERN DECK', depth: 'DECK A (STERN)', status: 'FINAL REAPER BATTLEFIELD', infected: true },
  ];

  return (
    <div className="space-y-10 text-[#E2E8F0] font-body relative">

      {/* MODULE 1: SHIP DECK PLAN & WATER TILT VIEWPORT */}
      <div className="p-6 bg-[#0F1C2E]/90 border border-[#8B7355] relative space-y-4 shadow-[0_0_30px_rgba(15,28,46,0.8)] backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-[#8B7355]/40 pb-3">
          <div className="flex items-center space-x-2">
            <Anchor className="w-5 h-5 text-[#C0C0C0] animate-bounce" />
            <span className="text-xs font-mono tracking-widest text-[#C0C0C0] uppercase font-bold">
              RMS CAMPANIA DECK PLAN BLUEPRINT
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#8B7355] uppercase tracking-widest">
            PERSPECTIVE TILT: 3D WATERLINE
          </span>
        </div>

        {/* 3D Waterline Tilt Deck Grid */}
        <div className="perspective-1000">
          <motion.div
            initial={{ rotateX: 0 }}
            animate={{ rotateX: -12 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-[#0A0A0A] border border-[#8B7355]/40"
          >
            {decks.map((dk) => {
              const isActive = selectedDeck === dk.id;
              return (
                <button
                  key={dk.id}
                  onClick={() => setSelectedDeck(dk.id)}
                  className={`p-4 border text-left transition-all duration-300 relative overflow-hidden ${
                    isActive
                      ? 'bg-[#0F1C2E] border-[#C0C0C0] text-white shadow-[0_0_20px_rgba(192,192,192,0.4)]'
                      : 'bg-[#121214] border-[#4A5568]/40 text-[#718096] hover:border-[#8B7355]'
                  }`}
                >
                  <div className="flex justify-between items-center text-[10px] font-mono mb-1">
                    <span className="text-[#8B7355] font-bold">{dk.depth}</span>
                    {dk.infected && (
                      <span className="px-1.5 py-0.2 bg-[#C8D6AF]/20 border border-[#C8D6AF] text-[#C8D6AF] text-[9px]">
                        INFECTED
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-headline font-bold text-white leading-tight">
                    {dk.name}
                  </h4>
                  <p className="text-[10px] font-mono text-[#C0C0C0] mt-1">
                    {dk.status}
                  </p>
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* MODULE 2: PORTHOLE VIEWPORTS (Circular Brass Rim Portholes) */}
      <div className="space-y-4">
        <div className="border-b border-[#8B7355]/40 pb-2 flex items-center justify-between">
          <h3 className="text-xl font-headline font-bold text-[#E2E8F0] flex items-center space-x-2">
            <Waves className="w-5 h-5 text-[#8B7355]" />
            <span>PORTHOLE VIEWPORTS // PASSENGER & REAPER DOSSIER</span>
          </h3>
          <span className="text-xs font-mono text-[#8B7355] tracking-widest uppercase">
            HOVER PORTHOLE TO WIPE FOGGED GLASS
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {arc.figures.map((fig) => (
            <div key={fig.id} className="flex flex-col items-center space-y-2 group">
              {/* Circular Brass Rim Porthole Container */}
              <div 
                className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-[#8B7355] bg-black overflow-hidden shadow-[0_0_20px_rgba(139,115,85,0.6)] cursor-pointer"
                onClick={() => handleOpenZoom({ url: fig.image, caption: `${fig.name} — ${fig.role}` })}
              >
                <img
                  src={fig.image}
                  alt={fig.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop';
                  }}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />

                {/* Fogged Glass Overlay (Blurs image until hover) */}
                <div className="absolute inset-0 bg-[#0F1C2E]/40 backdrop-blur-[3px] group-hover:backdrop-blur-none group-hover:bg-transparent transition-all duration-500 flex items-center justify-center">
                  <span className="text-[9px] font-mono text-[#C0C0C0] opacity-80 group-hover:opacity-0 transition-opacity">
                    WIPE GLASS
                  </span>
                </div>
              </div>

              <div className="text-center">
                <span className="text-sm font-headline font-bold text-white block">
                  {fig.name}
                </span>
                <span className="text-[10px] font-mono text-[#8B7355] block font-bold uppercase">
                  {fig.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODULE 3: THE PHOENIX GESTURE INTERACTIVE SEAL */}
      <div className="p-6 bg-[#0F1C2E] border border-[#8B7355] text-center space-y-4">
        <div className="flex items-center justify-center space-x-2 text-xs font-mono text-[#C8D6AF] font-bold tracking-widest uppercase">
          <Sparkles className="w-4 h-4 text-[#C8D6AF] animate-pulse" />
          <span>AURORA SOCIETY "THE PHOENIX" CLASSIFIED UNLOCK</span>
        </div>

        <p className="text-sm font-subhead text-[#E2E8F0] max-w-lg mx-auto">
          Hold down the button below to raise both arms in the Aurora Society wing pose and unlock secret research files.
        </p>

        <button
          onMouseDown={() => {
            setIsHoldingPhoenix(true);
            setTimeout(() => setIsPhoenixUnlocked(true), 1200);
          }}
          onMouseUp={() => setIsHoldingPhoenix(false)}
          className={`px-6 py-3 border-2 font-mono text-xs tracking-widest uppercase transition-all duration-300 ${
            isPhoenixUnlocked
              ? 'bg-[#C8D6AF] border-white text-black font-bold shadow-[0_0_25px_#C8D6AF]'
              : isHoldingPhoenix
              ? 'bg-[#8B7355] border-[#C0C0C0] text-white scale-105'
              : 'bg-[#121214] border-[#8B7355] text-[#C0C0C0] hover:border-[#C0C0C0]'
          }`}
        >
          {isPhoenixUnlocked ? 'SALVATION UNLOCKED' : isHoldingPhoenix ? 'RAISING WINGS...' : 'PRESS & HOLD "THE PHOENIX" GESTURE'}
        </button>

        {isPhoenixUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-[#121214] border border-[#C8D6AF] max-w-xl mx-auto text-left space-y-2"
          >
            <span className="text-xs font-mono text-[#C8D6AF] font-bold block uppercase">
              AURORA SOCIETY RECORD FILE #09
            </span>
            <p className="text-xs font-subhead text-[#E2E8F0] leading-relaxed">
              {arc.bizarreDolls.text}
            </p>
          </motion.div>
        )}
      </div>

      {/* MODULE 4: CINEMATIC RECORD PLAYER (Undertaker's Film Strip) */}
      <div className="p-6 bg-[#121214] border border-[#704214] space-y-4">
        <div className="border-b border-[#704214]/60 pb-2 flex items-center justify-between">
          <h3 className="text-xl font-headline font-bold text-[#E2E8F0] flex items-center space-x-2">
            <Film className="w-5 h-5 text-[#704214]" />
            <span>CINEMATIC RECORD PLAYER // REAPED MEMORIES</span>
          </h3>
          <span className="text-xs font-mono text-[#704214] tracking-widest uppercase">
            FILM STRIP REANIMATION CASSETTE
          </span>
        </div>

        <div className="flex items-center space-x-4 overflow-x-auto no-scrollbar py-2">
          {arc.images.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedFilmIndex(idx)}
              className={`relative w-44 aspect-[16/10] shrink-0 border-4 border-dashed cursor-pointer overflow-hidden transition-all ${
                selectedFilmIndex === idx
                  ? 'border-[#704214] shadow-[0_0_20px_#704214]'
                  : 'border-[#4A5568]/40 opacity-60 hover:opacity-100'
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
              <div className="absolute inset-0 bg-[#704214]/20 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODULE 5: ELIZABETH'S DUAL SWORD SLASH & UNDERTAKER REVEAL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Elizabeth Sword Draw */}
        <div 
          onClick={() => setIsElizabethDrawn(!isElizabethDrawn)}
          className="p-6 bg-[#121214] border border-[#D4A5A5] relative space-y-3 cursor-pointer overflow-hidden group"
        >
          <div className="flex items-center justify-between text-xs font-mono text-[#D4A5A5]">
            <span className="font-bold flex items-center space-x-1">
              <Swords className="w-4 h-4" />
              <span>ELIZABETH MIDFORD</span>
            </span>
            <span>[CLICK TO DRAW BLADES]</span>
          </div>

          <div className="relative aspect-[16/9] bg-black overflow-hidden border border-[#D4A5A5]">
            <img
              src="/img/Elizabeth%20Midford/Elizabeth%20Midford.jpg"
              alt="Elizabeth Swords"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop';
              }}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />

            {/* Sword Slash Motion Line */}
            <motion.div
              animate={isElizabethDrawn ? { x: ['-100%', '100%'] } : {}}
              transition={{ duration: 0.4 }}
              className="absolute top-1/2 left-0 right-0 h-1 bg-white shadow-[0_0_15px_#fff] -rotate-12 pointer-events-none"
            />
          </div>

          <p className="text-xs font-subhead text-[#E2E8F0] leading-relaxed">
            Hiding her supreme fencing mastery for years, Elizabeth cuts down Bizarre Dolls with twin swords to shield Ciel.
          </p>
        </div>

        {/* Undertaker Bandage Reveal */}
        <div 
          onMouseEnter={() => setIsUndertakerUnwrapped(true)}
          onMouseLeave={() => setIsUndertakerUnwrapped(false)}
          className="p-6 bg-[#121214] border border-[#C0C0C0] relative space-y-3 cursor-pointer overflow-hidden group"
        >
          <div className="flex items-center justify-between text-xs font-mono text-[#C0C0C0]">
            <span className="font-bold flex items-center space-x-1">
              <Skull className="w-4 h-4 text-[#C0C0C0]" />
              <span>UNDERTAKER REAPER REVEAL</span>
            </span>
            <span>[HOVER TO UNWIND BANDAGES]</span>
          </div>

          <div className="relative aspect-[16/9] bg-black overflow-hidden border border-[#C0C0C0]">
            <img
              src={isUndertakerUnwrapped ? "/img/Undertaker/Undertaker%202.jpg" : "/img/Undertaker/Undertaker.webp"}
              alt="Undertaker"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop';
              }}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <p className="text-xs font-subhead text-[#E2E8F0] leading-relaxed">
            The defected Grim Reaper reveals his glowing golden eyes and customary Death Scythe, executing cinematic record experiments.
          </p>
        </div>
      </div>

    </div>
  );
}
