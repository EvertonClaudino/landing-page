
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export const About = () => {
  return (
    <section id="sobre" className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-stretch gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative h-full min-h-[400px]">
              <Image
                src="/image/image.png"
                alt="Trabalho de Construção"
                width={800}
                height={400}
                className="rounded-sm shadow-2xl w-full h-md object-cover"
              />
              
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-8 left-8 bg-black text-white p-6 border-l-4 border-[#FFC107]">
                <p className="text-3xl font-black">15</p>
                <p className="text-[10px] uppercase tracking-widest">Anos no Trecho</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-black text-white mb-8 leading-tight">
              Mestre de Obras e Gestor: <span className="text-[#FFC107]">Ademario Oliveira</span>
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Minha trajetória na construção civil é pautada pelo respeito ao canteiro de obras e à engenharia de precisão. Como gestor, entendo que uma obra bem sucedida nasce na organização e morre no detalhe final.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Especialista em reformas de luxo e estruturas complexas, trago para seu projeto uma visão integrada que une economia de materiais à máxima durabilidade estrutural.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Cálculo Estrutural e Viabilidade",
                "Mão de Obra Qualificada",
                "Gestão de Resíduos (Obra Limpa)",
                "Segurança do Trabalho (EPI/EPC)"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FFC107] shrink-0" />
                  <span className="text-sm font-bold text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
