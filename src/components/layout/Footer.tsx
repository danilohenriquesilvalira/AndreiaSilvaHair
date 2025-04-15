// components/layout/Footer.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { 
  NAVIGATION, 
  CONTACT_INFO 
} from '../../utils/constants';
import { 
  InstagramIcon, 
  FacebookIcon, 
  WhatsAppIcon, 
  LocationIcon,
  PhoneIcon,
  EmailIcon
} from '../../assets/icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [emailValue, setEmailValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Animação para o efeito de hover nos links sociais
  const socialIconVariants = {
    hover: { 
      y: -5, 
      color: "#7c3aed",
      transition: { duration: 0.2 }
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValue) {
      // Simulação de envio
      console.log('Email para newsletter:', emailValue);
      setIsSubmitted(true);
      setEmailValue('');
      
      // Reset após 3 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };
  
  return (
    <footer className="bg-muted relative overflow-hidden pt-16 pb-10 text-white">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#7c3aed]/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#7c3aed]/10 rounded-full blur-3xl opacity-30"></div>
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo e info da marca - 4 colunas */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-[#a78bfa]">Andreia</span>
              <span className="text-white">Regina</span>
            </h3>
            <p className="text-sm text-white/70 mb-6 max-w-md">
              Com mais de 25 anos de experiência, Andreia Regina é especialista em tranças 
              e penteados para noivas e eventos especiais, trazendo beleza e autenticidade 
              para cada cliente.
            </p>
            
            {/* Informações de contato */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <LocationIcon className="w-5 h-5 mt-1 mr-3 text-[#a78bfa]" />
                <span className="text-white/80">{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-3 text-[#a78bfa]" />
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-white/80 hover:text-[#a78bfa] transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center">
                <EmailIcon className="w-5 h-5 mr-3 text-[#a78bfa]" />
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white/80 hover:text-[#a78bfa] transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
            
            {/* Redes sociais com animação */}
            <div className="flex space-x-4">
              <motion.a 
                href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[#8b5cf6]/20 transition-colors"
                aria-label="Instagram"
                whileHover="hover"
                variants={socialIconVariants}
              >
                <InstagramIcon className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href={`https://facebook.com${CONTACT_INFO.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[#8b5cf6]/20 transition-colors"
                aria-label="Facebook"
                whileHover="hover"
                variants={socialIconVariants}
              >
                <FacebookIcon className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-[#8b5cf6]/20 transition-colors"
                aria-label="WhatsApp"
                whileHover="hover"
                variants={socialIconVariants}
              >
                <WhatsAppIcon className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
          
          {/* Links de navegação - 2 colunas */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-5 text-white">Links Rápidos</h3>
            <nav className="space-y-3">
              {NAVIGATION.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-white/70 hover:text-[#a78bfa] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Serviços - 2 colunas */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-5 text-white">Serviços</h3>
            <nav className="space-y-3">
              <a href="#services" className="block text-white/70 hover:text-[#a78bfa] transition-colors">
                Tranças para Noivas
              </a>
              <a href="#services" className="block text-white/70 hover:text-[#a78bfa] transition-colors">
                Box Braids
              </a>
              <a href="#services" className="block text-white/70 hover:text-[#a78bfa] transition-colors">
                Knotless Braids
              </a>
              <a href="#services" className="block text-white/70 hover:text-[#a78bfa] transition-colors">
                Aulas Particulares
              </a>
              <a href="#services" className="block text-white/70 hover:text-[#a78bfa] transition-colors">
                Penteados para Eventos
              </a>
            </nav>
          </div>
          
          {/* Horário de funcionamento - 2 colunas */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-5 text-white">Horário de Funcionamento</h3>
            <div className="space-y-2 text-white/70">
              <p className="flex justify-between">
                <span>Segunda - Sexta:</span>
                <span>9:00 - 19:00</span>
              </p>
              <p className="flex justify-between">
                <span>Sábado:</span>
                <span>9:00 - 17:00</span>
              </p>
              <p className="flex justify-between">
                <span>Domingo:</span>
                <span>Fechado</span>
              </p>
              <p className="mt-4 text-sm italic">
                Atendimentos para noivas e eventos especiais disponíveis mediante agendamento prévio.
              </p>
            </div>
          </div>
          
          {/* Newsletter - 2 colunas */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-5 text-white">Receba Novidades</h3>
            <p className="text-white/70 text-sm mb-4">
              Inscreva-se para receber dicas de cuidados, tendências e promoções exclusivas.
            </p>
            
            {isSubmitted ? (
              <div className="bg-[#7c3aed]/20 p-3 rounded-lg text-center">
                <p className="text-white text-sm">
                  Obrigado! Em breve enviaremos novidades.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    placeholder="Seu melhor e-mail"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-3 pr-10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/50 text-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 bg-[#7c3aed] text-white px-3 rounded-md text-sm font-medium hover:bg-[#6d28d9] transition-colors"
                  >
                    Enviar
                  </button>
                </div>
                <p className="text-white/50 text-xs">
                  Nunca compartilhamos seus dados. Cancele quando quiser.
                </p>
              </form>
            )}
          </div>
        </div>
        
        {/* Linha separadora */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-10"></div>
        
        {/* Copyright e links legais */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <p>&copy; {currentYear} Andreia Regina. Todos os direitos reservados.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#a78bfa] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#a78bfa] transition-colors">Termos</a>
            <a href="#" className="hover:text-[#a78bfa] transition-colors">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;