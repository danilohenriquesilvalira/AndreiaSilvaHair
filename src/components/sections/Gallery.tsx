// components/sections/Gallery.tsx
import React, { useState, useEffect } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { GALLERY_IMAGES } from '../../utils/constants';
import Button from '../ui/Button';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [visibleImages, setVisibleImages] = useState(GALLERY_IMAGES);
  
  // Filtrar imagens quando o filtro mudar
  useEffect(() => {
    if (filter === 'all') {
      setVisibleImages(GALLERY_IMAGES);
    } else {
      setVisibleImages(GALLERY_IMAGES.filter(image => image.category === filter));
    }
  }, [filter]);
  
  // Efeito de scroll reveal
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 50) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Executar uma vez para elementos já visíveis
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, [visibleImages]);
  
  // Categorias únicas para filtros
  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'noivas', label: 'Noivas' },
    { id: 'tranças', label: 'Tranças' },
    { id: 'eventos', label: 'Eventos' },
  ];
  
  return (
    <section id="gallery" className="py-24 bg-background">
      <Container>
        <SectionTitle
          title="Galeria de Transformações"
          subtitle="Inspire-se com nossas criações exclusivas para noivas e eventos especiais"
          centered={true}
        />
        
        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`
                py-2 px-4 rounded-full text-sm font-medium transition-colors
                ${filter === category.id 
                  ? 'bg-secondary text-white' 
                  : 'bg-muted text-muted-foreground hover:bg-muted-foreground/20'}
              `}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Grid de imagens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleImages.map((image, index) => (
            <div 
              key={image.id}
              className={`
                reveal overflow-hidden rounded-xl relative group 
                ${index === 3 || index === 4 ? 'md:col-span-2' : ''}
              `}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-medium">{image.alt}</p>
                <div className="mt-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  <span className="inline-block bg-secondary/30 backdrop-blur-sm text-white text-xs py-1 px-3 rounded-full">
                    #{image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Botão para ver mais */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver mais no Instagram
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;