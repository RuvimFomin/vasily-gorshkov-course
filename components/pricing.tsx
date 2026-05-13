import { Check } from 'lucide-react';
import { FadeIn } from './ui/fade-in';

const plans = [
  {
    name: 'Базовый',
    price: '21 900 ₽',
    featured: null,
    items: [
      '9 видео-уроков с конспектами',
      'Общий чат в Телеграм',
      'Моя проверка домашнего задания',
      'Доступ к курсу 1 месяц после окончания',
      'БОНУС: тесты, тренажеры и авторская методичка',
    ],
  },
  {
    name: 'Оптимальный',
    price: '25 900 ₽',
    featured: 'Обратная связь от Василия на время курса + 3 месяца после',
    items: [
      '9 видео-уроков с конспектами',
      'Общий чат в Телеграм',
      'Моя проверка домашнего задания',
      'Встречи в зуме с практическими разборами',
      'Доступ к материалу курса 1 ГОД',
      'БОНУС: тесты, тренажеры и авторская методичка',
      'Урок по модуляции и пассажам',
      'Авторский эксклюзивный материал',
    ],
  },
  {
    name: 'Премиум',
    price: '41 900 ₽',
    featured: 'Обратная связь НАВСЕГДА',
    items: [
      '9 видео-уроков с конспектами',
      'Общий чат в Телеграм',
      'Ежедневная связь со мной',
      'Экспресс проверка домашнего задания',
      'Встречи в зуме с практическими разборами',
      'Доступ к курсу БЕССРОЧНО',
      'Все бонусы и эксклюзивные материалы',
      '3 индивидуальных урока со мной',
    ],
  },
];

export function Pricing() {
  return (
    <section className="py-12 md:py-20 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tighter text-ink text-center mb-2">
            Тарифы
          </h2>
          <p className="text-center text-ink-3 text-sm mb-12 font-medium">Для каждого тарифа доступна рассрочка</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-7 h-full flex flex-col border border-accent-light/50 shadow-sm hover:animate-scaleHover transition-transform duration-300 cursor-pointer">
                <p className="text-ink-3 font-semibold text-xs uppercase tracking-widest mb-1">{plan.name}</p>
                <p className="text-ink font-extrabold text-3xl mb-4 tracking-tight">{plan.price}</p>
                {plan.featured && (
                  <p className="text-gold text-xs font-semibold bg-accent-pale rounded-lg px-3 py-2 mb-4 leading-snug">
                    {plan.featured}
                  </p>
                )}
                <ul className="space-y-2 flex-1">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-ink-2 text-[13px] border-b border-ink/5 pb-2">
                      <Check className="text-accent mt-0.5 flex-shrink-0" size={14} strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
