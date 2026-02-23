
'use client';
import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Residência Alphaville",
    category: "Alto Padrão",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    description: "Reforma completa de interior e fachada com foco em sustentabilidade."
  },
  {
    title: "Edifício Skyview",
    category: "Corporativo",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    description: "Gestão estrutural e acabamentos em vidros refletivos."
  },
  {
    title: "Loja Conceito Jardins",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    description: "Execução rápida de projeto arquitetônico moderno."
  },
  {
    title: "Cobertura Ipanema",
    category: "Reforma de Luxo",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    description: "Integração de ambientes com automação residencial completa."
  },
  {
    title: "Casa de Campo Bragança",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?auto=format&fit=crop&q=80&w=800",
    description: "Construção em concreto aparente e madeira nobre."
  },
  {
    title: "Centro Logístico Barueri",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    description: "Pavimentação de alta resistência e vãos livres de 40 metros."
  }
];

export const Portfolio = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-black font-bold uppercase tracking-widest text-xs mb-12 hover:text-[#FFC107] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao Início
        </button>

        <div className="mb-16">
          <p className="text-[#FFC107] font-bold uppercase tracking-[0.3em] text-xs mb-4">Portfólio de Obras</p>
          <h2 className="text-5xl font-black text-black mb-6 uppercase">Projetos Executados</h2>
          <div className="w-24 h-2 bg-[#FFC107]"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group relative bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                />
              </div>
              <div className="p-8">
                <span className="text-[10px] font-bold text-[#FFC107] uppercase tracking-[0.2em] mb-2 block">{project.category}</span>
                <h3 className="text-xl font-black text-black mb-4 uppercase tracking-tighter">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{project.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <span className="text-[10px] font-black uppercase text-slate-400">Ver Detalhes</span>
                  <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-[#FFC107]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
