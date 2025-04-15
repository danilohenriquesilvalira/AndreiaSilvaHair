// components/layout/Header.tsx
import React, { useState, useEffect } from 'react';
import { NAVIGATION, CONTACT_INFO } from '../../utils/constants';
import { WhatsAppIcon } from '../../assets/icons';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Função para controlar a mudança de estilo do header no scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu mobile ao clicar em um link
  const handleNavClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="relative z-10">
            <h1 className="text-2xl font-bold">
              <span className="text-accent">Andreia</span>
              <span className="text-white">Regina</span>
            </h1>
          </a>

          {/* Menu de navegação desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAVIGATION.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors font-medium text-base"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Botão de contato desktop */}
          <div className="hidden md:block">
            <Button 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              icon={<WhatsAppIcon className="w-5 h-5" />}
            >
              Agendar
            </Button>
          </div>

          {/* Botão de menu mobile */}
          <button
            className="md:hidden relative z-10 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col justify-center items-center">
              <span
                className={`block h-0.5 w-full bg-white my-0.5 transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white my-0.5 transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white my-0.5 transition-transform duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </Container>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 bg-background z-40 transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col`}
      >
        <Container className="flex flex-col justify-center h-full pt-20">
          <nav className="flex flex-col space-y-6 items-center">
            {NAVIGATION.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xl font-medium text-white/90 hover:text-white"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
            <Button 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="mt-8"
              icon={<WhatsAppIcon className="w-5 h-5" />}
            >
              Agendar Agora
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default Header;