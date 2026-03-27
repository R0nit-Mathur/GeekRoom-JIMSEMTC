"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import JumbleText from "./JumbleText";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Setting once: false forces the wipe array to initialize every time the user scrolls onto it
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const [startJumble, setStartJumble] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setStartJumble(true), 800);
      return () => clearTimeout(timer);
    } else {
      setStartJumble(false);
    }
  }, [isInView]);

  const images1 = [
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600",
  ];

  const images2 = [
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600",
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col justify-center items-center py-32 z-30"
    >
      {/* Background Carousels */}
      <div
        className="absolute inset-0 flex flex-col justify-center items-center opacity-20 pointer-events-none gap-8"
        style={{ transform: "rotate(-6deg) scale(1.3)" }}
      >
        <div className="flex w-[300vw] overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: [0, "-33.33%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {[...images1, ...images1, ...images1, ...images1].map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-[450px] h-[300px] object-cover rounded-md grayscale"
                alt="Hackathon"
              />
            ))}
          </motion.div>
        </div>

        <div className="flex w-[300vw] overflow-hidden justify-end">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["-33.33%", 0] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {[...images2, ...images2, ...images2, ...images2].map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-[450px] h-[300px] object-cover rounded-md grayscale"
                alt="Coding Event"
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Animated Heading Context */}
        <div className="relative inline-block overflow-hidden mb-12 py-2">
          {/* Base Heading with Split Colors */}
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase relative z-0 flex gap-6">
            <span className="text-[#f95e21]"><JumbleText text="ABOUT" trigger={startJumble} /></span>
            <span className="text-zinc-900"><JumbleText text="US" trigger={startJumble} /></span>
          </h2>

          {/* Wipe Animations */}
          <motion.div
            className="absolute top-0 bottom-0 bg-[#f95e21] z-20"
            initial={{ left: "0%", right: "100%" }}
            animate={isInView ? { left: ["0%", "0%", "100%"], right: ["100%", "0%", "0%"] } : { left: "0%", right: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut", times: [0, 0.5, 1] }}
          />
          <motion.div
            className="absolute top-0 bottom-0 bg-[#1e1e24] z-10"
            initial={{ left: "0%", right: "100%" }}
            animate={isInView ? { left: ["0%", "0%", "100%"], right: ["100%", "0%", "0%"] } : { left: "0%", right: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut", times: [0, 0.5, 1], delay: 0.2 }}
          />
        </div>

        {/* Center Text (Gray shade adjustment) */}
        <motion.p
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-500 leading-snug md:leading-normal max-w-5xl mx-auto block shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
          style={{ textShadow: "0px 2px 20px rgba(255,255,255,0.8)" }}
        >
          Geek Room is a nationwide developer community with 100,000+ active coders, focused on building innovation through hackathons, events, and industry collaboration. With multiple institute chapters and hackathon-winning teams, Geek Room connects companies with India's rapidly growing developer ecosystem.
        </motion.p>
      </div>
    </div>
  );
}
