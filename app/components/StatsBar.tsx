
export const StatsBar = () => {
  const stats = [
    { label: "Obras Entregues", value: "120+" },
    { label: "m² Construídos", value: "10k+" },
    { label: "Acidentes de Trabalho", value: "0" },
    { label: "Prazos Cumpridos", value: "100%" },
  ];

  return (
    <div className="bg-[#FFC107] py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-black text-black">{stat.value}</p>
              <p className="text-black/70 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
