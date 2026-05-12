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
  {
    title: '2 Неделя',
    items: [
      'Прогрессия 2-5-1',
      'Упражнения на соединение аккордов',
      'Мышление ступенями',
    ],
  },
  {
    title: '3 Неделя — Аранжировка',
    items: [
      'Аккордовая пульсация',
      'Гармоническая фигурация',
      'Самостоятельное создание аранжировки',
    ],
  },
  {
    title: '4 Неделя — Аранжировка',
    items: [
      'Мелодическая фигурация',
      'Ритмическая фигурация',
      'Стили в музыке',
    ],
  },
  {
    title: '5 Неделя',
    items: [
      'Басовая линия в аккомпанементе',
      'Практические упражнения',
      'Самостоятельное создание аранжировки',
    ],
  },
  {
    title: '6 Неделя — Регармонизация',
    items: [
      'Мастер-класс по регармонизации',
      'Правила регармонизации',
      'Самостоятельная регармонизация песни',
    ],
  },
];

export function Program() {
  return (
    <section className="py-20 px-6 bg-dark">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white text-center mb-12">
            Программа курса
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {weeks.map((week, i) => (
            <FadeIn key={week.title} delay={i * 0.07}>
              <div className="bg-dark-3 rounded-2xl p-6 border-t-2 border-gold h-full">
                <h4 className="text-gold font-semibold text-sm mb-4 tracking-wide">{week.title}</h4>
                <ul className="space-y-2">
                  {week.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/55 text-[13px] leading-snug">
                      <span className="text-gold/50 mt-0.5 flex-shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-8 border border-dashed border-gold/30 rounded-2xl p-6 bg-gold/5">
            <h4 className="text-gold font-semibold text-sm mb-3 tracking-wide">Дополнительный материал</h4>
            <ul className="flex flex-wrap gap-3">
              {['Красивые пассажи, применение', 'Модуляция', 'Вступления к песням'].map((item) => (
                <li key={item} className="text-white/55 text-sm flex items-center gap-2">
                  <span className="text-gold text-xs">✦</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
