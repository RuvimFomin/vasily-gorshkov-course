import type { Metadata } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Курс по Аккомпанементу — Василий Горшков',
  description:
    'За 2 месяца — джазовая гармония, игра по слуху, аранжировка и импровизация. Предзапись на летний поток.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${manrope.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
