"use client";
import { useEffect, useState } from "react";
import { Menu, Plus } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(1000); // Default to a reasonable desktop size

  useEffect(() => {
    // Only access window during hydration/client side
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // We grab an element slightly below the navbar (ex: Y=100) at the center of the screen
      const elements = document.elementsFromPoint(window.innerWidth / 2, 100);
      for (const el of elements) {
        const t = el.getAttribute("data-theme");
        if (t) {
          setTheme(t as "dark" | "light");
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial evaluation
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate colors based on scrolled state and underlying theme
  const navBg = !isScrolled
    ? "rgba(0,0,0,0)" // Transparent at absolute top
    : theme === "light"
    ? "#a1a1aa" // Gray on white sections
    : "#1e1e24"; // Very dark slaty gray on dark sections

  const textColor = "#ffffff"; // Static explicitly white per instructions

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-[100] pointer-events-none">
      <motion.nav
        className="flex justify-between items-center pointer-events-auto transition-colors duration-500 relative overflow-hidden"
        initial={false}
        animate={{
          backgroundColor: navBg,
          color: textColor,
          width: isScrolled ? "96%" : "100%",
          marginTop: isScrolled ? "16px" : "0px",
          paddingTop: isScrolled ? "16px" : "24px",
          paddingBottom: isScrolled ? "16px" : "24px",
          paddingLeft: isScrolled ? "32px" : "40px",
          paddingRight: isScrolled ? "32px" : "40px",
          boxShadow: isScrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "none"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Left: Logo */}
        <motion.div 
          className="text-3xl/none font-black tracking-tighter uppercase font-sans origin-left"
          style={{ color: textColor }}
        >
          GEEKROOM
        </motion.div>

        {/* Center: Menu */}
        <motion.div 
          className="flex items-center gap-3 cursor-pointer group absolute left-1/2 -translate-x-1/2"
          style={{ color: textColor }}
        >
          <span className="font-medium text-xs tracking-widest transition-opacity group-hover:opacity-70">MENU</span>
          <Menu className="transition-opacity group-hover:opacity-70" size={20} strokeWidth={1.5} />
        </motion.div>

        {/* Right: Buttons */}
        <div className="flex items-center">
          <button className="bg-[#f95e21] hover:bg-[#ff753e] text-black font-bold uppercase text-xs tracking-widest px-5 py-2.5 transition-colors">
            Become a member
          </button>
          <button className="bg-[#f95e21] hover:bg-[#ff753e] text-black p-2.5 ml-[2px] transition-colors">
            <Plus size={16} strokeWidth={2.5} />
          </button>
        </div>
      </motion.nav>
    </div>
  );
}
