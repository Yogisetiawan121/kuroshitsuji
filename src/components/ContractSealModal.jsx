import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldAlert, FileText, CheckCircle2, Feather } from 'lucide-react';
import { CONTRACT_TERMS } from '../data/characterData';

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: {
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20, staggerChildren: 0.1, delayChildren: 0.2 }
  },
  exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
};

export default function ContractSealModal({ isOpen, onClose }) {
  // Close on Escape key
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Faustian Contract Terms"
        >
          
          {/* Modal Backdrop click */}
          <div className="fixed inset-0" onClick={onClose} />

          {/* Modal Container */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="relative w-full max-w-3xl bg-[#0A0A0A] border-2 border-[#8B0000] shadow-[0_0_50px_rgba(139,0,0,0.5)] p-6 sm:p-10 my-8 overflow-hidden z-10"
          >
            {/* Gothic Corner Ornaments */}
            <div className="gothic-corner-tl !w-6 !h-6" />
            <div className="gothic-corner-tr !w-6 !h-6" />
            <div className="gothic-corner-bl !w-6 !h-6" />
            <div className="gothic-corner-br !w-6 !h-6" />

            {/* Background Occult Pentagram Sigil SVG (Slowly Rotating) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
              <svg className="w-[500px] h-[500px] text-[#8B0000] spin-slow" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                <polygon points="50,5 63,40 100,40 70,62 82,98 50,75 18,98 30,62 0,40 37,40" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Header */}
            <motion.div variants={itemVariants} className="flex justify-between items-start border-b-2 border-[#8B0000] pb-4 mb-6 relative z-10">
              <div>
                <div className="flex items-center space-x-2">
                  <ShieldAlert className="w-5 h-5 text-[#8B0000]" />
                  <span className="text-xs font-mono tracking-[0.3em] text-[#8B0000] uppercase font-bold">
                    FAUSTIAN PACT // DOCUMENT 666-C
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-headline font-bold text-[#E2E8F0] mt-1">
                  TERMS OF DEMONIC BINDING
                </h2>
              </div>

              <button
                onClick={onClose}
                className="p-2 border border-[#4A5568]/40 text-[#718096] hover:text-white hover:border-[#8B0000] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Modal Body */}
            <div className="space-y-6 relative z-10 max-h-[60vh] overflow-y-auto pr-2">
              
              {/* Preamble / Signatories */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#121214] border border-[#4A5568]/30">
                <div>
                  <span className="text-[10px] font-mono text-[#718096] tracking-widest uppercase block">
                    CONTRACTOR (MASTER)
                  </span>
                  <p className="text-sm font-subhead font-bold text-[#E2E8F0] mt-0.5">
                    {CONTRACT_TERMS.signatories.contractor}
                  </p>
                  <p className="text-[10px] font-mono text-[#8B0000] mt-1">
                    SEAL LOCATION: {CONTRACT_TERMS.sealLocation.ciel}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#718096] tracking-widest uppercase block">
                    SERVANT (INFERNAL ENTITY)
                  </span>
                  <p className="text-sm font-subhead font-bold text-[#E2E8F0] mt-0.5">
                    {CONTRACT_TERMS.signatories.servant}
                  </p>
                  <p className="text-[10px] font-mono text-[#8B0000] mt-1">
                    SEAL LOCATION: {CONTRACT_TERMS.sealLocation.sebastian}
                  </p>
                </div>
              </motion.div>

              {/* Clauses */}
              <div className="space-y-4">
                <motion.h3 variants={itemVariants} className="text-xs font-mono text-[#718096] tracking-[0.2em] uppercase font-bold">
                  ARTICLES OF INFERNAL OBLIGATION
                </motion.h3>

                {CONTRACT_TERMS.clauses.map((clause) => (
                  <motion.div variants={itemVariants} key={clause.no} className="p-4 bg-[#121214]/60 border-l-2 border-[#8B0000] space-y-1">
                    <div className="flex items-center space-x-2 text-xs font-mono text-[#8B0000] font-bold tracking-widest">
                      <span>CLAUSE {clause.no} //</span>
                      <span>{clause.title}</span>
                    </div>
                    <p className="text-sm font-subhead italic text-[#E2E8F0] leading-relaxed pl-2">
                      "{clause.text}"
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Occult Wax Seal Artifact */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-[#160d0d] border border-[#8B0000]/50 rounded-none gap-4">
                <div className="flex items-center space-x-3">
                  {/* Wax Seal Graphic */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8B0000] via-[#5a0000] to-[#200000] border-2 border-[#B22222] shadow-[0_0_15px_rgba(139,0,0,0.8)] flex items-center justify-center shrink-0">
                    <svg className="w-8 h-8 text-[#E2E8F0] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#E2E8F0] tracking-widest font-bold block">
                      IMPERVIOUS FAUSTIAN WAX SEAL
                    </span>
                    <span className="text-[10px] font-mono text-[#718096] tracking-wider block">
                      BOUND IN BLOOD & CRIMSON INK // NON-TRANSFERABLE
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs font-mono text-[#8B0000] border border-[#8B0000]/40 px-3 py-1.5 bg-[#0A0A0A]">
                  <Feather className="w-3.5 h-3.5" />
                  <span>SEALED IN PERPETUITY</span>
                </div>
              </motion.div>

            </div>

            {/* Footer */}
            <motion.div variants={itemVariants} className="mt-6 pt-4 border-t border-[#4A5568]/30 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-[#8B0000] text-white font-mono text-xs tracking-[0.2em] uppercase hover:bg-[#B22222] transition-colors shadow-[0_0_15px_rgba(139,0,0,0.4)]"
              >
                CLOSE DOSSIER ARCHIVE
              </button>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
