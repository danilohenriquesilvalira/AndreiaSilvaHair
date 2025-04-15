// components/sections/Pricing.tsx
import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

// Dados para preços
const pricingPlans = [
  {
    id: 'basic',
    name: 'Tranças Básicas',
    description: 'Tranças simples para o dia a dia com opções versáteis',
    price: '70',
    currency: '€',
    features: [
      'Consulta prévia',
      'Box braids de tamanho médio',
      'Tempo médio: 2-3 horas',
      'Até 2 cores',
      'Durabilidade de até 6 semanas',
      'Dicas de manutenção'
    ],
    popular: false,
    badge: null
  },
  {
    id: 'premium',
    name: 'Tranças Estilizadas',
    description: 'Tranças elaboradas para eventos e ocasiões especiais',
    price: '120',
    currency: '€',
    features: [
      'Consulta personalizada avançada',
      'Knotless braids ou box braids',
      'Tempo médio: 3-5 horas',
      'Até 3 cores à escolha',
      'Durabilidade de até 8 semanas',
      'Kit de manutenção básico',
      'Retoque gratuito após 1 semana'
    ],
    popular: true,
    badge: 'Mais Popular'
  },
  {
    id: 'bridal',
    name: 'Pacote Noivas',
    description: 'O pacote perfeito para o seu dia especial',
    price: '250',
    currency: '€',
    features: [
      'Consulta e teste prévio incluídos',
      'Penteado com tranças personalizadas',
      'Deslocamento no dia do evento',
      'Acessórios florais/cristais inclusos',
      'Retoques no dia do evento',
      'Suporte de emergência 24h',
      'Sessão fotográfica do processo'
    ],
    popular: false,
    badge: 'Exclusivo'
  }
];

// Serviços adicionais 
const additionalServices = [
  {
    name: 'Extensões de cabelo natural',
    price: '50+',
    description: 'Preço varia conforme comprimento e quantidade'
  },
  {
    name: 'Acessórios decorativos',
    price: '20+',
    description: 'Contas, argolas, fitas e enfeites especiais'
  },
  {
    name: 'Hidratação profunda',
    price: '35',
    description: 'Tratamento nutritivo antes da trança'
  },
  {
    name: 'Coloração temporária',
    price: '45',
    description: 'Cores vibrantes não permanentes'
  },
  {
    name: 'Aula particular',
    price: '80/h',
    description: 'Aprenda técnicas específicas de tranças'
  },
  {
    name: 'Atendimento ao domicílio',
    price: '30+',
    description: 'Taxa adicional conforme localização'
  }
];

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section 
      id="pricing" 
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#7c3aed]/10 blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#8b5cf6]/10 blur-3xl opacity-50 -z-10"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            title="Investimento no Seu Visual"
            subtitle="Tabela de valores transparente para os nossos principais serviços de tranças e penteados"
            centered={true}
          />
        </motion.div>

        {/* Cartões de preços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {pricingPlans.map((plan, index) => {
            const isSelected = selectedPlan === plan.id;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: isInView ? 1 : 0, 
                  y: isInView ? 0 : 30,
                  scale: isSelected ? 1.05 : 1
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.1 * index,
                  scale: { duration: 0.3 }
                }}
                onClick={() => setSelectedPlan(plan.id)}
                className={`
                  relative rounded-2xl overflow-hidden transition-all duration-300 
                  ${isSelected 
                    ? 'bg-gradient-to-b from-[#7c3aed]/20 to-background border-[#8b5cf6]/30 shadow-xl shadow-[#7c3aed]/20 border-2' 
                    : 'glass-effect border border-white/10 hover:border-[#7c3aed]/20'}
                  cursor-pointer
                `}
              >
                {/* Badge popular */}
                {plan.badge && (
                  <div className="absolute top-0 right-0">
                    <div className={`
                      px-4 py-1 text-xs font-semibold tracking-wider uppercase 
                      ${plan.popular 
                        ? 'bg-[#7c3aed] text-white' 
                        : 'bg-[#8b5cf6]/30 text-[#a78bfa]'}
                      rounded-bl-lg
                    `}>
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/70 text-sm mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-extrabold text-white">{plan.currency}{plan.price}</span>
                    {plan.id !== 'bridal' && <span className="text-white/60 ml-1">/ sessão</span>}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-[#7c3aed] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    href="#contact" 
                    variant={isSelected ? "secondary" : "outline"}
                    className="w-full"
                  >
                    {isSelected ? 'Agendar Agora' : 'Selecionar'}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Serviços adicionais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-white">
            Serviços Adicionais
          </h3>

          <div className="max-w-3xl mx-auto glass-effect rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  className="flex flex-col"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-white">{service.name}</h4>
                    <span className="text-[#a78bfa] font-bold">{service.price}€</span>
                  </div>
                  <p className="text-white/60 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Política de cancelamento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-4 text-white">
            Política de Agendamento
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Agendamentos devem ser feitos com pelo menos 48h de antecedência. Cancelamentos com menos de 24h 
            podem estar sujeitos a uma taxa de 30%. Todos os preços podem sofrer alterações dependendo da 
            complexidade do serviço. Entre em contato para uma avaliação personalizada.
          </p>
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 text-center"
        >
          <Button 
            href="#contact" 
            variant="secondary"
            size="lg"
            className="lilac-shadow"
          >
            Agendar Consulta
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Pricing;