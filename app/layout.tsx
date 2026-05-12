import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Курс по Аккомпанементу — Василий Горшков',
  description:
    'За 2 месяца — джазовая гармония, игра по слуху, аранжировка и импровизация. Предзапись на летний поток.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
