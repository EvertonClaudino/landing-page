
const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Proprietário Residencial",
    content: "A reforma do meu apartamento foi entregue rigorosamente no prazo. O Ademario tem um olho clínico para detalhes de acabamento.",
    avatar: "https://picsum.photos/seed/build1/100/100"
  },
  {
    name: "Juliana Martins",
    role: "Arquiteta",
    content: "Trabalhar com o Ademario é garantia de que o projeto será executado exatamente como planejado. Confiança total na parte técnica.",
    avatar: "https://picsum.photos/seed/build2/100/100"
  },
  {
    name: "Sérgio Ramos",
    role: "Gestor Condominial",
    content: "Trabalhar com o Ademario é garantia de que o projeto será executado exatamente como planejado. Confiança total na parte técnica.",
    avatar: "https://picsum.photos/seed/build3/100/100"
  }
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-black">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
        {testimonials.map((t, i) => (
          <div key={i} className="relative pt-8">
            <div className="absolute top-0 left-0 text-6xl text-slate-300 font-serif leading-none">“</div>
            <p className="text-lg text-slate-300 mb-8 relative z-10 leading-relaxed italic">{t.content}</p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full grayscale border border-slate-200" />
              <div>
                <p className="font-bold text-sm uppercase tracking-tighter text-white">{t.name}</p>
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
