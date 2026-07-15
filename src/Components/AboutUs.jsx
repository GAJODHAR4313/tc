import React from 'react';

export default function AboutUs() {
  return (
    <div className="bg-[#02040a] text-white py-14 lg:py-24 px-5 sm:px-8 lg:px-12 font-sans overflow-hidden">
      
      {/* Top Header Section */}
      <div className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8 mb-14 lg:mb-24 relative">
        
        {/* Floating Icons - HIDDEN ON MOBILE */}
        <img src="/billing/sdf.png" alt="Icon" className="hidden lg:block absolute -left-12 -top-10 w-32 opacity-80 pointer-events-none" />
        <img src="/billing/lol.png" alt="Icon" className="hidden lg:block absolute -right-8 -top-8 w-16 pointer-events-none" />

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-['Fahkwang'] leading-tight relative z-10">
          Simplify billing, inventory, GST, and business management with<br className="hidden lg:block" /> Tech Surya Billing Software.
        </h1>

        <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300 max-w-3xl mx-auto">
          Tech Surya Billing Software is an intelligent business management solution designed to simplify your daily operations. From creating invoices and managing inventory to GST compliance, everything is in one secure platform.
        </p>

        <div className="flex flex-col items-center pt-4">
          <img src="/billing/butmn.png" alt="Tech Surya Features" className="w-48 sm:w-64 h-auto mb-6" />
          
          <div className="relative w-full flex justify-center">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-10 py-3 rounded-full font-medium hover:bg-blue-500 transition-colors shadow-lg">
              View Demo
            </button>

            {/* Side decorative lines/stars - HIDDEN ON MOBILE */}
            <img src="/billing/Frame 12.png" alt="Decoration" className="hidden lg:block absolute left-[calc(50%+110px)] top-3 w-16 pointer-events-none" />
            <img src="/billing/btn.png" alt="Decoration" className="hidden lg:block absolute left-[calc(50%+200px)] -top-10 w-48 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Center Graphic */}
      <div className="max-w-6xl mx-auto mb-16 lg:mb-32">
        <img src="/billing/bg.png" alt="Business Platform" className="w-full h-auto object-contain drop-shadow-xl" />
      </div>

      {/* Modules Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative">
        
        {/* Decorative Background Shape - HIDDEN ON MOBILE */}
        <img src="/billing/Rectangle 40383.png" alt="Bg Shape" className="hidden lg:block absolute -bottom-20 left-0 w-full opacity-60 pointer-events-none" />

        {/* Left Side Graphic/Text Card */}
        <div className="lg:col-span-5 relative w-full flex flex-col items-center lg:items-start text-center lg:text-left bg-gradient-to-tr from-blue-900/30 via-[#0a1122] to-[#0a1122] p-8 lg:p-12 rounded-[2rem] border border-white/10 overflow-hidden">
          <img src="/billing/btn0101.png" alt="Modules Icon" className="hidden lg:block w-32 mb-6" />
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-['Fahkwang'] font-normal leading-tight text-white z-10">
            Powerful Modules Built <br className="hidden sm:block" /> for Every Business <br className="hidden sm:block" /> Operation
          </h2>
          
          {/* Big overlapping Coin - STRICTLY HIDDEN ON MOBILE */}
          <img src="/billing/bigcoin.png" alt="Big Coin" className="hidden lg:block absolute -bottom-10 -right-20 w-80 pointer-events-none" />
        </div>

        {/* Right Side List */}
        <div className="lg:col-span-7 flex flex-col space-y-6 lg:space-y-8 w-full z-10">
          
          <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-sm font-bold">01</div>
            <div>
              <h3 className="text-xl lg:text-2xl font-['Fahkwang'] mb-1">Smart Billing & Sales</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Create GST-compliant invoices, manage sales, purchases, and accept payments with ease.</p>
            </div>
          </div>

          <div className="bg-[#0f172a] lg:bg-blue-600 p-6 lg:p-8 rounded-2xl flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-5 border border-blue-500/30 lg:border-none shadow-xl">
            <div className="flex-shrink-0 w-12 h-12 rounded-full border border-blue-400 flex items-center justify-center text-sm font-bold bg-blue-600 lg:bg-blue-700">02</div>
            <div>
              <h3 className="text-xl lg:text-2xl font-['Fahkwang'] mb-1 text-white">Inventory & Management</h3>
              <p className="leading-relaxed text-gray-300 lg:text-blue-50 text-sm">Track inventory, warehouses, customers, and manage multiple stores from a centralized dashboard.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-sm font-bold">03</div>
            <div>
              <h3 className="text-xl lg:text-2xl font-['Fahkwang'] mb-1">Reports & Analytics</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Gain real-time business insights with advanced reports, cloud backup, and seamless integrations.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}