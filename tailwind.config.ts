import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#d2b67e',
          light: '#e9d9bf',
          dim: '#b8995f',
        },
        dark: {
          DEFAULT: '#2a1407',
          2: '#282522',
          3: '#2e271a',
        },
        accent: '#8d7350',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        'spin-border': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-border': 'spin-border 3s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
