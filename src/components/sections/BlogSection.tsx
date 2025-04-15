// components/sections/BlogSection.tsx
import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

// Dados de artigos do blog
const blogPosts = [
  {
    id: 1,
    title: 'Como Manter Suas Box Braids por Mais Tempo',
    excerpt: 'Descubra os segredos para manter suas tranças lindas e saudáveis por até 8 semanas com cuidados simples.',
    image: '/api/placeholder/600/400',
    category: 'Cuidados',
    date: '10 Abr 2025',
    readTime: '5 min',
    content: `
      <h2>Cuide das suas box braids para durarem mais</h2>
      <p>As box braids são um estilo versátil e protetor que pode durar várias semanas, mas com os cuidados certos, você pode estender sua vida útil e mantê-las bonitas por mais tempo.</p>
      
      <h3>Dicas essenciais:</h3>
      <ul>
        <li><strong>Hidratação regular:</strong> Aplique óleo leve nas tranças e couro cabeludo 2-3 vezes por semana</li>
        <li><strong>Proteção noturna:</strong> Use uma touca de cetim ou fronha de cetim para dormir</li>
        <li><strong>Lavagem cuidadosa:</strong> Lave com shampoo diluído a cada 7-10 dias</li>
        <li><strong>Evite produtos pesados:</strong> Eles causam acúmulo e podem deixar as tranças com aparência opaca</li>
      </ul>
      
      <p>Seguindo estas dicas simples, suas box braids permanecerão bonitas e seu cabelo natural continuará saudável sob a proteção.</p>
    `
  },
  {
    id: 2,
    title: 'Penteados de Noiva com Tranças para 2025',
    excerpt: 'As principais tendências de tranças para noivas que dominarão os casamentos em 2025.',
    image: '/api/placeholder/600/400',
    category: 'Tendências',
    date: '2 Abr 2025',
    readTime: '7 min',
    content: `
      <h2>Tendências de tranças para noivas em 2025</h2>
      <p>As noivas de 2025 estão optando por penteados que combinam tradição e modernidade, com tranças que incorporam elementos únicos e pessoais.</p>
      
      <h3>Principais tendências:</h3>
      <ul>
        <li><strong>Tranças holandesas volumosas:</strong> Com mechas mais soltas para um visual romântico</li>
        <li><strong>Coques baixos com tranças:</strong> Elegantes e seguros para o dia todo</li>
        <li><strong>Tranças com flores naturais:</strong> Incorporando flores da estação para um toque personalizado</li>
        <li><strong>Half-up com tranças finas:</strong> Combinando solto e preso para o melhor dos dois mundos</li>
      </ul>
      
      <p>A personalização é a chave para 2025 - cada noiva quer um penteado que reflita sua personalidade enquanto complementa seu vestido e tema do casamento.</p>
    `
  },
  {
    id: 3,
    title: '5 Mitos Sobre Tranças Afro Desvendados',
    excerpt: 'Desmistificamos os principais equívocos sobre tranças e esclarecemos fatos importantes para cuidados capilares.',
    image: '/api/placeholder/600/400',
    category: 'Educativo',
    date: '28 Mar 2025',
    readTime: '6 min',
    content: `
      <h2>Separando fatos de ficção sobre tranças afro</h2>
      <p>Existem muitos mitos persistentes sobre tranças afro que podem levar a práticas prejudiciais. Vamos esclarecer alguns dos mais comuns.</p>
      
      <h3>Mito 1: Tranças danificam o cabelo</h3>
      <p>Quando feitas corretamente, tranças são protetoras. O dano vem de tranças muito apertadas ou peso excessivo.</p>
      
      <h3>Mito 2: Você não precisa lavar o cabelo com tranças</h3>
      <p>Falso! O couro cabeludo precisa ser limpo para permanecer saudável. Shampoos diluídos são ideais para limpeza sem criar frizz.</p>
      
      <h3>Mito 3: Qualquer cabelo pode fazer qualquer tipo de trança</h3>
      <p>Diferentes texturas capilares funcionam melhor com diferentes técnicas. Consulte um profissional para descobrir o estilo ideal para seu tipo de cabelo.</p>
      
      <p>Compreender os fatos ajuda a manter seu cabelo saudável enquanto desfruta da beleza e versatilidade das tranças.</p>
    `
  }
];

// Dicas rápidas para o carrossel
const quickTips = [
  {
    id: 't1',
    title: 'Hidratação noturna',
    tip: 'Aplique óleo de coco nas pontas das tranças antes de dormir para hidratação extra durante a noite.',
    icon: '💧'
  },
  {
    id: 't2',
    title: 'Elimine o frizz',
    tip: 'Use um spray leve de água com algumas gotas de óleo de argan para controlar o frizz sem pesar nas tranças.',
    icon: '✨'
  },
  {
    id: 't3',
    title: 'Dia da noiva',
    tip: 'Evite fazer tranças pela primeira vez no dia do casamento. Faça um teste 2-3 semanas antes.',
    icon: '👰'
  },
  {
    id: 't4',
    title: 'Escalpe sensível',
    tip: 'Tome um analgésico 30 minutos antes de fazer tranças se você tem couro cabeludo sensível.',
    icon: '💊'
  },
  {
    id: 't5',
    title: 'Prepare seu cabelo',
    tip: 'Lave e condicione bem o cabelo um dia antes de fazer tranças, mas evite produtos com silicone.',
    icon: '🧴'
  }
];

