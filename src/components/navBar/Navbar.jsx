import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Name");
  };

  return (
    <div className="text-xl py-7">
      {/* Upper NavBar */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#">
          <img src={logo} alt="Logo" className="w-52 sm:w-40 md:w-48" />
        </a>

        {/* Menu button for small screens */}
        <div className="sm:hidden ">
          <button onClick={toggleMenu} >
            {isMenuOpen ? <FaTimes size={24}  className='text-red-600'/> : <FaBars size={24} className='text-white'/>}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center space-x-5 md:space-x-8 lg:space-x-10 font-bold text-white">
          <a href="#" className="hover:text-gray-300 text-blue-600">IPTV Subscription</a>
          <a href="#" className="hover:text-gray-300">Plan & Prices</a>
          <a href="#" className="hover:text-gray-300">FAQ</a>
          <a href="#" className="hover:text-gray-300">Tutorial</a>
          <a href="#" className="hover:text-gray-300">Blog</a>
          <a href="#" className="hover:text-gray-300">Contact us</a>
        </div>

        {/* Get Started Button */}
        <div className="hidden sm:flex">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="bg-white pt-6 pb-6 flex flex-col w-full text-start">
          <div className="p-2 text-blue-600">IPTV Subscription</div>
          <hr className="border-gray-300 my-0" />
          <div className="p-2">Plan & Prices</div>
          <hr className="border-gray-300 my-0" />
          <div className="p-2">FAQ</div>
          <hr className="border-gray-300 my-0" />
          <div className="p-2">Tutorial</div>
          <hr className="border-gray-300 my-0" />
          <div className="p-2">Blog</div>
          <hr className="border-gray-300 my-0" />
          <div className="p-2">Contact us</div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
