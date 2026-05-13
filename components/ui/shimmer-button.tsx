import { cn } from '@/lib/utils';

interface Props {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  variant?: 'primary' | 'light';
}

export function ShimmerButton({
  href,
  children,
  className,
  type = 'button',
  disabled,
  onClick,
  variant = 'primary',
}: Props) {
  const inner = (
    <>
      <span
        className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite]"
        style={{
          background:
            variant === 'primary'
              ? 'conic-gradient(from 90deg at 50% 50%, #BAD4E9 0%, #0D1B2A 50%, #BAD4E9 100%)'
              : 'conic-gradient(from 90deg at 50% 50%, #2B6FA4 0%, #ffffff 50%, #2B6FA4 100%)',
        }}
      />
      <span
        className={cn(
          'relative inline-flex items-center justify-center w-full h-full px-10 py-5 text-[15px] font-semibold tracking-wide rounded-[7px] transition-colors',
          variant === 'primary'
            ? 'bg-accent text-white hover:bg-accent-hover'
            : 'bg-white text-accent hover:bg-surface'
        )}
      >
        {children}
      </span>
    </>
  );

  const base = 'relative inline-flex overflow-hidden rounded-lg p-[1.5px]';

  if (href) {
    return (
      <a href={href} className={cn(base, className)}>
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(base, 'w-full disabled:opacity-60 disabled:cursor-not-allowed', className)}
    >
      {inner}
    </button>
  );
}
