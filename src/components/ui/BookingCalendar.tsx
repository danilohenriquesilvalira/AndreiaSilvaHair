// components/ui/BookingCalendar.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface BookingCalendarProps {
  onClose: () => void;
  onSubmit: (data: BookingData) => void;
}

interface BookingData {
  date: Date;
  time: string;
  service: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

// Gerando datas para os próximos 30 dias
const generateDates = (): Date[] => {
  const dates: Date[] = [];
  const today = new Date();
  
  for (let i = 1; i <= 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date);
  }
  
  return dates;
};

// Gerando slots de horário exemplo (no futuro viriam do backend)
const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const startHour = 9;
  const endHour = 18;
  
  for (let hour = startHour; hour <= endHour; hour++) {
    // Horários às horas em ponto
    slots.push({
      time: `${hour}:00`,
      available: Math.random() > 0.3 // Simulando disponibilidade aleatória
    });
    
    // Horários às meias horas (exceto horário de almoço)
    if (hour !== 13 && hour < endHour) {
      slots.push({
        time: `${hour}:30`,
        available: Math.random() > 0.3
      });
    }
  }
  
  return slots;
};

const servicesOptions = [
  'Tranças para Noivas',
  'Box Braids',
  'Knotless Braids',
  'Tratamentos Capilares',
  'Tranças Afro',
  'Aulas Particulares',
  'Penteado para Evento',
  'Consulta Inicial'
];

