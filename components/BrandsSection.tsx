export default function BrandsSection() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 w-full absolute bottom-10 z-10">
      <p className="text-[#a1a1aa] text-[9px] font-bold uppercase tracking-widest max-w-[150px] leading-relaxed">
        We have worked with brands that care about craft
      </p>
      <div className="flex items-center gap-8 text-gray-400 opacity-80">
        {/* Placeholder text for logos. In a real scenario these would be SVG logos */}
        <span className="text-2xl font-serif italic text-[#d4d4d8] tracking-tighter">Coca-Cola</span>
        <span className="text-2xl font-bold tracking-tighter text-[#d4d4d8]">BODYARMOR</span>
        <span className="text-xl font-bold tracking-wide text-[#d4d4d8]">WKNDHRS<sup className="text-xs">®</sup></span>
        <span className="text-[10px] uppercase font-semibold tracking-widest text-[#a1a1aa]">+ MANY MORE</span>
      </div>
    </div>
  );
}
