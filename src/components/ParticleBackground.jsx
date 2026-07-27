import React, { useEffect, useRef } from 'react';

export default function ParticleBackground({ activeTab = 'STATUS' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const isWeston = activeTab === 'WESTON_COLLEGE';
    const isWolfsGorge = activeTab === 'WOLFS_GORGE';
    const isCircus = activeTab === 'NOAHS_ARK';
    const isManor = activeTab === 'MANOR_MURDERS';
    const isCampania = activeTab === 'THE_CAMPANIA';

    const particleCount = Math.floor((width * height) / 16000);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      let color, radius, speedX, speedY, shadowColor;

      if (isWeston) {
        // Weston College: Faint cricket pitch chalk white & academic gold dust
        const rand = Math.random();
        if (rand > 0.6) {
          color = 'rgba(139, 115, 85, '; // academic gold
        } else if (rand > 0.2) {
          color = 'rgba(230, 225, 210, '; // chalk white
        } else {
          color = 'rgba(122, 31, 31, ';   // weston red
        }
        radius = Math.random() * 1.8 + 0.4;
        speedX = (Math.random() - 0.5) * 0.15;
        speedY = -Math.random() * 0.3 - 0.05;
        shadowColor = '#8B7355';
      } else if (isWolfsGorge) {
        // Wolf's Gorge: Drifting emerald mist & toxic sulfur glow particles
        const rand = Math.random();
        if (rand > 0.5) {
          color = 'rgba(27, 77, 62, ';   // emerald witch green
        } else if (rand > 0.25) {
          color = 'rgba(154, 205, 50, '; // sulfur glow
        } else {
          color = 'rgba(74, 103, 65, ';  // toxic mist
        }
        radius = Math.random() * 2.8 + 0.8;
        speedX = (Math.random() - 0.5) * 0.4;
        speedY = -Math.random() * 0.5 - 0.1;
        shadowColor = '#9ACD32';
      } else if (isCircus) {
        // Noah's Ark Circus: Embers and sawdust gold drifting upward
        const rand = Math.random();
        if (rand > 0.6) {
          color = 'rgba(184, 149, 79, '; // sawdust gold
        } else if (rand > 0.2) {
          color = 'rgba(180, 50, 40, ';  // circus ember
        } else {
          color = 'rgba(245, 245, 245, '; // greasepaint ash
        }
        radius = Math.random() * 2.2 + 0.5;
        speedX = (Math.random() - 0.5) * 0.3;
        speedY = -Math.random() * 0.6 - 0.2; // floats upward like embers
        shadowColor = '#B8954F';
      } else if (isManor) {
        // Manor Murders: Candle smoke & falling winter snow
        const rand = Math.random();
        if (rand > 0.5) {
          color = 'rgba(212, 163, 115, '; // candle amber
        } else if (rand > 0.2) {
          color = 'rgba(245, 245, 220, '; // ivory snow
        } else {
          color = 'rgba(107, 114, 128, '; // pipe smoke
        }
        radius = Math.random() * 2.0 + 0.4;
        speedX = (Math.random() - 0.5) * 0.2;
        speedY = Math.random() * 0.4 + 0.1; // falls gently like snow
        shadowColor = '#D4A373';
      } else if (isCampania) {
        // The Campania: Sea spray & rising underwater bubbles
        const rand = Math.random();
        if (rand > 0.5) {
          color = 'rgba(192, 192, 192, '; // iceberg silver
        } else if (rand > 0.2) {
          color = 'rgba(200, 214, 175, '; // zombie pale
        } else {
          color = 'rgba(15, 60, 100, ';   // abyss ocean blue
        }
        radius = Math.random() * 2.5 + 0.6;
        speedX = (Math.random() - 0.5) * 0.5;
        speedY = -Math.random() * 0.4 - 0.15; // rising bubbles
        shadowColor = '#0F1C2E';
      } else {
        // Default Gothic Ember Particles
        const rand = Math.random();
        color = rand > 0.3 ? 'rgba(139, 0, 0, ' : 'rgba(200, 200, 220, ';
        radius = Math.random() * 1.5 + 0.3;
        speedX = (Math.random() - 0.5) * 0.2;
        speedY = -Math.random() * 0.4 - 0.1;
        shadowColor = '#8B0000';
      }

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        color,
        opacity: Math.random() * 0.5 + 0.15,
        speedX,
        speedY,
        shadowColor,
        phase: Math.random() * Math.PI * 2
      });
    }

    let time = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      particles.forEach((p) => {
        if (isWolfsGorge) {
          // Sinusoidal wind sway for toxic mist
          p.x += p.speedX + Math.sin(time + p.phase) * 0.3;
        } else {
          p.x += p.speedX;
        }
        p.y += p.speedY;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.shadowBlur = p.radius > 1 ? (isWolfsGorge ? 10 : 6) : 0;
        ctx.shadowColor = p.shadowColor;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeTab]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-700 ${
        activeTab === 'WOLFS_GORGE' ? 'opacity-80' : 'opacity-65'
      }`}
    />
  );
}
