import { Quote } from 'lucide-react';
import { FadeIn } from './ui/fade-in';

const reviews = [
  '«Спасибо большое!!! Это было очень интересно и в новинку, это моё первое подобное обучение, и оно было суперкомфортным. Хоть и было, признаюсь, сложно, особенно под конец — обстановка на эфирах и в чате помогала дойти до конца. Спасибо за терпение и творческую мотивацию 🥹»',
  '«Курс полностью изменил моё понимание гармонии. Наконец-то я начал слышать, как устроены аккорды, и могу подбирать их на слух. Очень структурированный подход!»',
  '«Материал подаётся очень доступно. Для меня как для преподавателя это был настоящий прорыв — теперь могу объяснять аккомпанемент своим ученикам совершенно по-новому.»',
];

export function Reviews() {
  return (
    <section className="py-20 px-6 bg-surface-2">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-ink text-center mb-2">
            Отзывы
          </h2>
          <p className="text-center text-ink-3 text-sm mb-12 font-medium">Реальные отзывы учеников курса</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((text, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 border-l-[3px] border-accent h-full flex flex-col gap-4 shadow-sm">
                <Quote className="text-accent/20" size={22} strokeWidth={1.5} />
                <p className="text-ink-2 text-sm leading-relaxed italic flex-1">{text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
