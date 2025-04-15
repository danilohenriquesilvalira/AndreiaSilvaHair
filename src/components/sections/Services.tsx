// components/sections/Services.tsx
import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { SERVICES } from '../../utils/constants';
import { getIconByName } from '../../assets/icons';
import Button from '../ui/Button';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <Container>
        <SectionTitle
          title="Serviços Especializados"
          subtitle="Descubra a arte de transformar seu cabelo em um penteado deslumbrante"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {SERVICES.map((service) => {
            const Icon = getIconByName(service.icon);
            
            return (
              <div 
                key={service.id}
                className={`
                  rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-5px]
                  ${service.featured 
                    ? 'bg-gradient-to-br from-secondary/20 to-accent/20 border border-white/10' 
                    : 'bg-muted border border-muted-foreground/10'}
                `}
              >
                <div className="flex items-center mb-4">
                  <div className={`
                    w-12 h-12 rounded-lg flex items-center justify-center mr-4
                    ${service.featured ? 'bg-secondary/30' : 'bg-secondary/20'}
                  `}>
                    {Icon && <Icon className="w-6 h-6 text-white" />}
                  </div>
                  
                  {service.featured && (
                    <span className="text-xs font-medium bg-secondary/20 text-secondary px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-secondary font-medium hover:text-accent transition-colors"
                >
                  Saber mais
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                  >
                    <path 
                      d="M5 12h14M12 5l7 7-7 7" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-muted p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Você tem uma ocasião especial se aproximando?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entre em contato para uma consulta personalizada e descubra como podemos criar um penteado perfeito para o seu momento especial.
            </p>
            <Button 
              href="#contact"
              variant="secondary"
              size="lg"
            >
              Agendar Consulta
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;