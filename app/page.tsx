
'use client';
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { Portfolio } from './components/Portifolio';
import { CreditProgram } from './components/CreditProgram';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'portfolio'>('home');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBudgetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Pedido de orçamento enviado com sucesso! Aguarde o contato do Ademario.");
      setIsSubmitting(false);
      setIsModalOpen(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden font-['Inter']">
      <Header 
        onOpenBudget={() => setIsModalOpen(true)} 
        onGoHome={() => setCurrentView('home')} 
      />
      
      {currentView === 'home' ? (
        <main>
          <Hero 
            onOpenBudget={() => setIsModalOpen(true)} 
            onViewPortfolio={() => {
              setCurrentView('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
          <StatsBar />
          <CreditProgram onOpenBudget={() => setIsModalOpen(true)} />
          <Services />
          <About />
          <Testimonials />
          <Contact />
        </main>
      ) : (
        <Portfolio onBack={() => setCurrentView('home')} />
      )}
      

      {/* Modal de Orçamento */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Solicitar Orçamento Gratuito"
      >
        <form onSubmit={handleBudgetSubmit} className="space-y-6 text-left">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Seu Nome</label>
              <input 
                type="text" 
                required 
                className="w-full bg-slate-50 border-b-2 border-slate-200 p-4 focus:outline-none focus:border-black transition-all text-black"
                placeholder="Ex: João Silva"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">WhatsApp</label>
              <input 
                type="tel" 
                required 
                className="w-full bg-slate-50 border-b-2 border-slate-200 p-4 focus:outline-none focus:border-black transition-all text-black"
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Situação de Crédito</label>
            <select className="w-full bg-slate-50 border-b-2 border-slate-200 p-4 focus:outline-none focus:border-black transition-all text-black font-bold">
              <option>Crédito Regular (Limpo)</option>
              <option>Crédito Negativado (Preciso de Ajuda)</option>
              <option>Autônomo sem comprovação</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Tipo de Obra</label>
            <select className="w-full bg-slate-50 border-b-2 border-slate-200 p-4 focus:outline-none focus:border-black transition-all text-black">
              <option>Construção do Zero (Terreno Próprio)</option>
              <option>Construção + Compra de Terreno</option>
              <option>Reforma Residencial</option>
              <option>Projeto Corporativo</option>
            </select>
          </div>
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#FFC107] text-black font-black uppercase tracking-widest py-6 hover:bg-yellow-400 transition-all shadow-xl disabled:opacity-50"
          >
            {isSubmitting ? 'Enviando...' : 'Falar com Consultor de Crédito'}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default App;
