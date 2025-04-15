// Tipos para navegação
export interface NavItem {
  label: string;
  href: string;
}

// Tipos para serviços
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  featured: boolean;
}

// Tipos para depoimentos
export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  image: string;
}

// Tipos para galeria
export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

// Tipos para FAQ
export interface FAQ {
  question: string;
  answer: string;
}

// Tipos para contato
export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  instagram: string;
  facebook: string;
}

// Propriedades para botões
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
}

// Propriedades para títulos de seção
export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

// Propriedades para container
export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}