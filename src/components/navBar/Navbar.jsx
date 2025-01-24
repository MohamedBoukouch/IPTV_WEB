import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; //Import NavLink


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="text-xl py-7 sm:pl-15">
      {/* Upper NavBar */}
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <Link to="/"> {/* Changed to Link for correct navigation */}
          <img src={logo} alt="Logo" className="w-52 sm:w-40" />
        </Link>

        {/* Menu button for small screens */}
        <div className="sm:hidden ">
          <button onClick={toggleMenu} >
            {isMenuOpen ? <FaTimes size={24}  className='text-red-600'/> : <FaBars size={24} className='text-white'/>}
          </button>
        </div>

        {/* Navigation Links */}
         <div className="hidden sm:flex items-center space-x-5 md:space-x-8 lg:space-x-10 font-bold text-white">
             {/* Use NavLink instead of 'a' for proper styling on hover and on selection */}
            <NavLink to="/iptv-subscription" className={({ isActive }) => `hover:text-gray-300 ${isActive ? 'text-blue-600' : ''}`} >IPTV Subscription</NavLink>
            <NavLink to="/prices" className={({ isActive }) => `hover:text-gray-300 ${isActive ? 'text-blue-600' : ''}`} >Plan & Prices</NavLink>
            <NavLink to="/faq" className={({ isActive }) => `hover:text-gray-300 ${isActive ? 'text-blue-600' : ''}`} >FAQ</NavLink>
            <NavLink to="/tutorial" className={({ isActive }) => `hover:text-gray-300 ${isActive ? 'text-blue-600' : ''}`} >Tutorial</NavLink>
          <Link to="/contact-us" className="hover:text-orange-500">Contact us</Link>
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
            <Link to="/iptv-subscription" className="p-2 text-blue-600">IPTV Subscription</Link>
          <hr className="border-gray-300 my-0" />
            <Link to="/prices" className="p-2">Plan & Prices</Link>
          <hr className="border-gray-300 my-0" />
           <Link to="/faq" className="p-2">FAQ</Link>
          <hr className="border-gray-300 my-0" />
          <Link to="/tutorial" className="p-2">Tutorial</Link>
          <hr className="border-gray-300 my-0" />
            <Link to="/contact-us" className="p-2">Contact us</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;