import { Send } from 'lucide-react';
import { FadeIn } from './ui/fade-in';

export function Contacts() {
  return (
    <section className="py-20 px-6 bg-gold">
      <div className="max-w-xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl font-light text-dark mb-3">
            Контакты
          </h2>
          <p className="text-dark/60 text-base mb-8">
            Есть вопросы? Напишите в Телеграм — отвечу лично
          </p>
          <a
            href="https://tlgg.ru/VasiliyGorshkov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-dark text-gold font-semibold text-base px-10 py-5 rounded-xl shadow-xl hover:bg-dark-3 transition-colors"
          >
            <Send size={18} strokeWidth={1.8} />
            Связаться со мной
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
