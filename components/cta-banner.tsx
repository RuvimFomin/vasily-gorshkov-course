import { ShimmerButton } from './ui/shimmer-button';
import { FadeIn } from './ui/fade-in';

export function CtaBanner() {
  return (
    <div className="py-12 md:py-16 px-6 text-center" style={{ background: 'linear-gradient(135deg, #2B6FA4 0%, #0D4A78 100%)' }}>
      <FadeIn>
        <p className="text-accent-light/70 text-xs font-bold tracking-widest uppercase mb-5">
          Ограниченное количество мест
        </p>
        <ShimmerButton href="#signup" variant="light" className="mx-auto">
          Забронировать место по ранней цене
        </ShimmerButton>
      </FadeIn>
    </div>
  );
}
