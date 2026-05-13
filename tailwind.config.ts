import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#E86329',
          light: '#F0A07A',
          dark: '#c44e18',
        },
        olive: '#7A9B3C',
        cream: {
          DEFAULT: '#F0F0EE',
          2: '#E4E4E2',
          3: '#e8e8e6',
        },
        warm: '#C0B4A8',
        dark: {
          DEFAULT: '#151515',
          2: '#1e1e1e',
          3: '#2e2e2e',
        },
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
      },
      animation: {
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
