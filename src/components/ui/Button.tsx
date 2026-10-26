import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'terracotta';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  disabled,
  ...rest
}) => {
  const baseStyles = 
    'inline-flex items-center justify-center font-sans font-semibold uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none';

  const sizeStyles = {
    sm: 'text-[11px] px-4 py-2.5',
    md: 'text-xs px-5 py-3',
    lg: 'text-xs sm:text-[13px] px-6 sm:px-7 py-3.5',
  };

  const variantStyles = {
    primary:
      'bg-forest text-ivory hover:bg-forest-light focus:ring-forest border-2 border-forest hover:border-forest-light shadow-sm active:translate-y-px',
    secondary:
      'bg-ivory text-forest hover:bg-forest hover:text-ivory focus:ring-forest border-2 border-forest/80 hover:border-forest shadow-2xs active:translate-y-px',
    outline:
      'bg-transparent text-forest hover:bg-forest hover:text-ivory focus:ring-forest border-2 border-forest active:translate-y-px',
    terracotta:
      'bg-terracotta text-ivory hover:bg-terracotta-dark focus:ring-terracotta border-2 border-terracotta shadow-sm active:translate-y-px',
    ghost:
      'bg-transparent text-forest hover:bg-forest/5 focus:ring-forest border border-transparent underline-offset-4 hover:underline',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    fullWidth ? 'w-full' : ''
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2 inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2 inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...rest}>
      {content}
    </button>
  );
};
