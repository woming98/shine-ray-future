/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Shineray Future Brand Colors - Light Theme
        'bio-primary': '#f5a623',    // Shineray Orange
        'bio-secondary': '#1a73e8',  // Shineray Blue
        'bio-accent': '#ff9500',     // Bright Orange
        'bio-light': '#ffffff',      // White (for cards/surfaces)
        'bio-dark': '#1a202c',       // Dark text
        'bio-gray': '#4a5568',       // Secondary text
        'bio-bg': '#f8fafc',         // Page background
        // Additional brand shades
        'shineray-orange': {
          50: '#fff8eb',
          100: '#ffecc6',
          200: '#ffd688',
          300: '#ffbc4a',
          400: '#ffa520',
          500: '#f5a623',
          600: '#e8941a',
          700: '#c06c0f',
          800: '#995514',
          900: '#7d4615',
        },
        'shineray-blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#1a73e8',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Biology element colors
        'cell-membrane': '#f5a623',
        'cytoplasm': '#ffefd5',
        'nucleus': '#1a73e8',
        'chloroplast': '#228b22',
        'mitochondria': '#dc143c',
        'vacuole': '#87ceeb',
      },
      fontFamily: {
        'display': ['Outfit', 'system-ui', 'sans-serif'],
        'body': ['Source Sans 3', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-orange': 'glowOrange 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'sparkle': 'sparkle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(245, 166, 35, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(245, 166, 35, 0.8)' },
        },
        glowOrange: {
          '0%': { boxShadow: '0 0 5px rgba(245, 166, 35, 0.5), 0 0 10px rgba(26, 115, 232, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(245, 166, 35, 0.8), 0 0 30px rgba(26, 115, 232, 0.5)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
      },
      backgroundImage: {
        'gradient-shineray': 'linear-gradient(135deg, #f5a623 0%, #1a73e8 100%)',
        'gradient-orange': 'linear-gradient(135deg, #f5a623 0%, #ff9500 100%)',
        'gradient-blue': 'linear-gradient(135deg, #1a73e8 0%, #2196f3 100%)',
      },
    },
  },
  plugins: [],
}
