export default function StatsSection() {
  const stats = [
    { number: "50+", label: "EVENTS ORGANIZED" },
    { number: "1500+", label: "CURRENT MEMBERS" },
    { number: "5000+", label: "EVENT PARTICIPANTS" },
    { number: "2023", label: "YEAR SINCE" },
  ];

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-6 md:p-12 pt-32 pb-24">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#f4f4f5] flex flex-col justify-between p-8 md:p-10 h-[380px] w-full items-start">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-black tracking-tighter">
              {stat.number}
            </h2>
            <p className="text-sm font-bold tracking-widest uppercase text-gray-500 mt-12 block leading-relaxed max-w-[150px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
