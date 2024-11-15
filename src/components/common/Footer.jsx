import React from 'react'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-4 mt-5">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        <div className="flex space-x-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-black hover:text-pink-500" size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn
              className="text-black hover:text-pink-500" size={30} />
          </a>
        </div>
        <p className="text-gray-400 text-sm mt-4">
          © {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer