// components/sections/Testimonials.tsx
import React, { useState, useEffect } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { TESTIMONIALS } from '../../utils/constants';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotação dos depoimentos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 5000); // Mudar a cada 5 segundos
    
    return () => clearInterval(interval);
  }, []);
  
  // Renderizar estrelas para avaliação
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={index < rating ? 'currentColor' : 'none'}
        stroke={index < rating ? 'none' : 'currentColor'}
        strokeWidth="1.5"
        className={index < rating ? 'text-secondary' : 'text-muted-foreground/30'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
      </svg>
    ));
  };
  
  return (
    <section id="testimonials" className="py-24 bg-muted relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      
      <Container>
        <SectionTitle
          title="O Que Nossas Clientes Dizem"
          subtitle="Experiências de noivas e clientes que confiaram no nosso trabalho"
          centered={true}
        />
        
        {/* Slider de depoimentos */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[300px]">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`
                  absolute w-full transition-all duration-700 ease-in-out
                  ${index === activeIndex ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-20 -z-10'}
                `}
              >
                <div className="bg-background p-8 rounded-2xl shadow-xl border border-muted-foreground/10">
                  {/* Ícone de aspas */}
                  <svg 
                    width="48" 
                    height="48" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-secondary/20 mb-4"
                  >
                    <path 
                      d="M11 7H7.5C6.67 7 6 7.67 6 8.5V11H9V14H6V17H8.5C9.33 17 10 16.33 10 15.5V8.5C10 7.67 9.33 7 8.5 7H7.5M18 7H14.5C13.67 7 13 7.67 13 8.5V11H16V14H13V17H15.5C16.33 17 17 16.33 17 15.5V8.5C17 7.67 16.33 7 15.5 7H14.5" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  
                  <p className="text-lg text-white/80 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Placeholder se a imagem falhar ao carregar
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100';
                        }}
                      />
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-white">{testimonial.name}</h4>
                      <div className="flex mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navegação e indicadores */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={() => setActiveIndex((activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="w-10 h-10 rounded-full bg-muted-foreground/10 hover:bg-secondary/20 transition-colors flex items-center justify-center"
              aria-label="Anterior"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M15 18L9 12L15 6" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    w-3 h-3 rounded-full transition-all
                    ${index === activeIndex ? 'bg-secondary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}
                  `}
                  aria-label={`Ir para depoimento ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button
              onClick={() => setActiveIndex((activeIndex + 1) % TESTIMONIALS.length)}
              className="w-10 h-10 rounded-full bg-muted-foreground/10 hover:bg-secondary/20 transition-colors flex items-center justify-center"
              aria-label="Próximo"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M9 6L15 12L9 18" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;