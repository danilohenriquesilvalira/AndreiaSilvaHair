// components/sections/Contact.tsx
import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { CONTACT_INFO, FAQS } from '../../utils/constants';
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
    message: '',
  });
  
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
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
    // Aqui você pode adicionar código para enviar o formulário para o backend
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    // Resetar formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };
  
  // Alternar FAQ
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  
  return (
    <section id="contact" className="py-24 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle
              title="Entre em Contato"
              subtitle="Agende uma consulta ou tire suas dúvidas"
              centered={false}
            />
            
            {/* Formulário de contato */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2">
                    Nome Completo <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-muted border border-muted-foreground/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-muted border border-muted-foreground/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-white/80 mb-2">
                    Telefone <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-muted border border-muted-foreground/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors"
                    placeholder="+351 900 000 000"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-white/80 mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-muted border border-muted-foreground/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="noiva">Penteado para Noiva</option>
                    <option value="trancas">Tranças Afro</option>
                    <option value="evento">Penteado para Evento</option>
                    <option value="coloracao">Coloração</option>
                    <option value="corte">Corte</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/80 mb-2">
                  Mensagem <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-muted border border-muted-foreground/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors"
                  placeholder="Descreva sua necessidade, data do evento, ou qualquer informação adicional."
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <Button type="submit" variant="secondary" size="lg">
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          </div>
          
          <div>
            <div className="lg:pl-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Informações de Contato
              </h3>
              
              {/* Informações de contato */}
              <div className="space-y-5 mb-10">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4">
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
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4">
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
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4">
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
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4">
                    <LocationIcon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Localização</p>
                    <p className="text-white">{CONTACT_INFO.address}</p>
                  </div>
                </div>
              </div>
              
              {/* Redes sociais */}
              <div className="mb-10">
                <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
                <div className="flex space-x-3">
                  <a 
                    href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-secondary/20 transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href={`https://facebook.com${CONTACT_INFO.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-secondary/20 transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-secondary/20 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
              
              {/* FAQs */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Perguntas Frequentes</h4>
                <div className="space-y-4">
                  {FAQS.map((faq, index) => (
                    <div 
                      key={index}
                      className="border border-muted-foreground/10 rounded-lg overflow-hidden"
                    >
                      <button
                        className="w-full flex justify-between items-center p-4 text-left bg-muted hover:bg-muted-foreground/10 transition-colors"
                        onClick={() => toggleFaq(index)}
                      >
                        <span className="font-medium text-white">{faq.question}</span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      
                      <div
                        className={`
                          overflow-hidden transition-all duration-300
                          ${expandedFaq === index ? 'max-h-40' : 'max-h-0'}
                        `}
                      >
                        <div className="p-4 bg-muted/50 text-white/80">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;