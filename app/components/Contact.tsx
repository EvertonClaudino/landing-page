'use client';
import { useState } from 'react';
// Fixed: Removed Phone and Mail which were not exported from './Logo', and removed unused Logo import.
import { Phone as PhoneIcon, Mail as MailIcon } from 'lucide-react';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Orçamento enviado! Entraremos em contato em breve.");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 bg-[#0F172A] overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-6xl font-black mb-8 leading-none">VAMOS <span className="text-[#FFC107]">OBRAR?</span></h2>
            <p className="text-xl text-slate-400 mb-12">
              Evite dores de cabeça, desperdício de material e atrasos. Agende agora uma visita técnica com o Ademario Oliveira e receba um orçamento profissional e transparente.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 border border-white/20 flex items-center justify-center shrink-0">
                  <PhoneIcon className="w-6 h-6 text-[#FFC107]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Ligue Agora</p>
                  <p className="text-xl font-black">(11) 99999-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 border border-white/20 flex items-center justify-center shrink-0">
                  <MailIcon className="w-6 h-6 text-[#FFC107]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">E-mail Técnico</p>
                  <p className="text-xl font-black">obras@ademario.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white p-10 rounded-sm">
              <h3 className="text-2xl font-black text-black mb-8 uppercase tracking-tighter">Orçamento Detalhado</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  required
                  placeholder="Nome ou Empresa"
                  className="w-full bg-slate-100 border-b-2 border-slate-200 px-4 py-4 focus:outline-none focus:border-black transition-all text-black"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="email" 
                    required
                    placeholder="E-mail"
                    className="w-full bg-slate-100 border-b-2 border-slate-200 px-4 py-4 focus:outline-none focus:border-black transition-all text-black"
                  />
                  <input 
                    type="tel" 
                    required
                    placeholder="WhatsApp"
                    className="w-full bg-slate-100 border-b-2 border-slate-200 px-4 py-4 focus:outline-none focus:border-black transition-all text-black"
                  />
                </div>
                <select className="w-full bg-slate-100 border-b-2 border-slate-200 px-4 py-4 focus:outline-none focus:border-black transition-all text-black">
                  <option>Reforma Residencial</option>
                  <option>Construção do Zero</option>
                  <option>Consultoria Estrutural</option>
                  <option>Gestão de Obra Corporativa</option>
                </select>
                <textarea 
                  placeholder="Descreva brevemente sua obra (m², localização, prazos)..."
                  className="w-full bg-slate-100 border-b-2 border-slate-200 px-4 py-4 h-32 focus:outline-none focus:border-black transition-all text-black"
                />
                <button 
                  disabled={isSubmitting}
                  className="w-full bg-black text-white font-black uppercase tracking-[0.2em] py-5 hover:bg-slate-800 transition-all shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Solicitação Técnica'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};