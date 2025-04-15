// components/sections/About.tsx
import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-muted">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionTitle 
              title="Conheça Andreia Regina"
              subtitle="Especialista em penteados e tranças para noivas"
              centered={false}
            />
            
            <div className="space-y-6 text-white/80">
              <p className="text-lg">
                Com mais de 10 anos de experiência no universo da beleza, Andreia Regina se especializou em criar penteados exclusivos que valorizam a beleza natural de cada cliente.
              </p>
              
              <p className="text-lg">
                Sua paixão por tranças e penteados para noivas começou ainda jovem, e hoje é reconhecida como uma das mais talentosas profissionais em Portugal, atendendo noivas de todo o país.
              </p>
              
              <p className="text-lg">
                Cada penteado é cuidadosamente criado considerando o formato do rosto, o estilo do vestido e a personalidade da noiva, garantindo um resultado harmonioso e deslumbrante.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-muted-foreground/10 backdrop-blur-sm py-3 px-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-accent mb-1">10+</p>
                  <p className="text-sm text-white/70">Anos de experiência</p>
                </div>
                
                <div className="bg-muted-foreground/10 backdrop-blur-sm py-3 px-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-accent mb-1">500+</p>
                  <p className="text-sm text-white/70">Noivas atendidas</p>
                </div>
                
                <div className="bg-muted-foreground/10 backdrop-blur-sm py-3 px-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-accent mb-1">100%</p>
                  <p className="text-sm text-white/70">Satisfação</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button href="#contact" variant="secondary">
                Agende uma consulta
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img 
                src="/images/about-photo.jpg" 
                alt="Andreia Regina - Especialista em tranças para noivas" 
                className="w-full h-full object-cover"
              />
              
              {/* Decoração */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full opacity-25 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-full opacity-25 blur-2xl"></div>
            </div>
            
            {/* Badge de destaque */}
            <div className="absolute -top-4 -right-4 bg-background p-4 rounded-full shadow-xl">
              <div className="bg-secondary/20 backdrop-blur-md p-3 rounded-full">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15.39L8.24 17.66L9.23 13.38L5.91 10.5L10.3 10.13L12 6.09L13.7 10.13L18.09 10.5L14.77 13.38L15.76 17.66L12 15.39Z" fill="currentColor" className="text-secondary" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;