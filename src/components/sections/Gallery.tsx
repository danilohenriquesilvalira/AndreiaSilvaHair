// components/sections/Gallery.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { GALLERY_IMAGES } from '../../utils/constants';
import Button from '../ui/Button';
import { InstagramIcon } from '../../assets/icons';

// Atualizando com mais opções para placeholder de imagens
const placeholderImages = [
  '/api/placeholder/600/600',
  '/api/placeholder/600/600',
  '/api/placeholder/600/600',
  '/api/placeholder/600/600',
  '/api/placeholder/600/600',
  '/api/placeholder/600/600',
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [visibleImages, setVisibleImages] = useState(GALLERY_IMAGES);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const galleryRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(galleryRef, { once: true, amount: 0.1 });
  
  // Filtrar imagens quando o filtro mudar
  useEffect(() => {
    if (filter === 'all') {
      setVisibleImages(GALLERY_IMAGES);
    } else {
      setVisibleImages(GALLERY_IMAGES.filter(image => image.category === filter));
    }
  }, [filter]);
  
  // Categorias únicas para filtros
  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'noivas', label: 'Noivas' },
    { id: 'tranças', label: 'Tranças' },
    { id: 'eventos', label: 'Eventos' },
  ];

  // Variantes para animações
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };
  
  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-secondary/10 blur-3xl opacity-60"></div>
      <div className="absolute bottom-40 left-0 w-72 h-72 rounded-full bg-accent/10 blur-3xl opacity-60"></div>
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            title="Galeria de Transformações"
            subtitle="Inspire-se com nossas criações exclusivas para noivas e eventos especiais"
            centered={true}
          />
        </motion.div>
        
        {/* Filtros modernizados */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`
                py-2.5 px-5 rounded-full text-sm font-medium transition-all duration-300
                ${filter === category.id 
                  ? 'bg-secondary text-white shadow-lg shadow-secondary/20 scale-105' 
                  : 'bg-muted text-muted-foreground hover:bg-muted-foreground/20'}
                focus-ring
              `}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
        
        {/* Grid de imagens com animação de entrada */}
        <motion.div 
          ref={galleryRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleImages.length > 0 ? visibleImages.map((image, index) => (
            <motion.div 
              key={image.id}
              variants={itemVariants}
              layoutId={`gallery-item-${image.id}`}
              className="relative overflow-hidden rounded-xl aspect-square cursor-pointer hover-card"
              onClick={() => setSelectedImage(image.id)}
            >
              <img 
                src={image.src || placeholderImages[index % placeholderImages.length]} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              
              {/* Overlay moderno com informações */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white font-semibold text-lg">{image.alt}</p>
                  <div className="mt-2">
                    <span className="inline-block bg-secondary/30 backdrop-blur-sm text-white text-xs py-1.5 px-3 rounded-full">
                      #{image.category}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )) : (
            // Adiciona placeholders quando não há imagens
            Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={`placeholder-${index}`}
                variants={itemVariants}
                className="relative overflow-hidden rounded-xl aspect-square hover-card"
              >
                <img 
                  src={placeholderImages[index % placeholderImages.length]} 
                  alt="Placeholder para trabalho de penteado" 
                  className="w-full h-full object-cover filter brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-lg font-medium px-6 py-3 bg-background/50 backdrop-blur-sm rounded-lg">
                    Foto em breve
                  </p>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
        
        {/* Modal para visualização de imagem ampliada */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                layoutId={`gallery-item-${selectedImage}`}
                className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={GALLERY_IMAGES.find(img => img.id === selectedImage)?.src || placeholderImages[0]} 
                  alt={GALLERY_IMAGES.find(img => img.id === selectedImage)?.alt || "Imagem ampliada"}
                  className="w-full h-full object-contain"
                />
                <button
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-background transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Botão para ver mais no Instagram */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg"
            icon={<InstagramIcon className="w-5 h-5" />}
            href="https://www.instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect"
          >
            Ver mais no Instagram
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Gallery;