import { Send } from 'lucide-react';
import { FadeIn } from './ui/fade-in';

export function Contacts() {
  return (
    <section className="py-20 px-6 bg-dark text-center">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-3">
            Контакты
          </h2>
          <p className="text-white/45 text-base mb-8 font-medium">
            Есть вопросы? Напишите в Телеграм — отвечу лично
          </p>
          <a
            href="https://tlgg.ru/VasiliyGorshkov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-white font-semibold text-base px-10 py-5 rounded-xl hover:bg-accent-hover transition-colors shadow-lg"
          >
            <Send size={18} strokeWidth={1.8} />
            Связаться со мной
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
