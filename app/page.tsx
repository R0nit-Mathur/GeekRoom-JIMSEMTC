import Navbar from "@/components/Navbar";
import HeroInfo from "@/components/HeroInfo";
import BrandsSection from "@/components/BrandsSection";
import AsciiArt from "@/components/AsciiArt";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-[#0a0a0a] font-sans selection:bg-[#f95e21] selection:text-black">
      <Navbar />
      
      {/* Sticky Hero Section */}
      <div className="sticky top-0 h-screen w-full overflow-hidden" data-theme="dark">
        {/* Background/Right ASCII Art */}
        <AsciiArt />
        
        {/* Foreground Content */}
        <div className="relative flex flex-col w-full h-full pl-6 md:pl-16 pointer-events-none z-10 pt-24 pb-10">
          <div className="flex-1 flex flex-col justify-center">
            <div className="pointer-events-auto w-fit">
              <HeroInfo />
            </div>
          </div>
          <div className="pointer-events-auto w-fit">
            <BrandsSection />
          </div>
        </div>
      </div>

      {/* New Stats Section that scrolls over the hero */}
      <div className="relative z-20 w-full shadow-[0_-15px_40px_rgba(0,0,0,0.5)] bg-[#f4f4f5]" data-theme="light">
        <StatsSection />
      </div>

      {/* About Section */}
      <div className="relative z-30 w-full shadow-lg bg-white" data-theme="light">
        <AboutSection />
      </div>

      {/* Events Section */}
      <div className="relative z-40 w-full" data-theme="dark">
        <EventsSection />
      </div>

      {/* Team Section */}
      <div className="relative z-50 w-full" data-theme="light">
        <TeamSection />
      </div>

      {/* Footer Section */}
      <div className="relative z-50 w-full" data-theme="dark">
        <Footer />
      </div>

    </main>
  );
}
