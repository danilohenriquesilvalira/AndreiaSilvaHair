// components/ui/Button.tsx
import React from 'react';
import { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
  disabled = false,
  icon,
}) => {
  // Classes base para todos os botões
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Classes específicas para cada variante
  const variantClasses = {
    primary: 'bg-secondary hover:bg-secondary/90 text-white focus:ring-accent',
    secondary: 'bg-accent hover:bg-accent/90 text-white focus:ring-secondary',
    outline: 'border-2 border-secondary hover:bg-secondary/10 text-secondary focus:ring-secondary',
    ghost: 'bg-transparent hover:bg-secondary/10 text-secondary focus:ring-secondary',
  };
  
  // Classes para cada tamanho
  const sizeClasses = {
    sm: 'text-sm px-4 py-1.5',
    md: 'text-base px-6 py-2.5',
    lg: 'text-lg px-8 py-3',
  };
  
  // Classes para estado desabilitado
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer';
  
  // Combinando todas as classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  // Renderiza um link se href for fornecido, caso contrário um botão
  if (href) {
    return (
      <a href={href} className={buttonClasses} onClick={onClick}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;