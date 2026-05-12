import { ShimmerButton } from './ui/shimmer-button';
import { FadeIn } from './ui/fade-in';

export function CtaBanner() {
  return (
    <div className="py-14 px-6 bg-dark-2 text-center">
      <FadeIn>
        <ShimmerButton href="#signup" className="mx-auto">
          Забронировать место по ранней цене
        </ShimmerButton>
      </FadeIn>
    </div>
  );
}
