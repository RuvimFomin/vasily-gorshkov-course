import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { ForWhomPain } from '@/components/for-whom-pain';
import { Solution } from '@/components/solution';
import { Program } from '@/components/program';
import { CtaBanner } from '@/components/cta-banner';
import { ReviewsCarousel } from '@/components/reviews-carousel';
import { Pricing } from '@/components/pricing';
import { FAQ } from '@/components/faq';
import { SignupForm } from '@/components/signup-form';
import { Contacts } from '@/components/contacts';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ForWhomPain />
      <Solution />
      <Program />
      <CtaBanner />
      <ReviewsCarousel />
      <Pricing />
      <CtaBanner />
      <FAQ />
      <SignupForm />
      <Contacts />
      <footer className="bg-dark text-center py-6 text-white/30 text-xs">
        © 2026 Василий Горшков — Курс по Аккомпанементу
      </footer>
    </main>
  );
}