const BookingCalendar: React.FC<BookingCalendarProps> = ({ onClose, onSubmit }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const dates = generateDates();
  const timeSlots = generateTimeSlots();
  
  // Manipuladores
  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };
  
  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };
  
  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(e.target.value);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleNextStep = () => {
    if (step === 1 && selectedDate && selectedTime && selectedService) {
      setStep(2);
    } else if (step === 2 && formData.name && formData.phone && formData.email) {
      handleSubmit();
    }
  };
  
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const handleSubmit = () => {
    if (selectedDate && selectedTime && selectedService) {
      setIsSubmitting(true);
      
      // Simulando envio para API
      setTimeout(() => {
        onSubmit({
          date: selectedDate,
          time: selectedTime,
          service: selectedService,
          ...formData
        });
        setIsSubmitting(false);
      }, 1500);
    }
  };
  
  // Formatar data para exibição
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('pt-PT', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  };
  
  // Verificar se a data é um fim de semana
  const isWeekend = (date: Date): boolean => {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 é domingo, 6 é sábado
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">
            {step === 1 ? 'Agendar Consulta' : 'Seus Dados'}
          </h2>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Indicador de progresso */}
        <div className="px-6 pt-4">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 1 ? 'bg-[#7c3aed] text-white' : 'bg-white/10 text-white/60'
            }`}>
              1
            </div>
            <div className={`flex-1 h-1 mx-2 ${
              step >= 2 ? 'bg-[#7c3aed]' : 'bg-white/10'
            }`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 2 ? 'bg-[#7c3aed] text-white' : 'bg-white/10 text-white/60'
            }`}>
              2
            </div>
            <div className="flex-1 h-1 mx-2 bg-white/10"></div>
            <div className="w-8 h-8 rounded-full bg-white/10 text-white/60 flex items-center justify-center">
              3
            </div>
          </div>
          <div className="flex justify-between mt-1 text-xs text-white/60">
            <span>Selecionar data</span>
            <span>Seus dados</span>
            <span>Confirmação</span>
          </div>
        </div>
        
        {/* Conteúdo do formulário */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Seleção de serviço */}
                <div className="mb-6">
                  <label className="block text-white/80 mb-2">
                    Serviço Desejado <span className="text-[#a78bfa]">*</span>
                  </label>
                  <select
                    value={selectedService}
                    onChange={handleServiceChange}
                    className="w-full bg-muted border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#7c3aed] transition-colors"
                    required
                  >
                    <option value="">Selecione um serviço</option>
                    {servicesOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Seletor de data */}
                <div className="mb-6">
                  <label className="block text-white/80 mb-2">
                    Data <span className="text-[#a78bfa]">*</span>
                  </label>
                  <div className="flex overflow-x-auto pb-3 space-x-2 scrollbar-thin scrollbar-thumb-[#7c3aed]/50 scrollbar-track-white/5">
                    {dates.map((date) => (
                      <button
                        key={date.toISOString()}
                        onClick={() => handleDateClick(date)}
                        className={`
                          flex-shrink-0 p-3 rounded-lg text-center transition-colors min-w-[80px]
                          ${selectedDate && date.toDateString() === selectedDate.toDateString() 
                            ? 'bg-[#7c3aed] text-white' 
                            : isWeekend(date) 
                              ? 'bg-[#7c3aed]/20 text-[#a78bfa]' 
                              : 'bg-white/5 text-white/80 hover:bg-white/10'
                          }
                        `}
                      >
                        <div className="text-xs uppercase">{date.toLocaleDateString('pt-PT', { weekday: 'short' })}</div>
                        <div className="text-lg font-bold">{date.getDate()}</div>
                        <div className="text-xs">{date.toLocaleDateString('pt-PT', { month: 'short' })}</div>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Seletor de horário */}
                {selectedDate && (
                  <div className="mb-6">
                    <label className="block text-white/80 mb-2">
                      Horário <span className="text-[#a78bfa]">*</span>
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.time}
                          onClick={() => slot.available && handleTimeClick(slot.time)}
                          disabled={!slot.available}
                          className={`
                            p-2 rounded-lg text-center transition-colors
                            ${selectedTime === slot.time 
                              ? 'bg-[#7c3aed] text-white' 
                              : slot.available 
                                ? 'bg-white/5 text-white/80 hover:bg-white/10' 
                                : 'bg-white/5 text-white/30 cursor-not-allowed'
                            }
                          `}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Resumo da seleção */}
                {selectedDate && selectedTime && selectedService && (
                  <div className="mt-8 p-4 bg-[#7c3aed]/10 rounded-lg">
                    <h3 className="text-lg font-medium text-white mb-2">Sua seleção:</h3>
                    <div className="grid grid-cols-3 gap-4 text-white/80">
                      <div>
                        <p className="text-xs text-white/60">Serviço</p>
                        <p>{selectedService}</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/60">Data</p>
                        <p>{formatDate(selectedDate)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/60">Horário</p>
                        <p>{selectedTime}</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Formulário de dados pessoais */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2">
                      Nome Completo <span className="text-[#a78bfa]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-muted border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#7c3aed] transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-white/80 mb-2">
                      Telefone <span className="text-[#a78bfa]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-muted border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#7c3aed] transition-colors"
                      placeholder="+351 900 000 000"
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <label htmlFor="email" className="block text-white/80 mb-2">
                    Email <span className="text-[#a78bfa]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-muted border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#7c3aed] transition-colors"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                
                <div className="mt-6">
                  <label htmlFor="notes" className="block text-white/80 mb-2">
                    Observações (opcional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-muted border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#7c3aed] transition-colors"
                    placeholder="Informações adicionais, necessidades específicas, etc."
                  ></textarea>
                </div>
                
                {/* Resumo da seleção */}
                <div className="mt-8 p-4 bg-[#7c3aed]/10 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">Detalhes do agendamento:</h3>
                  <div className="text-white/80">
                    <p><strong>Serviço:</strong> {selectedService}</p>
                    <p><strong>Data:</strong> {selectedDate && formatDate(selectedDate)}</p>
                    <p><strong>Horário:</strong> {selectedTime}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Botões de navegação */}
        <div className="px-6 py-4 border-t border-white/10 flex justify-between">
          {step > 1 ? (
            <Button 
              variant="outline" 
              onClick={handlePrevStep}
              disabled={isSubmitting}
            >
              Voltar
            </Button>
          ) : (
            <Button 
              variant="outline"
              onClick={onClose}
            >
              Cancelar
            </Button>
          )}
          
          <Button 
            variant="secondary"
            onClick={handleNextStep}
            disabled={
              (step === 1 && (!selectedDate || !selectedTime || !selectedService)) ||
              (step === 2 && (!formData.name || !formData.phone || !formData.email)) ||
              isSubmitting
            }
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processando...
              </span>
            ) : step === 1 ? 'Continuar' : 'Confirmar Agendamento'}
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookingCalendar;