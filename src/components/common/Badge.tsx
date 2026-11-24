import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'accent' | 'subtle';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const base = "inline-flex items-center text-xs font-mono tracking-tight px-2.5 py-0.5 rounded transition-colors";
  
  const variants = {
    default: "bg-stroke-subtle text-ink-secondary border border-stroke",
    outline: "border border-stroke text-ink-secondary bg-transparent",
    accent: "bg-studio-rust/10 text-studio-rust border border-studio-rust/20 font-medium",
    subtle: "bg-canvas-subtle text-ink-tertiary",
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
