// components/sections/About.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section id="about" className="py-24 bg-muted relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-secondary/20 to-transparent opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-accent/20 to-transparent opacity-30 blur-3xl"></div>
      
      <Container>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <SectionTitle 
              title="Conheça Andreia Regina"
              subtitle="Artista capilar com mais de 25 anos transformando sonhos em realidade"
              centered={false}
            />
            
            <div className="space-y-6 text-white/90">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg"
              >
                Com <span className="text-accent font-semibold">mais de 25 anos de experiência</span> no universo da beleza, 
                Andreia Regina se especializou em criar penteados exclusivos que valorizam a 
                beleza natural de cada cliente, usando técnicas avançadas e sua visão artística única.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-lg"
              >
                Sua paixão por tranças e penteados para noivas começou ainda jovem, e hoje é reconhecida 
                como uma das mais talentosas profissionais em Portugal, atendendo noivas de todo o país e 
                compartilhando seu conhecimento através de aulas particulares de tranças.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-lg"
              >
                Cada penteado é cuidadosamente criado considerando o formato do rosto, o estilo do 
                vestido e a personalidade da cliente, garantindo um resultado harmonioso e deslumbrante 
                que faz com que cada mulher se sinta especial e confiante no seu grande dia.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-wrap gap-4 pt-6"
              >
                <div className="glass-effect py-4 px-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-accent mb-1">25+</p>
                  <p className="text-sm text-white/70">Anos de experiência</p>
                </div>
                
                <div className="glass-effect py-4 px-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-accent mb-1">1000+</p>
                  <p className="text-sm text-white/70">Clientes satisfeitas</p>
                </div>
                
                <div className="glass-effect py-4 px-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-accent mb-1">100%</p>
                  <p className="text-sm text-white/70">Dedicação e amor</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8"
            >
              <Button href="#contact" variant="secondary" size="lg">
                Agende uma consulta
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-secondary/20">
              {/* Imagem principal */}
              <img 
                src="/api/placeholder/600/750" 
                alt="Andreia Regina - Especialista em tranças para noivas" 
                className="w-full h-full object-cover"
              />
              
              {/* Efeito de overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-muted to-transparent opacity-60"></div>
              
              {/* Decoração */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full opacity-20 blur-2xl"></div>
              
              {/* Mini galeria flutuante */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 md:left-auto md:-right-16 w-32 h-32 md:w-40 md:h-40"
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-background rounded-lg shadow-xl overflow-hidden border border-white/10 rotate-6">
                    <img 
                      src="/api/placeholder/200/200" 
                      alt="Close-up de penteado" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Segunda imagem flutuante */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -top-6 -right-6 md:right-auto md:-left-16 w-32 h-32 md:w-40 md:h-40"
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-background rounded-lg shadow-xl overflow-hidden border border-white/10 -rotate-6">
                    <img 
                      src="/api/placeholder/200/200" 
                      alt="Trança elaborada" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Badge de experiência */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute top-4 left-4 glass-effect py-2 px-4 rounded-full"
            >
              <span className="text-white font-medium flex items-center text-sm">
                <svg className="w-4 h-4 mr-1 text-accent" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 15.39L8.24 17.66L9.23 13.38L5.91 10.5L10.3 10.13L12 6.09L13.7 10.13L18.09 10.5L14.77 13.38L15.76 17.66L12 15.39Z" />
                </svg>
                Especialista desde 2000
              </span>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;