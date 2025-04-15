// components/ui/Container.tsx
import React from 'react';
import { ContainerProps } from '../../types';

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '',
  id,
  fullWidth = false,
  noPadding = false
}) => {
  return (
    <div 
      id={id}
      className={`
        ${fullWidth ? 'w-full' : 'container mx-auto'}
        ${noPadding ? '' : 'px-4 sm:px-6 md:px-8 lg:px-10'} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;