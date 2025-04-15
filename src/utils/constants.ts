// Dados de navegação
export const NAVIGATION = [
  { label: 'Início', href: '#home' },
  { label: 'Serviços', href: '#services' },
  { label: 'Sobre', href: '#about' },
  { label: 'Galeria', href: '#gallery' },
  { label: 'Depoimentos', href: '#testimonials' },
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
    title: 'Coloração Personalizada',
    description: 'Técnicas modernas de coloração que combinam perfeitamente com seu tom de pele e personalidade.',
    icon: 'palette',
    featured: false,
  },
  {
    id: 3,
    title: 'Cortes Estilizados',
    description: 'Cortes modernos e precisos que valorizam o formato do seu rosto e expressam seu estilo único.',
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
    description: 'Diversos estilos de tranças afro, box braids, e outros estilos étnicos com técnicas avançadas.',
    icon: 'stars',
    featured: true,
  },
  {
    id: 6,
    title: 'Penteados para Eventos',
    description: 'Penteados sofisticados para eventos especiais, festas, formaturas e ocasiões formais.',
    icon: 'calendar',
    featured: false,
  },
];

// Depoimentos de clientes
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Mariana Silva',
    text: 'As tranças que a Andreia fez para o meu casamento foram simplesmente perfeitas! Recebi elogios de todos os convidados e as fotos ficaram maravilhosas.',
    rating: 5,
    image: '/images/testimonials/client1.jpg', // Substituir pela imagem real
  },
  {
    id: 2,
    name: 'Carolina Mendes',
    text: 'Profissional incrível! Entendeu exatamente o que eu queria e ainda sugeriu detalhes que fizeram toda a diferença no meu penteado de noiva.',
    rating: 5,
    image: '/images/testimonials/client2.jpg',
  },
  {
    id: 3,
    name: 'Sofia Rodrigues',
    text: 'A Andreia transformou meu cabelo para o dia mais importante da minha vida. Além de talentosa, é extremamente atenciosa e carinhosa.',
    rating: 5,
    image: '/images/testimonials/client3.jpg',
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
  // Adicionar mais imagens quando tiver as reais
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