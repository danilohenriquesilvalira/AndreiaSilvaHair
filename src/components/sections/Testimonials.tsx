// components/sections/Testimonials.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { TESTIMONIALS } from '../../utils/constants';
import Button from '../ui/Button';
import { PlayIcon, PauseIcon } from '../../assets/icons';

// Novos dados incluindo vídeo depoimentos
const videoTestimonials = [
  {
    id: 'v1',
    name: 'Catarina Oliveira',
    role: 'Noiva',
    text: 'A Andreia transformou meu dia especial com um penteado deslumbrante. Todos os convidados elogiaram!',
    videoThumbnail: '/api/placeholder/600/400',
    videoUrl: '#', // URL do vídeo seria inserida aqui
    rating: 5
  },
  {
    id: 'v2',
    name: 'Fernanda Silva',
    role: 'Cliente frequente',
    text: 'Minhas box braids ficaram perfeitas e duraram por mais de 2 meses! Incrível trabalho como sempre.',
    videoThumbnail: '/api/placeholder/600/400',
    videoUrl: '#', // URL do vídeo seria inserida aqui
    rating: 5
  }
];

// Adicionando tipos para os depoimentos em vídeo
interface VideoTestimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  videoThumbnail: string;
  videoUrl: string;
  rating: number;
}

// Componente para vídeo depoimento
const VideoTestimonialCard: React.FC<{
  testimonial: VideoTestimonial;
  active: boolean;
}> = ({ testimonial, active }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!active && playing) {
      setPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [active, playing]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="glass-effect rounded-2xl overflow-hidden"
    >
      <div className="relative aspect-video">
        {/* Aqui colocaríamos um vídeo real, mas para o exemplo usaremos uma imagem */}
        <img 
          src={testimonial.videoThumbnail} 
          alt={`Depoimento de ${testimonial.name}`}
          className="w-full h-full object-cover"
        />
        
        {/* Vídeo elemento (comentado para o placeholder) */}
        {/* <video 
          ref={videoRef}
          src={testimonial.videoUrl}
          poster={testimonial.videoThumbnail}
          className="w-full h-full object-cover"
          onEnded={() => setPlaying(false)}
        /> */}
        
        {/* Overlay com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
        
        {/* Botão de play */}
        <button
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#7c3aed]/80 hover:bg-[#7c3aed] flex items-center justify-center text-white transition-colors z-10"
        >
          {playing ? (
            <PauseIcon className="w-6 h-6" />
          ) : (
            <PlayIcon className="w-6 h-6 ml-1" />
          )}
        </button>
        
        {/* Informações do depoimento */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center mb-2">
            <span className="bg-[#7c3aed] text-white text-xs font-medium px-2.5 py-1 rounded-full">
              {testimonial.role}
            </span>
          </div>
          <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
          <div className="flex mt-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < testimonial.rating ? 'text-[#8b5cf6]' : 'text-gray-400'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-white/80 italic">"{testimonial.text}"</p>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [tab, setTab] = useState<'text' | 'video'>('text');
  
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  // Auto-rotação dos depoimentos de texto
  useEffect(() => {
    if (tab === 'text') {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
      }, 5000); // Mudar a cada 5 segundos
      
      return () => clearInterval(interval);
    }
  }, [tab]);
  
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
        className={index < rating ? 'text-[#8b5cf6]' : 'text-white/30'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
      </svg>
    ));
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-24 bg-muted relative overflow-hidden"
    >
      {/* Elementos decorativos em roxo */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl"></div>
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            title="Vozes de Confiança"
            subtitle="Histórias reais de clientes satisfeitas que confiaram no trabalho da Andreia Regina"
            centered={true}
          />
        </motion.div>

        {/* Tabs para depoimentos em texto e em vídeo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/5 p-1 rounded-full flex items-center">
            <button
              onClick={() => setTab('text')}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                tab === 'text' 
                  ? 'text-white' 
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              {tab === 'text' && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 bg-[#7c3aed] rounded-full"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              Depoimentos
            </button>
            <button
              onClick={() => setTab('video')}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                tab === 'video' 
                  ? 'text-white' 
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              {tab === 'video' && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 bg-[#7c3aed] rounded-full"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              Vídeo-depoimentos
            </button>
          </div>
        </motion.div>
        
        {/* Conteúdo baseado na tab ativa */}
        <AnimatePresence mode="wait">
          {tab === 'text' ? (
            <motion.div
              key="text-testimonials"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-12 max-w-4xl mx-auto"
            >
              <div className="relative h-[400px] md:h-[320px]">
                {TESTIMONIALS.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className={`
                      absolute w-full transition-all duration-700 ease-in-out
                      ${index === activeIndex ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-20 -z-10'}
                    `}
                  >
                    <div className="bg-background p-8 rounded-2xl shadow-xl border border-[#7c3aed]/20 lilac-shadow">
                      {/* Ícone de aspas */}
                      <svg 
                        width="48" 
                        height="48" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#7c3aed]/30 mb-4"
                      >
                        <path 
                          d="M11 7H7.5C6.67 7 6 7.67 6 8.5V11H9V14H6V17H8.5C9.33 17 10 16.33 10 15.5V8.5C10 7.67 9.33 7 8.5 7H7.5M18 7H14.5C13.67 7 13 7.67 13 8.5V11H16V14H13V17H15.5C16.33 17 17 16.33 17 15.5V8.5C17 7.67 16.33 7 15.5 7H14.5" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                      
                      <p className="text-lg text-white/90 mb-6 italic">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#8b5cf6]">
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
                          <h4 className="font-semibold text-xl text-white">
                            {testimonial.name}
                          </h4>
                          <div className="flex mt-2">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Navegação e indicadores */}
              <div className="flex justify-center items-center mt-8 gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveIndex((activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#7c3aed]/20 transition-colors flex items-center justify-center focus-ring"
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
                </motion.button>
                
                <div className="flex gap-2">
                  {TESTIMONIALS.map((_, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setActiveIndex(index)}
                      className={`
                        w-3 h-3 rounded-full transition-all
                        ${index === activeIndex 
                          ? 'bg-[#7c3aed] w-8' 
                          : 'bg-white/30 hover:bg-white/50'}
                      `}
                      aria-label={`Ir para depoimento ${index + 1}`}
                    ></motion.button>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveIndex((activeIndex + 1) % TESTIMONIALS.length)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#7c3aed]/20 transition-colors flex items-center justify-center focus-ring"
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
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="video-testimonials"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videoTestimonials.map((testimonial, index) => (
                  <VideoTestimonialCard 
                    key={testimonial.id}
                    testimonial={testimonial}
                    active={activeVideoIndex === index}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            Junte-se às centenas de clientes satisfeitas e transforme seu visual com Andreia Regina, 
            a especialista em tranças e penteados para todas as ocasiões.
          </p>
          <Button 
            href="#contact" 
            variant="secondary"
            size="lg"
            className="lilac-shadow"
          >
            Agende sua Transformação
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;