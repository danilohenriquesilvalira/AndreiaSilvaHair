// components/ui/OptimizedImage.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useDeviceDetection from '../../hooks/useDeviceDetection';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  onLoad?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder = '/api/placeholder/400/300',
  objectFit = 'cover',
  onLoad
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const { isMobile, isTablet } = useDeviceDetection();
  
  // Determina qual versão da imagem carregar baseada no dispositivo
  const optimizedSrc = (() => {
    // Implementação simples para demonstração
    // Em produção, você usaria um serviço como Cloudinary, imgix, etc
    if (isError) {
      return placeholder;
    }
    
    // Se for uma URL externa ou já otimizada, use-a diretamente
    if (src.startsWith('http') || src.startsWith('data:') || src.includes('?')) {
      return src;
    }
    
    // Dividir o caminho da imagem para inserir o tamanho
    const splitIndex = src.lastIndexOf('.');
    if (splitIndex === -1) return src; // se não tiver extensão, retorna original
    
    const base = src.substring(0, splitIndex);
    const ext = src.substring(splitIndex);
    
    // Adapta para dispositivo
    if (isMobile) {
      return `${base}-sm${ext}`;
    } else if (isTablet) {
      return `${base}-md${ext}`;
    }
    
    return src; // versão original para desktop
  })();
  
  // Manipulador de carregamento
  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };
  
  // Manipulador de erro
  const handleError = () => {
    setIsError(true);
  };
  
  // Efeito para simular carregamento no cliente se prioritário
  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = optimizedSrc;
      img.onload = handleLoad;
      img.onerror = handleError;
    }
  }, [optimizedSrc, priority]);
  
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '100%' }}
    >
      {/* Placeholder animado enquanto carrega */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      
      {/* Imagem real */}
      <motion.img
        src={optimizedSrc}
        alt={alt}
        className={`w-full h-full transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ objectFit }}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default OptimizedImage;