"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      {/* Decorative Background Boxes (Light Blue/Pink shapes) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl z-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-1/4 w-64 h-[400px] border border-blue-200"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-blue-100"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Heading */}
        <h2 className="text-center text-[40px] md:text-[60px] font-serif tracking-widest text-[#414844] mb-12">
          ABOUT US
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Image with Overlap Effect */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Pinkish shadow/border behind image */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-pink-100 rounded-lg -z-10"></div>
            
            <img
              src="/Media/aboutUsHero.jpeg" // Apni image ka path yahan den
              alt="Rose Cupcake"
              className="w-full h-auto rounded-lg shadow-xl object-cover"
            />
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <div className="space-y-6 text-[#777] italic text-lg md:text-xl leading-relaxed font-serif">
              <p>
                Owned by a famous Vermont baker, Denise Levine, our place is proud to be one 
                of San Diego, California’s finest cake, and pastry bakeries.
              </p>
              
              <p>
                Our cake bakery adds only the freshest ingredients to make our baked goods 
                taste a fresh-out-of-oven like experience. An experience, that simply melts 
                in your mouth.
              </p>

              <p>
                For instance, when we bake our famous whipped cream cakes, we use only pure 
                cream and the best brown sugar on the market. Also, we always buy the freshest 
                fruits to make our pie fillings or our pastry menu items...
              </p>
            </div>

            {/* Read More Button */}
            <button className="mt-10 px-10 py-3 bg-[#f79dc3] text-white rounded-full text-lg font-medium hover:bg-[#e08caf] transition-colors shadow-lg">
              Read More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;