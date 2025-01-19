import React from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className="text-[20px] py-7">
      {/* Upper NavBar */}
      <div>
        <div className="container mx-auto flex justify-center items-center space-x-10 sm:space-x-5 md:space-x-10 lg:space-x-20">
          {/* Logo */}
          <div>
            <a href="#">
              <img src={logo} alt="Logo" className="w-52 sm:w-40 md:w-48" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center text-white space-x-10 sm:space-x-5 md:space-x-8 lg:space-x-10">
            <a href="#" className="hover:text-gray-300 font-titel">
              IPTV Subscription
            </a>
            <a href="#" className="hover:text-gray-300">
              Plan & Prices
            </a>
            <a href="#" className="hover:text-gray-300">
              FAQ
            </a>
            <a href="#" className="hover:text-gray-300">
              Tutorial
            </a>
            <a href="#" className="hover:text-gray-300">
              Blog
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact us
            </a>
          </div>

          {/* Get Started Button */}
          <div>
            <button className="bg-blue-500 text-white border-black px-8 py-3 rounded-[10px]  hover:bg-blue-600 transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
