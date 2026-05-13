import { FadeIn } from './ui/fade-in';

const results = [
  'Разберетесь с простыми и сложными джазовыми аккордами, сможете строить их от любых нот',
  'Научитесь создавать аккомпанемент в любом стиле',
  'Поймете базовые принципы подбора аккордов на слух',
  'Простые песни с 4 аккордами сможете превращать в интересные композиции с гармоническими заменами',
  'Перестанете бояться импровизировать и пробовать что-то своё',
  'Научитесь играть аккомпанемент к десяткам песен (и сможете сами пополнять список)',
  'Получите понятные схемы и шаблоны, которые сразу можно применять на практике',
];

export function Solution() {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div
            className="rounded-2xl p-10 text-white"
            style={{ background: 'linear-gradient(135deg, #E86329 0%, #c44e18 100%)' }}
          >
            <div className="space-y-5 mb-10">
              {[
                'Это курс для тех, кто хочет наконец-то понять, а не заучить. Вы разберетесь как устроена музыка на интуитивно понятных примерах.',
                'Я покажу вам понятные принципы, которые помогут вам самим строить аккомпанемент. Вас не будут грузить сложной теорией (ну почти не будут 😎).',
                'Вы не просто получите список лучших песен. Вы поймете логику, с которой построены большинство песен. Это даст вам свободу играть что угодно.',
              ].map((text, i) => (
                <p key={i} className="text-white/90 text-base leading-relaxed pl-4 border-l-2 border-white/30">
                  {text}
                </p>
              ))}
            </div>

            <h3 className="font-display text-2xl text-white text-center mb-6 font-light">
              За 6 недель вы:
            </h3>
            <ol className="space-y-3 pl-5 list-decimal marker:text-white/50">
              {results.map((r) => (
                <li key={r} className="text-white/85 text-sm leading-relaxed pl-1">
                  {r}
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
