/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 品牌主色调 - 专业蓝色系
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // 点缀色 - 金色/橙色（代表未来、希望）
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // 深蓝背景色
        navy: {
          800: '#1e3a5f',
          900: '#0f2744',
          950: '#071428',
        },
        // 生物模块颜色 - 自然风格
        bio: {
          // 自然绿色系
          nature: {
            50: '#f0fdf4',   // 极浅绿
            100: '#dcfce7',  // 浅绿
            200: '#bbf7d0',  // 淡绿
            300: '#86efac',  // 嫩绿
            400: '#4ade80',  // 草绿
            500: '#22c55e',  // 自然绿
            600: '#16a34a',  // 森林绿
            700: '#15803d',  // 深绿
          },
          // 温暖米色系
          earth: {
            50: '#fafaf9',   // 米白
            100: '#f5f5f4',  // 浅米
            200: '#e7e5e4',  // 米色
            300: '#d6d3d1',  // 暖灰
          },
          // 自然棕色系（用于强调）
          wood: {
            400: '#a78b5b',  // 浅木色
            500: '#8b7355',  // 木色
            600: '#6b5d4f',  // 深木色
          },
          // 保留原有颜色以兼容
          primary: '#22c55e',      // 自然绿（浅色主题）
          secondary: '#16a34a',    // 森林绿
          accent: '#4ade80',       // 草绿
          dark: '#14532d',         // 深绿色文字（浅色背景）
          gray: '#6b7280',         // gray-500
          bg: '#f0fdf4',           // 极浅绿背景
          'dark-subtle': '#374151', // gray-700
        }
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(251, 191, 36, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
