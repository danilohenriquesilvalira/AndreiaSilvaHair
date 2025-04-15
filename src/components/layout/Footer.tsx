// components/layout/Footer.tsx
import React from 'react';
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
  
  return (
    <footer className="bg-muted py-16 text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Informações de contato */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Andreia Regina</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <LocationIcon className="w-5 h-5 mt-1 mr-3 text-accent" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-3 text-accent" />
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-accent transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center">
                <EmailIcon className="w-5 h-5 mr-3 text-accent" />
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
            
            {/* Redes sociais */}
            <div className="flex mt-8 space-x-4">
              <a 
                href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a 
                href={`https://facebook.com${CONTACT_INFO.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Links de navegação */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <nav className="space-y-3">
              {NAVIGATION.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-white/80 hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Horário de funcionamento */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Horário de Funcionamento</h3>
            <div className="space-y-2">
              <p className="text-white/80 flex justify-between">
                <span>Segunda - Sexta:</span>
                <span>9:00 - 19:00</span>
              </p>
              <p className="text-white/80 flex justify-between">
                <span>Sábado:</span>
                <span>9:00 - 17:00</span>
              </p>
              <p className="text-white/80 flex justify-between">
                <span>Domingo:</span>
                <span>Fechado</span>
              </p>
              <p className="mt-6 text-white/80">
                Atendimentos para noivas e eventos sob agendamento prévio.
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {currentYear} Andreia Regina. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;