// components/ui/SectionSpacer.tsx
import React from 'react';

interface SectionSpacerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const SectionSpacer: React.FC<SectionSpacerProps> = ({ 
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'h-8 md:h-12',
    md: 'h-12 md:h-16 lg:h-20',
    lg: 'h-16 md:h-24 lg:h-32',
    xl: 'h-24 md:h-32 lg:h-40',
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}></div>
  );
};

export default SectionSpacer;