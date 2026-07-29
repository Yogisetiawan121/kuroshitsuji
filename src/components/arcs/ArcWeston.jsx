import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Skull, Swords, Maximize2 } from 'lucide-react';

export default function ArcWeston({ arc, itemVariants, handleOpenZoom, setSelectedImgIndex }) {
  const [selectedHouse, setSelectedHouse] = useState(0);

  return (
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
                    loading="lazy"
                    decoding="async"
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
  );
}
