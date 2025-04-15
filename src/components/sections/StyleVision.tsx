// components/sections/StyleVision.tsx
import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

// Dados para o carrossel de antes/depois
const transformations = [
  {
    id: 1,
    title: "Transformação Completa",
    description: "De cabelo natural para tranças box estilizadas com fios lilás",
    before: "/api/placeholder/400/500",
    after: "/api/placeholder/400/500",
  },
  {
    id: 2,
    title: "Noiva Elegante",
    description: "Penteado sofisticado com tranças embutidas e acessórios florais",
    before: "/api/placeholder/400/500",
    after: "/api/placeholder/400/500",
  },
  {
    id: 3,
    title: "Knotless Braids",
    description: "Tranças sem nós na raiz para um visual moderno e confortável",
    before: "/api/placeholder/400/500",
    after: "/api/placeholder/400/500",
  }
];

// Tendências para 2025
const trends2025 = [
  {
    title: "Micro Braids Coloridas",
    description: "Tranças ultra finas com mechas coloridas em tons pastel para um look moderno",
    image: "/api/placeholder/600/400"
  },
  {
    title: "Braided Bob",
    description: "Tranças curtas no comprimento chanel, perfeitas para o verão",
    image: "/api/placeholder/600/400"
  },
  {
    title: "Tranças com Joias",
    description: "Acessórios metálicos e pedrarias integrados às tranças para ocasiões especiais",
    image: "/api/placeholder/600/400"
  },
  {
    title: "Goddess Braids",
    description: "Tranças volumosas presas ao couro cabeludo com padrões elaborados",
    image: "/api/placeholder/600/400"
  }
];

const StyleVision: React.FC = () => {
  const [activeTransform, setActiveTransform] = useState(0);
  const [showAfter, setShowAfter] = useState<boolean | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Navegação do carrossel
  const nextTransform = () => {
    setActiveTransform((prev) => (prev + 1) % transformations.length);
    setShowAfter(null);
  };

  const prevTransform = () => {
    setActiveTransform((prev) => (prev - 1 + transformations.length) % transformations.length);
    setShowAfter(null);
  };

  return (
    <section 
      id="style-vision" 
      ref={sectionRef}
      className="py-24 bg-muted relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#7c3aed]/20 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#8b5cf6]/20 blur-3xl opacity-50"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            title="Visões de Estilo"
            subtitle="Transformações incríveis, tendências 2025 e inspirações para seu próximo visual"
            centered={true}
          />
        </motion.div>

        {/* Seção de antes e depois */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <div className="bg-background rounded-3xl p-6 md:p-8 lg:p-10 glass-effect">
            <h3 className="text-2xl font-bold mb-6 gradient-text text-center">
              Transformações Incríveis
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Carrossel de imagens */}
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${transformations[activeTransform].id}-${showAfter ? 'after' : 'before'}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 rounded-xl overflow-hidden"
                  >
                    <img 
                      src={showAfter ? transformations[activeTransform].after : transformations[activeTransform].before} 
                      alt={`${showAfter ? 'Depois' : 'Antes'} - ${transformations[activeTransform].title}`}
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <span className="inline-block px-3 py-1 bg-[#7c3aed] text-white text-sm font-medium rounded-full">
                        {showAfter ? 'Depois' : 'Antes'}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Seletor de antes/depois */}
                <div className="absolute top-4 left-0 right-0 flex justify-center space-x-4 z-10">
                  <button 
                    onClick={() => setShowAfter(false)}
                    className={`px-4 py-2 rounded-l-full ${!showAfter ? 'bg-[#7c3aed] text-white' : 'bg-white/10 text-white/70'} transition-colors`}
                  >
                    Antes
                  </button>
                  <button 
                    onClick={() => setShowAfter(true)}
                    className={`px-4 py-2 rounded-r-full ${showAfter ? 'bg-[#7c3aed] text-white' : 'bg-white/10 text-white/70'} transition-colors`}
                  >
                    Depois
                  </button>
                </div>

                {/* Navegação do carrossel */}
                <button 
                  onClick={prevTransform} 
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-[#7c3aed]/80 flex items-center justify-center text-white backdrop-blur-sm transition-colors z-10"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button 
                  onClick={nextTransform} 
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-[#7c3aed]/80 flex items-center justify-center text-white backdrop-blur-sm transition-colors z-10"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              {/* Descrição da transformação */}
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={transformations[activeTransform].id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-[#a78bfa] text-sm font-medium tracking-wider uppercase">
                      Transformação #{activeTransform + 1}
                    </span>
                    <h4 className="text-2xl font-bold text-white mt-2 mb-4">
                      {transformations[activeTransform].title}
                    </h4>
                    <p className="text-white/80 mb-6">
                      {transformations[activeTransform].description}
                    </p>

                    <div className="space-y-4">
                      <div className="bg-white/5 p-4 rounded-lg">
                        <h5 className="text-[#a78bfa] font-medium mb-2">Técnica Utilizada</h5>
                        <p className="text-white/80">Trançado manual com extensões sintéticas de alta qualidade e técnica de fixação sem danos ao cabelo natural.</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg">
                        <h5 className="text-[#a78bfa] font-medium mb-2">Tempo de Execução</h5>
                        <p className="text-white/80">Aproximadamente 4 horas, incluindo preparação do cabelo e finalização com produtos especiais.</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg">
                        <h5 className="text-[#a78bfa] font-medium mb-2">Durabilidade</h5>
                        <p className="text-white/80">Até 2 meses com os cuidados adequados de manutenção e hidratação.</p>
                      </div>
                    </div>

                    <Button 
                      href="#contact" 
                      variant="secondary" 
                      className="mt-8"
                    >
                      Quero uma transformação
                    </Button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tendências 2025 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-10 gradient-text text-center">
            Tendências de Tranças para 2025
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trends2025.map((trend, index) => (
              <motion.div
                key={trend.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                className="glass-effect rounded-xl overflow-hidden group hover-card"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={trend.image} 
                    alt={trend.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-lg font-semibold text-white group-hover:text-[#a78bfa] transition-colors">
                      {trend.title}
                    </h4>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-white/80 text-sm">
                    {trend.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call-to-action para inspirações */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-center mt-12"
          >
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Procurando mais inspirações para seu próximo visual? Nossa galeria está cheia de ideias incríveis para todos os estilos e ocasiões!
            </p>
            <Button 
              href="#gallery" 
              variant="outline"
            >
              Explorar Galeria
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default StyleVision;