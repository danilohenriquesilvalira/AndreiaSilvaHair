// components/layout/Header.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { NAVIGATION, CONTACT_INFO } from '../../utils/constants';
import { WhatsAppIcon } from '../../assets/icons';
import Container from '../ui/Container';
import Button from '../ui/Button';
import useScrollPosition from '../../hooks/useScrollPosition';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScrollPosition();
  const { scrollYProgress } = useScroll();
  
  // Efeito avançado de scroll e transparência
  const scrolled = scrollY > 50;
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);
  const headerRef = useRef<HTMLElement>(null);

  // Atualizar a seção ativa baseada na posição de scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const scrollActive = () => {
      const scrollY = window.scrollY;
      
      sections.forEach((current) => {
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 100;
        const sectionId = current.getAttribute('id') || '';
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', scrollActive);
    
    return () => window.removeEventListener('scroll', scrollActive);
  }, []);

  // Fecha o menu ao pressionar Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Evita o scroll quando o menu estiver aberto no modo mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Fechar menu mobile ao clicar em um link
  const handleNavClick = (id: string) => {
    setActiveSection(id);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header 
      ref={headerRef}
      style={{ opacity: headerOpacity }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-lg py-3 shadow-lg shadow-[#7c3aed]/10' 
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo com efeito brilhante */}
          <motion.a 
            href="#home" 
            className="relative z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleNavClick('home')}
          >
            <motion.div 
              className="text-2xl font-bold relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-[#a78bfa]">Andreia</span>
              <span className="text-white">Regina</span>
              <span className="block text-xs text-[#8b5cf6] mt-1 font-normal tracking-wider">
                HAIR SPECIALIST
              </span>
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#7c3aed] to-[#8b5cf6]"
                initial={{ width: 0 }}
                animate={{ width: scrolled ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.a>

          {/* Menu de navegação desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item, index) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`text-white/90 hover:text-white transition-colors font-medium text-base relative group ${
                    isActive ? 'text-white' : ''
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -2 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(sectionId);
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >
                  {item.label}
                  <motion.span 
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#7c3aed] origin-left`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#8b5cf6] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ display: isActive ? 'none' : 'block' }}
                  />
                </motion.a>
              );
            })}
          </nav>

          {/* Botão de contato desktop */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
              icon={<WhatsAppIcon className="w-5 h-5" />}
              className="btn-pulse"
            >
              Agendar
            </Button>
          </motion.div>

          {/* Botão de menu mobile */}
          <motion.button
            className="md:hidden relative z-10 p-2 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-7 flex flex-col justify-center items-center">
              <motion.span
                animate={{ 
                  rotate: isMenuOpen ? 45 : 0,
                  translateY: isMenuOpen ? 8 : 0,
                  width: isMenuOpen ? "100%" : "70%",
                  backgroundColor: isMenuOpen ? "#7c3aed" : "white" 
                }}
                transition={{ duration: 0.3 }}
                className="block h-0.5 my-1 origin-center group-hover:bg-[#7c3aed]"
              />
              <motion.span
                animate={{ 
                  opacity: isMenuOpen ? 0 : 1,
                  width: isMenuOpen ? "0%" : "100%",
                  backgroundColor: isMenuOpen ? "#7c3aed" : "white" 
                }}
                transition={{ duration: 0.3 }}
                className="block h-0.5 my-1 group-hover:bg-[#7c3aed]"
              />
              <motion.span
                animate={{ 
                  rotate: isMenuOpen ? -45 : 0,
                  translateY: isMenuOpen ? -8 : 0,
                  width: isMenuOpen ? "100%" : "85%",
                  backgroundColor: isMenuOpen ? "#7c3aed" : "white" 
                }}
                transition={{ duration: 0.3 }}
                className="block h-0.5 my-1 origin-center group-hover:bg-[#7c3aed]"
              />
            </div>
          </motion.button>
        </div>
      </Container>

      {/* Menu mobile com animação avançada */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            transition={{ 
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="fixed inset-0 bg-gradient-to-b from-background to-muted z-40 md:hidden flex flex-col"
          >
            <Container className="flex flex-col justify-center h-full pt-20">
              <motion.nav 
                className="flex flex-col space-y-8 items-center"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                animate="show"
              >
                {NAVIGATION.map((item, index) => {
                  const sectionId = item.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className={`text-2xl font-medium ${
                        isActive ? 'text-[#7c3aed]' : 'text-white/90'
                      } hover:text-[#8b5cf6] transition-colors relative`}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ x: 10 }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(sectionId);
                        document.querySelector(item.href)?.scrollIntoView({
                          behavior: 'smooth'
                        });
                      }}
                    >
                      {item.label}
                      <motion.span 
                        className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-[#7c3aed] to-[#8b5cf6]"
                        initial={{ width: 0 }}
                        animate={{ width: isActive ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  );
                })}
                
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className="mt-8 w-full"
                >
                  <Button 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="lg"
                    className="w-full"
                    icon={<WhatsAppIcon className="w-5 h-5" />}
                  >
                    Agendar Agora
                  </Button>
                </motion.div>
              </motion.nav>
              
              {/* Decoração de fundo */}
              <motion.div 
                className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#7c3aed]/20 blur-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.div 
                className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#8b5cf6]/20 blur-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;