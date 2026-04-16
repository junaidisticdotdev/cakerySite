'use client';
import { motion } from 'framer-motion';

import React from 'react'

const PopularCakes = () => {
  return (
    <div>
      {/* main section for how we started baking  */}
      <div className='min-h-screen w-full mt-14 relative overflow-hidden'>
        {/* background color div */}
        <div className='bg-[#e1f7ff] w-full h-9/10 z-10 absolute bottom-0 '></div>

        {/* chef image on right */}
        <div className='w-2/5 h-full z-20 absolute bottom-0 right-4'>
        <img src="/Media/popular-cake.jpg.jpeg" alt="Master Chef" className='w-auto'
      /></div>

{/* left side for detailed paragraph */}
<div className='w-3/5 absolute z-30'>

{/* heading */}
<div className='flex flex-col leading-[1] py-4 px-5'>
<p className='italic font-medium text-[50px]'>MOST POPULAR</p>
<p className='italic font-medium text-[50px]'>CAKES WE HAVE!</p>
</div>


{/* sub div for aligning detailed paragraphs */}
<div className='flex flex-col mx-12 space-y-3 w-4/5'>

{/* popular cakes details and prices */}

<div className='flex items-center justify-center mt-2'>
    {/* first para and heading */}
    <div className='flex flex-col space-y-2'>
    <p className='font-medium italic text-3xl '> Confetti Cake with Vanilla Frosting</p>
    <p> A childhood favorite made larger than life, our celebration sheet cake features delicious homemade sprinkles.</p> </div>
    {/* price */}
    <div> <p className='text-[30px] italic'>  $5.45 </p></div>
</div>

{/* second price para and heading  */}
<div className='flex items-center justify-center mt-2'>
    {/* para and heading */}
    <div className='flex flex-col space-y-2'>
    <p className='font-medium italic text-3xl '> Flat Marshmallow Shapes</p>
    <p>Layers of shaped marshmallow candies — bunnies, chicks, and simple flowers — make a memorable gift in a beribboned box</p> </div>
    {/* price */}
    <div> <p className='text-[30px] italic'>  $6.50 </p></div>
</div>

{/* Third price price para and headings */}
<div className='flex items-center justify-center mt-2'>
    {/* para and heading */}
    <div className='flex flex-col space-y-2'>
    <p className='font-medium italic text-3xl '> Spicy Chocolate Cookies</p>
    <p> Everything’s nice about Mexican hot chocolate, which is why we dreamed up a cookie that showcases its signature qualities.</p> </div>
    {/* price */}
    <div> <p className='text-[30px] italic'>  $4.35 </p></div>
</div>

{/* Fourth price para and heading */}
<div className='flex items-center justify-center mt-2'>
    {/* para and heading */}
    <div className='flex flex-col space-y-2'>
    <p className='font-medium italic text-3xl '> Pistachio Cannoli Cake</p>
    <p> This dramatic four-layer cake is inspired by the flavors of Sicilian-style cannoli, which is stuffed with ricotta</p> </div>
    {/* price */}
    <div> <p className='text-[30px] italic'>  $4.99 </p></div>
</div>

</div>

</div>
      </div>


    </div>
  )
}

export default PopularCakes
