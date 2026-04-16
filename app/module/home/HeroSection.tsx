'use client';
import React from 'react'
import { motion } from 'framer-motion';
const HeroSection = () => {
  return (
    <div>
      {/* hero Section */}
      <div className='w-full h-[calc(100vh-96px)] overflow-hidden relative' >

<video
autoPlay
muted
loop
playsInline
src="/Media/hero-bg-video.mp4" className='object-cover object-center z-0 absolute left-0 w-full h-full'></video>

{/* over paly pink color . ta ke main image waza nazar aye  */}
<div className='bg-black/10 absolute inset-0 z-10'></div>


{/* Hero Section overlay main image sirf md se oper show ho gee */}

<div className=' hidden sm:block w-5/6 md:w-4/6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 '>
    <motion.img src="/Media/section-1-img.webp" alt="Hero Section Logo Image" className=' h-[350px] sm:h-[400px] md:h-[600px] lg:h-[800px] object-contain  rounded-2xl'
    initial = {{ x : "-100%", y:0 , opacity: 0}}
whileInView ={{ x : 0 , y: 0, opacity: 1,  }}

viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}


transition={{
    duration: 1.4,
    ease: "easeOut",
    delay: 0.5
}}
 />
</div>

{/* hero section image sm sa nichy nazar aye gee */}
<div className='block sm:hidden w-full mx-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 '>
<img src="/Media/section-1-img.webp" alt="Hero Section Logo Image" className=' object-contain'  />
</div>
      </div>


    </div>
  )
}

export default HeroSection
