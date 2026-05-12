import { cn } from '@/lib/utils';

interface Props {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function ShimmerButton({ href, children, className, type = 'button', disabled, onClick }: Props) {
  const inner = (
    <>
      <span
        className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite]"
        style={{
          background: 'conic-gradient(from 90deg at 50% 50%, #d2b67e 0%, #2a1407 50%, #d2b67e 100%)',
        }}
      />
      <span className="relative inline-flex items-center justify-center w-full h-full px-10 py-5 text-[15px] font-semibold tracking-wide text-dark bg-gold rounded-[7px] transition-colors hover:bg-gold-light">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cn('relative inline-flex overflow-hidden rounded-lg p-[1.5px]', className)}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'relative inline-flex overflow-hidden rounded-lg p-[1.5px] w-full disabled:opacity-60 disabled:cursor-not-allowed',
        className
      )}
    >
      {inner}
    </button>
  );
}
