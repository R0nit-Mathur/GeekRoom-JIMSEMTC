"use client";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { MouseEvent } from "react";

export default function AsciiArt() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleMouseLeave() {
    mouseX.set(-1000);
    mouseY.set(-1000);
  }

  const maskImage = useMotionTemplate`radial-gradient(25px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`;

  // Static pre-generated face to avoid hydration mismatch
  const staticFace = `                                                                                                               
                                         ÆÆÆÆÆÆ                 ÆÆÆÆ ÆÆÆÆÆÆÆ                                         
                                       ÆÆÆÆÆÆÆÆÆ              ÆÆÆÆÆÆ ÆÆÆÆÆÆÆÆÆ                                       
                                      ÆÆÆÆÆÆÆÆÆÆ             ÆÆÆÆÆÆÆ ÆÆÆÆÆÆÆÆÆÆÆ                                     
                                    ÆÆÆÆÆÆÆÆÆÆ              ÆÆÆÆÆÆÆÆ   ÆÆÆÆÆÆÆÆÆÆÆ                                   
                                  ÆÆÆÆÆÆÆÆÆÆ               ÆÆÆÆÆÆÆÆ      ÆÆÆÆÆÆÆÆÆÆÆ                                 
                                ÆÆÆÆÆÆÆÆÆÆ                 ÆÆÆÆÆÆÆÆ         ÆÆÆÆÆÆÆÆÆÆÆ                              
                              ÆÆÆÆÆÆÆÆÆÆÆ                 ÆÆÆÆÆÆÆÆ            ÆÆÆÆÆÆÆÆÆÆÆ                            
                             ÆÆÆÆÆÆÆÆÆÆ                   ÆÆÆÆÆÆÆ               ÆÆÆÆÆÆÆÆÆÆÆ                          
                           ÆÆÆÆÆÆÆÆÆÆ                    ÆÆÆÆÆÆÆÆ                 ÆÆÆÆÆÆÆÆÆÆÆ                        
                         ÆÆÆÆÆÆÆÆÆÆ                      ÆÆÆÆÆÆÆ                    ÆÆÆÆÆÆÆÆÆÆÆ                      
                       ÆÆÆÆÆÆÆÆÆÆ       ÆÆÆÆ            ÆÆÆÆÆÆÆÆ         ÆÆÆ          ÆÆÆÆÆÆÆÆÆÆÆ                    
                     ÆÆÆÆÆÆÆÆÆÆ      ÆÆÆÆÆÆÆÆÆÆ         ÆÆÆÆÆÆÆ      ÆÆÆÆÆÆÆÆÆÆ          ÆÆÆÆÆÆÆÆÆÆ                  
                   ÆÆÆÆÆÆÆÆÆÆ       ÆÆÆÆÆÆÆÆÆÆÆÆ       ÆÆÆÆÆÆÆÆ     ÆÆÆÆÆÆÆÆÆÆÆÆ           ÆÆÆÆÆÆÆÆÆÆ                
                  ÆÆÆÆÆÆÆÆÆÆ       ÆÆÆÆÆÆÆÆÆÆÆÆÆÆ      ÆÆÆÆÆÆÆ     ÆÆÆÆÆÆÆÆÆÆÆÆÆÆ           ÆÆÆÆÆÆÆÆÆ                
                ÆÆÆÆÆÆÆÆÆÆ         ÆÆÆÆÆÆÆÆÆÆÆÆÆÆ     ÆÆÆÆÆÆÆÆ     ÆÆÆÆÆÆÆÆÆÆÆÆÆÆ         ÆÆÆÆÆÆÆÆÆÆ                 
                ÆÆÆÆÆÆÆÆÆ          ÆÆÆÆÆÆÆÆÆÆÆÆÆÆ     ÆÆÆÆÆÆÆ      ÆÆÆÆÆÆÆÆÆÆÆÆÆÆ      ÆÆÆÆÆÆÆÆÆÆÆ                   
                 ÆÆÆÆÆÆÆÆÆÆ         ÆÆÆÆÆÆÆÆÆÆÆÆ     ÆÆÆÆÆÆÆÆ       ÆÆÆÆÆÆÆÆÆÆÆÆ     ÆÆÆÆÆÆÆÆÆÆÆ                     
                  ÆÆÆÆÆÆÆÆÆÆÆ         ÆÆÆÆÆÆÆÆ       ÆÆÆÆÆÆÆ          ÆÆÆÆÆÆÆÆ     ÆÆÆÆÆÆÆÆÆÆÆ                       
                    ÆÆÆÆÆÆÆÆÆÆ                      ÆÆÆÆÆÆÆÆ                     ÆÆÆÆÆÆÆÆÆÆÆ                         
                      ÆÆÆÆÆÆÆÆÆÆ                   ÆÆÆÆÆÆÆÆ                    ÆÆÆÆÆÆÆÆÆÆÆ                           
                        ÆÆÆÆÆÆÆÆÆÆ                 ÆÆÆÆÆÆÆÆ                  ÆÆÆÆÆÆÆÆÆÆÆ                             
                          ÆÆÆÆÆÆÆÆÆÆ      ÆÆÆÆÆ   ÆÆÆÆÆÆÆÆ                 ÆÆÆÆÆÆÆÆÆÆ                                
                            ÆÆÆÆÆÆÆÆÆÆ   ÆÆÆÆÆÆÆ  ÆÆÆÆÆÆÆÆ              ÆÆÆÆÆÆÆÆÆÆÆ                                  
                              ÆÆÆÆÆÆÆÆÆÆ ÆÆÆÆÆÆÆ ÆÆÆÆÆÆÆÆ             ÆÆÆÆÆÆÆÆÆÆÆ                                    
                               ÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆ ÆÆÆÆÆÆÆÆ            ÆÆÆÆÆÆÆÆÆÆ                                      
                                 ÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆ ÆÆÆÆÆÆÆ             ÆÆÆÆÆÆÆÆÆÆ                                      
                                   ÆÆÆÆÆÆÆÆÆÆÆÆÆ ÆÆÆÆÆÆÆ              ÆÆÆÆÆÆÆÆÆÆÆ                                    
                                     ÆÆÆÆÆÆÆÆÆÆÆ ÆÆÆÆÆÆ                 ÆÆÆÆÆÆÆÆÆÆÆ                                  
                                       ÆÆÆÆÆÆÆÆÆ ÆÆÆÆÆÆ                   ÆÆÆÆÆÆÆÆÆÆ                                 
                                         ÆÆÆÆÆÆÆ ÆÆÆÆÆ                       ÆÆÆÆÆÆÆ                                 
                                           ÆÆÆ    ÆÆÆÆ                         ÆÆÆ                                   
`;

  return (
    <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-end pr-6 md:pr-16 z-0 pointer-events-auto overflow-hidden">
      <motion.div
        whileHover={{
          x: [-5, 5, -5],
          rotateY: [-3, 3, -3],
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative cursor-default"
      >
        {/* Base Orange Art */}
        <div
          className="text-[#f95e21] font-mono text-[10px] md:text-[12px] lg:text-[12px] leading-[10px] md:leading-[12px] lg:leading-[12px] tracking-[-0.05em] whitespace-pre mix-blend-screen opacity-100"
          style={{ textShadow: "0 0 10px rgba(249, 94, 33, 0.4)" }}
        >
          {staticFace}
        </div>

        {/* Highlight Yellow Art overlay */}
        <motion.div
          className="absolute inset-0 text-[#ffc83e] font-mono text-[10px] md:text-[12px] lg:text-[12px] leading-[10px] md:leading-[12px] lg:leading-[12px] tracking-[-0.05em] whitespace-pre mix-blend-screen pointer-events-none"
          style={{
            textShadow: "0 0 15px rgba(255, 255, 255, 1)",
            maskImage: maskImage,
            WebkitMaskImage: maskImage
          }}
        >
          {staticFace}
        </motion.div>

      </motion.div>
    </div>
  );
}
