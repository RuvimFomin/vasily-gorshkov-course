'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ShimmerButton } from './ui/shimmer-button';
import { Particles } from './ui/particles';

export function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-end pb-12 md:pb-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-fixed"
        style={{
          backgroundImage: "url('https://taplink.st/p/7/c/c/4/65364030.jpg?1')",
          backgroundPosition: 'center 20%',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.5) 45%, rgba(13,27,42,0.93) 75%, #0D1B2A 100%)',
        }}
      />
      <Particles count={22} />

      <div className="relative z-10 max-w-3xl mx-auto text-center w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 rounded-full border border-accent-light/40 bg-accent-light/10 text-accent-light text-xs font-semibold tracking-widest mb-7 uppercase"
        >
          Предзапись на летний поток
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif font-bold text-white leading-tight mb-6 tracking-tightest"
          style={{ fontSize: 'clamp(38px, 6vw, 76px)' }}
        >
          Курс по{' '}
          <span className="shimmer-text">Аккомпанементу</span>
          <br />
          Василия Горшкова
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="text-white/65 text-lg max-w-lg mx-auto mb-10 font-light leading-relaxed"
        >
          За 2 месяца — джазовая гармония, игра по слуху, аранжировка и импровизация.
          Для тех, кто хочет наконец оторваться от нот.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.48 }}
          className="inline-block"
        >
          <ShimmerButton href="#signup" variant="primary">
            Забронировать место по ранней цене
          </ShimmerButton>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent-light/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
}
