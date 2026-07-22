import React, { useEffect, useRef, useState, useCallback } from 'react';

export default function AudioAmbience({ isMuted }) {
  const audioRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const retryCountRef = useRef(0);
  const interactionListenerRef = useRef(null);

  // Attempt to play the audio, retrying on the first user interaction if blocked
  const attemptPlay = useCallback((audioEl) => {
    audioEl.play().catch(() => {
      // Browser blocked autoplay — wait for the first user interaction
      if (!interactionListenerRef.current) {
        const retryOnInteraction = () => {
          audioEl.play().catch(() => {});
          document.removeEventListener('click', retryOnInteraction);
          document.removeEventListener('touchstart', retryOnInteraction);
          document.removeEventListener('keydown', retryOnInteraction);
          interactionListenerRef.current = null;
        };
        interactionListenerRef.current = retryOnInteraction;
        document.addEventListener('click', retryOnInteraction, { once: true });
        document.addEventListener('touchstart', retryOnInteraction, { once: true });
        document.addEventListener('keydown', retryOnInteraction, { once: true });
      }
    });
  }, []);

  useEffect(() => {
    // Create audio element once
    if (!audioRef.current) {
      const audio = new Audio();
      audio.loop = true;
      audio.volume = 0.3;
      audio.preload = 'auto';
      audio.src = '/audio/dark_calm_ambience.mp3';

      audio.oncanplaythrough = () => {
        setIsLoaded(true);
        setError(false);
      };
      audio.onerror = () => {
        console.warn('Ambience audio failed to load — falling back to silent mode.');
        setError(true);
      };

      audioRef.current = audio;
    }

    const audioEl = audioRef.current;

    // Control playback based on mute state
    if (!isMuted && isLoaded && audioEl.paused) {
      attemptPlay(audioEl);
    } else if (isMuted && !audioEl.paused) {
      audioEl.pause();
    }

    // Cleanup on unmount
    return () => {
      if (interactionListenerRef.current) {
        document.removeEventListener('click', interactionListenerRef.current);
        document.removeEventListener('touchstart', interactionListenerRef.current);
        document.removeEventListener('keydown', interactionListenerRef.current);
        interactionListenerRef.current = null;
      }
      if (audioEl) {
        audioEl.pause();
        audioEl.src = '';
        audioRef.current = null;
      }
    };
  }, [isMuted, isLoaded, attemptPlay]);

  // Retry waiting for audio to load (with cap) — only active while unmuted + unloaded
  useEffect(() => {
    if (!isMuted && !isLoaded && !error && audioRef.current) {
      const audioEl = audioRef.current;
      const retry = setInterval(() => {
        if (audioEl.readyState >= 3) {
          setIsLoaded(true);
          clearInterval(retry);
        } else {
          retryCountRef.current += 1;
          // Give up after 60 retries (~18 seconds) to avoid leaking interval forever
          if (retryCountRef.current >= 60) {
            clearInterval(retry);
            setError(true);
          }
        }
      }, 300);
      return () => {
        clearInterval(retry);
        retryCountRef.current = 0;
      };
    }
  }, [isMuted, isLoaded, error]);

  return (
    <>
      {/* Subtle now-playing indicator — only visible when audio is actively playing */}
      {!isMuted && !error && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none select-none">
          <div className="flex items-center space-x-3 px-4 py-1.5 bg-[#0A0A0A]/80 border border-[#8B0000]/40 backdrop-blur-md rounded-none">
            <div className="flex items-center space-x-1">
              <span className="w-0.5 h-3 bg-[#8B0000] animate-pulse rounded-full" style={{ animationDelay: '0ms' }} />
              <span className="w-0.5 h-2.5 bg-[#8B0000] animate-pulse rounded-full" style={{ animationDelay: '200ms' }} />
              <span className="w-0.5 h-3.5 bg-[#8B0000] animate-pulse rounded-full" style={{ animationDelay: '400ms' }} />
              <span className="w-0.5 h-2 bg-[#8B0000] animate-pulse rounded-full" style={{ animationDelay: '600ms' }} />
              <span className="w-0.5 h-3 bg-[#8B0000] animate-pulse rounded-full" style={{ animationDelay: '300ms' }} />
            </div>
            <span className="text-[9px] font-mono tracking-[0.2em] text-[#718096] uppercase">
              Phantomhive Manor Ambience — Active
            </span>
          </div>
        </div>
      )}
    </>
  );
}
