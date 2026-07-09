import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'solutions', 'modules', 'industries', 'features', 'testimonials'];
      
      // Calculate active section based on scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'modules', label: 'Modules' },
    { id: 'industries', label: 'Industries' },
    { id: 'features', label: 'Features' },
    { id: 'testimonials', label: 'Testimonials' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-20 md:h-24 bg-transparent">
      
      {/* LAYER 1: Logo aur Contact Button (Side Elements) */}
      <div className="w-full h-full px-4 md:px-16 flex justify-between items-center relative z-20 pointer-events-none">
        {/* Left: Logo */}
        <div className="flex items-center pointer-events-auto cursor-pointer">
          <img 
            src="/billing/TECH SURYA.png" 
            alt="Tech Surya IT Solution" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>

        {/* Right: Contact Button & Mobile Toggle */}
        <div className="flex items-center gap-4 pointer-events-auto">
          <button className="hidden md:block px-6 py-3 bg-zinc-950/40 backdrop-blur-xl border border-white/10 text-white rounded-full text-xs font-medium tracking-wide transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_10px_30px_rgba(0,0,0,0.3)] hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 active:translate-y-0">
            + Contact Us
          </button>
          
          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden p-2 text-white bg-zinc-950/40 backdrop-blur-xl rounded-full border border-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-[#02040a]/95 backdrop-blur-xl z-10 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              onClick={() => setIsOpen(false)} 
              className={`text-xl font-medium tracking-wide transition-colors duration-200 ${
                activeSection === link.id ? 'text-blue-400' : 'text-zinc-100 hover:text-blue-400'
              }`}
            >
              {link.label}
            </a>
          ))}
          
          <button className="mt-4 px-8 py-4 bg-zinc-950/80 border border-white/10 text-white rounded-full text-base font-medium tracking-wide transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 active:translate-y-0">
            + Contact Us
          </button>
        </div>
      </div>

      {/* LAYER 2: Completely Independent Middle Capsule (Absolute Viewport Center) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 hidden md:flex">
        <div className="pointer-events-auto flex items-center gap-10 px-14 py-3 bg-zinc-950/40 backdrop-blur-xl border border-white/10 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white/20">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className={`text-xs font-medium tracking-wide transition-colors duration-200 ${
                activeSection === link.id ? 'text-blue-400' : 'text-zinc-400 hover:text-blue-400'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

    </nav>
  );
}