import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import LeftRailNav from './components/LeftRailNav';
import CenterStage from './components/CenterStage';
import RightPanel from './components/RightPanel';
import SectionViews from './components/SectionViews';
import ContractSealModal from './components/ContractSealModal';
import BottomMarquee from './components/BottomMarquee';
import AudioAmbience from './components/AudioAmbience';
import { CHARACTERS } from './data/characterData';

export default function App() {
  const [activeTab, setActiveTab] = useState('STATUS');
  const [activeCharacter, setActiveCharacter] = useState('sebastian');
  const [isContractOpen, setIsContractOpen] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(true);

  const character = CHARACTERS[activeCharacter] || CHARACTERS.sebastian;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E2E8F0] font-body relative overflow-x-hidden">
      
      {/* Particle Depth Canvas */}
      <ParticleBackground />

      {/* Scanline Overlay (0.03 Opacity) */}
      <div className="fixed inset-0 scanline-overlay z-20 pointer-events-none opacity-30" />

      {/* Web Audio Ambient Sound */}
      <AudioAmbience isMuted={isAudioMuted} />

      {/* Main 3-Panel Layout Container */}
      <div className="flex flex-col lg:flex-row min-h-screen pb-10 pt-12 lg:pt-0 lg:pl-[80px]">
        
        {/* Fixed Left Rail Navigation */}
        <LeftRailNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeCharacter={activeCharacter}
          isAudioMuted={isAudioMuted}
          toggleAudio={() => setIsAudioMuted(!isAudioMuted)}
        />

        {/* Content Region */}
        {activeTab === 'STATUS' ? (
          <div className="flex-1 flex flex-col lg:flex-row min-w-0">
            {/* Center Stage Narrative Zone */}
            <CenterStage
              character={character}
              activeCharacter={activeCharacter}
              setActiveCharacter={setActiveCharacter}
              onOpenContract={() => setIsContractOpen(true)}
            />

            {/* Right Panel Tactical Readout */}
            <RightPanel
              character={character}
              onOpenContract={() => setIsContractOpen(true)}
            />
          </div>
        ) : (
          <div className="flex-1 flex flex-col lg:flex-row min-w-0">
            <SectionViews
              activeTab={activeTab}
              character={character}
              onOpenContract={() => setIsContractOpen(true)}
            />
            <RightPanel
              character={character}
              onOpenContract={() => setIsContractOpen(true)}
            />
          </div>
        )}

      </div>

      {/* CONTRACT SEAL Interactive Floating Sigil Button (Bottom-Right) */}
      <div className="fixed bottom-10 right-6 z-40">
        <button
          onClick={() => setIsContractOpen(true)}
          className="relative group p-1 flex items-center justify-center rounded-full bg-[#0A0A0A] border-2 border-[#8B0000] shadow-[0_0_25px_rgba(139,0,0,0.6)] pulse-crimson hover:scale-110 transition-transform duration-300"
          title="Open Faustian Contract Terms"
        >
          {/* Rotating Pentagram Outer Ring */}
          <div className="w-14 h-14 rounded-full bg-[#121214] flex items-center justify-center overflow-hidden relative">
            <svg className="w-12 h-12 text-[#8B0000] spin-slow" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2" />
              <polygon points="50,5 63,40 100,40 70,62 82,98 50,75 18,98 30,62 0,40 37,40" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[8px] font-mono text-white tracking-tighter uppercase font-bold">
              SEAL
            </span>
          </div>

          {/* Hover Tooltip */}
          <div className="absolute right-full mr-3 px-3 py-1 bg-[#0A0A0A] border border-[#8B0000] text-[10px] font-mono text-[#E2E8F0] tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            FAUSTIAN CONTRACT SEAL 666-C
          </div>
        </button>
      </div>

      {/* Faustian Contract Terms Modal */}
      <ContractSealModal
        isOpen={isContractOpen}
        onClose={() => setIsContractOpen(false)}
      />

      {/* Bottom Marquee Scrolling Ticker */}
      <BottomMarquee />

    </div>
  );
}
