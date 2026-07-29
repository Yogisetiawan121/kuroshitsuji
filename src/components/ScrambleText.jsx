import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

export default function ScrambleText({ text, className = '', delay = 0, duration = 1000 }) {
  const elRef = useRef(null);
  
  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    let startTime = null;
    let animationFrame;
    
    const scramble = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Calculate how many characters of the actual text should be revealed
      const revealCount = Math.floor((progress / duration) * text.length);
      
      if (progress < duration + delay) {
        if (progress > delay) {
          let currentText = '';
          for (let i = 0; i < text.length; i++) {
            if (i < revealCount || text[i] === ' ') {
              currentText += text[i];
            } else {
              currentText += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            }
          }
          // Direct DOM manipulation — zero React re-renders during animation
          el.textContent = currentText;
        }
        animationFrame = requestAnimationFrame(scramble);
      } else {
        el.textContent = text;
      }
    };
    
    animationFrame = requestAnimationFrame(scramble);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [text, delay, duration]);

  return (
    <motion.span 
      ref={elRef}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
    />
  );
}
