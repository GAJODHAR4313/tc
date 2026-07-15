import React from 'react';
import { Play } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen md:h-screen w-full bg-[#02040a] text-white overflow-x-hidden overflow-y-auto md:overflow-hidden font-sans antialiased selection:bg-blue-500/30">
      
      {/* Premium Background grid + Ambient lighting rings */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Main Content */}
      {/* Increased bottom padding further (pb-48 md:pb-64) to prevent text clipping from the lower image position */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-10 md:px-8 xl:px-2 pt-28 md:pt-36 pb-48 md:pb-64 text-center md:text-left">
        
        {/* Top Section: Text Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-7 space-y-4 md:space-y-6 flex flex-col items-center md:items-start">
            <h1 className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-fakihwang tracking-tight leading-[1.15] text-zinc-100">
              Billing Software Built for <br className="hidden md:block" />Modern 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 font-medium inline-block ml-2 md:ml-3 text-5xl lg:text-6xl xl:text-7xl">
                Businesses.
              </span>
            </h1>

            {/* Line and Text Addition */}
            <div className="flex items-center justify-center md:justify-start gap-4 mt-4 w-full">
             <div className="h-[1px] w-8 md:w-44 bg-white" />
              <span className="text-white text-xs md:text-sm font-light tracking-wide">
                Built To Simplify Finance
              </span>
             <div className="h-[1px] w-12 bg-white md:hidden" />
            </div>
          </div>

          {/* Sisi Kanan - Konten tetap rata kiri, tapi bloknya terdorong ke kanan */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 lg:pt-3 lg:ml-auto flex flex-col items-center md:items-start">
            
            {/* Flex container untuk Gambar dan Teks */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-3 xl:gap-2">
              <img src="/billing/coine.png" alt="Icon" className="w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-24 md:mt-1 object-contain flex-shrink-0" />
              <p className="text-white text-[13px] md:text-[14px] leading-relaxed font-light max-w-xl text-center md:text-left">
                Manage invoices, inventory, GST, payments, customer records and business reports from one powerful dashboard. Built for retail stores, supermarkets, wholesalers, pharmacies, restaurants, distributors and every growing business.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end md:justify-end lg:mr-4 xl:mr-24 gap-6 md:gap-4 mt-6 md:mt-0 w-full">
              
              {/* Baris Tombol (Sama rata kiri-kanan) */}
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 w-full">
                <button className="px-5 md:px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap">
                  View Demo
                </button>
                
                <button className="px-5 md:px-6 py-2.5 bg-transparent border border-white text-white hover:bg-white/10 rounded-full text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap">
                  Book a call
                </button>
              </div>

              {/* Image di bawah tombol */}
              <div className="relative mt-6 md:mt-0 flex md:block items-center justify-center">
                <img 
                  src="/billing/arrow.png" 
                  alt="Arrow" 
                  className="hidden md:block w-16 lg:w-20 h-auto md:mr-32 lg:mr-48 xl:mr-64" 
                />
                <img 
                  src="/billing/video.png" 
                  alt="Video Icon" 
                  className="w-32 md:w-36 lg:w-40 h-auto relative md:-top-12 lg:-top-16 md:-right-8 lg:-right-16 xl:-right-24" 
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="absolute bottom-0 left-0 w-full z-10 flex justify-center items-end select-none pointer-events-none">
        {/* Desktop Image - Pushed down much further using translate-y-36 */}
        <img 
          src="/billing/123.png" 
          alt="Dashboard Showcase Desktop" 
          className="hidden md:block w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)] translate-y-36"
        />
        {/* Mobile Image - Pushed down further using translate-y-28 for mobile layout */}
        <img 
          src="/billing/mb.png" 
          alt="Dashboard Showcase Mobile" 
          className="block md:hidden w-full px-4 h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)] translate-y-28 sm:translate-y-36 opacity-60 blur-[2px]"
        />
      </div>

    </div>
  );
}