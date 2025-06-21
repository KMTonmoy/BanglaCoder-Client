import React from 'react';
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiSecurePaymentLine } from 'react-icons/ri';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Online image URLs (replace with high-quality official logos if needed)
  const bKashLogoUrl = "https://play-lh.googleusercontent.com/1CRcUfmtwvWxT2g-xJF8s9_btha42TLi6Lo-qVkVomXBb_citzakZX9BbeY51iholWs";
  const nagadLogoUrl = "https://play-lh.googleusercontent.com/9ps_d6nGKQzfbsJfMaFR0RkdwzEdbZV53ReYCS09Eo5MV-GtVylFD-7IHcVktlnz9Mo";

  return (
    <footer className="bg-[#0B1221] text-[#E5E7EB] border-t border-[#1E3A8A]/50">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section (unchanged) */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#07A8ED]">BanglaCoder</h3>
            <p className="text-sm">
              বাংলা ভাষায় ওয়েব ডেভেলপমেন্ট শেখার সবচেয়ে বড় প্ল্যাটফর্ম। প্রফেশনাল কোর্স শিখুন সহজ ভাষায়।
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#E5E7EB] hover:text-[#07A8ED] transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-[#E5E7EB] hover:text-[#07A8ED] transition-colors">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="text-[#E5E7EB] hover:text-[#07A8ED] transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-[#E5E7EB] hover:text-[#07A8ED] transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links (unchanged) */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">দ্রুত লিংক</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#07A8ED] transition-colors">হোম</a></li>
              <li><a href="#" className="hover:text-[#07A8ED] transition-colors">কোর্সসমূহ</a></li>
              <li><a href="#" className="hover:text-[#07A8ED] transition-colors">আমাদের সম্পর্কে</a></li>
              <li><a href="#" className="hover:text-[#07A8ED] transition-colors">ব্লগ</a></li>
              <li><a href="#" className="hover:text-[#07A8ED] transition-colors">যোগাযোগ</a></li>
            </ul>
          </div>

          {/* Payment Methods (Updated with Images) */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <RiSecurePaymentLine className="mr-2" />
              পেমেন্ট মাধ্যম
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1F2937] p-3 rounded-lg flex items-center justify-center">
                <img 
                  src={bKashLogoUrl} 
                  alt="bKash" 
                  className="h-8 object-contain" 
                />
              </div>
              <div className="bg-[#1F2937] p-3 rounded-lg flex items-center justify-center">
                <img 
                  src={nagadLogoUrl} 
                  alt="Nagad" 
                  className="h-8 object-contain" 
                />
              </div>
              <div className="bg-[#1F2937] p-3 rounded-lg flex items-center justify-center col-span-2">
                <span className="text-sm">SSLCOMMERZ (কার্ড/ব্যাংক)</span>
              </div>
            </div>
          </div>

          {/* Contact Info (unchanged) */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">যোগাযোগ</h3>
            <ul className="space-y-2 text-sm">
              <li>ইমেইল: support@banglacoder.com</li>
              <li>ফোন: +৮৮০ ১৬XX-XXXXXX</li>
              <li>ঠিকানা: ঢাকা, বাংলাদেশ</li>
            </ul>
          </div>
        </div>

        {/* Copyright Section (unchanged) */}
        <div className="border-t border-[#1E3A8A]/50 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs md:text-sm">
            &copy; {currentYear} BanglaCoder. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs md:text-sm hover:text-[#07A8ED] transition-colors">প্রাইভেসি পলিসি</a>
            <a href="#" className="text-xs md:text-sm hover:text-[#07A8ED] transition-colors">টার্মস অ্যান্ড কন্ডিশন</a>
            <a href="#" className="text-xs md:text-sm hover:text-[#07A8ED] transition-colors">রিফান্ড পলিসি</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;