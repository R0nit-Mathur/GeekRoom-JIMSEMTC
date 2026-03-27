import { Plus } from "lucide-react";

export default function HeroInfo() {
  return (
    <div className="flex flex-col max-w-2xl pr-24 z-10 relative">
      <h1 className="text-5xl md:text-[5.5rem] leading-[1.05] font-semibold text-white tracking-[-0.03em] mb-6 font-sans">
        GeekRoom<br />JIMSEMTC.
      </h1>
      <p className="text-[#a1a1aa] text-base md:text-lg mb-8 leading-relaxed max-w-[450px] font-medium">
        The official student chapter of GeekRoom at JIMS Engineering Management Technical Campus. A community of developers, designers, and tech enthusiasts.
      </p>
      <div className="flex items-center gap-6">
        <div className="flex items-center">
          <button className="bg-[#f95e21] hover:bg-[#ff753e] text-black font-bold uppercase text-xs tracking-widest px-6 py-3 transition-colors">
            See our past events
          </button>
          <button className="bg-[#f95e21] hover:bg-[#ff753e] text-black p-3 ml-[2px] transition-colors flex items-center justify-center">
            <Plus size={16} strokeWidth={2.5} />
          </button>
        </div>
        <a href="#" className="text-white font-semibold text-base underline underline-offset-[6px] decoration-1 hover:text-[#f95e21] transition-colors">
          Join our community
        </a>
      </div>
    </div>
  );
}
