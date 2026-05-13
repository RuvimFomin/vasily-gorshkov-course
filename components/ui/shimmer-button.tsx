import { cn } from '@/lib/utils';

interface Props {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  variant?: 'dark' | 'light';
}

export function ShimmerButton({
  href,
  children,
  className,
  type = 'button',
  disabled,
  onClick,
  variant = 'dark',
}: Props) {
  const inner = (
    <>
      <span
        className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite]"
        style={{
          background:
            variant === 'dark'
              ? 'conic-gradient(from 90deg at 50% 50%, #E86329 0%, #151515 50%, #E86329 100%)'
              : 'conic-gradient(from 90deg at 50% 50%, #ffffff 0%, #E86329 50%, #ffffff 100%)',
        }}
      />
      <span
        className={cn(
          'relative inline-flex items-center justify-center w-full h-full px-10 py-5 text-[15px] font-semibold tracking-wide rounded-[7px] transition-colors',
          variant === 'dark'
            ? 'bg-[#E86329] text-white hover:bg-orange-dark'
            : 'bg-white text-orange hover:bg-cream'
        )}
      >
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
