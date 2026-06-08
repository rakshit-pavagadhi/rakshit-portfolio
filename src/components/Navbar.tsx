"use client";
import { useState, useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis(); // Get the smooth scroll instance

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom function to force Lenis to scroll, interrupting current momentum
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(targetId);
    } else {
      // Fallback
      document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* We use 'top' for the logo to scroll back to the very top */}
        <a href="#" onClick={(e) => scrollToSection(e, 'top')} className="text-xl font-bold text-white tracking-tight cursor-pointer">
          Rakshit Pavagadhi<span className="text-cyan-400"></span>
        </a>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          {["About", "Skills", "Projects", "Certifications", "Contact"].map((item) => {
            const targetId = `#${item.toLowerCase()}`;
            return (
              <a 
                key={item} 
                href={targetId} 
                onClick={(e) => scrollToSection(e, targetId)}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}