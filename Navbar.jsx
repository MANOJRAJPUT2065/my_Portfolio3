import React from 'react';
import logo from '../assets/logo.jpg';
import contactImg from '../assets/contact.png';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <div>
      {/* <nav className="bg-gradient-to-r from-purple-700 to-blue-500 shadow-lg py-4 px-6 flex justify-between items-center rounded-sm sticky top-0 z-10"> */}
      <nav className="bg-gradient-to-r from-purple-700 to-blue-500 shadow-lg py-4 px-6 flex justify-between items-center rounded-sm sticky top-0 z-20">

        {/* Logo */}
        <img src={logo} alt="Company logo" className="object-cover h-10 w-10 rounded-lg" />

        {/* Navigation Links */}
        <div className="flex gap-4 text-white">
          <Link
            activeClass='active' to="intro" smooth={true} duration={500} 
            offset={-100}
            className="text-xl hover:text-blue-300 hover:underline cursor-pointer">
            Home
          </Link>
          <Link to="Skill" smooth={true} duration={500} className="text-xl hover:text-blue-300 hover:underline cursor-pointer">
            About
          </Link>
          <Link to="works" smooth={true} duration={500} className="text-xl hover:text-blue-300 hover:underline cursor-pointer">
            Portfolio
          </Link>
          <Link to="clients" smooth={true} duration={500} className="text-xl hover:text-blue-300 hover:underline cursor-pointer">
            Clients
          </Link>
        </div>

        {/* Contact Button */}
        <button className="flex items-center bg-white rounded-lg p-2 hover:shadow-md hover:bg-gray-100 transition duration-200">
          <img src={contactImg} alt="Contact icon" className="w-8 h-8 rounded-md" />
          <a href="tel:+916006694414" className="text-lg font-semibold text-blue-500 ml-2 hover:underline">
            Contact
          </a>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