const BlogSection: React.FC = () => {
  const [activeTip, setActiveTip] = useState(0);
  const [activePost, setActivePost] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Navegar entre dicas
  const nextTip = () => {
    setActiveTip((prev) => (prev + 1) % quickTips.length);
  };

  const prevTip = () => {
    setActiveTip((prev) => (prev - 1 + quickTips.length) % quickTips.length);
  };

  // Abrir/fechar modal do blog post
  const openPost = (id: number) => {
    setActivePost(id);
    document.body.style.overflow = 'hidden';
  };

  const closePost = () => {
    setActivePost(null);
    document.body.style.overflow = '';
  };

  return (
    <section 
      id="blog" 
      ref={sectionRef}
      className="py-24 bg-muted relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-[#7c3aed]/10 blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 left-0 w-96 h-96 rounded-full bg-[#7c3aed]/10 blur-3xl opacity-30"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            title="Dicas e Inspiração"
            subtitle="Artigos, tutoriais e conselhos de especialista para cuidados com tranças e penteados"
            centered={true}
          />
        </motion.div>

        {/* Artigos em destaque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: isInView ? 1 : 0, 
                y: isInView ? 0 : 30 
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.1 * index 
              }}
              className="glass-effect rounded-xl overflow-hidden group hover-card cursor-pointer"
              onClick={() => openPost(post.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 m-4">
                  <span className="inline-block bg-[#7c3aed] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between text-xs text-white/60 mb-2">
                  <span>{post.date}</span>
                  <span>{post.readTime} de leitura</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[#a78bfa] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-white/70 text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                
                <button className="inline-flex items-center text-[#a78bfa] text-sm font-medium group-hover:text-white transition-colors">
                  Ler artigo completo
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carrossel de dicas rápidas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">
            Dicas Rápidas
          </h3>

          <div className="relative max-w-3xl mx-auto bg-background rounded-2xl p-8 glass-effect">
            {/* Decoração */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#7c3aed]/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#7c3aed]/30 rounded-full blur-xl"></div>
            
            <div className="relative h-32">
              <AnimatePresence mode="wait">
                {quickTips.map((tip, index) => (
                  index === activeTip && (
                    <motion.div
                      key={tip.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex"
                    >
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#7c3aed]/20 text-3xl mr-4">
                        {tip.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">{tip.title}</h4>
                        <p className="text-white/70">{tip.tip}</p>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
            
            {/* Navegação */}
            <div className="flex justify-between mt-6">
              <button 
                onClick={prevTip}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#7c3aed]/20 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {quickTips.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTip(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeTip ? 'bg-[#7c3aed]' : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Ir para dica ${index + 1}`}
                  ></button>
                ))}
              </div>
              
              <button 
                onClick={nextTip}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#7c3aed]/20 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* CTA para mais dicas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Quer receber mais dicas, inspirações e novidades diretamente no seu email?
            Inscreva-se em nossa newsletter e fique por dentro de tudo!
          </p>
          <Button 
            href="#footer-newsletter" 
            variant="outline"
            className="bg-white/5"
          >
            Inscrever-se
          </Button>
        </motion.div>
      </Container>

      {/* Modal de artigo completo */}
      <AnimatePresence>
        {activePost !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closePost}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-background rounded-2xl max-w-3xl max-h-[90vh] overflow-y-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {blogPosts.find(post => post.id === activePost) && (
                <div>
                  <div className="relative h-56 sm:h-80">
                    <img 
                      src={blogPosts.find(post => post.id === activePost)?.image} 
                      alt={blogPosts.find(post => post.id === activePost)?.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                    
                    <button
                      onClick={closePost}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#7c3aed] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="bg-[#7c3aed] text-white text-xs font-medium px-2.5 py-1 rounded-full">
                        {blogPosts.find(post => post.id === activePost)?.category}
                      </span>
                      <span className="text-white/60 text-sm">
                        {blogPosts.find(post => post.id === activePost)?.date}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                      {blogPosts.find(post => post.id === activePost)?.title}
                    </h2>
                    
                    <div 
                      className="prose prose-invert prose-lg max-w-none prose-headings:text-[#a78bfa] prose-a:text-[#a78bfa]"
                      dangerouslySetInnerHTML={{ 
                        __html: blogPosts.find(post => post.id === activePost)?.content || '' 
                      }}
                    />
                    
                    <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                      <div className="flex space-x-3">
                        <button className="bg-white/5 hover:bg-white/10 transition-colors rounded-full py-1.5 px-3 text-sm flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                          Curtir
                        </button>
                        <button className="bg-white/5 hover:bg-white/10 transition-colors rounded-full py-1.5 px-3 text-sm flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                          Compartilhar
                        </button>
                      </div>
                      
                      <Button 
                        href="#contact" 
                        onClick={closePost}
                        variant="secondary"
                        size="sm"
                      >
                        Agendar Consulta
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BlogSection;