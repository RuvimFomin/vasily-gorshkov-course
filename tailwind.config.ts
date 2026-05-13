import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#2B6FA4',
          hover: '#205585',
          light: '#BAD4E9',
          pale: '#E8F2FB',
        },
        surface: {
          DEFAULT: '#F2F7FC',
          2: '#E3EDF8',
          3: '#BAD4E9',
        },
        ink: {
          DEFAULT: '#0F1C2E',
          2: '#2D4059',
          3: '#5A7080',
        },
        dark: {
          DEFAULT: '#0D1B2A',
          2: '#152030',
          3: '#1E2F42',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.5s linear infinite',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
      },
    },
  },
  plugins: [],
};
export default config;
