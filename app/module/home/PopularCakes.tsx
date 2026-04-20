'use client';
import { motion } from 'framer-motion';
import React from 'react';

const PopularCakes = () => {
  const cakeVarieties = [
    {
      title: "Confetti Cake with Vanilla Frosting",
      desc: "A childhood favorite made larger than life, our celebration sheet cake features delicious homemade sprinkles.",
      price: "$5.45"
    },
    {
      title: "Flat Marshmallow Shapes",
      desc: "Layers of shaped marshmallow candies — bunnies, chicks, and simple flowers — make a memorable gift.",
      price: "$6.50"
    },
    {
      title: "Spicy Chocolate Cookies",
      desc: "Everything’s nice about Mexican hot chocolate, which is why we dreamed up a cookie that showcases its qualities.",
      price: "$4.35"
    },
    {
      title: "Pistachio Cannoli Cake",
      desc: "This dramatic four-layer cake is inspired by the flavors of Sicilian-style cannoli, which is stuffed with ricotta.",
      price: "$4.99"
    }
  ];

  return (
    <section className='h-auto w-full bg-[#e1f7ff] mt-10 relative overflow-hidden'>
      
      {/* Background Color Div - Mobile pe height full rakhi hai */}
      <div className=' w-full h-[90%] sm:h-4/5 z-0 absolute bottom-0'></div>

 {/* Heading */}
          <div className='flex flex-col items-center justify-center leading-tight mb-6 text-center lg:text-left'>
            <h2 className='italic mt-4 font-medium text-[40px] md:text-[55px] lg:text-[65px] text-[#414844]'>
              MOST POPULAR
            </h2>
            <h2 className='italic font-medium text-[40px] md:text-[55px] lg:text-[65px] text-[#414844]'>
              CAKES WE HAVE!
            </h2>
          </div>
      {/* Main Content Container */}
      <div className='relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-10 lg:py-12'>
        
       
        {/* Left Side: Content */}
        <div className='w-full lg:w-3/5 flex flex-col'>
          
          

          {/* Varieties List */}
          <div className='flex flex-col space-y-8 w-full lg:max-w-2xl'>
            {cakeVarieties.map((cake, index) => (
              <motion.div 
                key={index}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className='flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all group'
              >
                <div className='flex flex-col space-y-4 pr-4'>
                  <h3 className='font-semibold italic text-xl md:text-2xl text-[#414844] group-hover:text-[#f79dc3] transition-colors'>
                    {cake.title}
                  </h3>
                  <p className='text-gray-600 text-sm md:text-base italic'>
                    {cake.desc}
                  </p>
                </div>
                
                {/* Price Tag Box */}
                <div className='mt-4 sm:mt-0 bg-[#f79dc3] text-white px-4 py-2 rounded-lg font-bold italic text-xl shadow-sm'>
                  {cake.price}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side / Bottom: Chef Image */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='w-full lg:w-2/5 flex justify-center lg:justify-end mt-12 lg:mt-0'
        >
          <img 
            src="/Media/popular-cake.jpg.jpeg" 
            alt="Popular Cake" 
            className='w-[300px] md:w-[400px] lg:w-full object-contain rounded-3xl'
          />
        </motion.div>

      </div>
    </section>
  );
};

export default PopularCakes;