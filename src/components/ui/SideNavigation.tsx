// components/ui/SideNavigation.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NAVIGATION } from '../../utils/constants';
import useScrollPosition from '../../hooks/useScrollPosition';

const SideNavigation: React.FC = () => {
  const { scrollY } = useScrollPosition();
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isVisible, setIsVisible] = useState(false);

  // Detecta a seção ativa e controla visibilidade
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const checkActiveSection = () => {
      // Esconder na seção inicial até rolar um pouco
      if (scrollY < window.innerHeight * 0.3) {
        setIsVisible(false);
        return;
      } else {
        setIsVisible(true);
      }
      
      let found = false;
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const id = section.getAttribute('id') || '';
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(id);
          found = true;
        }
      });
      
      // Se nenhuma seção for encontrada, assume a primeira
      if (!found && sections.length > 0) {
        const id = sections[0].getAttribute('id') || '';
        setActiveSection(id);
      }
    };
    
    checkActiveSection();
    window.addEventListener('scroll', checkActiveSection);
    return () => window.removeEventListener('scroll', checkActiveSection);
  }, [scrollY]);

  // Navega para a seção selecionada
  const navigateToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block"
    >
      <div className="flex flex-col items-center space-y-4">
        {NAVIGATION.map((item, index) => {
          const sectionId = item.href.replace('#', '');
          const isActive = activeSection === sectionId;
          
          return (
            <div key={sectionId} className="group relative">
              {/* Tooltip com nome da seção */}
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-[#7c3aed] text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.label}
              </div>
              
              {/* Indicador de seção */}
              <button
                onClick={() => navigateToSection(sectionId)}
                className="relative w-3 h-3 rounded-full bg-white/20 focus:outline-none group-hover:bg-white/40 transition-colors"
                aria-label={`Navegar para ${item.label}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSectionIndicator"
                    className="absolute inset-0 bg-[#7c3aed] rounded-full shadow-sm shadow-[#7c3aed]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SideNavigation;