// utils/constants.ts
// Dados de navegação atualizados
export const NAVIGATION = [
  { label: 'Início', href: '#home' },
  { label: 'Serviços', href: '#services' },
  { label: 'Especialidades', href: '#expertise' },
  { label: 'Sobre', href: '#about' },
  { label: 'Galeria', href: '#gallery' },
  { label: 'Preços', href: '#pricing' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contact' },
];

// Informações de contacto
export const CONTACT_INFO = {
  phone: '+351 932 768 545',
  whatsapp: '+351932768545',
  email: 'andreia.regina@exemplo.pt', // Substituir pelo email real
  address: 'Lisboa, Portugal', // Substituir pelo endereço real
  instagram: '@andreia.regina.hair', // Substituir pelo Instagram real
  facebook: '/andreiareginahair', // Substituir pelo Facebook real
};

// Serviços oferecidos
export const SERVICES = [
  {
    id: 1,
    title: 'Tranças para Noivas',
    description: 'Penteados elegantes e sofisticados para o dia do seu casamento, personalizados conforme o seu vestido e estilo.',
    icon: 'crown', // Será substituído por um componente de ícone
    featured: true,
  },
  {
    id: 2,
    title: 'Box Braids',
    description: 'Tranças box tradicionais em diferentes espessuras e comprimentos, com opção de diversos estilos e cores.',
    icon: 'palette',
    featured: false,
  },
  {
    id: 3,
    title: 'Knotless Braids',
    description: 'Técnica moderna de tranças sem nós na raiz, proporcionando mais conforto e um resultado natural e elegante.',
    icon: 'scissors',
    featured: false,
  },
  {
    id: 4,
    title: 'Tratamentos Capilares',
    description: 'Tratamentos profundos de hidratação e reconstrução para cabelos danificados ou enfraquecidos.',
    icon: 'sparkles',
    featured: false,
  },
  {
    id: 5,
    title: 'Tranças Afro',
    description: 'Diversos estilos de tranças afro, fulani braids, e outros estilos étnicos com técnicas avançadas.',
    icon: 'stars',
    featured: true,
  },
  {
    id: 6,
    title: 'Aulas Particulares',
    description: 'Aprenda técnicas exclusivas de tranças com aulas personalizadas para iniciantes e profissionais.',
    icon: 'calendar',
    featured: false,
  },
];

// Depoimentos de clientes
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Mariana Silva',
    text: 'As tranças que a Andreia fez para o meu casamento foram simplesmente perfeitas! Recebi elogios de todos os convidados e as fotos ficaram maravilhosas. Ela entendeu exatamente o que eu queria e ainda sugeriu detalhes que fizeram toda a diferença.',
    rating: 5,
    image: '/images/testimonials/client1.jpg', // Substituir pela imagem real
  },
  {
    id: 2,
    name: 'Carolina Mendes',
    text: 'Profissional incrível! Minha experiência com box braids nunca foi tão boa. Andreia é meticulosa, cuidadosa e as tranças duraram mais de 2 meses com uma aparência impecável. Recomendo a todas as amigas!',
    rating: 5,
    image: '/images/testimonials/client2.jpg',
  },
  {
    id: 3,
    name: 'Sofia Rodrigues',
    text: 'A Andreia transformou meu cabelo para o dia mais importante da minha vida. Além de talentosa, é extremamente atenciosa e carinhosa. Um diferencial é que ela também me ensinou como fazer a manutenção correta das tranças em casa.',
    rating: 5,
    image: '/images/testimonials/client3.jpg',
  },
  {
    id: 4,
    name: 'Beatriz Costa',
    text: 'As aulas particulares de tranças com a Andreia foram transformadoras para minha carreira. Sua técnica exclusiva e atenção aos detalhes fizeram toda diferença. Hoje atendo minhas próprias clientes com muito mais confiança.',
    rating: 5,
    image: '/images/testimonials/client4.jpg',
  },
];

// Galeria de imagens
export const GALLERY_IMAGES = [
  {
    id: 1,
    src: '/images/gallery/placeholder-1.jpg',
    alt: 'Penteado de noiva com trança elegante',
    category: 'noivas',
  },
  {
    id: 2,
    src: '/images/gallery/placeholder-2.jpg',
    alt: 'Trança afro estilizada',
    category: 'tranças',
  },
  {
    id: 3,
    src: '/images/gallery/placeholder-3.jpg',
    alt: 'Penteado para festa com detalhes dourados',
    category: 'eventos',
  },
  {
    id: 4,
    src: '/images/gallery/placeholder-4.jpg',
    alt: 'Box braids com fios coloridos',
    category: 'tranças',
  },
  {
    id: 5,
    src: '/images/gallery/placeholder-5.jpg',
    alt: 'Tranças para casamento na praia',
    category: 'noivas',
  },
  {
    id: 6,
    src: '/images/gallery/placeholder-6.jpg',
    alt: 'Knotless braids com decoração',
    category: 'tranças',
  },
];

// Perguntas frequentes
export const FAQS = [
  {
    question: 'Com quanto tempo de antecedência devo agendar para o dia do casamento?',
    answer: 'Recomendamos agendar com pelo menos 2-3 meses de antecedência, especialmente para datas na alta temporada de casamentos.',
  },
  {
    question: 'Fazem teste do penteado antes do casamento?',
    answer: 'Sim, oferecemos sessões de teste para noivas para garantir que o penteado escolhido é perfeito para o grande dia.',
  },
  {
    question: 'Atende a domicílio para noivas?',
    answer: 'Sim, oferecemos serviço de atendimento no local de sua preferência para o dia do casamento.',
  },
];