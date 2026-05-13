import { ShimmerButton } from './ui/shimmer-button';
import { FadeIn } from './ui/fade-in';

export function CtaBanner() {
  return (
    <div className="py-16 px-6 bg-orange text-center">
      <FadeIn>
        <p className="text-white/70 text-sm tracking-widest uppercase mb-5">Ограниченное количество мест</p>
        <ShimmerButton href="#signup" variant="light" className="mx-auto">
          Забронировать место по ранней цене
        </ShimmerButton>
      </FadeIn>
    </div>
  );
}
