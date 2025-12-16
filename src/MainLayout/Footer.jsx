import React from "react";
import Logo from "../Components/UI/Logo";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="bg-black dark:bg-gray-900 text-white dark:text-gray-300 px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left: Logo & Description */}
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-gray-400 text-sm">
            LearningHub is your ultimate platform for learning web development,
            programming, and more. Stay updated and grow your skills every day!
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors duration-300">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors duration-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <a href="/" className="hover:text-blue-500 transition-colors duration-300">Home</a>
          <a href="/html" className="hover:text-blue-500 transition-colors duration-300">HTML</a>
          <a href="/css" className="hover:text-blue-500 transition-colors duration-300">CSS</a>
          <a href="/javascript" className="hover:text-blue-500 transition-colors duration-300">JavaScript</a>
          <a href="/java" className="hover:text-blue-500 transition-colors duration-300">Java</a>
          <a href="/python" className="hover:text-blue-500 transition-colors duration-300">Python</a>
        </div>

        {/* Right: Address / Contact */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">Contact Info</h3>
          <p><FaLocationDot className="inline mr-2" />Bogura, Rajshahi, Dhaka, Bangladesh</p>
          <p> <MdMarkEmailUnread className="inline mr-2" /> jrashidulislam0103@gmail.com</p>
          <p><FaGithub className="inline mr-2" /> Github</p>
          <p> <AiOutlineGlobal className="inline mr-2" /> www.square.edu.bd</p>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} LearningHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
