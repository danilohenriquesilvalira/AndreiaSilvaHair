// assets/icons/index.tsx
// Exportação de todos os ícones
import InstagramIcon from './InstagramIcon';
import WhatsAppIcon from './WhatsAppIcon';
import FacebookIcon from './FacebookIcon';
import LocationIcon from './LocationIcon';
import PhoneIcon from './PhoneIcon';
import EmailIcon from './EmailIcon';
import CrownIcon from './CrownIcon';
import PaletteIcon from './PaletteIcon';
import ScissorsIcon from './ScissorsIcon';
import SparklesIcon from './SparklesIcon';
import StarsIcon from './StarsIcon';
import CalendarIcon from './CalendarIcon';
import PlayIcon from './PlayIcon';
import PauseIcon from './PauseIcon.tsx';

// Função para obter ícone por nome
const getIconByName = (name: string) => {
  const icons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    instagram: InstagramIcon,
    whatsapp: WhatsAppIcon,
    facebook: FacebookIcon,
    location: LocationIcon,
    crown: CrownIcon,
    palette: PaletteIcon,
    scissors: ScissorsIcon,
    sparkles: SparklesIcon,
    stars: StarsIcon,
    calendar: CalendarIcon,
    phone: PhoneIcon,
    email: EmailIcon,
    play: PlayIcon,
    pause: PauseIcon,
  };
  
  return icons[name] || null;
};

export {
  InstagramIcon,
  WhatsAppIcon,
  FacebookIcon,
  LocationIcon,
  PhoneIcon,
  EmailIcon,
  CrownIcon,
  PaletteIcon,
  ScissorsIcon,
  SparklesIcon,
  StarsIcon,
  CalendarIcon,
  PlayIcon,
  PauseIcon,
  getIconByName
};