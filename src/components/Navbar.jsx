import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png"; // Logo
import aos from "aos"; // Animation On Scroll
import "aos/dist/aos.css"; // Animation On Scroll CSS
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize AOS on component mount
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <nav className="flex justify-between items-center bg-[#f6f8ff] px-8 md:px-16 py-4 shadow-md shadow-blue-400 relative">
      {/* Logo Section */}
      <div data-aos="fade-left" className="flex items-center gap-3">
        <img src={logo} alt="SwathSarthi Logo" className="h-9 w-9" />
        <span className="text-[22px] font-bold font-serif text-blue-700 tracking-tight">SWASTHSAARTHI</span>
      </div>
      {/* Navigation Links */}
      <div data-aos="slide-up" className="hidden md:flex gap-6 text-gray-800 text-[17px]">
        <Link to ="/"><span className="cursor-pointer font-semibold text-black">Home</span></Link>
        <Link to="Features" smooth={true} duration={800} className="cursor-pointer hover:text-black">Features</Link>
        <Link to="product" smooth={true} duration={800} className="cursor-pointer hover:text-black">Products</Link>
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-blue-700">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#f6f8ff] shadow-md md:hidden flex flex-col items-center py-4 gap-4 text-gray-800 text-[17px]">
          <span className="cursor-pointer font-semibold text-black">Home</span>
          <Link to="Features" smooth={true} duration={800} onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-black">Features</Link>
          <Link to="product" smooth={true} duration={800} onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-black">Products</Link>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md font-semibold shadow-sm transition w-full max-w-[200px]" onClick={() => setIsOpen(false)}>
            Log In
          </button>
        </div>
      )}
      {/* Log In Button */}
      <button data-aos="fade-right" className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md font-semibold shadow-sm transition">
        Log In
      </button>
    </nav>
  );
};

export default Navbar;
