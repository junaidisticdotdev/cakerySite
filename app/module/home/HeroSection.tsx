'use client';
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section>
      {/* Hero section main container */}
      <div className='w-full h-[calc(100vh-96px)] overflow-hidden relative bg-black'>

        {/* Background Video */}
        <video
          autoPlay
          muted 
          loop
          playsInline 
          src="/Media/hero-bg-video.mp4" 
          className='object-cover object-center z-0 absolute inset-0 w-full h-full'
        />

        {/* Overlay for image visibility */}
        <div className='bg-black/20 absolute inset-0 z-10' />

        {/* Hero image container and animation */}
        <div className='absolute inset-0 z-20 flex items-center justify-center p-4'>
          <motion.img 
            src="/Media/section-1-img.webp"
            alt='Hero section logo image'
            className='w-full max-w-[300px] sm:max-w-[450px] md:max-w-[650px] lg:max-w-[850px] h-auto object-contain drop-shadow-2xl'
            
            
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3  }}

            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.4
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;