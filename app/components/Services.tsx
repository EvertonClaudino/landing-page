
import { Hammer, HardHat, Ruler, ClipboardCheck, ArrowRight, UserCheck } from 'lucide-react';

const services = [
  {
    title: "Crédito para Negativados",
    description: "Nosso serviço exclusivo: Limpamos seu nome e regularizamos seu CPF para viabilizar o financiamento e construção da sua casa.",
    icon: UserCheck,
    highlight: true
  },
  {
    title: "Reformas de Alto Padrão",
    description: "Transformamos ambientes residenciais e comerciais com acabamentos finos e execução rigorosa.",
    icon: Hammer,
    highlight: false
  },
  {
    title: "Gestão de Obras",
    description: "Controle total de prazos, custos e fornecedores para que você não tenha preocupações no canteiro.",
    icon: HardHat,
    highlight: false
  },
  {
    title: "Projetos e Consultoria",
    description: "Viabilização técnica e projetos estruturais focados em eficiência e segurança para sua edificação.",
    icon: Ruler,
    highlight: false
  }
];

export const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 text-center mb-16">
        <p className="text-[#FFC107] font-bold uppercase tracking-[0.3em] text-xs mb-4">Soluções em Engenharia</p>
        <h2 className="text-4xl font-black mb-4 uppercase">Nossas Soluções</h2>
        <div className="w-24 h-1 bg-[#FFC107] mx-auto"></div>
      </div>
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div key={i} className={`p-10 border transition-all group ${s.highlight ? 'bg-[#FFC107] border-[#FFC107] text-black' : 'bg-white/5 border-white/10 hover:border-[#FFC107]'}`}>
            <div className={`w-14 h-14 flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform ${s.highlight ? 'bg-black text-[#FFC107]' : 'bg-[#FFC107] text-black'}`}>
              <s.icon className="w-7 h-7" />
            </div>
            <h3 className={`text-xl font-black mb-4 uppercase tracking-tighter ${s.highlight ? 'text-black' : 'text-white'}`}>{s.title}</h3>
            <p className={`text-sm leading-relaxed mb-8 ${s.highlight ? 'text-black/70 font-medium' : 'text-slate-400'}`}>{s.description}</p>
            <a href="#credito" className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${s.highlight ? 'text-black' : 'text-[#FFC107]'}`}>
              {s.highlight ? 'Como funciona' : 'Consultar Obra'} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
