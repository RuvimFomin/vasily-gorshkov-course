'use client';

import { useState } from 'react';
import { ShimmerButton } from './ui/shimmer-button';
import { FadeIn } from './ui/fade-in';
import { cn } from '@/lib/utils';

const inputClass =
  'w-full bg-white border border-dark/12 rounded-xl px-4 py-3.5 text-dark text-sm placeholder:text-dark/30 focus:outline-none focus:border-orange/50 transition-colors font-sans';

const selectClass = cn(inputClass, 'appearance-none cursor-pointer');

export function SignupForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Ошибка');
      setStatus('success');
      form.reset();
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Ошибка отправки');
      setStatus('error');
    }
  }

  return (
    <section id="signup" className="py-20 px-6 bg-cream-2">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl font-light text-dark text-center mb-2">
            Записаться на курс
          </h2>
          <p className="text-center text-dark/40 text-sm mb-10">
            Заполнившие анкету первыми получат доступ по специальной цене
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          {status === 'success' ? (
            <div className="bg-white border border-orange/20 rounded-2xl p-10 text-center">
              <p className="text-orange font-display text-3xl font-light mb-3">Заявка отправлена!</p>
              <p className="text-dark/50 text-sm">
                Василий свяжется с вами в Телеграм, как только откроются продажи.
                Вы в числе первых и получите доступ по специальной цене.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-dark/50 text-xs mb-1.5 block font-medium">Имя *</span>
                  <input name="name" type="text" required placeholder="Ваше имя" className={inputClass} />
                </label>
                <label className="block">
                  <span className="text-dark/50 text-xs mb-1.5 block font-medium">Email *</span>
                  <input name="email" type="email" required placeholder="example@mail.com" className={inputClass} />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-dark/50 text-xs mb-1.5 block font-medium">Телеграм *</span>
                  <input name="telegram" type="text" required placeholder="@username" className={inputClass} />
                </label>
                <label className="block">
                  <span className="text-dark/50 text-xs mb-1.5 block font-medium">Уровень *</span>
                  <select name="experience" required className={selectClass}>
                    <option value="">Выберите уровень</option>
                    <option value="Начальный">Начальный</option>
                    <option value="Средний">Средний</option>
                    <option value="Продвинутый">Продвинутый</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="text-dark/50 text-xs mb-1.5 block font-medium">Какой результат хотите получить *</span>
                <textarea
                  name="goal"
                  required
                  rows={3}
                  placeholder="Например, научиться подбирать аккомпанемент на слух"
                  className={cn(inputClass, 'resize-none')}
                />
              </label>

              <label className="block">
                <span className="text-dark/50 text-xs mb-1.5 block font-medium">С какими сложностями сталкиваетесь сейчас *</span>
                <textarea
                  name="difficulties"
                  required
                  rows={3}
                  placeholder="Например, не получается играть по слуху или строить аккомпанемент"
                  className={cn(inputClass, 'resize-none')}
                />
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-dark/50 text-xs mb-1.5 block font-medium">Готовность начать *</span>
                  <select name="readiness" required className={selectClass}>
                    <option value="">Выберите вариант</option>
                    <option value="Готов начать сразу">Готов начать сразу</option>
                    <option value="Хочу обсудить детали">Хочу обсудить детали</option>
                    <option value="Нужна предварительная консультация">Нужна консультация</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-dark/50 text-xs mb-1.5 block font-medium">Как давно занимаетесь музыкой *</span>
                  <input name="how_long" type="text" required placeholder="Например, 3 года" className={inputClass} />
                </label>
              </div>

              {status === 'error' && (
                <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  {errorMsg}
                </p>
              )}

              <ShimmerButton type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Отправляю...' : 'Отправить заявку'}
              </ShimmerButton>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
