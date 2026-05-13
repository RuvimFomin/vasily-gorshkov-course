import { Music, GraduationCap, Users } from 'lucide-react';
import { FadeIn } from './ui/fade-in';

const audiences = [
  {
    icon: GraduationCap,
    title: 'Музыкантам с классическим образованием',
    desc: 'Которые хотят оторваться от нот и свободно владеть игрой по слуху в разных стилях',
  },
  {
    icon: Music,
    title: 'Музыкантам с опытом аккомпанирования',
    desc: 'Но хотят выйти за рамки привычных аккордов и ритмов',
  },
  {
    icon: Users,
    title: 'Преподавателям',
    desc: 'Которые хотят повысить квалификацию и расширить понимание аккомпанемента',
  },
];

const pains = [
  'Слушаешь аккомпанемент других, и не знаешь как можно это сыграть самому?',
  'Нет понимания, почему написаны именно эти аккорды, и не получается повторить это самостоятельно?',
  'Все звучит одинаково и каждая твоя песня похожа одна на другую?',
  'Хочется просто сесть и сыграть что-то для себя или друзей, но не получается без готовых схем?',
];

export function ForWhomPain() {
  return (
    <>
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tighter text-ink text-center mb-12">
              Кому подойдет курс?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {audiences.map((a, i) => (
              <FadeIn key={a.title} delay={i * 0.1}>
                <div className="bg-surface rounded-2xl p-7 border border-accent-light/40 hover:border-accent/40 hover:shadow-sm hover:animate-scaleHover transition-all duration-300 h-full cursor-pointer">
                  <a.icon className="text-accent mb-4" size={26} strokeWidth={1.8} />
                  <h3 className="text-ink font-semibold text-[15px] mb-2 leading-snug">{a.title}</h3>
                  <p className="text-ink-3 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-surface-2">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-ink text-center mb-12">
              Узнаёшь себя?
            </h2>
          </FadeIn>
          <div className="space-y-3">
            {pains.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 bg-white border-l-[3px] border-accent rounded-r-xl px-5 py-4 shadow-sm">
                  <span className="text-ink/70 text-[15px] leading-relaxed">{p}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
