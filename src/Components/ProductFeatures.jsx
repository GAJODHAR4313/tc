import React from 'react';

const ProductFeatures = () => {
  const features = [
    {
      title: "Lightning Fast\nPerformance",
      desc: "Process invoices, manage transactions, and access business data instantly with a highly optimized system designed for speed and efficiency.",
      icon: <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
    },
    {
      title: "Enterprise-Grade\nSecurity",
      desc: "Protect your business with encrypted data storage, role-based user access, automatic backups, and secure cloud synchronization.",
      icon: <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.105-1.343-2-3-2s-3 .895-3 2v2h6v-2zm-6 2a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2H6z"></path></svg>
    },
    {
      title: "Anytime, Anywhere\nAccess",
      desc: "Access your business dashboard from desktop, tablet, or mobile with seamless cloud connectivity and real-time data synchronization.",
      icon: <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    },
    {
      title: "Easy Integrations &\nAutomation",
      desc: "Connect with payment gateways, barcode scanners, thermal printers, WhatsApp, SMS, and other third-party tools to automate.",
      icon: <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
    }
  ];

  return (
    <div className="bg-[#02040a] py-14 lg:py-24 px-5 sm:px-8 lg:px-12 text-white font-sans">
      
      <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-20">
        <div className="inline-block px-5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium mb-6 tracking-wide">
          Product Features
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-['Fahkwang'] leading-tight">
          Everything You Need to Run Your <br className="hidden md:block" /> Business Smarter
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#080d1a] p-6 lg:p-8 rounded-3xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="bg-[#10192f] w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-['Fahkwang'] leading-snug whitespace-pre-line text-white mb-3">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeatures;