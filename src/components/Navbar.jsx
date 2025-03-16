import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Logo
import aos from "aos"; // Animation On Scroll
import "aos/dist/aos.css"; // Animation On Scroll CSS

const Navbar = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <nav className="flex justify-between items-center bg-[#f6f8ff] px-8 md:px-16 py-4 shadow-md shadow-blue-400">
      {/* Logo Section */}
      <div data-aos="fade-left" className="flex items-center gap-3">
        <img src={logo} alt="SwathSarthi Logo" className="h-9 w-9" />
        <span className="text-[22px] font-bold font-serif text-blue-700 tracking-tight">SWASTHSAARTHI</span>
      </div>
      {/* Navigation Links */}
      <div data-aos="slide-up" className="hidden md:flex gap-6 text-gray-800 text-[17px]">
        <span className="cursor-pointer font-semibold text-black">Home</span>
        <Link to="/dashboard"><span className="cursor-pointer hover:text-black">Dashboard</span></Link>
        <span className="cursor-pointer hover:text-black">About Us</span>
      </div>
      {/* Log In Button */}
      <button data-aos="fade-right" className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md font-semibold shadow-sm transition">
        Log In
      </button>
    </nav>
  );
};

export default Navbar;
