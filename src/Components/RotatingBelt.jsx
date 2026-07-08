import React from 'react';
import { motion } from 'framer-motion';

const RotatingBelt = () => {
  const industries = [
    { title: "HEALTHCARE", desc: "Appointment systems, healthcare dashboards and management solutions." },
    { title: "E-COMMERCE & RETAIL", desc: "Online stores, inventory systems and shopping platforms." },
    { title: "EDUCATION & E-LEARNING", desc: "Learning platforms, student portals and course management systems." },
    { title: "REAL ESTATE", desc: "Property listing platforms and CRM solutions for real estate businesses." },
    { title: "FINANCE & FINTECH", desc: "Billing systems, financial dashboards and secure transaction platforms." }
  ];

  return (
    <div className="bg-[#02040a] py-10 overflow-hidden w-full relative">
      
      {/* Background shape - HIDDEN ON MOBILE */}
      <img src="/billing/Rectangle 40383.png" alt="Bg" className="hidden lg:block absolute bottom-0 left-0 w-full opacity-50 pointer-events-none" />

      {/* Belt Slider */}
      <motion.div 
        className="flex space-x-4 lg:space-x-6 relative z-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
      >
        {[...industries, ...industries].map((item, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-[260px] sm:w-[300px] p-6 lg:p-8 border border-white/10 rounded-3xl bg-[#080d1a]"
          >
            <h3 className="text-xs sm:text-sm lg:text-base font-bold mb-2 text-white tracking-wider uppercase">{item.title}</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Content Section */}
      <div className="mt-14 lg:mt-28 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side Images */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start relative">
            <img src="/billing/zxcv.png" alt="Billing Transformation" className="w-full max-w-[280px] sm:max-w-md object-contain z-10" />
            
            {/* Server image - STRICTLY HIDDEN ON MOBILE */}
            <img src="/billing/sadf.png" alt="Server" className="hidden lg:block absolute right-10 bottom-0 w-36 object-contain z-0 pointer-events-none" />
          </div>
          
          {/* Right Side Text Content */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left relative">
            
            {/* Overlay card - STRICTLY HIDDEN ON MOBILE */}
            <img src="/billing/cardmsn.png" alt="Overlay" className="hidden lg:block absolute -top-24 -left-12 w-32 object-contain pointer-events-none" />
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-['Fahkwang'] text-white leading-tight font-medium mb-4 sm:mb-6">
              Take Your Business to the <br className="hidden lg:block" /> Next Level with Smarter <br className="hidden lg:block" /> Billing
            </h2>

            <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed max-w-md mb-8">
              Simplify billing, automate inventory, stay GST compliant, and gain real-time business insights with Tech Surya Billing Software.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#007bff] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-600 transition shadow-lg">
                View Demo
              </button>
              <button className="w-full sm:w-auto border border-white/30 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-black transition">
                Book a call
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default RotatingBelt;