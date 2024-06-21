import React from 'react';

const Footer = () => {
  return (
    <div className="p-4 bg-slate-800">
      <p className="text-base sm:text-lg lg:text-xl text-center text-white hover:te">
        Thank you for visiting my portfolio.
      </p>
      <div className="flex justify-center mt-4 space-x-4">
        <a href="https://github.com/Shiwanikatiyar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/shiwanikatiyar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
          LinkedIn
        </a>
        <a href="mailto:shiwanikatiyarknj@gmail.com" className="text-white hover:text-gray-400 transition-colors">
          Email
        </a>
      </div>
    </div>
  );
}

export default Footer;
