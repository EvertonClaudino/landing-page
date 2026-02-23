
'use client';
import { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenBudget?: () => void;
  onGoHome?: () => void;
}

export const Header = ({ onOpenBudget, onGoHome }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
      setIsMobileMenuOpen(false);
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Atualiza a URL sem pular
      window.history.pushState(null, '', href);
    }
  };

  const navLinks = [
    { label: 'O Programa', href: '#credito' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Empresa', href: '#sobre' },
    { label: 'Obras', href: '#depoimentos' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4 cursor-pointer" onClick={onGoHome}>
          <Logo className="w-12 h-12" />
          <div className="leading-tight">
            <span className="block text-xl font-extrabold tracking-tighter text-white uppercase">
              Ademario <span className="text-[#FFC107]">Oliveira</span>
            </span>
            <span className="block text-[10px] tracking-[0.2em] text-slate-400 uppercase font-bold">
              Construção Civil
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a 
            key={link.label} 
            href={link.href} className="text-slate-300 hover:text-[#FFC107] transition-colors font-medium text-sm"
            onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <button 
            onClick={onOpenBudget}
            className="bg-[#FFC107] text-black px-6 py-2.5 rounded-sm hover:bg-yellow-400 transition-all font-bold uppercase text-[10px] tracking-widest shadow-lg"
          >
            Solicitar Orçamento
          </button>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button 
          className="md:hidden p-2 text-white hover:text-[#FFC107] transition-colors"
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-black z-40 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-8 gap-6 h-full border-t border-white/10">
            {navLinks.map(link => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-2xl font-black text-white uppercase tracking-tighter hover:text-[#FFC107]"
                onClick={(e) => scrollToSection(e, link.href)}
                
              >
                {link.label}
              </a>
            ))}
            <div className="mt-auto pb-12">
              <button 
                onClick={() => {
                  onOpenBudget?.();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-[#FFC107] text-black py-6 rounded-sm font-black uppercase tracking-widest shadow-xl text-lg"
              >
                Solicitar Orçamento
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
