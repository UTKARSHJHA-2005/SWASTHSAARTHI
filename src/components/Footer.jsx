// Footer component
import React, { useEffect } from "react";
// Icons
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import logo from "../assets/logo.png"; // Image
import Aos from "aos"; // Animations
import "aos/dist/aos.css";

const Footer = () => {
  // Animation on component mount
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <footer className="bg-white rounded-lg py-12 px-8 md:px-16 shadow-md shadow-blue-400 text-[#14162E]">
      <div className="container mx-auto flex flex-wrap justify-between gap-6">
        {/* Logo & Social Links */}
        <div data-aos="fade-right" className="max-w-xs">
          <img src={logo} alt="Swathsarthi Logo" className="h-16 w-16 mb-2" />
          <h2 className="text-2xl font-serif font-bold text-blue-700">SWASTHSAARTHI</h2>
          <div className="flex gap-3 text-blue-700 mt-3">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, index) => (
              <Icon key={index} className="cursor-pointer hover:text-blue-900 transition" />
            ))}
          </div>
        </div>
        {/* Footer Sections */}
        <div data-aos="zoom-in" className="grid grid-cols-2 ml-2 md:grid-cols-4 gap-1 text-gray-700 text-[20px]">
          {[
            { title: "Product", links: ["Features", "Pricing", "Case studies", "Reviews", "Updates"] },
            { title: "Company", links: ["About", "Contact us", "Careers", "Culture", "Blog"] },
            { title: "Support", links: ["Getting started", "Help center", "Server status", "Report a bug", "Chat support"] },
          ].map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold text-blue-700">{section.title}</h3>
              <ul className="mt-2 space-y-2">
                {section.links.map((link, i) => (
                  <li key={i} className="hover:text-blue-900 cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
          ))}
          {/* Contact Info */}
          <div data-aos="zoom-out">
            <p className="text-lg text-center font-semibold text-blue-700">Contact Us</p>
            <div className="mt-2 space-y-2 text-gray-600">
                <div className="flex flex-col items-center gap-2">
                  <HiMail className="text-blue-700" /> contact@Swasthsarthi.com
                  <HiPhone className="text-blue-700" /> (+91)9875634267
                  <HiLocationMarker className="text-blue-700" /> Eldeco Center, New Delhi, India
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div data-aos= "fade-right" className="border-t border-gray-300 mt-8 pt-5 text-center text-gray-600 text-sm">
        <p>&copy; 2025 SWASTHSARTHI. All Rights Reserved | 
          <span className="text-blue-700 cursor-pointer hover:underline"> Terms & Conditions</span> |
          <span className="text-blue-700 cursor-pointer hover:underline"> Privacy Policy</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
