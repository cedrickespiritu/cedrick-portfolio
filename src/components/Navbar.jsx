import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detect scroll position to toggle fixed navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle clicking a menu item
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu on click
  };

  return (
    <nav
      className={`bg-primary p-4 w-full z-50 transition-all ease-in-out duration-500 ${
        isFixed ? 'fixed top-0 shadow-lg' : 'relative'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-bold flex items-center gap-5">
          <span className="logo-container">
            <a href="#hero">
              <img src="/assets/img/ce-logo.png" className="w-[50px]" alt="logo" />
            </a>
          </span>
          <span>Cedrick Portfolio</span>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none md:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Links */}
        <div
          className={`absolute top-full left-0 w-full bg-primary md:static md:flex md:items-center md:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="md:flex md:space-x-4 text-center">
            <li><a href="#about" className="block text-white px-4 py-4 hover:underline" onClick={handleLinkClick}>About</a></li>
            <li><a href="#project" className="block text-white px-4 py-4 hover:underline" onClick={handleLinkClick}>Project</a></li>
            <li><a href="#contact" className="block text-white px-4 py-4 hover:underline" onClick={handleLinkClick}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
