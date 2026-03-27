"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import JumbleText from "./JumbleText";

const eventsData = [
  { id: 1, title: "Hackathon 2023", desc: "A 48-hour coding marathon to solve real-world problems.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800" },
  { id: 2, title: "Tech Symposium", desc: "Annual gathering of tech enthusiasts and industry leaders.", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800" },
  { id: 3, title: "AI Workshop", desc: "Deep dive into machine learning and neural networks.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800" },
  { id: 4, title: "Web Dev Bootcamp", desc: "Intensive training on modern frontend frameworks.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800" },
  { id: 5, title: "Startup Pitch", desc: "Showcasing student startups to venture capitalists.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800" },
];

export default function EventsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 5 events, clamp index between 0-4
    const index = Math.min(
      Math.max(0, Math.floor(latest * eventsData.length)),
      eventsData.length - 1
    );
    setActiveIndex(index);
  });

  return (
    <div ref={containerRef} className="w-full bg-[#0a0a0a] relative z-40" style={{ height: "400vh" }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center px-6 md:px-16 pt-24 pb-12">
        <div className="w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          
          {/* Left Column (Vertical List) */}
          <div className="w-full md:w-1/3 flex flex-col justify-center h-full relative">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 uppercase tracking-tighter">Our Events</h2>
            
            {/* The maskImage causes the list to fade out at the top and bottom edges instead of abruptly clipping behind the heading */}
            <div 
              className="relative h-[300px] overflow-hidden" 
              style={{ 
                maskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)', 
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)' 
              }}
            >
              {/* Container aligns list perfectly dead center mathematically using target heights */}
              <div 
                className="flex flex-col gap-8 transition-transform duration-700 ease-in-out absolute w-full pl-6" 
                style={{ 
                  top: '150px', 
                  transform: `translateY(calc(-20px - ${activeIndex * 72}px))` 
                }}
              >
                {eventsData.map((ev, i) => {
                   const isActive = activeIndex === i;
                   return (
                     <div key={ev.id} className={`transition-all duration-500 relative flex flex-col h-[40px] justify-center ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-40'}`}>
                       {isActive && (
                         <motion.div 
                            layoutId="event-indicator"
                            className="absolute -left-[25px] top-1/2 -translate-y-1/2 h-[30px] w-[2px] bg-[#f95e21]" 
                         />
                       )}
                       <h3 className={`text-2xl md:text-3xl font-semibold whitespace-nowrap transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-500'}`}>
                         {ev.title}
                       </h3>
                     </div>
                   );
                })}
              </div>
              {/* Subtle timeline track */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />
            </div>
          </div>

          {/* Right Column (Focus Image Card) */}
          <div className="w-full md:w-2/3 h-full flex items-center justify-center relative perspective-[1000px]">
             {eventsData.map((ev, i) => {
                const isActive = activeIndex === i;
                const isPast = i < activeIndex;
                const isFuture = i > activeIndex;

                let yOffset = 0;
                if (isPast) yOffset = -80;
                if (isFuture) yOffset = 80;

                return (
                  <motion.div
                    key={ev.id}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: yOffset,
                      scale: isActive ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`absolute inset-0 flex items-center justify-center pointer-events-none ${isActive ? 'z-10' : 'z-0'}`}
                  >
                     <div className="w-full max-w-[600px] bg-[#1e1e24] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto border border-white/5">
                       <div className="h-[350px] w-full overflow-hidden relative">
                         <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e24] via-transparent to-transparent opacity-90 z-10" />
                         <img src={ev.image} alt={ev.title} className="w-full h-full object-cover relative z-0" />
                       </div>
                       
                       {/* Animated Content Layer pulling from the new EventCardContent component */}
                       <EventCardContent ev={ev} isActive={isActive} />

                     </div>
                  </motion.div>
                )
             })}
          </div>

        </div>
      </div>
    </div>
  )
}

// Inner Component handles triggering animations independently when isActive flips to True
const EventCardContent = ({ ev, isActive }: { ev: any; isActive: boolean }) => {
  const [startJumble, setStartJumble] = useState(false);

  useEffect(() => {
    if (isActive) {
      // Delay aligns with the end of the gray wipe frame
      const timer = setTimeout(() => setStartJumble(true), 800);
      return () => clearTimeout(timer);
    } else {
      setStartJumble(false);
    }
  }, [isActive]);

  return (
    <div className="p-8 pt-0 relative z-20 -mt-16">
      <div className="relative inline-block overflow-hidden mb-2 py-1">
        <h3 className="text-3xl font-bold text-white font-sans tracking-tight relative z-0">
          <JumbleText text={ev.title} trigger={startJumble} />
        </h3>
        
        {/* Dynamic Wipe Overlays */}
        <motion.div
          className="absolute top-0 bottom-0 bg-[#f95e21] z-20"
          initial={{ left: "0%", right: "100%" }}
          animate={isActive ? { left: ["0%", "0%", "100%"], right: ["100%", "0%", "0%"] } : { left: "0%", right: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut", times: [0, 0.5, 1] }}
        />
        <motion.div
          className="absolute top-0 bottom-0 bg-zinc-600 z-10"
          initial={{ left: "0%", right: "100%" }}
          animate={isActive ? { left: ["0%", "0%", "100%"], right: ["100%", "0%", "0%"] } : { left: "0%", right: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut", times: [0, 0.5, 1], delay: 0.2 }}
        />
      </div>
      
      {/* Description Fade */}
      <motion.p 
        className="text-gray-400 text-base leading-relaxed line-clamp-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        {ev.desc}
      </motion.p>
    </div>
  );
};
