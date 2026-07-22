import React from 'react';
import { 
  Shield, 
  GitBranch, 
  FileText, 
  Swords, 
  Archive, 
  Users, 
  Package, 
  History,
  Skull,
  Crown,
  Volume2,
  VolumeX,
  Music
} from 'lucide-react';

const NAV_ITEMS = [
  { id: 'STATUS', label: 'STATUS', icon: Shield },
  { id: 'LINEAGE', label: 'LINEAGE', icon: GitBranch },
  { id: 'CONTRACT', label: 'CONTRACT', icon: FileText },
  { id: 'ARSENAL', label: 'ARSENAL', icon: Swords },
  { id: 'ARCHIVE', label: 'ARCHIVE', icon: Archive },
  { id: 'GENEALOGY', label: 'GENEALOGY', icon: Users },
  { id: 'INVENTORY', label: 'INVENTORY', icon: Package },
  { id: 'MEMORIES', label: 'MEMORIES', icon: History },
];

export default function LeftRailNav({ activeTab, setActiveTab, activeCharacter, isAudioMuted, toggleAudio }) {
  return (
    <>
      {/* Desktop Left Rail (80px wide, fixed) */}
      <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-[80px] bg-[#0A0A0A]/95 border-r border-[#4A5568]/40 z-40 flex-col items-center justify-between py-6 backdrop-blur-md">
        
        {/* Top Logo / Occult Sigil Crest */}
        <div className="flex flex-col items-center space-y-2">
          <button 
            onClick={() => setActiveTab('STATUS')}
            title="Black Butler Occult Dossier"
            className="group relative p-2 rounded-full border border-[#8B0000]/60 bg-[#121214] hover:border-[#8B0000] hover:shadow-[0_0_20px_rgba(139,0,0,0.5)] transition-all duration-300"
          >
            {activeCharacter === 'sebastian' ? (
              <Skull className="w-6 h-6 text-[#8B0000] group-hover:scale-110 transition-transform duration-300" />
            ) : (
              <Crown className="w-6 h-6 text-[#8B0000] group-hover:scale-110 transition-transform duration-300" />
            )}
            <div className="gothic-corner-tl !w-2 !h-2" />
            <div className="gothic-corner-br !w-2 !h-2" />
          </button>
          <span className="text-[9px] font-mono tracking-widest text-[#718096] uppercase">
            666-C
          </span>
        </div>

        {/* Vertical Nav List */}
        <nav className="flex flex-col space-y-3 my-auto overflow-y-auto max-h-[calc(100vh-180px)] no-scrollbar py-2">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative group flex flex-col items-center py-3 px-2 transition-all duration-300 border-l-2 ${
                  isActive
                    ? 'border-[#8B0000] bg-[#8B0000]/10 text-[#E2E8F0] shadow-[0_0_15px_rgba(139,0,0,0.25)]'
                    : 'border-transparent text-[#718096] hover:text-[#E2E8F0] hover:border-[#4A5568]/60 hover:bg-white/[0.02]'
                }`}
              >
                {/* Icon */}
                <Icon className={`w-4 h-4 mb-2 transition-colors duration-300 ${
                  isActive ? 'text-[#8B0000]' : 'group-hover:text-[#8B0000]'
                }`} />

                {/* Rotated 90 Deg Label */}
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase writing-mode-vertical rotate-180 py-1 transition-all duration-300">
                  {item.label}
                </span>

                {/* Active Indicator Glow Bar */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#8B0000] shadow-[0_0_10px_#8B0000]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom Audio Toggle & Year */}
        <div className="flex flex-col items-center space-y-3">
          <button
            onClick={toggleAudio}
            className="p-2 border border-[#8B0000]/40 rounded-full bg-[#121214] text-[#718096] hover:text-[#8B0000] hover:border-[#8B0000] transition-colors"
            title={isAudioMuted ? "Enable Gothic Ambient Audio" : "Mute Gothic Ambient Audio"}
          >
            {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#8B0000] animate-pulse" />}
          </button>

          <span className="text-[9px] font-mono text-[#4A5568] tracking-widest">
            1889
          </span>
        </div>
      </aside>

      {/* Mobile Top Header Navigation Bar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 bg-[#0A0A0A]/95 border-b border-[#4A5568]/40 z-40 backdrop-blur-md px-3 py-2 flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Skull className="w-5 h-5 text-[#8B0000]" />
            <span className="text-xs font-headline tracking-widest text-[#E2E8F0]">KUROSHITSUJI</span>
          </div>

          {/* Prominent Mobile Ambience Music Button */}
          <button
            onClick={toggleAudio}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-none border text-[10px] font-mono tracking-widest uppercase transition-all duration-300 ${
              !isAudioMuted
                ? 'border-[#8B0000] bg-[#8B0000]/25 text-[#E2E8F0] shadow-[0_0_15px_rgba(139,0,0,0.5)]'
                : 'border-[#4A5568]/60 bg-[#121214] text-[#718096] hover:text-[#E2E8F0] hover:border-[#8B0000]'
            }`}
          >
            {isAudioMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#718096]" />
                <span>MUSIC OFF</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#8B0000] animate-pulse" />
                <span className="text-[#8B0000] font-bold">MUSIC ON</span>
              </>
            )}
          </button>
        </div>

        {/* Scrollable Navigation Tabs */}
        <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar pt-1 pb-0.5">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-1 px-2.5 py-1 rounded-none border text-[10px] font-mono tracking-widest whitespace-nowrap transition-all ${
                  isActive
                    ? 'border-[#8B0000] bg-[#8B0000]/20 text-[#E2E8F0]'
                    : 'border-transparent text-[#718096] hover:text-[#E2E8F0]'
                }`}
              >
                <Icon className="w-3 h-3 text-[#8B0000]" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
