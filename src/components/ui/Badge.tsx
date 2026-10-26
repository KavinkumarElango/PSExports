import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'forest' | 'terracotta' | 'linen' | 'charcoal' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'forest',
  size = 'md',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center font-sans uppercase font-medium tracking-widest';

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5',
    md: 'text-[11px] px-2.5 py-1',
  };

  const variantStyles = {
    forest: 'bg-forest/10 text-forest border border-forest/20',
    terracotta: 'bg-terracotta/10 text-terracotta border border-terracotta/30',
    linen: 'bg-linen/40 text-charcoal border border-linen',
    charcoal: 'bg-charcoal text-ivory border border-charcoal',
    outline: 'bg-transparent text-charcoal/70 border border-linen-dark',
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
