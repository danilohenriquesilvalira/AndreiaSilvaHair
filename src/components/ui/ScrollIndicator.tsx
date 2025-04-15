// components/ui/ScrollIndicator.tsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION } from '../../utils/constants';
import useScrollPosition from '../../hooks/useScrollPosition';

const ScrollIndicator: React.FC = () => {
  const { scrollY } = useScrollPosition();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [showControls, setShowControls] = useState(false);

  // Calcula o progresso de rolagem na página
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = scrollTop / (docHeight - windowHeight);
      setScrollProgress(scrollPercent);
    };

    handleScroll(); // Inicialize
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detecta a seção ativa
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const checkActiveSection = () => {
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

  // Controla a exibição dos controles após rolar um pouco
  useEffect(() => {
    if (scrollY > window.innerHeight * 0.5) {
      setShowControls(true);
    } else {
      setShowControls(false);
    }
  }, [scrollY]);

  // Navega para a próxima seção
  const navigateToNextSection = () => {
    const sectionIds = NAVIGATION.map(item => item.href.replace('#', ''));
    const currentIndex = sectionIds.indexOf(activeSection);
    if (currentIndex < sectionIds.length - 1) {
      const nextId = sectionIds[currentIndex + 1];
      document.getElementById(nextId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navega para a seção anterior
  const navigateToPrevSection = () => {
    const sectionIds = NAVIGATION.map(item => item.href.replace('#', ''));
    const currentIndex = sectionIds.indexOf(activeSection);
    if (currentIndex > 0) {
      const prevId = sectionIds[currentIndex - 1];
      document.getElementById(prevId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navega para o topo da página
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Barra de progresso de rolagem fixa no topo */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-[60]">
        <motion.div 
          className="h-full bg-gradient-to-r from-[#7c3aed] to-[#8b5cf6]"
          style={{ width: `${scrollProgress * 100}%`, originX: 0 }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ ease: "easeOut" }}
        />
      </div>

      {/* Controles de navegação entre seções */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed right-6 bottom-24 z-40 flex flex-col space-y-3"
          >
            {/* Botão para subir ao topo */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[#7c3aed] text-white flex items-center justify-center shadow-lg hover:bg-[#6d28d9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:ring-offset-2 focus:ring-offset-background"
              aria-label="Voltar ao topo"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
            
            {/* Botão para seção anterior */}
            <button
              onClick={navigateToPrevSection}
              disabled={activeSection === NAVIGATION[0].href.replace('#', '')}
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:ring-offset-2 focus:ring-offset-background ${
                activeSection === NAVIGATION[0].href.replace('#', '')
                  ? 'bg-[#7c3aed]/50 text-white/50 cursor-not-allowed'
                  : 'bg-[#7c3aed] text-white hover:bg-[#6d28d9] transition-colors'
              }`}
              aria-label="Seção anterior"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
            
            {/* Botão para próxima seção */}
            <button
              onClick={navigateToNextSection}
              disabled={activeSection === NAVIGATION[NAVIGATION.length - 1].href.replace('#', '')}
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:ring-offset-2 focus:ring-offset-background ${
                activeSection === NAVIGATION[NAVIGATION.length - 1].href.replace('#', '')
                  ? 'bg-[#7c3aed]/50 text-white/50 cursor-not-allowed'
                  : 'bg-[#7c3aed] text-white hover:bg-[#6d28d9] transition-colors'
              }`}
              aria-label="Próxima seção"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollIndicator;