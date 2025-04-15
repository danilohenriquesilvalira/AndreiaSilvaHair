// components/sections/Hero.tsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { WhatsAppIcon } from '../../assets/icons';
import { CONTACT_INFO } from '../../utils/constants';
import useScrollPosition from '../../hooks/useScrollPosition';

const Hero: React.FC = () => {
  const { scrollY } = useScrollPosition();
  const heroRef = useRef<HTMLElement>(null);
  
  // Efeito de parallax com o scroll
  useEffect(() => {
    if (!heroRef.current) return;
    const moveY = scrollY * 0.5;
    heroRef.current.style.backgroundPositionY = `calc(50% + ${moveY}px)`;
  }, [scrollY]);

  // Variantes para animações com framer-motion
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen pt-24 flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradiente modernizado */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-background/80 to-black/70 hero-bg-animation"></div>
      
      {/* Elementos decorativos flutuantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-[10%] w-32 h-32 rounded-full bg-secondary/20 blur-3xl"
          animate={{ 
            x: [0, 20, 0],
            y: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-[15%] w-48 h-48 rounded-full bg-accent/20 blur-3xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1 
          }}
        />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8"
          >
            <span className="block">Transformando</span> 
            <span className="shine-text block mt-2">Sonhos em Realidade</span>
            <span className="block mt-2">com Penteados Únicos</span>
          </motion.h1>
          
          <motion.p 
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl"
          >
            Especialista em tranças e penteados exclusivos para noivas e eventos especiais 
            com mais de <span className="text-accent font-semibold">25 anos de experiência</span>.
          </motion.p>
          
          <motion.div 
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Button 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta`}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              icon={<WhatsAppIcon className="w-5 h-5" />}
              className="btn-pulse"
            >
              Agendar Consulta
            </Button>
            
            <Button 
              href="#services"
              variant="outline"
              size="lg"
              className="backdrop-blur-sm bg-white/5"
            >
              Descobrir Serviços
            </Button>
          </motion.div>
          
          {/* Badge de destaque modernizado */}
          <motion.div 
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-12 inline-block glass-effect py-3 px-6 rounded-full"
          >
            <span className="text-white font-medium flex items-center">
              <span className="inline-block w-4 h-4 rounded-full bg-accent mr-2 pulse-animation"></span>
              Especialista em penteados para noivas e tranças
            </span>
          </motion.div>
        </div>
      </Container>
      
      {/* Indicador de scroll moderno */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          className="w-8 h-14 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1.5 h-3 bg-accent rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;