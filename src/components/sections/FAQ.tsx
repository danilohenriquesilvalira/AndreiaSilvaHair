// components/sections/FAQ.tsx
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

// Categorias e perguntas
const faqCategories = [
  {
    id: 'general',
    name: 'Geral',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'bridal',
    name: 'Noivas',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    id: 'braids',
    name: 'Tranças',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 'prices',
    name: 'Preços',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'classes',
    name: 'Aulas',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  }
];

// Perguntas por categoria
const faqQuestions = {
  general: [
    {
      question: "Qual a experiência da Andreia Regina?",
      answer: "Andreia Regina tem mais de 25 anos de experiência como especialista em cabelo, com foco em tranças e penteados para noivas. Ela trabalhou tanto no Brasil quanto em Portugal, atendendo centenas de clientes e desenvolvendo técnicas exclusivas que combinam tradição e modernidade."
    },
    {
      question: "Onde está localizado o atendimento?",
      answer: "O atendimento é realizado em nosso estúdio em Lisboa, Portugal. Para noivas e eventos especiais, também oferecemos serviço a domicílio mediante agendamento prévio e taxa adicional dependendo da localização."
    },
    {
      question: "É necessário marcar horário com antecedência?",
      answer: "Sim, recomendamos agendar seu horário com pelo menos 48 horas de antecedência para garantir disponibilidade. Para noivas, o ideal é agendar com 2-3 meses antes da data do casamento, especialmente em temporada alta de casamentos."
    }
  ],
  bridal: [
    {
      question: "Quanto tempo antes do casamento devo fazer o teste do penteado?",
      answer: "O ideal é realizar o teste do penteado entre 3 e 4 semanas antes do casamento. Isso dá tempo suficiente para fazer ajustes se necessário, mas não tão distante que você esqueça como o penteado ficou. Durante a sessão de teste, recomendamos trazer fotos de referência, acessórios que deseja incorporar, e idealmente usar uma peça de roupa com decote similar ao do vestido."
    },
    {
      question: "Vocês atendem no dia do casamento no local do evento?",
      answer: "Sim, oferecemos serviço de atendimento no local para o dia do casamento. Este serviço inclui o deslocamento da Andreia Regina e de sua equipe para o local de sua preferência, seja hotel, salão ou residência. Há uma taxa adicional para este serviço que varia de acordo com a distância e horário."
    },
    {
      question: "O pacote para noivas inclui maquiagem?",
      answer: "Nosso foco principal são os penteados e tranças, mas trabalhamos em parceria com excelentes maquiadoras profissionais. Podemos organizar um pacote combinado que inclui tanto o penteado quanto a maquiagem para garantir uma aparência harmoniosa e coerente para seu grande dia."
    }
  ],
  braids: [
    {
      question: "Quanto tempo duram as box braids?",
      answer: "Com os cuidados adequados, as box braids podem durar entre 6 a 8 semanas. A durabilidade depende de fatores como seu tipo de cabelo, estilo de vida, e os cuidados que você dedica às tranças. Oferecemos um guia completo de manutenção após o serviço para maximizar a durabilidade."
    },
    {
      question: "As tranças danificam o cabelo?",
      answer: "Quando feitas corretamente por profissionais qualificados como nossa equipe, as tranças não danificam o cabelo. Na verdade, elas funcionam como um estilo protetor. O dano ocorre quando as tranças são feitas muito apertadas, são muito pesadas ou quando permanecem por tempo excessivo. Nossa abordagem prioriza a saúde do seu cabelo natural enquanto cria estilos bonitos."
    },
    {
      question: "Quais tipos de tranças vocês oferecem?",
      answer: "Oferecemos uma ampla variedade de estilos de tranças, incluindo: Box Braids (tradicional e knotless), Fulani Braids, Goddess Braids, Passion Twists, Cornrows, Feed-in Braids, Flat Twists, Tranças Holandesas e Francesas, bem como criações personalizadas que combinam diferentes técnicas de acordo com seu desejo."
    },
    {
      question: "Preciso trazer o cabelo para extensão?",
      answer: "Não é necessário. Temos disponível uma ampla variedade de cabelos sintéticos e naturais para extensão em diversas cores, texturas e comprimentos. Se você tiver uma preferência específica por uma marca ou tipo de cabelo, fique à vontade para trazer. Cobramos separadamente pelo material utilizado."
    }
  ],
  prices: [
    {
      question: "Quais são os métodos de pagamento aceitos?",
      answer: "Aceitamos pagamentos em dinheiro, cartões de débito e crédito, transferência bancária e MB Way. Para reservas de data, especialmente para noivas, solicitamos um depósito de 30% do valor total no momento do agendamento, que é descontado do valor final do serviço."
    },
    {
      question: "Existe alguma política de cancelamento?",
      answer: "Para cancelamentos com mais de 48 horas de antecedência, o valor do depósito pode ser utilizado para reagendamento dentro de 30 dias. Cancelamentos com menos de 24 horas ou não comparecimento estão sujeitos à perda do depósito ou cobrança de taxa de 30% do valor do serviço."
    },
    {
      question: "Os preços incluem produtos para manutenção?",
      answer: "Os preços base não incluem produtos para manutenção em casa, mas oferecemos kits especiais com desconto quando adquiridos junto com o serviço. O pacote premium de tranças inclui um kit básico de manutenção, e o pacote para noivas inclui todos os produtos necessários."
    }
  ],
  classes: [
    {
      question: "Como funcionam as aulas particulares de tranças?",
      answer: "As aulas particulares são personalizadas de acordo com seu nível de habilidade e objetivos específicos. Oferecemos módulos de 2 horas onde você aprenderá técnicas específicas com prática supervisionada. Fornecemos todos os materiais necessários e você receberá um certificado ao completar o curso completo de técnicas."
    },
    {
      question: "Vocês oferecem aulas para iniciantes?",
      answer: "Sim, temos módulos específicos para iniciantes que nunca trabalharam com tranças antes. Começamos com técnicas básicas de divisão do cabelo, tensão adequada, e progressivamente avançamos para estilos mais complexos à medida que você ganha confiança e habilidade."
    },
    {
      question: "Existe a opção de aulas em grupo?",
      answer: "Sim, organizamos workshops mensais em grupo com temas específicos, como 'Tranças para Iniciantes', 'Técnicas Avançadas de Box Braids', 'Estilos para Crianças', entre outros. Estes workshops têm preços mais acessíveis que as aulas particulares e são uma ótima oportunidade para aprender enquanto conhece outras pessoas interessadas."
    }
  ]
};

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{category: string, index: number, question: string, answer: string}[]>([]);
  
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Alternar pergunta expandida
  const toggleQuestion = (index: number) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  // Busca nas perguntas
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const results: {category: string, index: number, question: string, answer: string}[] = [];
    
    Object.entries(faqQuestions).forEach(([category, questions]) => {
      questions.forEach((q, index) => {
        if (
          q.question.toLowerCase().includes(query.toLowerCase()) ||
          q.answer.toLowerCase().includes(query.toLowerCase())
        ) {
          results.push({
            category,
            index,
            question: q.question,
            answer: q.answer
          });
        }
      });
    });
    
    setSearchResults(results);
  };

  // Limpar busca
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  // Ir para uma pergunta específica
  const goToQuestion = (category: string, index: number) => {
    setActiveCategory(category);
    setExpandedQuestion(index);
    clearSearch();
  };

  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#7c3aed]/10 blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#7c3aed]/10 blur-3xl opacity-30"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            title="Perguntas Frequentes"
            subtitle="Tudo o que você precisa saber sobre nossos serviços, processos e políticas"
            centered={true}
          />
        </motion.div>

        {/* Barra de pesquisa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Digite sua dúvida..."
              className="w-full bg-muted border border-white/10 rounded-lg py-3 pl-12 pr-10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent transition-all"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Resultados da pesquisa */}
          {searchResults.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-4 bg-muted rounded-lg border border-white/10 max-h-64 overflow-y-auto"
            >
              <div className="p-4">
                <h3 className="text-sm font-medium text-white/60 mb-2">
                  {searchResults.length} {searchResults.length === 1 ? 'resultado' : 'resultados'} encontrados
                </h3>
                
                <div className="space-y-3">
                  {searchResults.map((result, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToQuestion(result.category, result.index)}
                      className="block w-full text-left p-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="w-6 h-6 rounded-full bg-[#7c3aed]/20 text-[#a78bfa] text-xs flex items-center justify-center mr-2">
                          {faqCategories.find(c => c.id === result.category)?.id.charAt(0).toUpperCase()}
                        </span>
                        <span className="text-white font-medium">{result.question}</span>
                      </div>
                      <p className="text-white/60 text-sm mt-1 line-clamp-1">
                        {result.answer}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navegação lateral */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="glass-effect rounded-xl p-5">
              <h3 className="text-lg font-semibold mb-4 text-white">Categorias</h3>
              <nav className="space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                      activeCategory === category.id 
                        ? 'bg-[#7c3aed] text-white' 
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="mr-3">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="mt-8 p-5 glass-effect rounded-xl">
              <h3 className="text-lg font-semibold mb-4 text-white">Ainda com dúvidas?</h3>
              <p className="text-white/70 text-sm mb-4">
                Não encontrou o que procurava? Entre em contato conosco para um atendimento personalizado.
              </p>
              <Button 
                href="#contact" 
                variant="secondary"
                className="w-full"
              >
                Fale Conosco
              </Button>
            </div>
          </motion.div>

          {/* Perguntas e respostas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4">
                  {faqQuestions[activeCategory as keyof typeof faqQuestions].map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                        expandedQuestion === index 
                          ? 'border-[#7c3aed]/50 shadow-lg shadow-[#7c3aed]/5' 
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    >
                      <button
                        onClick={() => toggleQuestion(index)}
                        className="flex justify-between items-center w-full p-5 text-left bg-muted"
                      >
                        <span className="font-medium text-white pr-6">{faq.question}</span>
                        <span className={`transition-transform duration-300 ${expandedQuestion === index ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5 text-[#a78bfa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                      
                      <AnimatePresence>
                        {expandedQuestion === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="p-5 bg-background/50 text-white/80 border-t border-white/10">
                              <p>{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Banner de contato */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-[#7c3aed]/20 to-[#8b5cf6]/20 rounded-2xl p-8 text-center relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#7c3aed]/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#8b5cf6]/30 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
              Pronta para transformar seu visual?
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-6 relative z-10">
              Entre em contato para uma consulta personalizada e descubra como podemos realizar o penteado dos seus sonhos.
            </p>
            <Button 
              href="#contact" 
              variant="secondary"
              size="lg"
              className="relative z-10 lilac-shadow"
            >
              Agendar Consulta
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FAQ;