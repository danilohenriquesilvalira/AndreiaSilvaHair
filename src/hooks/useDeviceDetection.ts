// hooks/useDeviceDetection.ts
import { useState, useEffect } from 'react';

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  width: number;
  height: number;
  orientation: 'portrait' | 'landscape';
  touchDevice: boolean;
}

const useDeviceDetection = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeDesktop: false,
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    orientation: 'portrait',
    touchDevice: false
  });

  useEffect(() => {
    // Função para atualizar as informações do dispositivo
    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setDeviceInfo({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024 && width < 1440,
        isLargeDesktop: width >= 1440,
        width,
        height,
        orientation: width > height ? 'landscape' : 'portrait',
        touchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0
      });
    };

    // Inicializar
    updateDeviceInfo();

    // Adicionar evento de redimensionamento
    window.addEventListener('resize', updateDeviceInfo);

    // Limpar listener ao desmontar
    return () => window.removeEventListener('resize', updateDeviceInfo);
  }, []);

  return deviceInfo;
};

export default useDeviceDetection;