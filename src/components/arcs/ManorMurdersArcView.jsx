import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Skull, 
  MapPin, 
  Clock, 
  Key, 
  FileText, 
  CheckCircle2, 
  Maximize2, 
  HelpCircle,
  Eye,
  AlertOctagon,
  Unlock,
  Lock
} from 'lucide-react';
import ScrambleText from '../ScrambleText';

export default function ManorMurdersArcView({ arc, handleOpenZoom }) {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [activeCrimeIndex, setActiveCrimeIndex] = useState(0);
  const [isButlerMelted, setIsButlerMelted] = useState(false);
  const [selectedWaxSeal, setSelectedWaxSeal] = useState(null);

  const currentCrime = arc.crimes[activeCrimeIndex] || arc.crimes[0];

  // Manor Floor Plan Rooms
  const manorRooms = [
    { id: 'guest_room', label: 'GUEST CHAMBER', murder: 'GEORG VON SIEMENS POISONED', victim: 'Siemens', x: 25, y: 30, scaleX: 2.2, scaleY: 2.2, panX: '-30%', panY: '-20%' },
    { id: 'ciel_room', label: 'EARL\'S BEDROOM', murder: 'PATRICK PHELPS VENOM STRIKE', victim: 'Phelps', x: 75, y: 30, scaleX: 2.5, scaleY: 2.5, panX: '30%', panY: '-20%' },
    { id: 'butler_room', label: 'BUTLER\'S QUARTERS', murder: 'SEBASTIAN STAGED STABBING', victim: 'Sebastian', x: 50, y: 70, scaleX: 2.4, scaleY: 2.4, panX: '0%', panY: '30%' },
  ];

  return (
    <div className="space-y-10 text-[#E2E8F0] font-body">

      {/* MODULE 1: INTERACTIVE LOCKED DOOR MECHANISM & TYPEWRITER DEDUCTIONS */}
      <div className="p-6 bg-[#121214] border border-[#3E0000] relative space-y-4 shadow-[0_0_30px_rgba(62,0,0,0.5)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#3E0000]/60 pb-3">
          <div className="flex items-center space-x-2">
            <Key className="w-5 h-5 text-[#D4A373] animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-[#D4A373] uppercase font-bold">
              LOCKED-ROOM CRIME SCENE ACCESS MECHANISM
            </span>
          </div>

          {/* Door Lock Handle Trigger */}
          <button
            onClick={() => setIsDoorOpen(!isDoorOpen)}
            className="px-4 py-2 bg-[#3E0000] border border-[#D4A373] text-white text-xs font-mono tracking-widest uppercase hover:bg-[#5A0000] transition-colors flex items-center space-x-2 shadow-[0_0_15px_rgba(212,163,115,0.4)]"
          >
            <motion.div
              animate={{ rotate: isDoorOpen ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
            >
              {isDoorOpen ? <Unlock className="w-4 h-4 text-[#D4A373]" /> : <Lock className="w-4 h-4 text-white" />}
            </motion.div>
            <span>{isDoorOpen ? 'DOOR UNLOCKED (CLICK TO CLOSE)' : 'TURN HANDLE & PUSH DOOR'}</span>
          </button>
        </div>

        {/* Door Push Perspective Container */}
        <div className="relative min-h-[220px] bg-[#0A0A0A] border border-[#3E0000]/60 overflow-hidden flex items-center justify-center p-6">
          {/* Crime Scene Content Behind Locked Door */}
          <div className="space-y-4 max-w-2xl text-center">
            <div className="inline-block px-3 py-1 bg-[#3E0000]/50 border border-[#D4A373] text-xs font-mono text-[#D4A373] tracking-widest font-bold uppercase">
              CASE #{currentCrime.no} — {currentCrime.victim}
            </div>
            <h3 className="text-3xl font-headline font-bold text-white">
              {currentCrime.location}
            </h3>
            <div className="p-3 bg-[#121214] border border-[#4A5568]/40 text-xs font-mono text-[#2E5A4C] font-bold tracking-wider">
              METHOD OF DEATH: {currentCrime.method}
            </div>
            
            {/* Live Typewriter Staggered Deduction */}
            <p className="text-sm font-subhead text-[#E2E8F0] leading-relaxed italic">
              "{currentCrime.note}"
            </p>

            {/* Crime Case Selector Buttons */}
            <div className="flex justify-center items-center space-x-2 pt-2">
              {arc.crimes.map((c, idx) => (
                <button
                  key={c.no}
                  onClick={() => setActiveCrimeIndex(idx)}
                  className={`px-3 py-1 text-xs font-mono tracking-widest uppercase border ${
                    activeCrimeIndex === idx
                      ? 'bg-[#3E0000] border-[#D4A373] text-white font-bold'
                      : 'bg-[#121214] border-[#4A5568]/40 text-[#718096] hover:text-[#E2E8F0]'
                  }`}
                >
                  CRIME #{c.no}
                </button>
              ))}
            </div>
          </div>

          {/* Heavy Metallic Door Panels */}
          <motion.div
            animate={isDoorOpen ? { scaleX: 0.05, opacity: 0 } : { scaleX: 1, opacity: 1 }}
            transition={{ type: "spring", mass: 2, stiffness: 60, damping: 18 }}
            className="absolute inset-0 bg-[#3E2723] border-4 border-[#3E0000] z-20 flex items-center justify-center p-6 shadow-2xl origin-left"
          >
            <div className="text-center space-y-2 pointer-events-none">
              <div className="w-12 h-12 rounded-full border-2 border-[#D4A373] flex items-center justify-center mx-auto bg-[#0A0A0A]">
                <Key className="w-6 h-6 text-[#D4A373]" />
              </div>
              <span className="text-sm font-headline tracking-widest text-[#F5F5DC] block uppercase font-bold">
                HEAVY MAHOGANY DOOR LOCKED // RESTRAINED
              </span>
              <span className="text-xs font-mono text-[#D4A373] block">
                [TURN HANDLE TOP RIGHT TO SOLVE LOCKED-ROOM MYSTERY]
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* MODULE 2: THE CLUE BOARD (Polaroids connected by SVG Red String) */}
      <div className="p-6 bg-[#121214] border border-[#3E0000]/60 space-y-4">
        <div className="border-b border-[#3E0000]/40 pb-2 flex items-center justify-between">
          <h3 className="text-xl font-headline font-bold text-[#E2E8F0] flex items-center space-x-2">
            <Search className="w-5 h-5 text-[#3E0000]" />
            <span>THE CLUE BOARD // CONSPIRACY NETWORK</span>
          </h3>
          <span className="text-xs font-mono text-[#D4A373] tracking-widest uppercase">
            RED STRING POLAROID CONNECTIONS
          </span>
        </div>

        <div className="relative w-full min-h-[300px] bg-[#1a120c] border border-[#3E2723] p-4 overflow-hidden">
          {/* SVG Red String Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line x1="20%" y1="40%" x2="50%" y2="70%" stroke="#8B0000" strokeWidth="2.5" />
            <line x1="50%" y1="70%" x2="80%" y2="40%" stroke="#8B0000" strokeWidth="2.5" />
            <line x1="20%" y1="40%" x2="80%" y2="40%" stroke="#8B0000" strokeWidth="1.5" strokeDasharray="5 5" />
          </svg>

          {/* Polaroid Suspect Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {arc.guestList.slice(0, 3).map((guest) => (
              <motion.div
                key={guest.id}
                whileHover={{ rotate: 1, scale: 1.03 }}
                className="p-3 bg-[#F5F5DC] text-[#0A0A0A] border-4 border-[#3E2723] shadow-2xl space-y-2 group cursor-pointer"
              >
                <div className="relative aspect-[4/3] bg-black overflow-hidden border border-[#3E2723]">
                  <img
                    src={guest.image}
                    alt={guest.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop';
                    }}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-[#3E0000] text-white text-[9px] font-mono font-bold uppercase">
                    {guest.status}
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-headline font-bold text-[#3E0000] leading-tight">
                    {guest.name}
                  </h4>
                  <span className="text-[10px] font-mono text-[#6B7280] font-bold block uppercase">
                    {guest.role}
                  </span>
                  <p className="text-xs font-subhead text-[#3E2723] mt-1 line-clamp-2">
                    {guest.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* MODULE 3: FLOOR PLAN OVERLAY (3D Room Zoom Viewport) */}
      <div className="p-6 bg-[#121214] border border-[#3E0000]/60 space-y-4">
        <div className="border-b border-[#3E0000]/40 pb-2 flex items-center justify-between">
          <h3 className="text-xl font-headline font-bold text-[#E2E8F0] flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-[#D4A373]" />
            <span>PHANTOMHIVE MANOR ARCHITECTURAL BLUEPRINT</span>
          </h3>
          <span className="text-xs font-mono text-[#D4A373] tracking-widest uppercase">
            CLICK ROOM TO ZOOM 3D PERSPECTIVE
          </span>
        </div>

        <div className="relative w-full h-[320px] bg-[#0F141A] border border-[#4A5568]/40 overflow-hidden flex items-center justify-center p-4">
          <motion.div
            animate={{
              scale: selectedRoom ? selectedRoom.scaleX : 1,
              x: selectedRoom ? selectedRoom.panX : '0%',
              y: selectedRoom ? selectedRoom.panY : '0%'
            }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="relative w-full h-full border-2 border-dashed border-[#D4A373]/40 p-4"
          >
            {/* Grid Blueprint Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#D4A373_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

            {/* Room Nodes */}
            {manorRooms.map((rm) => {
              const isSelected = selectedRoom?.id === rm.id;
              return (
                <button
                  key={rm.id}
                  onClick={() => setSelectedRoom(isSelected ? null : rm)}
                  style={{ left: `${rm.x}%`, top: `${rm.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 p-3 border-2 transition-all ${
                    isSelected
                      ? 'bg-[#3E0000] border-[#D4A373] text-white shadow-[0_0_20px_#3E0000]'
                      : 'bg-[#121214]/90 border-[#3E0000] text-[#E2E8F0] hover:border-[#D4A373]'
                  }`}
                >
                  <div className="flex items-center space-x-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3E0000] animate-ping" />
                    <span className="text-xs font-mono font-bold tracking-wider">{rm.label}</span>
                  </div>
                  <span className="text-[9px] font-mono text-[#D4A373] block mt-0.5 font-bold uppercase">
                    {rm.murder}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* MODULE 4: THE BUTLER'S BODY (Corpse Report & Jeremy Rathbone Crossfade) */}
      <div className="p-6 bg-[#121214] border border-[#3E0000]/60 space-y-4">
        <div className="border-b border-[#3E0000]/40 pb-2 flex items-center justify-between">
          <h3 className="text-xl font-headline font-bold text-[#E2E8F0] flex items-center space-x-2">
            <Skull className="w-5 h-5 text-[#3E0000]" />
            <span>THE BUTLER'S STAGED BODY REPORT // SEBASTIAN → JEREMY CROSSFADE</span>
          </h3>
          <span className="text-xs font-mono text-[#6B7280] tracking-widest uppercase">
            HOVER TO WIPE BLOOD & REVEAL DETECTIVE
          </span>
        </div>

        <div className="relative bg-black border border-[#3E0000] p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div 
            onMouseEnter={() => setIsButlerMelted(true)}
            onMouseLeave={() => setIsButlerMelted(false)}
            className="relative w-full md:w-5/12 aspect-[4/3] ornate-frame bg-[#0A0A0A] overflow-hidden cursor-pointer group shrink-0"
          >
            {/* Base Image: Staged Murder Sebastian */}
            <img
              src="/img/Sebastian%20Michaelis/Sebastian-Michaelis-Book-Of-Murder.avif"
              alt="Staged Murder Sebastian"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop';
              }}
              className="w-full h-full object-cover grayscale group-hover:scale-105 transition-all duration-700"
            />

            {/* Revealed Crossfade Image: Jeremy Rathbone */}
            <motion.img
              src="/img/Jeremy%20Rathbone/Jeremy%20Rathbone.webp"
              alt="Jeremy Rathbone Disguise"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop';
              }}
              animate={isButlerMelted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            <div className="absolute bottom-2 left-2 right-2 bg-[#0A0A0A]/90 p-2 text-center border border-[#3E0000]">
              <span className="text-xs font-mono text-[#D4A373] font-bold uppercase block">
                {isButlerMelted ? 'DISGUISE UNMASKED: JEREMY RATHBONE' : 'STAGED CORPSE: SEBASTIAN MICHAELIS'}
              </span>
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <h4 className="text-2xl font-headline font-bold text-white">
              {arc.philosophicalCore.title}
            </h4>
            <p className="text-xs font-mono text-[#D4A373]">
              {arc.philosophicalCore.subtitle}
            </p>
            <p className="text-sm font-subhead text-[#E2E8F0] leading-relaxed">
              {arc.philosophicalCore.text}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
