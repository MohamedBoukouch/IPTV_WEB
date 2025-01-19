import React from 'react';
import back1 from '../../assets/back1.jpg';
import { GrFormNextLink } from "react-icons/gr";

const Body = () => {
  return (
    <div className="relative h-screen font-titel">
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white gap-8">
        <div className="text-center max-w-2xl">
          <h1 className="text-7xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-[20px]">
            The Best IPTV 
            <div className='flex gap-5'>
              <div>Subscription</div>
              <div className="block text-blue-600">Service</div>
            </div>
            Provider
          </h1>
        </div>

        <div className="flex items-center gap-5 text-3xl sm:text-xl md:text-2xl">
          {/* Left Line */}
          <div className="w-24 h-[2px] bg-blue-500"></div>
          
          <div>Welcome to StreamTVUniverse</div>
          
          {/* Right Line */}
          <div className="w-24 h-[2px] bg-blue-500"></div>
        </div>

        <div className="text-center max-w-2xl text-lg sm:text-base">
          <p className="text-lg leading-relaxed sm:text-sm">
            At StreamTVUniverse, We offer the best IPTV subscription service, providing access to 
            over 22,000 TV channels and 150,000 VODs in 4K, FHD, and HD. Our service is accessible
            from any device and any location, all at great prices!
          </p>
        </div>

        <div className="group sm:block relative">
          <button className="bg-blue-500 text-white border-black px-10 py-5 rounded-[10px]
            hover:bg-blue-600 transition-all duration-300 flex items-center transform hover:scale-10">
            SUBSCRIBE NOW
            <GrFormNextLink className=" ml-3 text-2xl" />
          </button>
        </div>
      </div>

      {/* Black Background After Image */}
      <div className="relative bg-black text-white py-16">
        {/* Additional content */}
      </div>
    </div>
  );
};

export default Body;
