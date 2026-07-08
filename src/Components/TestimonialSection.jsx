import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const TestimonialSection = () => {
  return (
    <div className="bg-[#02040a] py-14 lg:py-24 px-5 sm:px-8 lg:px-12 flex justify-center items-center font-sans overflow-hidden">
      
      <div className="relative w-full max-w-6xl border border-blue-900/40 rounded-3xl lg:rounded-[3rem] p-6 sm:p-10 lg:p-16 flex flex-col items-center bg-gradient-to-br from-[#05112e] to-[#02040a] shadow-2xl">
        
        {/* Top Left Badge */}
        <div className="mb-8 lg:absolute lg:top-10 lg:left-10 w-full text-center lg:text-left">
          <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-medium uppercase tracking-wider inline-block">
            Client Testimonials
          </span>
        </div>

        {/* Center Content Wrapper */}
        <div className="flex items-center justify-between w-full lg:mt-8 gap-8">
          
          {/* Desktop Left Arrow */}
          <button className="hidden lg:flex w-12 h-12 rounded-full border border-gray-600 hover:border-white items-center justify-center text-white transition flex-shrink-0">
            <FiArrowLeft className="text-xl" />
          </button>

          {/* Testimonial Card */}
          <div className="relative w-full max-w-lg mx-auto">
            
            {/* Outer Quote Icons - STRICTLY HIDDEN ON MOBILE (hidden sm:block) */}
            <FaQuoteLeft className="hidden sm:block absolute -top-6 -left-8 text-white/20 text-4xl pointer-events-none" />
            <FaQuoteRight className="hidden sm:block absolute -bottom-6 -right-8 text-white/20 text-4xl pointer-events-none" />

            <div className="bg-gradient-to-b from-blue-700 to-[#0a1122] rounded-3xl p-6 sm:p-10 lg:p-12 flex flex-col items-center text-center relative z-10 border border-white/10 shadow-xl">
              
              {/* Subtle inner quote icon for mobile only */}
              <FaQuoteLeft className="sm:hidden text-white/30 text-2xl mb-4" />

              <div className="flex gap-1.5 text-yellow-400 mb-6 text-lg sm:text-xl">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              
              <p className="text-white text-xs sm:text-sm lg:text-base leading-relaxed mb-8">
                "The billing process is incredibly fast and easy to use. Managing inventory and GST has become effortless, saving us valuable time every day."
              </p>
              
              <h4 className="text-white font-semibold text-base sm:text-lg lg:text-xl">Rahul Sharma</h4>
              <p className="text-blue-300 text-xs sm:text-sm mt-1">Retail Store Owner</p>
            </div>
          </div>

          {/* Desktop Right Arrow */}
          <button className="hidden lg:flex w-12 h-12 rounded-full border border-gray-600 hover:border-white items-center justify-center text-white transition flex-shrink-0">
            <FiArrowRight className="text-xl" />
          </button>

        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex lg:hidden gap-6 mt-8">
          <button className="w-11 h-11 rounded-full border border-gray-600 flex items-center justify-center text-white active:bg-white active:text-black">
            <FiArrowLeft />
          </button>
          <button className="w-11 h-11 rounded-full border border-gray-600 flex items-center justify-center text-white active:bg-white active:text-black">
            <FiArrowRight />
          </button>
        </div>

      </div>
    </div>
  );
};

export default TestimonialSection;