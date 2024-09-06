// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="sticky top-0 bg-white shadow-lg py-4 z-50 bg-gradient-to-b from-[#ffffff] to-[#e0a59b]">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold cursor-pointer hover:text-red-500 transition ease-in-out duration-300">DelishBites</Link>
      <ul className="hidden md:flex space-x-8">
        <li><Link to="/" className="hover:text-red-500 font-[700] transition ease-in-out duration-300">Home</Link></li>
        <li><Link to="/menu" className="hover:text-red-500 font-[700] transition ease-in-out duration-300">Menu</Link></li>
        <li><Link to="/about" className="hover:text-red-500 font-[700] transition ease-in-out duration-300">About Us</Link></li>
        <li><Link to="/contact" className="transition ease-in-out duration-300 hover:text-red-500 font-[700]">Contact Us</Link></li>
      </ul>
      {/* Mobile Menu Button */}
    </div>
  </nav>
);

export default Navbar;
