"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-white pt-32 pb-16 px-6 md:px-16 relative z-[60] overflow-hidden" data-theme="dark">
       <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative z-10">
          
          {/* Header Hooks */}
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-center mb-6">
            Ready to <span className="text-[#f95e21]">Innovate?</span>
          </h3>
          <p className="text-gray-400 text-lg md:text-xl text-center max-w-2xl mb-12">
            Join the fastest growing student developer ecosystem holding access to premier hackathons and industry giants.
          </p>

          {/* Action Call */}
          <button className="bg-[#f95e21] hover:bg-white text-black font-bold uppercase text-lg tracking-widest px-10 py-5 transition-all duration-300 rounded-lg mb-24 shadow-[0_0_30px_rgba(249,94,33,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transform hover:-translate-y-1">
            Join the Room
          </button>
          
          <div className="w-full border-t border-white/10 mb-12" />

          {/* Links Row */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-8 text-gray-500 font-bold tracking-widest text-sm uppercase">
              <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
              <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
              <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
              <span className="hover:text-white cursor-pointer transition-colors">GitHub</span>
            </div>
            
            <p className="text-gray-600 text-xs font-medium tracking-wider">
              &copy; {new Date().getFullYear()} GEEKROOM JIMSEMTC. ALL RIGHTS RESERVED.
            </p>
          </div>
       </div>

       {/* Massive Background Text Layer */}
       <h2 className="text-[20vw] font-black tracking-tighter leading-none text-white/[0.02] whitespace-nowrap select-none pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
          GEEKROOM
       </h2>
    </footer>
  );
}
