'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ShimmerButton } from './ui/shimmer-button';
import { Particles } from './ui/particles';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-24 overflow-hidden">
      {/* Full-width background photo */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: "url('https://taplink.st/p/7/c/c/4/65364030.jpg?1')",
          backgroundPosition: 'center 20%',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-dark/40 to-dark" />

      {/* Magic UI: floating particles */}
      <Particles count={28} />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 rounded-full border border-gold/40 bg-gold/10 text-gold text-sm tracking-widest mb-7 uppercase"
        >
          Предзапись на летний поток
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-display font-light text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
        >
          Курс по{' '}
          <em className="not-italic shimmer-text">Аккомпанементу</em>
          <br />
          Василия Горшкова
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="text-white/70 text-lg max-w-lg mx-auto mb-10 font-light"
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
          <ShimmerButton href="#signup">
            Забронировать место по ранней цене
          </ShimmerButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
}
