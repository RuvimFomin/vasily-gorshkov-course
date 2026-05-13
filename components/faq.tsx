'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FadeIn } from './ui/fade-in';

const faqs = [
  {
    q: 'Как оплатить тариф с зарубежной карты?',
    a: 'Нажмите «Связаться со мной» и напишите мне в Телеграм — отправлю ссылку для оплаты с любой страны.',
  },
  {
    q: 'Какой уровень нужен для поступления?',
    a: 'Достаточно базового владения инструментом и знания теории.',
  },
  {
    q: 'Подойдет ли курс, если я играю в христианских кругах?',
    a: 'Да, обучение универсально и адаптируется лично под запрос ученика.',
  },
  {
    q: 'Подойдет ли курс под мой график?',
    a: 'Урок открывается каждый понедельник, смотреть и делать домашнее задание можно когда удобно.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl font-light text-dark text-center mb-12">
            Частые вопросы
          </h2>
        </FadeIn>

        <div className="divide-y divide-dark/8">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left text-dark/80 hover:text-dark transition-colors font-medium text-[15px] gap-4"
                >
                  {faq.q}
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-orange flex-shrink-0"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="pb-5 text-dark/50 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
