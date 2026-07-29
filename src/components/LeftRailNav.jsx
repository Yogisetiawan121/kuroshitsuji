import React, { useState } from 'react';
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
  GraduationCap,
  TreePine,
  Sparkles,
  Search,
  Anchor,
  CornerDownRight,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const navItemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
};

export default function LeftRailNav({ activeTab, setActiveTab, activeCharacter, isAudioMuted, toggleAudio }) {
  const [isArchiveHovered, setIsArchiveHovered] = useState(false);

  const isArchiveFamilyActive = activeTab === 'ARCHIVE' || activeTab === 'WESTON_COLLEGE' || activeTab === 'WOLFS_GORGE' || activeTab === 'NOAHS_ARK' || activeTab === 'MANOR_MURDERS' || activeTab === 'THE_CAMPANIA';

  const navItems = [
    { id: 'STATUS', label: 'STATUS', icon: Shield },
    { id: 'LINEAGE', label: 'LINEAGE', icon: GitBranch },
    { id: 'CONTRACT', label: 'CONTRACT', icon: FileText },
    { id: 'ARSENAL', label: 'ARSENAL', icon: Swords },
    { 
      id: 'ARCHIVE', 
      label: 'ARCHIVE', 
      icon: Archive,
      hasSubitems: true,
      subitems: [
        { id: 'WESTON_COLLEGE', label: 'WESTON COLLEGE', tag: 'Public School Arc', icon: GraduationCap, color: '#7A1F1F' },
        { id: 'WOLFS_GORGE', label: "WOLF'S GORGE", tag: 'Emerald Witch Arc', icon: TreePine, color: '#1B4D3E' },
        { id: 'NOAHS_ARK', label: "NOAH'S ARK", tag: 'Book of Circus', icon: Sparkles, color: '#8B0000' },
        { id: 'MANOR_MURDERS', label: "MANOR MURDERS", tag: 'Book of Murder', icon: Search, color: '#3E0000' },
        { id: 'THE_CAMPANIA', label: "THE CAMPANIA", tag: 'Book of Atlantic', icon: Anchor, color: '#0F1C2E' },
      ]
    },
    { id: 'GENEALOGY', label: 'GENEALOGY', icon: Users },
    { id: 'INVENTORY', label: 'INVENTORY', icon: Package },
    { id: 'MEMORIES', label: 'MEMORIES', icon: History },
  ];

  return (
    <>
      {/* Desktop Left Rail (90px wide, fixed) */}
      <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-[90px] bg-[#0A0A0A]/95 border-r border-[#4A5568]/40 z-40 flex-col items-center justify-between py-6 backdrop-blur-md">
        
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
          <span className="text-xs font-mono tracking-widest text-[#718096] uppercase">
            666-C
          </span>
        </div>

        {/* Vertical Nav List */}
        <motion.nav 
          variants={navContainerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col space-y-3 my-auto overflow-y-auto max-h-[calc(100vh-180px)] no-scrollbar py-2"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id || (item.id === 'ARCHIVE' && isArchiveFamilyActive);

            if (item.hasSubitems) {
              return (
                <div 
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setIsArchiveHovered(true)}
                  onMouseLeave={() => setIsArchiveHovered(false)}
                >
                  <motion.button
                    variants={navItemVariants}
                    layout
                    onClick={() => setActiveTab('ARCHIVE')}
                    className={`relative group flex flex-col items-center py-3 px-2 w-full transition-all duration-300 border-l-2 ${
                      isActive
                        ? 'border-transparent text-[#E2E8F0]'
                        : 'border-transparent text-[#718096] hover:text-[#E2E8F0] hover:bg-white/[0.02]'
                    }`}
                  >
                    <Icon className={`w-5 h-5 mb-1.5 transition-colors duration-300 ${
                      isActive ? 'text-[#8B0000]' : 'group-hover:text-[#8B0000]'
                    }`} />

                    <span className="text-xs font-mono tracking-[0.2em] uppercase writing-mode-vertical rotate-180 py-1 transition-all duration-300">
                      {item.label}
                    </span>

                    {/* Sub-item count badge indicator */}
                    <span className="text-[9px] font-mono px-1 py-0.2 bg-[#8B0000]/20 border border-[#8B0000]/60 text-[#8B0000] rounded-none mt-1">
                      {item.subitems ? `${item.subitems.length} ARCS` : '5 ARCS'}
                    </span>

                    {isActive && (
                      <motion.div 
                        layoutId="activeNavDesktop"
                        className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#8B0000] shadow-[0_0_10px_#8B0000]" 
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      />
                    )}
                  </motion.button>

                  {/* Desktop Flyout Sub-menu for ARCHIVE */}
                  <AnimatePresence>
                    {(isArchiveHovered || isArchiveFamilyActive) && (
                      <motion.div
                        initial={{ opacity: 0, x: -10, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -10, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 120, damping: 18 }}
                        className="absolute left-[85px] top-0 w-64 bg-[#0A0A0A]/95 border border-[#8B0000]/60 p-3 shadow-[0_0_25px_rgba(0,0,0,0.9)] backdrop-blur-md z-50 rounded-none space-y-2"
                      >
                        <div className="flex items-center justify-between border-b border-[#4A5568]/30 pb-1.5 mb-2">
                          <span className="text-[10px] font-mono text-[#8B0000] tracking-widest uppercase font-bold flex items-center space-x-1">
                            <Archive className="w-3 h-3" />
                            <span>ARCHIVE EXPANSION</span>
                          </span>
                          <span className="text-[9px] font-mono text-[#718096]">STORY ARCS</span>
                        </div>

                        {/* Main Archive Index Button */}
                        <button
                          onClick={() => setActiveTab('ARCHIVE')}
                          className={`w-full text-left p-2 border flex items-center justify-between text-xs font-mono tracking-wider transition-all ${
                            activeTab === 'ARCHIVE'
                              ? 'bg-[#8B0000]/30 border-[#8B0000] text-white shadow-[0_0_10px_rgba(139,0,0,0.4)]'
                              : 'bg-[#121214] border-[#4A5568]/40 text-[#718096] hover:text-[#E2E8F0] hover:border-[#8B0000]/60'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Archive className="w-3.5 h-3.5 text-[#8B0000]" />
                            <span>ALL OCCULT FILES</span>
                          </div>
                          <ChevronRight className="w-3 h-3 text-[#718096]" />
                        </button>

                        {/* Arc Sub-Items */}
                        <div className="pl-2 space-y-1.5 border-l border-[#8B0000]/40">
                          {item.subitems.map((sub) => {
                            const SubIcon = sub.icon;
                            const isSubActive = activeTab === sub.id;

                            return (
                              <button
                                key={sub.id}
                                onClick={() => setActiveTab(sub.id)}
                                className={`w-full text-left p-2 border flex items-center justify-between transition-all group ${
                                  isSubActive
                                    ? 'bg-[#16161a] text-white border-[#8B0000] shadow-[0_0_12px_rgba(139,0,0,0.5)]'
                                    : 'bg-[#0f0f11] border-[#4A5568]/30 text-[#718096] hover:text-[#E2E8F0] hover:border-[#4A5568]'
                                }`}
                                style={{
                                  borderLeftColor: isSubActive ? sub.color : undefined,
                                  borderLeftWidth: isSubActive ? '3px' : undefined
                                }}
                              >
                                <div className="flex items-center space-x-2 min-w-0">
                                  <CornerDownRight className="w-3 h-3 text-[#8B0000] shrink-0" />
                                  <SubIcon className="w-3.5 h-3.5 shrink-0" style={{ color: sub.color }} />
                                  <div className="truncate">
                                    <span className="text-[11px] font-mono font-bold block truncate">{sub.label}</span>
                                    <span className="text-[9px] font-mono text-[#718096] block tracking-tighter truncate">{sub.tag}</span>
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <motion.button
                key={item.id}
                variants={navItemVariants}
                layout
                onClick={() => setActiveTab(item.id)}
                className={`relative group flex flex-col items-center py-3 px-2 transition-all duration-300 border-l-2 ${
                  isActive
                    ? 'border-transparent text-[#E2E8F0]'
                    : 'border-transparent text-[#718096] hover:text-[#E2E8F0] hover:bg-white/[0.02]'
                }`}
              >
                <Icon className={`w-5 h-5 mb-2 transition-colors duration-300 ${
                  isActive ? 'text-[#8B0000]' : 'group-hover:text-[#8B0000]'
                }`} />

                <span className="text-xs font-mono tracking-[0.2em] uppercase writing-mode-vertical rotate-180 py-1 transition-all duration-300">
                  {item.label}
                </span>

                {isActive && (
                  <motion.div 
                    layoutId="activeNavDesktop"
                    className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#8B0000] shadow-[0_0_10px_#8B0000]" 
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.nav>

        {/* Bottom Audio Toggle & Year */}
        <div className="flex flex-col items-center space-y-3">
          <button
            onClick={toggleAudio}
            className="p-2 border border-[#8B0000]/40 rounded-full bg-[#121214] text-[#718096] hover:text-[#8B0000] hover:border-[#8B0000] transition-colors"
            title={isAudioMuted ? "Enable Gothic Ambient Audio" : "Mute Gothic Ambient Audio"}
          >
            {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#8B0000] animate-pulse" />}
          </button>

          <span className="text-xs font-mono text-[#4A5568] tracking-widest">
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
        <motion.div 
          variants={navContainerVariants}
          initial="hidden"
          animate="show"
          className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar touch-scroll-x pt-1 pb-0.5"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            if (item.hasSubitems) {
              return (
                <React.Fragment key={item.id}>
                  <motion.button
                    variants={navItemVariants}
                    layout
                    onClick={() => setActiveTab('ARCHIVE')}
                    className={`relative flex items-center space-x-1 px-2.5 py-1 rounded-none border text-[10px] font-mono tracking-widest whitespace-nowrap transition-all ${
                      isActive || isArchiveFamilyActive
                        ? 'border-[#8B0000] bg-[#8B0000]/20 text-[#E2E8F0]'
                        : 'border-transparent text-[#718096] hover:text-[#E2E8F0]'
                    }`}
                  >
                    <Icon className={`w-3 h-3 ${(isActive || isArchiveFamilyActive) ? 'text-[#8B0000]' : 'text-[#718096]'}`} />
                    <span className="relative z-10">{item.label}</span>
                  </motion.button>

                  {/* Subitem mobile buttons */}
                  {item.subitems.map((sub) => {
                    const SubIcon = sub.icon;
                    const isSubActive = activeTab === sub.id;
                    return (
                      <motion.button
                        key={sub.id}
                        variants={navItemVariants}
                        layout
                        onClick={() => setActiveTab(sub.id)}
                        className={`relative flex items-center space-x-1 px-2 py-1 border text-[9px] font-mono tracking-wider whitespace-nowrap transition-all ${
                          isSubActive
                            ? 'border-white/40 bg-white/10 text-white font-bold'
                            : 'border-[#4A5568]/40 bg-[#121214]/60 text-[#718096] hover:text-[#E2E8F0]'
                        }`}
                        style={{ borderColor: isSubActive ? sub.color : undefined }}
                      >
                        <CornerDownRight className="w-2.5 h-2.5 text-[#8B0000]" />
                        <SubIcon className="w-2.5 h-2.5" style={{ color: sub.color }} />
                        <span>{sub.label}</span>
                      </motion.button>
                    );
                  })}
                </React.Fragment>
              );
            }

            return (
              <motion.button
                key={item.id}
                variants={navItemVariants}
                layout
                onClick={() => setActiveTab(item.id)}
                className={`relative flex items-center space-x-1 px-2.5 py-1 rounded-none border text-[10px] font-mono tracking-widest whitespace-nowrap transition-all ${
                  isActive
                    ? 'border-transparent text-[#E2E8F0]'
                    : 'border-transparent text-[#718096] hover:text-[#E2E8F0]'
                }`}
              >
                <Icon className={`w-3 h-3 ${isActive ? 'text-[#8B0000]' : 'text-[#718096]'}`} />
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <motion.div 
                    layoutId="activeNavMobile"
                    className="absolute inset-0 bg-[#8B0000]/20 border border-[#8B0000] pointer-events-none z-0" 
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </nav>
    </>
  );
}
