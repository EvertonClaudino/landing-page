import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBudget?: () => void;
  onViewPortfolio?: () => void;
}

export const Hero = ({ onOpenBudget, onViewPortfolio }: HeroProps) => {
  return (
    <section className="relative pt-28 pb-20 md:pt-28 md:pb-32 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000" 
          alt="Construção Moderna" 
          className="w-full h-full object-cover opacity-40 grayscale-[0.3]"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1 border border-[#FFC107] text-[#FFC107] text-xs font-bold uppercase tracking-[0.3em] mb-6">
            Excelência Técnica
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-8">
            CONSTRUÍMOS COM <span className="text-[#FFC107]">PRECISÃO</span>, ENTREGAMOS COM <span className="border-b-4 border-[#FFC107]">QUALIDADE</span>.
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl border-l-2 border-[#FFC107] pl-6">
            De reformas residenciais a grandes projetos estruturais. Ademario Oliveira oferece a segurança técnica que sua obra exige e o acabamento que seu sonho merece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onOpenBudget}
              className="bg-[#FFC107] text-black px-8 py-5 rounded-sm text-sm font-black uppercase tracking-widest hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 shadow-xl"
            >
              Solicitar Visita Técnica <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={onViewPortfolio}
              className="bg-transparent border-2 border-white/20 text-white px-8 py-5 rounded-sm text-sm font-black uppercase tracking-widest hover:border-[#FFC107] hover:text-[#FFC107] transition-all flex items-center justify-center"
            >
              Ver Portfólio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
