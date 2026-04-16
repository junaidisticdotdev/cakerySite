import React from 'react'
import { IoMdSearch } from "react-icons/io";
const Gallery = () => {
  return (
    <div>
      {/* our gallery */}
      <div className='h-[130vh] w-full flex flex-col items-center justify-center '>

{/* heading and category  */}
        <div className='mt-4'>
        <p className='italic font-medium text-[70px] '>Our Gallery</p>
        {/* Categories */}
        <div className='flex gap-10'>
            <p className='italic transition duration-300 hover:underline cursor-pointer text-[#f79dc3] underline text-[20px]'>All</p>
            <p className='italic transition duration-300 hover:underline cursor-pointer hover:text-[#f79dc3] text-[20px]'>Occasion</p>
            <p className='italic transition duration-300 hover:underline cursor-pointer hover:text-[#f79dc3] text-[20px]'>Bakery item</p>
            <p className='italic transition duration-300 hover:underline cursor-pointer hover:text-[#f79dc3] text-[20px]'>Cream type</p>
        </div>
</div>

{/* gallery images */}

<div className='flex h-full w-5/6 mx-4 mt-10'>
    {/* 1st and 2nd image  */}
    <div className='flex flex-col gap-4 w-1/3'>
    <div className='relative group'>
        <img src="/Media/gallery-1.jpg.jpeg" alt="" className='w-auto h-[300px]' />
       {/* overlay color */}
        <div className='inset-0 group-hover:bg-[#f79dc3]/60 transition duration-300 absolute '>
        </div>
        {/* icon */}
        <div className='flex items-center justify-center inset-0 absolute opacity-0 group-hover:opacity-100 transition duration-300'>  <IoMdSearch className='text-[60px] text-white' />
</div>
         </div>
         {/* second image */}

         <div className='relative group'>
        <img src="/Media/gallery-2.jpg.jpeg" alt="" className='w-auto h-[300px]' />
          {/* overlay color */}
        <div className='inset-0 group-hover:bg-[#f79dc3]/60 transition duration-300 absolute '>
        </div>
        {/* icon */}
        <div className='flex items-center justify-center inset-0 absolute opacity-0 group-hover:opacity-100 transition duration-300'>  <IoMdSearch className='text-[60px] text-white' />
</div>
        </div>
    </div>
    {/* 3rd mage */}
    <div className='w-1/3 flex items-center justify-center mx-4'>
    < div className='relative group'>
        <img src="/Media/gallery-3.jpg.jpeg" alt="" className='w-auto object-cover' />
           {/* overlay color */}
        <div className='inset-0 group-hover:bg-[#f79dc3]/60 transition duration-300 absolute '>
        </div>
        {/* icon */}
        <div className='flex items-center justify-center inset-0 absolute opacity-0 group-hover:opacity-100 transition duration-300'>  <IoMdSearch className='text-[60px] text-white' />
</div>
        </div> 
        </div>
    {/* 4th and 5th image  */}
    <div className='flex flex-col gap-4 w-1/3'>

    <div className='relative group '>
        <img src="/Media/gallery-4.jpg.jpeg" alt="" className='w-auto h-[300px]' />
             {/* overlay color */}
        <div className='inset-0 group-hover:bg-[#f79dc3]/60 transition duration-300 absolute '>
        </div>
        {/* icon */}
        <div className='flex items-center justify-center inset-0 absolute opacity-0 group-hover:opacity-100 transition duration-300'>  <IoMdSearch className='text-[60px] text-white' />
</div>
        </div>


        {/* fifth image */}
          <div className='relative group '>
        <img src="/Media/gallery-5.jpg.jpeg" alt="" className='w-auto h-[300px]' />
             {/* overlay color */}
        <div className='inset-0 group-hover:bg-[#f79dc3]/60 transition duration-300 absolute '>
        </div>
        {/* icon */}
        <div className='flex items-center justify-center inset-0 absolute opacity-0 group-hover:opacity-100 transition duration-300'>  <IoMdSearch className='text-[60px] text-white' />
</div>
        </div>
    </div>
</div>

      </div>

    </div>
  )
}

export default Gallery
