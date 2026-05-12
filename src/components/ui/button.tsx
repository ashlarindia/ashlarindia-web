import { forwardRef } from 'react';
import Link from 'next/link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg';
  asChild?: boolean;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', asChild, href, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]';
    
    const variants = {
      default: 'bg-[#0066CC] text-white hover:bg-[#0052A3] shadow-sm',
      outline: 'border border-[#E2E8F0] bg-white hover:bg-gray-50 hover:border-[#0066CC] text-[#1A1A2E]',
      ghost: 'hover:bg-gray-100 text-[#1A1A2E]',
      link: 'text-[#0066CC] underline-offset-4 hover:underline p-0 h-auto',
    };
    
    const sizes = {
      default: 'h-10 px-4 py-2 rounded-lg text-sm',
      sm: 'h-8 px-3 rounded-md text-xs',
      lg: 'h-12 px-6 rounded-xl text-base',
    };
    
    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
    
    if (href) {
      return (
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }
    
    return (
      <button className={combinedClassName} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };