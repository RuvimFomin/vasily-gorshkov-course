import { FadeIn } from './ui/fade-in';

const weeks = [
  {
    title: '1 Неделя',
    items: [
      'Буквенные обозначения и джазовые аккорды',
      'Практика игры нонаккордов, расположения аккордов',
      'Применяем джазовые аккорды в песнях',
      'Дополнительное упражнение для септаккордов',
    ],
  },
  { title: '2 Неделя', items: ['Прогрессия 2-5-1', 'Упражнения на соединение аккордов', 'Мышление ступенями'] },
  { title: '3 Неделя — Аранжировка', items: ['Аккордовая пульсация', 'Гармоническая фигурация', 'Самостоятельное создание аранжировки'] },
  { title: '4 Неделя — Аранжировка', items: ['Мелодическая фигурация', 'Ритмическая фигурация', 'Стили в музыке'] },
  { title: '5 Неделя', items: ['Басовая линия в аккомпанементе', 'Практические упражнения', 'Самостоятельное создание аранжировки'] },
  { title: '6 Неделя — Регармонизация', items: ['Мастер-класс по регармонизации', 'Правила регармонизации', 'Самостоятельная регармонизация песни'] },
];

export function Program() {
  return (
    <section className="py-12 md:py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tighter text-ink text-center mb-12">
            Программа курса
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {weeks.map((week, i) => (
            <FadeIn key={week.title} delay={i * 0.07}>
              <div className="bg-surface rounded-2xl p-6 border-t-[3px] border-accent h-full hover:animate-scaleHover transition-transform duration-300 cursor-pointer">
                <h4 className="text-accent font-bold text-xs tracking-widest uppercase mb-4">{week.title}</h4>
                <ul className="space-y-2">
                  {week.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-ink-3 text-[13px] leading-snug">
                      <span className="text-accent/50 mt-0.5 flex-shrink-0 font-bold">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-8 border border-dashed border-accent/25 rounded-2xl p-6 bg-accent-pale">
            <h4 className="text-accent font-bold text-xs tracking-widest uppercase mb-3">Дополнительный материал</h4>
            <ul className="flex flex-wrap gap-4">
              {['Красивые пассажи, применение', 'Модуляция', 'Вступления к песням'].map((item) => (
                <li key={item} className="text-ink-2 text-sm flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
