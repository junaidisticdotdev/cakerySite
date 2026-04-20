import React from 'react'
import { FaSquareInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { BsTiktok } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      {/* Responsive Classes:
          - flex-col (mobile pe upar neeche) 
          - sm:flex-row (bari screen pe side-by-side)
          - px-6 (mobile pe kam padding)
          - md:px-20 (desktop pe zyada padding)
      */}
      <div className='max-w-[1400px] mx-auto py-10 flex flex-col sm:flex-row items-center justify-between px-6 md:px-20 gap-8 sm:gap-0'>
        
        {/* Logo and Copyright */}
        <div className='flex flex-col sm:flex-row gap-4 items-center justify-center text-center sm:text-left'>
          <img src="/Media/logo.webp" alt="Logo" className="w-32 md:w-auto" />
          <p className='text-gray-500 text-sm md:text-base'>
            Zemez © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>

        {/* Social Media Links */}
        <div className='flex gap-6 items-center justify-center'>
          <a href="#" aria-label="Instagram">
            <FaSquareInstagram className='opacity-70 hover:opacity-100 text-2xl cursor-pointer hover:text-[#f79dc3] transition duration-300' />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebookF className='opacity-70 hover:opacity-100 text-xl cursor-pointer hover:text-[#f79dc3] transition duration-300' />
          </a>
          <a href="#" aria-label="Tiktok">
            <BsTiktok className='opacity-70 hover:opacity-100 text-xl cursor-pointer hover:text-[#f79dc3] transition duration-300' />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter className='opacity-70 hover:opacity-100 text-xl cursor-pointer hover:text-[#f79dc3] transition duration-300' />
          </a>
          <a href="#" aria-label="Linkedin">
            <FaLinkedinIn className='opacity-70 hover:opacity-100 text-xl cursor-pointer hover:text-[#f79dc3] transition duration-300' />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer