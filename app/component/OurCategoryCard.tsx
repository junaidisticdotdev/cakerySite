'use client';
import React from 'react'

type OurCategoryCardprops = {
  image: string;
  title: string;
  count: number;
};
const OurCategoryCard = ({ image, title, count} : OurCategoryCardprops) => {
  return (
    <div className='w-[280px] group relative p-6 mx-auto flex flex-col items-center text-center rounded-sm transition duration-300 overflow-hidden'>
      
      {/* image */}
      <div className='w-full h-[320px] flex items-center justify-center overflow-hidden mb-4'>
        <img src={image} alt={title} 
        className='w-full h-full object-cover group-hover:scale-110 transition-all  duration-400' />
      </div>
      {/* title */}
      <div className='text-2xl absolute bottom-20 cursor-pointer transition-all duration-300 hover:text-[#f79dc3] font-semibold italic tracking-wide text-gray-800'>
        {title}
      </div>
      {/* pink line divider */}
      <div className='w-20 h-[2px] bg-pink-400 my-3'></div>
      {/* number of products */}
      <p className='text-gray-800 italic text-lg'> {count} Products</p>
    </div>
  )
}

export default OurCategoryCard
