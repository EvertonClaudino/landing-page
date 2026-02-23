
'use client';
import React from 'react';
import { ShieldAlert, UserCheck, Construction, ArrowRight, CheckCircle, Landmark, FileSearch } from 'lucide-react';

export const CreditProgram = ({ onOpenBudget }: { onOpenBudget: () => void }) => {
  return (
    <section id="credito" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFC107]/5 -skew-x-12 transform translate-x-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFC107]/10 border border-[#FFC107]/20 rounded-full mb-6">
             <div className="w-2 h-2 bg-[#FFC107] rounded-full"></div>
             <span className="text-[#FFC107] font-bold uppercase tracking-[0.2em] text-[10px]">Líder em Regularização Imobiliária</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-none">
            Está Negativado? <br/> <span className="text-[#FFC107]">Limpamos seu nome</span> e financiamos sua obra!
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Não é apenas sobre construir, é sobre viabilizar. Somos especialistas em <strong>Automatização da Caixa</strong> e <strong>Projetos de Financiamento</strong> para quem o mercado disse "não".
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {/* Passo 1 */}
          <div className="bg-white/5 border border-white/10 p-8 group hover:border-[#FFC107] transition-all">
            <div className="w-12 h-12 bg-[#FFC107] text-black mb-6 flex items-center justify-center">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white mb-2 uppercase">Diagnóstico</h3>
            <p className="text-slate-500 text-xs leading-relaxed">Avaliação completa do seu CPF e histórico de crédito.</p>
          </div>

          {/* Passo 2 */}
          <div className="bg-white/5 border border-white/10 p-8 group hover:border-[#FFC107] transition-all">
            <div className="w-12 h-12 bg-[#FFC107] text-black mb-6 flex items-center justify-center">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white mb-2 uppercase">Limpeza</h3>
            <p className="text-slate-500 text-xs leading-relaxed">Regularização jurídica e remoção de restrições em tempo recorde.</p>
          </div>

          {/* Passo 3 */}
          <div className="bg-white/5 border border-white/10 p-8 group hover:border-[#FFC107] transition-all">
            <div className="w-12 h-12 bg-[#FFC107] text-black mb-6 flex items-center justify-center">
              <Landmark className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white mb-2 uppercase">Financiamento</h3>
            <p className="text-slate-500 text-xs leading-relaxed">Montagem do processo para a Caixa com foco em aprovação máxima.</p>
          </div>

          {/* Passo 4 */}
          <div className="bg-white/5 border border-white/10 p-8 group hover:border-[#FFC107] transition-all">
            <div className="w-12 h-12 bg-[#FFC107] text-black mb-6 flex items-center justify-center">
              <Construction className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white mb-2 uppercase">Obra</h3>
            <p className="text-slate-500 text-xs leading-relaxed">Início imediato da construção com acompanhamento documental.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-[#FFC107] p-1 shadow-2xl">
           <div className="w-full md:w-1/2 p-10 bg-black text-white">
              <div className="flex items-center gap-2 mb-4">
                 <FileSearch className="w-6 h-6 text-[#FFC107]" />
                 <h4 className="font-black uppercase tracking-widest text-sm">Consultoria Documental</h4>
              </div>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Muitos param na papelada. Nós cuidamos do <strong>Licenciamento</strong>, <strong>Planta da Casa</strong> e do <strong>Projeto de Financiamento</strong> completo para você não ter stress.
              </p>
              <ul className="space-y-2">
                 {['Regularização de Terreno', 'Alvará de Construção', 'Planta Baixa Aprovada', 'Acompanhamento Caixa'].map((item, i) => (
                   <li key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                      <CheckCircle className="w-3 h-3 text-[#FFC107]" /> {item}
                   </li>
                 ))}
              </ul>
           </div>
           <div className="w-full md:w-1/2 p-10 text-center md:text-left">
              <h4 className="text-black text-3xl font-black uppercase leading-none mb-4">Pronto para dar o primeiro passo?</h4>
              <p className="text-black/70 text-sm font-bold mb-8">Saia da estagnação e comece a ver as paredes subirem.</p>
              <button 
                onClick={onOpenBudget}
                className="w-full bg-black text-[#FFC107] font-black uppercase tracking-widest py-5 hover:bg-slate-800 transition-all flex items-center justify-center gap-3"
              >
                Falar com Especialista <ArrowRight className="w-5 h-5" />
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};
