import { FadeIn } from './ui/fade-in';

export function About() {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <FadeIn>
            <img
              src="https://taplink.st/a/1/7/d/b/c51758.jpg?1"
              alt="Василий Горшков"
              className="w-full rounded-2xl object-cover shadow-md"
              style={{ maxWidth: 420 }}
            />
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-accent text-xs font-bold tracking-widest uppercase mb-3">О преподавателе</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-ink mb-2">
              Василий Горшков
            </h2>
            <p className="text-ink-3 text-base mb-8 font-medium">Концертирующий пианист и педагог</p>
            <ul className="space-y-3">
              {[
                'Академическое образование Гнесинки',
                'Участник и продюсер: Сати Казанова, Игорь Рыбаков, Front Fire, Оркестр Opensound',
                '10 лет педагогического стажа',
                'Автор сольного альбома «More Love»',
                '300+ учеников',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-2 text-[15px]">
                  <span className="text-accent mt-0.5 flex-shrink-0 font-bold">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
