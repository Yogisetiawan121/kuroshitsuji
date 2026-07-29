import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Anchor, Sparkles, Film, Maximize2 } from 'lucide-react';

export default function ArcCampania({ arc, itemVariants, handleOpenZoom, setSelectedImgIndex }) {
  const [phoenixUnlocked, setPhoenixUnlocked] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  return (
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
                    loading="lazy"
                    decoding="async"
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
  );
}
