'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/course' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleNavigation = (item) => {
    setActive(item.name);
    router.push(item.path);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#0B1221] text-[#07A8ED] px-6 py-4 shadow-lg border-b border-[#1E3A8A]">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div 
          className="text-3xl font-extrabold cursor-pointer select-none flex items-center"
          onClick={() => {
            setActive('Home');
            router.push('/');
          }}
        >
          <span className="text-[#07A8ED]">Bangla</span>
          <span className="text-white">Coder</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Navigation Links - moved to right */}
          <ul className="flex space-x-6 font-semibold text-lg">
            {navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => handleNavigation(item)}
                className={`
                  cursor-pointer px-4 py-2 rounded-lg transition-all duration-300
                  ${
                    active === item.name
                      ? 'text-white bg-[#1E3A8A]'
                      : 'text-[#E5E7EB] hover:text-white hover:bg-[#1E3A8A]/50'
                  }
                `}
              >
                {item.name}
              </li>
            ))}
          </ul>

          {/* Login Button */}
          <button 
            className="bg-transparent border border-[#07A8ED] text-[#07A8ED] px-6 py-2 rounded-lg font-bold hover:bg-[#07A8ED] hover:text-[#0B1221] transition-all duration-300"
            onClick={() => router.push('/login')}
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            className="bg-transparent border border-[#07A8ED] text-[#07A8ED] px-4 py-1 rounded-lg font-bold hover:bg-[#07A8ED] hover:text-[#0B1221] transition-all duration-300"
            onClick={() => router.push('/login')}
          >
            Login
          </button>
          
          <button 
            className="text-[#07A8ED] hover:text-white transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <ul className="flex flex-col space-y-3 font-semibold text-lg">
            {navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => handleNavigation(item)}
                className={`
                  cursor-pointer px-4 py-3 rounded-lg transition-all duration-300
                  ${
                    active === item.name
                      ? 'text-white bg-[#1E3A8A]'
                      : 'text-[#E5E7EB] hover:text-white hover:bg-[#1E3A8A]/50'
                  }
                `}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;