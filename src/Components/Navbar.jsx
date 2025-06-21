'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [active, setActive] = useState('Home');
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
  };

  return (
    <nav className="bg-[#0B1221] text-[#07A8ED] px-6 py-4 flex items-center justify-between shadow-lg border-b border-[#1E3A8A]">
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

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 font-semibold text-lg">
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

      {/* Call to Action */}
      <button 
        className="hidden md:block bg-[#07A8ED] hover:bg-[#3B82F6] text-[#0B1221] px-6 py-3 rounded-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg shadow-[#07A8ED]/20"
        onClick={() => router.push('/course')}
      >
        Enroll Now
      </button>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-[#07A8ED] hover:text-white transition"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;