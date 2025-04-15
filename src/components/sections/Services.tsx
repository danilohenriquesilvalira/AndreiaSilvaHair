// components/sections/Services.tsx
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { SERVICES } from '../../utils/constants';
import { getIconByName } from '../../assets/icons';
import Button from '../ui/Button';

const Services: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Variantes para animações
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-24 left-0 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"></div>
      <div className="absolute bottom-24 right-0 w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            title="Serviços Especializados"
            subtitle="Descubra a arte de transformar seu cabelo em um penteado deslumbrante que realça sua beleza natural"
            centered={true}
          />
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12"
        >
          {SERVICES.map((service, index) => {
            const Icon = getIconByName(service.icon);
            
            return (
              <motion.div 
                key={service.id}
                variants={cardVariants}
                className={`
                  rounded-2xl p-6 transition-all duration-500 hover:translate-y-[-8px] card-3d
                  ${service.featured 
                    ? 'gradient-border bg-gradient-to-br from-secondary/10 to-accent/10 border border-white/10' 
                    : 'bg-muted border border-muted-foreground/10 hover:border-secondary/30'}
                  group
                `}
              >
                <div className="flex items-center mb-6">
                  <div className={`
                    w-14 h-14 rounded-xl flex items-center justify-center mr-4
                    ${service.featured ? 'bg-secondary/30' : 'bg-secondary/10'}
                    group-hover:bg-secondary/30 transition-colors duration-300
                  `}>
                    {Icon && (
                      <motion.div
                        animate={{ rotate: service.featured ? [0, 5, 0, -5, 0] : 0 }}
                        transition={{ 
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                    )}
                  </div>
                  
                  {service.featured && (
                    <span className="text-xs font-medium glass-effect text-accent px-3 py-1.5 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-secondary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 group-hover:text-white/80 transition-colors duration-300">
                  {service.description}
                </p>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-secondary font-medium hover:text-accent transition-colors group relative overflow-hidden"
                >
                  <span className="relative z-10">Saber mais</span>
                  <span className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M5 12h14M12 5l7 7-7 7" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* CTA modernizado */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block glass-effect p-8 rounded-3xl border border-secondary/20 relative overflow-hidden">
            {/* Elemento de fundo animado */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div 
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-secondary/20 blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 relative z-10">
              Ocasião especial se aproximando?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto relative z-10">
              Entre em contato para uma consulta personalizada e descubra como podemos criar 
              um penteado perfeito que realce sua beleza e elegância.
            </p>
            <Button 
              href="#contact"
              variant="secondary"
              size="lg"
              className="relative z-10"
            >
              Agendar Consulta
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;