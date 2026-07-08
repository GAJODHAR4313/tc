import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          <a href="#overview" onClick={() => setIsOpen(false)} className="text-xl font-medium tracking-wide text-zinc-100 hover:text-blue-400 transition-colors duration-200">Overview</a>
          <a href="#solutions" onClick={() => setIsOpen(false)} className="text-xl font-medium tracking-wide text-zinc-100 hover:text-blue-400 transition-colors duration-200">Solutions</a>
          <a href="#modules" onClick={() => setIsOpen(false)} className="text-xl font-medium tracking-wide text-zinc-100 hover:text-blue-400 transition-colors duration-200">Modules</a>
          <a href="#industries" onClick={() => setIsOpen(false)} className="text-xl font-medium tracking-wide text-zinc-100 hover:text-blue-400 transition-colors duration-200">Industries</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="text-xl font-medium tracking-wide text-zinc-100 hover:text-blue-400 transition-colors duration-200">Features</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-xl font-medium tracking-wide text-zinc-100 hover:text-blue-400 transition-colors duration-200">Testimonials</a>
          
          <button className="mt-4 px-8 py-4 bg-zinc-950/80 border border-white/10 text-white rounded-full text-base font-medium tracking-wide transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 active:translate-y-0">
            + Contact Us
          </button>
        </div>
      </div>

      {/* LAYER 2: Completely Independent Middle Capsule (Absolute Viewport Center) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 hidden md:flex">
        <div className="pointer-events-auto flex items-center gap-10 px-14 py-3 bg-zinc-950/40 backdrop-blur-xl border border-white/10 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white/20">
          <a href="#overview" className="text-xs font-medium tracking-wide text-zinc-100 hover:text-blue-400 transition-colors duration-200">
            Overview
          </a>
          <a href="#solutions" className="text-xs font-medium tracking-wide text-zinc-400 hover:text-blue-400 transition-colors duration-200">
            Solutions
          </a>
          <a href="#modules" className="text-xs font-medium tracking-wide text-zinc-400 hover:text-blue-400 transition-colors duration-200">
            Modules
          </a>
          <a href="#industries" className="text-xs font-medium tracking-wide text-zinc-400 hover:text-blue-400 transition-colors duration-200">
            Industries
          </a>
          <a href="#features" className="text-xs font-medium tracking-wide text-zinc-400 hover:text-blue-400 transition-colors duration-200">
            Features
          </a>
          <a href="#testimonials" className="text-xs font-medium tracking-wide text-zinc-400 hover:text-blue-400 transition-colors duration-200">
            Testimonials
          </a>
        </div>
      </div>

    </nav>
  );
}