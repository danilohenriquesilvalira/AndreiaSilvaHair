// components/ui/Container.tsx
import React from 'react';
import { ContainerProps } from '../../types';

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '',
  id
}) => {
  return (
    <div 
      id={id}
      className={`container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;