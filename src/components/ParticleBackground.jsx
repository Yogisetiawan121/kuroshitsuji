import React, { useEffect, useRef } from 'react';

// Pre-computed sin lookup table (256 entries) to avoid Math.sin() per particle per frame
const SIN_TABLE_SIZE = 256;
const SIN_TABLE = new Float32Array(SIN_TABLE_SIZE);
for (let i = 0; i < SIN_TABLE_SIZE; i++) {
  SIN_TABLE[i] = Math.sin((i / SIN_TABLE_SIZE) * Math.PI * 2);
}
function fastSin(angle) {
  // Normalize angle to [0, 2π) then map to table index
  const idx = ((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  return SIN_TABLE[Math.floor((idx / (Math.PI * 2)) * SIN_TABLE_SIZE) % SIN_TABLE_SIZE];
}

export default function ParticleBackground({ activeTab = 'STATUS' }) {
  const canvasRef = useRef(null);
  const isVisibleRef = useRef(true);
  const isOnScreenRef = useRef(true);
  const isScrollingRef = useRef(false);

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
    const isMurder = activeTab === 'MANOR_MURDERS';
    const isAtlantic = activeTab === 'THE_CAMPANIA';

    const isMobile = width < 768;
    // Fix #1: Cap mobile to 10 particles max (was 25)
    const particleCount = isMobile
      ? Math.min(10, Math.floor((width * height) / 24000))
      : Math.floor((width * height) / 16000);
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
        // Noah's Ark Circus: Sawdust gold dust & rising red/orange circus embers
        const rand = Math.random();
        if (rand > 0.5) {
          color = 'rgba(184, 149, 79, '; // sawdust gold
        } else if (rand > 0.25) {
          color = 'rgba(139, 0, 0, ';    // circus crimson
        } else {
          color = 'rgba(245, 245, 245, '; // greasepaint white
        }
        radius = Math.random() * 2.2 + 0.5;
        speedX = (Math.random() - 0.5) * 0.3;
        speedY = -Math.random() * 0.6 - 0.1;
        shadowColor = '#B8954F';
      } else if (isMurder) {
        // Manor Murders: Gentle falling snow & candle smoke haze
        const rand = Math.random();
        if (rand > 0.6) {
          color = 'rgba(245, 245, 220, '; // ivory clue
        } else if (rand > 0.3) {
          color = 'rgba(107, 114, 128, '; // pipe smoke gray
        } else {
          color = 'rgba(212, 163, 115, '; // candle amber
        }
        radius = Math.random() * 2.0 + 0.4;
        speedX = (Math.random() - 0.5) * 0.2;
        speedY = Math.random() * 0.4 + 0.1; // falling down like snow
        shadowColor = '#D4A373';
      } else if (isAtlantic) {
        // The Campania Incident: Deep ocean spray, drifting bubbles & Atlantic water particles
        const rand = Math.random();
        if (rand > 0.5) {
          color = 'rgba(15, 28, 46, ';   // abyss blue
        } else if (rand > 0.25) {
          color = 'rgba(200, 214, 175, '; // zombie pale
        } else {
          color = 'rgba(192, 192, 192, '; // iceberg silver
        }
        radius = Math.random() * 3.0 + 0.6;
        speedX = (Math.random() - 0.5) * 0.5;
        speedY = -Math.random() * 0.7 - 0.1; // rising water bubbles
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
    const needsSway = isWolfsGorge || isAtlantic;

    const render = () => {
      // Pause when offscreen, tab hidden, or the user is actively scrolling
      if (!isVisibleRef.current || !isOnScreenRef.current || isScrollingRef.current) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      particles.forEach((p) => {
        if (needsSway) {
          // Use pre-computed sin lookup instead of Math.sin per particle per frame
          p.x += p.speedX + fastSin(time + p.phase) * 0.35;
        } else {
          p.x += p.speedX;
        }
        p.y += p.speedY;

        if (isMurder) {
          if (p.y > height) {
            p.y = 0;
            p.x = Math.random() * width;
          }
        } else {
          if (p.y < 0) {
            p.y = height;
            p.x = Math.random() * width;
          }
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;

        // Fix #1: Skip shadowBlur entirely on mobile — don't even set the property
        if (!isMobile && p.radius > 1.5) {
          ctx.shadowBlur = 4;
          ctx.shadowColor = p.shadowColor;
        } else if (!isMobile) {
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // IntersectionObserver: pause when canvas scrolls offscreen
    let observer;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(([entry]) => {
        isOnScreenRef.current = entry.isIntersecting;
      });
      observer.observe(canvas);
    }

    // visibilitychange: pause when tab is hidden
    const handleVisibility = () => {
      isVisibleRef.current = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Pause particle drawing while the user is scrolling (any scroll container).
    // Capture phase catches scrolls inside inner containers, not just the window.
    let scrollTimer;
    const handleScroll = () => {
      isScrollingRef.current = true;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        isScrollingRef.current = false;
      }, 150);
    };
    window.addEventListener('scroll', handleScroll, { capture: true, passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('scroll', handleScroll, { capture: true });
      clearTimeout(scrollTimer);
      if (observer) observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeTab]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-700 ${
        activeTab === 'WOLFS_GORGE' || activeTab === 'THE_CAMPANIA' ? 'opacity-80' : 'opacity-65'
      }`}
    />
  );
}
