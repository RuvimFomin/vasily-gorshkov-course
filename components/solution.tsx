import { FadeIn } from './ui/fade-in';

const results = [
  'Строить джазовые аккорды от любой ноты — простые и сложные',
  'Делать аккомпанемент в любом стиле',
  'Подбирать аккорды на слух',
  'Превращать простые 4 аккорда в богатые гармонии с заменами',
  'Не бояться импровизировать',
  'Играть аккомпанемент к десяткам песен — и легко добавлять новые',
  'Применять готовые схемы сразу на практике',
];

export function Solution() {
  return (
    <section className="py-12 md:py-20 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div
            className="rounded-2xl p-8 md:p-10 text-white"
            style={{ background: 'linear-gradient(135deg, #2B6FA4 0%, #0D4A78 100%)' }}
          >
            <div className="space-y-4 mb-10">
              {[
                'Этот курс — про понимание, а не заучивание. Живые примеры вместо зубрёжки.',
                'Никакой перегруженной теории. Только принципы, которые работают сразу — ну, и немного теории всё же будет 😎',
                'Не список песен, а логика: почему именно эти аккорды. Освоите её — и сможете играть всё, что слышите.',
              ].map((text, i) => (
                <p key={i} className="text-white/85 text-[15px] leading-relaxed pl-4 border-l-2 border-white/25">
                  {text}
                </p>
              ))}
            </div>

            <h3 className="font-serif text-xl font-bold text-white text-center mb-5">
              За 6 недель вы:
            </h3>
            <ul className="space-y-2">
              {results.map((r) => (
                <li key={r} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                  <span className="text-white/40 mt-0.5 flex-shrink-0">✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
