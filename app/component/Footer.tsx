import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { BsTiktok } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className='w-full h-auto py-10 bg-white flex flex-col sm:flex-row items-center justify-between px-20'>
{/* logo image and copyright */}
        <div className='flex gap-4 items-center justify-center'>
<img src="/Media/logo.webp" alt="" />
<p className='text-gray-600'>Zemez © . All rights reserved.</p>
        </div>


        {/* social media links */}
        <div className='flex gap-4'>
< FaSquareInstagram className=' opacity-80 hover:opacity-100 text-2xl cursor-pointer hover:text-[#f79dc3] transition duration-300 ' />
< FaFacebookF className='text-2xl opacity-80 hover:opacity-100 cursor-pointer hover:text-[#f79dc3] transition duration-300' />
< BsTiktok className='text-2xl opacity-80 hover:opacity-100 cursor-pointer hover:text-[#f79dc3] transition duration-300'  />
< FaTwitter className='text-2xl opacity-80 hover:opacity-100 cursor-pointer hover:text-[#f79dc3] transition duration-300'  />
< FaLinkedinIn className='text-2xl opacity-80 hover:opacity-100 cursor-pointer hover:text-[#f79dc3] transition duration-300'  />


        </div>

      </div>
    </div>
  )
}

export default Footer
