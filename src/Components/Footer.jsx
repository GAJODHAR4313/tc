import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-[#02040a] text-white pt-14 lg:pt-20 pb-8 px-5 sm:px-8 lg:px-12 font-sans border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
        
        {/* Column 1: Logo & Contact Info */}
        <div className="lg:col-span-4 flex flex-col space-y-6 lg:border-r border-white/10 lg:pr-8">
          <img src="/billing/TECH SURYA.png" alt="Tech Surya Logo" className="w-44 object-contain" />
          
          <div className="space-y-3 text-gray-400 text-xs sm:text-sm">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-gray-500 mt-1 flex-shrink-0" /> 
              <span>Chhatrapati Sambhajinagar | Nashik | Pune</span>
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-gray-500 flex-shrink-0" /> 
              <span>(+91) 9621 345 050</span>
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-gray-500 flex-shrink-0" /> 
              <span className="break-all">techsuryaitsolution@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-3 flex flex-col justify-between space-y-6 lg:px-8 border-t md:border-t-0 border-white/10 pt-6 md:pt-0">
          <ul className="space-y-3 text-gray-300 text-sm font-light">
            <li className="cursor-pointer hover:text-white transition w-fit">About Us</li>
            <li className="cursor-pointer hover:text-white transition w-fit">Our Services</li>
            <li className="cursor-pointer hover:text-white transition w-fit">Portfolio</li>
            <li className="cursor-pointer hover:text-white transition w-fit">Contact</li>
          </ul>
          
          <div className="flex gap-5 pt-4 border-t border-white/10 w-fit">
            <RiTwitterXFill className="text-lg text-gray-400 hover:text-white cursor-pointer transition" />
            <FaFacebookF className="text-lg text-gray-400 hover:text-blue-500 cursor-pointer transition" />
            <FaLinkedinIn className="text-lg text-gray-400 hover:text-blue-400 cursor-pointer transition" />
          </div>
        </div>

        {/* Column 3: Newsletter & Copyright */}
        <div className="md:col-span-2 lg:col-span-5 flex flex-col justify-between lg:pl-8 space-y-8 border-t lg:border-t-0 border-white/10 pt-6 lg:pt-0">
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg lg:text-xl font-light text-gray-200">
              Would like to talk about your future project?
            </h3>
            
            {/* Input Box - Responsive stack */}
            <div className="flex flex-col sm:flex-row bg-[#080d1a] border border-white/10 rounded-2xl sm:rounded-full p-1.5 gap-2">
              <input 
                type="email" 
                placeholder="Enter your email ID" 
                className="bg-transparent w-full text-xs sm:text-sm text-gray-300 outline-none px-4 py-2.5 sm:py-2 placeholder:text-gray-600"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white w-full sm:w-auto px-6 py-2.5 sm:py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-medium transition whitespace-nowrap shadow-md">
                Get In Touch
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-gray-500 text-xs">
            <p>© 2026 Techsurya</p>
            <span>•</span>
            <p className="cursor-pointer hover:text-white transition">Privacy Policy</p>
            <span>•</span>
            <p className="cursor-pointer hover:text-white transition">Terms of Service</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;