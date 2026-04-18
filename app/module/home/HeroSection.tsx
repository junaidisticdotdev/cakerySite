'use client';
import React from 'react';
import {motion} from 'framer-motion';
import { div } from 'framer-motion/client';

const HeroSection: React.FC =() => {
  return (
    <div>
      {/* hero section main container */}
      <div className='w-full h-[calc(100vh-96px)] overflow-hidden relative'>

        {/* bg video */}
        <video
        autoPlay
        muted 
        loop
        playsInline 
         src="/Media/hero-bg-video.mp4" 
         className='object-cover object-center z-0 absolute left-0 w-full h-full'></video>
         {/* overlay for image visibility  */}
         <div className='bg-black/10 absolute inset-0 z-10'></div>

         {/* hero image  */}
         <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[90%] md:w-4/6 flex justify-center'>
         <motion.img 
         src="/Media/section-1-img.webp"
         alt='Hero section logo image'
         className='h-auto max-h-[50vh] sm:max-h-[400px] md:max-h-[600px] lg:max-h-[800px] object-contain drop-shadow-2xl'

          //  {/* Hero bg image animation */}

           initial={{ x:"-100%", opacity: 0}}
           whileInView={{x:0, opacity: 1}}
           viewport={{once:true, amount: 0.1}}
           transition={{
            duration: 1.4,
            ease:"easeOut",
            delay: 0.5
           }}
           />
         </div>
      </div>
       </div>
  );
};

export default HeroSection;