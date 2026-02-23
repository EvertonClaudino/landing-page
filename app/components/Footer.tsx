
import { Star, ShieldCheck, Instagram } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 cursor-pointer">
          <Logo className="w-12 h-12" />
          <div className="leading-tight">
            <span className="block text-xl font-extrabold tracking-tighter text-white uppercase">
              Ademario <span className="text-[#FFC107]">Oliveira</span>
            </span>
            <span className="block text-[10px] tracking-[0.2em] text-slate-400 uppercase font-extrabold">
              Construção Civil
            </span>
          </div>
        </div>
          <p className="text-sm text-slate-400 font-medium">
            © {new Date().getFullYear()} Ademario Oliveira Construção Civil. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-slate-400">
            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
                <Instagram className="w-5 h-5" />
             </div>
             <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
                <Star className="w-5 h-5" />
             </div>
             <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
                <ShieldCheck className="w-5 h-5" />
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
