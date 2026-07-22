/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        voidBlack: '#0A0A0A',
        crimson: '#8B0000',
        crimsonBright: '#B22222',
        slateBlue: '#4A5568',
        parchment: '#E2E8F0',
        ash: '#718096',
        voidCard: '#121214',
      },
      fontFamily: {
        headline: ['"Cinzel Decorative"', '"Playfair Display"', 'serif'],
        subhead: ['"Cormorant Garamond"', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
        body: ['Inter', 'sans-serif'],
        jp: ['"Noto Serif JP"', 'serif'],
      },
      boxShadow: {
        'crimson-glow': '0 0 25px rgba(139, 0, 0, 0.35)',
        'crimson-lg': '0 0 50px rgba(139, 0, 0, 0.45)',
        'inner-dark': 'inset 0 0 30px rgba(0, 0, 0, 0.95)',
        'gothic-frame': '0 10px 40px rgba(0, 0, 0, 0.8), 0 0 15px rgba(139, 0, 0, 0.25)',
      },
      backgroundImage: {
        'void-gradient': 'radial-gradient(ellipse at top, #160d0d 0%, #0a0a0a 60%, #030303 100%)',
        'crimson-gradient': 'linear-gradient(135deg, #8B0000 0%, #3a0000 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(20, 20, 24, 0.8) 0%, rgba(10, 10, 10, 0.95) 100%)',
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.3em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 35s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'glow-pulse': 'glowPulse 3s infinite ease-in-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(139, 0, 0, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(139, 0, 0, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
