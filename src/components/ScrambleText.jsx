import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

export default function ScrambleText({ text, className = '', delay = 0, duration = 1000 }) {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let startTime = null;
    let animationFrame;
    
    let lastUpdate = 0;
    const scramble = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Calculate how many characters of the actual text should be revealed
      const revealCount = Math.floor((progress / duration) * text.length);
      
      if (progress < duration + delay) {
        if (progress > delay) {
          // Throttle state updates to ~30ms to prevent main thread lock on mobile
          if (timestamp - lastUpdate > 30) {
            lastUpdate = timestamp;
            let currentText = '';
            for (let i = 0; i < text.length; i++) {
              if (i < revealCount || text[i] === ' ') {
                currentText += text[i];
              } else {
                currentText += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
              }
            }
            setDisplayText(currentText);
          }
        } else {
           setDisplayText('');
        }
        animationFrame = requestAnimationFrame(scramble);
      } else {
        setDisplayText(text);
      }
    };
    
    animationFrame = requestAnimationFrame(scramble);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [text, delay, duration]);

  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
    >
      {displayText}
    </motion.span>
  );
}
