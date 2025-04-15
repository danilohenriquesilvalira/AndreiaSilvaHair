// components/sections/Hero.tsx
import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { WhatsAppIcon } from '../../assets/icons';
import { CONTACT_INFO } from '../../utils/constants';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-24 flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 hero-bg-animation"></div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 fade-in-up">
            Transformando <span className="shine-text">Sonhos</span> em Penteados Deslumbrantes
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl fade-in-up-delay-1">
            Especialista em tranças e penteados exclusivos para noivas e eventos especiais em Portugal
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 fade-in-up-delay-2">
            <Button 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta`}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              icon={<WhatsAppIcon className="w-5 h-5" />}
            >
              Agendar Consulta
            </Button>
            
            <Button 
              href="#services"
              variant="outline"
              size="lg"
            >
              Descobrir Serviços
            </Button>
          </div>
          
          {/* Badge de destaque */}
          <div className="mt-12 inline-block bg-accent/20 backdrop-blur-sm py-2 px-4 rounded-full fade-in-up-delay-3">
            <span className="text-white font-medium">✨ Especialista em tranças para noivas</span>
          </div>
        </div>
      </Container>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up-delay-3">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-[bounce_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
