'use client';

import { useState } from 'react';
import { ShimmerButton } from './ui/shimmer-button';
import { FadeIn } from './ui/fade-in';
import { cn } from '@/lib/utils';

const inputClass =
  'w-full bg-white border border-ink/12 rounded-xl px-4 py-3.5 text-ink text-sm placeholder:text-ink/30 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all font-sans font-medium';

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
    <section id="signup" className="py-20 px-6 bg-surface-2">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-ink text-center mb-2">
            Записаться на курс
          </h2>
          <p className="text-center text-ink-3 text-sm mb-10 font-medium">
            Заполнившие анкету первыми получат доступ по специальной цене
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          {status === 'success' ? (
            <div className="bg-white border border-accent/20 rounded-2xl p-10 text-center shadow-sm">
              <div className="w-14 h-14 rounded-full bg-accent-pale flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-2xl font-bold">✓</span>
              </div>
              <p className="text-ink font-bold text-2xl tracking-tight mb-3">Заявка отправлена!</p>
              <p className="text-ink-3 text-sm font-medium">
                Василий свяжется с вами в Телеграм, как только откроются продажи.
                Вы в числе первых и получите доступ по специальной цене.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-2xl p-8 shadow-sm border border-accent-light/30">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-ink-2 text-xs mb-1.5 block font-semibold uppercase tracking-wide">Имя *</span>
                  <input name="name" type="text" required placeholder="Ваше имя" className={inputClass} />
                </label>
                <label className="block">
                  <span className="text-ink-2 text-xs mb-1.5 block font-semibold uppercase tracking-wide">Email *</span>
                  <input name="email" type="email" required placeholder="example@mail.com" className={inputClass} />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-ink-2 text-xs mb-1.5 block font-semibold uppercase tracking-wide">Телеграм *</span>
                  <input name="telegram" type="text" required placeholder="@username" className={inputClass} />
                </label>
                <label className="block">
                  <span className="text-ink-2 text-xs mb-1.5 block font-semibold uppercase tracking-wide">Уровень *</span>
                  <select name="experience" required className={selectClass}>
                    <option value="">Выберите уровень</option>
                    <option value="Начальный">Начальный</option>
                    <option value="Средний">Средний</option>
                    <option value="Продвинутый">Продвинутый</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="text-ink-2 text-xs mb-1.5 block font-semibold uppercase tracking-wide">Какой результат хотите получить *</span>
                <textarea name="goal" required rows={3} placeholder="Например, научиться подбирать аккомпанемент на слух" className={cn(inputClass, 'resize-none')} />
              </label>

              <label className="block">
                <span className="text-ink-2 text-xs mb-1.5 block font-semibold uppercase tracking-wide">С какими сложностями сталкиваетесь сейчас *</span>
                <textarea name="difficulties" required rows={3} placeholder="Например, не получается играть по слуху или строить аккомпанемент" className={cn(inputClass, 'resize-none')} />
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-ink-2 text-xs mb-1.5 block font-semibold uppercase tracking-wide">Готовность начать *</span>
                  <select name="readiness" required className={selectClass}>
                    <option value="">Выберите вариант</option>
                    <option value="Готов начать сразу">Готов начать сразу</option>
                    <option value="Хочу обсудить детали">Хочу обсудить детали</option>
                    <option value="Нужна предварительная консультация">Нужна консультация</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-ink-2 text-xs mb-1.5 block font-semibold uppercase tracking-wide">Как давно занимаетесь музыкой *</span>
                  <input name="how_long" type="text" required placeholder="Например, 3 года" className={inputClass} />
                </label>
              </div>

              {status === 'error' && (
                <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3 font-medium">
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
