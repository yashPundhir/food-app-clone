// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="sticky top-0 bg-white shadow-md py-4 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">DelishBites</h1>
      <ul className="hidden md:flex space-x-8">
        <li><Link to="/" className="hover:text-red-500">Home</Link></li>
        <li><Link to="/menu" className="hover:text-red-500">Menu</Link></li>
        <li><Link to="/about" className="hover:text-red-500">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-red-500">Contact Us</Link></li>
      </ul>
      {/* Mobile Menu Button */}
    </div>
  </nav>
);

export default Navbar;
