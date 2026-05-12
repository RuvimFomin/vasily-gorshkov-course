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
      {/* FOR WHOM */}
      <section className="py-20 px-6 bg-dark">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white text-center mb-12">
              Кому подойдет курс?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((a, i) => (
              <FadeIn key={a.title} delay={i * 0.1}>
                <div className="bg-dark-3 border border-gold/15 rounded-2xl p-7 hover:border-gold/30 transition-colors">
                  <a.icon className="text-gold mb-4" size={28} strokeWidth={1.5} />
                  <h3 className="text-white font-semibold text-[15px] mb-2">{a.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="py-20 px-6 bg-dark-2">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white text-center mb-12">
              Узнаёшь себя?
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {pains.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 bg-white/[0.03] border-l-2 border-gold rounded-r-xl px-5 py-4">
                  <span className="text-white/70 text-[15px] leading-relaxed">{p}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
