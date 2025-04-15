// components/sections/Contact.tsx
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { CONTACT_INFO, FAQS, SERVICES } from '../../utils/constants';
import { 
  WhatsAppIcon, 
  InstagramIcon, 
  FacebookIcon, 
  PhoneIcon,
  EmailIcon,
  LocationIcon
} from '../../assets/icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });
  
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const contactRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contactRef, { once: true, amount: 0.1 });
  
  // Manipular mudanças no formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  // Manipular envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simulação de envio de formulário
    setTimeout(() => {
      console.log('Formulário enviado:', formData);
      setFormStatus('success');
      
      // Resetar formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: '',
      });
      
      // Voltar ao estado inicial após 3 segundos
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };
  
  // Alternar FAQ
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Variantes para animações
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  const contactVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };
  
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-secondary/10 blur-3xl opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl opacity-50"></div>
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <SectionTitle
            title="Vamos Conversar"
            subtitle="Agende uma consulta personalizada ou esclareça suas dúvidas sobre nossos serviços"
            centered={true}
          />
        </motion.div>
        
        <div ref={contactRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de contato */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="glass-effect rounded-3xl p-8 border border-white/10 h-full">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Agende sua Transformação
              </h3>
              
              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-secondary/20 rounded-xl p-6 text-center h-[400px] flex flex-col items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
                    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h4>
                  <p className="text-white/80">
                    Obrigado pelo seu contato. Entraremos em contato em breve para confirmar seu agendamento.
                  </p>
                  <Button 
                    onClick={() => setFormStatus('idle')}
                    variant="secondary" 
                    className="mt-6"
                  >
                    Enviar nova mensagem
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white/80 mb-2 text-sm">
                        Nome Completo <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-muted border border-muted-foreground/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors focus-ring"
                        placeholder="Seu nome"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white/80 mb-2 text-sm">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-muted border border-muted-foreground/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors focus-ring"
                        placeholder="seu.email@exemplo.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-white/80 mb-2 text-sm">
                        Telefone <span className="text-accent">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-muted border border-muted-foreground/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors focus-ring"
                        placeholder="+351 900 000 000"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-white/80 mb-2 text-sm">
                        Serviço de Interesse <span className="text-accent">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-muted border border-muted-foreground/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors focus-ring"
                      >
                        <option value="">Selecione um serviço</option>
                        {SERVICES.map(service => (
                          <option key={service.id} value={service.title.toLowerCase()}>
                            {service.title}
                          </option>
                        ))}
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-white/80 mb-2 text-sm">
                      Data Preferencial
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-muted border border-muted-foreground/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors focus-ring"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white/80 mb-2 text-sm">
                      Mensagem <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-muted border border-muted-foreground/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors focus-ring"
                      placeholder="Descreva sua necessidade, detalhes do evento, ou qualquer informação adicional."
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      variant="secondary" 
                      size="lg"
                      className="btn-pulse"
                      disabled={formStatus === 'loading'}
                    >
                      {formStatus === 'loading' ? (
                        <span className="flex items-center">
                          <span className="loading-dot"></span>
                          <span className="loading-dot"></span>
                          <span className="loading-dot"></span>
                        </span>
                      ) : 'Enviar Mensagem'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
          
          {/* Informações de contato e FAQ */}
          <motion.div
            variants={contactVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="lg:pl-8 h-full flex flex-col">
              <div className="glass-effect rounded-3xl p-8 border border-white/10 mb-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  Informações de Contato
                </h3>
                
                {/* Informações de contato */}
                <div className="space-y-5 mb-8">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start group"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4 group-hover:bg-secondary/30 transition-colors">
                      <PhoneIcon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Telefone</p>
                      <a 
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="text-white hover:text-secondary transition-colors"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start group"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4 group-hover:bg-secondary/30 transition-colors">
                      <WhatsAppIcon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">WhatsApp</p>
                      <a 
                        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-secondary transition-colors"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start group"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4 group-hover:bg-secondary/30 transition-colors">
                      <EmailIcon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Email</p>
                      <a 
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-white hover:text-secondary transition-colors"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start group"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4 group-hover:bg-secondary/30 transition-colors">
                      <LocationIcon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Localização</p>
                      <p className="text-white">{CONTACT_INFO.address}</p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Redes sociais */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
                  <div className="flex space-x-3">
                    <motion.a 
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-secondary/20 transition-colors"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-6 h-6 text-white" />
                    </motion.a>
                    <motion.a 
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={`https://facebook.com${CONTACT_INFO.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-secondary/20 transition-colors"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-6 h-6 text-white" />
                    </motion.a>
                    <motion.a 
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-secondary/20 transition-colors"
                      aria-label="WhatsApp"
                    >
                      <WhatsAppIcon className="w-6 h-6 text-white" />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              {/* FAQs */}
              <div className="glass-effect rounded-3xl p-8 border border-white/10 flex-1">
                <h4 className="text-xl font-semibold mb-6 gradient-text">Perguntas Frequentes</h4>
                <div className="space-y-4">
                  {FAQS.map((faq, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: isInView ? 1 : 0, 
                        y: isInView ? 0 : 20 
                      }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.2 + (index * 0.1) 
                      }}
                      className="border border-white/10 rounded-xl overflow-hidden"
                    >
                      <button
                        className="w-full flex justify-between items-center p-4 text-left bg-muted hover:bg-muted-foreground/10 transition-colors"
                        onClick={() => toggleFaq(index)}
                      >
                        <span className="font-medium text-white">{faq.question}</span>
                        <motion.div
                          animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-secondary"
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </motion.div>
                      </button>
                      
                      <motion.div
                        animate={{
                          height: expandedFaq === index ? "auto" : 0,
                          opacity: expandedFaq === index ? 1 : 0
                        }}
                        transition={{ 
                          duration: 0.3, 
                          ease: [0.215, 0.61, 0.355, 1] 
                        }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 bg-muted/50 text-white/80">
                          {faq.answer}
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;