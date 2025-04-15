// components/sections/Expertise.tsx
import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { BrasilIcon, PortugalIcon } from '../../assets/icons/Countries';

const Expertise: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Efeitos de parallax
  const y1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.3, 1, 1, 0.3]);

  // Dados de especialização
  const specialties = [
    {
      title: "Box Braids",
      description: "Tranças box tradicionais e modernas, em diferentes espessuras e comprimentos, com ou sem aplicação de acessórios.",
      image: "/api/placeholder/600/600",
    },
    {
      title: "Tranças para Noivas",
      description: "Penteados elaborados com tranças para o dia mais especial, integrando véu, flores e acessórios exclusivos.",
      image: "/api/placeholder/600/600",
    },
    {
      title: "Knotless Braids",
      description: "Técnica moderna de tranças sem nós na raiz, proporcionando mais conforto e um resultado natural e elegante.",
      image: "/api/placeholder/600/600",
    },
    {
      title: "Aulas Personalizadas",
      description: "Aprenda técnicas exclusivas de tranças com aulas personalizadas para iniciantes e profissionais.",
      image: "/api/placeholder/600/600",
    },
  ];

  // Experiência internacional
  const internationalExperience = [
    {
      country: "Brasil",
      flag: <BrasilIcon className="w-8 h-8" />,
      years: "20+ anos",
      highlights: [
        "Especialização em técnicas afro-brasileiras",
        "Atendimento a celebridades",
        "Formação de mais de 200 profissionais"
      ]
    },
    {
      country: "Portugal",
      flag: <PortugalIcon className="w-8 h-8" />,
      years: "5+ anos",
      highlights: [
        "Adaptação de técnicas para o público europeu",
        "Atendimento a noivas internacionais",
        "Desenvolvimento de produtos exclusivos"
      ]
    }
  ];

  return (
    <section 
      id="expertise" 
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Elementos decorativos com parallax */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#7c3aed]/10 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-[#8b5cf6]/10 blur-3xl pointer-events-none"
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            title="Especialização em Tranças"
            subtitle="Combinando técnicas tradicionais e modernas para criar estilos únicos e deslumbrantes"
            centered={true}
          />
        </motion.div>

        {/* Grade de especialidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: isInView ? 1 : 0, 
                y: isInView ? 0 : 30 
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.1 * index 
              }}
              className="glass-effect rounded-2xl overflow-hidden group hover-card"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={specialty.image} 
                  alt={specialty.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                <h3 className="absolute bottom-0 left-0 right-0 p-6 text-xl md:text-2xl font-bold text-white group-hover:text-[#a78bfa] transition-colors duration-300">
                  {specialty.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-white/80">{specialty.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experiência internacional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Experiência Internacional
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internationalExperience.map((exp, index) => (
              <motion.div
                key={exp.country}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                animate={{ 
                  opacity: isInView ? 1 : 0, 
                  x: isInView ? 0 : (index === 0 ? -30 : 30) 
                }}
                transition={{ duration: 0.8, delay: 0.7 + (index * 0.2) }}
                className="glass-effect p-8 rounded-2xl gradient-border"
              >
                <div className="flex items-center mb-4">
                  {exp.flag}
                  <h3 className="text-2xl font-bold ml-3 text-white">{exp.country}</h3>
                  <span className="ml-auto bg-[#7c3aed]/20 px-3 py-1 rounded-full text-[#a78bfa] text-sm font-medium">
                    {exp.years}
                  </span>
                </div>

                <ul className="space-y-3 mt-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#7c3aed] mr-2 mt-1">•</span>
                      <span className="text-white/80">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Citação destacada */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 glass-effect p-8 md:p-12 rounded-2xl text-center relative overflow-hidden"
        >
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#7c3aed]/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#7c3aed]/20 rounded-full blur-3xl"></div>
          
          <svg className="w-12 h-12 mx-auto mb-6 text-[#7c3aed]/40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium italic relative z-10">
            "A arte de trançar cabelos é mais que uma profissão para mim - é uma forma de conectar culturas e realçar a beleza única de cada pessoa."
          </p>
          <p className="mt-4 text-[#a78bfa] font-semibold">— Andreia Regina</p>
        </motion.div>
      </Container>
    </section>
  );
};

export default Expertise;