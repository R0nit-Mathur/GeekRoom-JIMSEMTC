"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import JumbleText from "./JumbleText";

// Generate 25 mock team members
const teamData = Array.from({ length: 25 }).map((_, i) => ({
  id: i + 1,
  name: `Team Member ${i + 1}`,
  role: i === 0 ? "President" : i === 1 ? "Vice President" : "Core Member",
  // Cycles through random face placeholders
  image: `https://i.pravatar.cc/400?img=${(i % 70) + 1}`,
  cardValue: ["A", "K", "Q", "J", "10", "9", "8", "7"][i % 8],
  cardSuit: ["♠", "♥", "♦", "♣"][i % 4],
}));

export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll exactly within the 800vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Translates the flex row from 0 to -100% (+ viewport width so last card stops on screen)
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "calc(-100% + 100vw)"]);

  // Heading Jumble Animation logic
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: false, margin: "-100px" });
  const [startJumble, setStartJumble] = useState(false);

  useEffect(() => {
    if (isHeaderInView) {
      const timer = setTimeout(() => setStartJumble(true), 800);
      return () => clearTimeout(timer);
    } else {
      setStartJumble(false);
    }
  }, [isHeaderInView]);

  return (
    <div ref={containerRef} className="w-full relative z-50 bg-white" style={{ height: "800vh" }}>
      
      {/* Sticky Checkpoint taking up 1 full screen */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center bg-white shadow-[0_-15px_40px_rgba(0,0,0,0.5)] pt-16">
        
        {/* Animated Heading (Same as About Us) */}
        <div ref={headerRef} className="w-full px-6 md:px-16 flex items-center justify-center mb-12 shrink-0">
          <div className="relative inline-block overflow-hidden py-1">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase relative z-0 flex gap-4">
              <span className="text-[#f95e21]"><JumbleText text="OUR" trigger={startJumble} /></span>
              <span className="text-zinc-900"><JumbleText text="TEAM" trigger={startJumble} /></span>
            </h2>
            
            <motion.div
              className="absolute top-0 bottom-0 bg-[#f95e21] z-20"
              initial={{ left: "0%", right: "100%" }}
              animate={isHeaderInView ? { left: ["0%", "0%", "100%"], right: ["100%", "0%", "0%"] } : { left: "0%", right: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut", times: [0, 0.5, 1] }}
            />
            <motion.div
              className="absolute top-0 bottom-0 bg-[#1e1e24] z-10"
              initial={{ left: "0%", right: "100%" }}
              animate={isHeaderInView ? { left: ["0%", "0%", "100%"], right: ["100%", "0%", "0%"] } : { left: "0%", right: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut", times: [0, 0.5, 1], delay: 0.2 }}
            />
          </div>
        </div>

        {/* Horizontal Track Container */}
        <div className="w-full flex items-center overflow-hidden pb-12">
          {/* Row of Cards pulled leftwards by scrollProgress */}
          <motion.div 
            style={{ x: xTransform }} 
            className="flex gap-8 px-6 md:px-16 w-max"
          >
            {teamData.map((member) => {
              const isRed = member.cardSuit === '♥' || member.cardSuit === '♦';
              
              return (
                <div key={member.id} className="bg-[#1e1e24] rounded-[24px] p-5 pb-6 flex flex-col items-center gap-6 shadow-2xl border border-white/10 w-[300px] shrink-0 transform transition-transform duration-300 hover:scale-105 hover:bg-[#27272f]">
                  
                  {/* Internal Playing Card Image Panel */}
                  <div className="relative w-full aspect-[2/3] bg-white rounded-[16px] overflow-hidden border-[6px] border-white shadow-inner flex shrink-0">
                    
                    {/* Top Left Number/Suit */}
                    <div className="absolute top-2 left-2 flex flex-col items-center bg-white/90 px-2 py-1 rounded-md z-10 leading-none">
                      <span className={`text-xl font-black ${isRed ? 'text-red-600' : 'text-black'}`}>{member.cardValue}</span>
                      <span className={`text-2xl -mt-1 ${isRed ? 'text-red-600' : 'text-black'}`}>{member.cardSuit}</span>
                    </div>
                    
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" />
                    
                    {/* Bottom Right Number/Suit (Inverted) */}
                    <div className="absolute bottom-2 right-2 flex flex-col items-center bg-white/90 px-2 py-1 rounded-md z-10 leading-none rotate-180">
                      <span className={`text-xl font-black ${isRed ? 'text-red-600' : 'text-black'}`}>{member.cardValue}</span>
                      <span className={`text-2xl -mt-1 ${isRed ? 'text-red-600' : 'text-black'}`}>{member.cardSuit}</span>
                    </div>
                  </div>

                  {/* Team Member Information Block */}
                  <div className="w-full text-center px-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{member.name}</h3>
                    <p className="text-[#f95e21] font-bold text-sm tracking-widest uppercase mt-2">{member.role}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </div>
  )
}
