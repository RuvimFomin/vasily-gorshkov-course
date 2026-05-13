'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { FadeIn } from './ui/fade-in';

// Когда получишь фото — замени null на путь: src: '/reviews/photo1.jpg'
const slides: { src: string | null; alt: string }[] = [
  { src: null, alt: 'Отзыв ученика 1' },
  { src: null, alt: 'Отзыв ученика 2' },
  { src: null, alt: 'Отзыв ученика 3' },
  { src: null, alt: 'Отзыв ученика 4' },
  { src: null, alt: 'Отзыв ученика 5' },
];

export function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (idx: number) => {
    setDir(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => go(current === 0 ? slides.length - 1 : current - 1);
  const next = () => go(current === slides.length - 1 ? 0 : current + 1);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  const slide = slides[current];

  return (
    <section className="py-12 md:py-20 px-6 bg-surface-2">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tighter text-ink text-center mb-2">
            Отзывы
          </h2>
          <p className="text-center text-ink-3 text-sm mb-10 font-medium">
            Реальные отзывы учеников курса
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          {/* Slide */}
          <div className="relative rounded-2xl overflow-hidden bg-surface select-none shadow-sm border border-accent-light/30">
            <div className="relative" style={{ aspectRatio: '4/3' }}>
              <AnimatePresence initial={false} mode="wait" custom={dir}>
                <motion.div
                  key={current}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) next();
                    else if (info.offset.x > 60) prev();
                  }}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                >
                  {slide.src ? (
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-ink-3">
                      <ImageIcon size={44} strokeWidth={1.2} className="opacity-25" />
                      <p className="text-sm font-medium opacity-40">
                        Фото отзыва {current + 1}
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Arrows */}
            <button
              onClick={prev}
              aria-label="Предыдущий"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-md"
            >
              <ChevronLeft size={20} className="text-ink" />
            </button>
            <button
              onClick={next}
              aria-label="Следующий"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-md"
            >
              <ChevronRight size={20} className="text-ink" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-2 mt-5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Слайд ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 bg-accent' : 'w-2 bg-ink/20 hover:bg-ink/35'
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <p className="text-center text-ink-3 text-xs mt-3 font-medium">
            {current + 1} / {slides.length}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
