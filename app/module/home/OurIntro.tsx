'use client';
import React from 'react'
import { motion } from 'framer-motion';
const OurIntro = () => {
  return (
    <div className='w-full min-h-screen relative overflow-x-hidden'>
      {/* our intro / brand explanation */}

      <div className='relative w-full min-h-screen flex flex-col items-center justify-center'>

{/* back pe blue vox */}
<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#e0f7ff] w-[200px] h-[250px] sm:w-[280px] sm:h-[350px] md:w-[350px] md:h-[400px]  rounded-2xl'>

</div>


{/* glass ice cream wali image right side se */}

<div className='absolute right-2 sm:right-10 md:right-20 bottom-10 z-20 '>
    <img src="/Media/hero-bg-1.jpeg" alt="Glass Pink Icecream" className='
    w-auto h-[250px] sm:h-[350px] md:h-[400px] lg:h-[400px] object-contain rounded-2xl'
 
 />
</div>

<div className='absolute block sm:hidden left-2 top-10 z-30 '>
    <img src="/Media/hero-section-slider.jpg.jpeg" alt="ColorFull Lollipops" className='rounded-2xl w-auto h-[250]' />
</div>

{/* top colorful lollipops wali image */}

<div className='absolute hidden sm:block left-2 sm:left-10 md:left-20 top-10 z-30 '>
    <img src="/Media/hero-section-slider.jpg.jpeg" alt="ColorFull Lollipops" className='w-auto h-[250px] sm:h-[350px] md:h-[400px] lg:h-[400px] object-contain rounded-2xl'
 
 />
</div>

{/* explanantion paragraph */}

<motion.div className='absolute hidden sm:block bg-gray-100/60 rounded-2xl sm:bottom-10 md:bottom-20 z-50 flex items-center justify-center'

   initial = {{ x : "-100%", y:0 , opacity: 0}}
whileInView ={{ x : 0 , y: 0, opacity: 1,  }}

viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}


transition={{
    duration: 1.4,
    ease: "easeOut",
    delay: 0.5
}}>
  <div className=' p-6 rounded-2xl w-[90%] md:w-[600px] mx-auto'>
    <p className='text-2xl italic text-gray-900'>
      Dolcetti’s ultimate goal is to satisfy our clients and their sweet taste buds. Our cakery provides superior products, being both attractive and yummy! Our regular clients state we are the best, but we never stop developing our recipes. We continue exploring this fascinating sweet world!
    </p>
  </div>
</motion.div>

{/* paragraph sm se nichy nazar aye ga bas */}
<div className='absolute block sm:hidden mx-6 bg-gray-100/60 rounded-2xl sm:bottom-10 md:bottom-20 z-50 flex items-center justify-center'>

 <div className=' p-6 rounded-2xl w-[90%] md:w-[600px] mx-auto'>
    <p className='text-2xl italic text-gray-900'>
      Dolcetti’s ultimate goal is to satisfy our clients and their sweet taste buds. Our cakery provides superior products, being both attractive and yummy! Our regular clients state we are the best, but we never stop developing our recipes. We continue exploring this fascinating sweet world!
    </p>
  </div>
    </div>


      </div>


    </div>
  )
}

export default OurIntro
