"use client";
import { motion } from "framer-motion";

import React from "react";

const StartedBaking = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* main section for how we started baking  */}
      <div className="min-h-screen relative flex flex-col sm:flex-row justify-between sm:px-0 py-0">
        {/* background color div */}
        <div className="bg-[#fbf6eb] absolute w-full h-[80vh] z-0 bottom-0 "></div>

        {/* left side for detailed paragraph */}
        <motion.div className="w-full sm:w-1/2 z-20"
        
        initial={{ x:-100, opacity:1}}
        whileInView={{ x:0, opacity:1}}
        viewport={{once: false, amount:0.3}}
        
        transition={{
          duration: 1.2,
          ease: "easeOut",
          delay: 0.4
        }}>
          {/* heading */}
          <div className="flex flex-col leading-[1] px-2 sm:px-8 lg:px-10 space-y-2 max-w-lg">
            <p
              className="italic font-medium 
text-[40px] sm:text-[60px] lg:text-[60px] whitespace-nowrap"
            >
              How We
            </p>
            <p className="italic font-medium text-[40px] sm:text-[60px] lg:text-[60px] whitespace-nowrap">
              Started Baking?
            </p>
          </div>
          {/* sub div for aligning detailed paragraphs */}
          <div className="flex flex-col px-5 sm:px-10 space-y-4 max-w-lg mt-4 sm:mt-4">
            <p className="italic text-xl">
              Our story began in 2010, when Anna Francis, the founder of
              Dolcetti, baked her fist cupcakes for sale and offered the bakery
              to the nearest shop
            </p>
            <p className="italic text-xl">
              The cakery was awesome and she was proposed to become a regular
              supplier of sweet bakery. Anna expanded the assortment and created
              promotional Instagram account.
            </p>
            <p className="italic text-xl">
              Soon she decided to gather a team of like-minded people and start
              sher own sweet brand and open her own store.
            </p>
            <button className="italic rounded-3xl px-6 py-2 mt-2 whitespace-nowrap cursor-pointer text-white hover:bg-black duration-300 transition-all font-medium w-[120px] bg-[#f79dc3] border-none">
              Read More
            </button>
          </div>
        </motion.div>


        {/* chef image on right */}
        <div className="w-full flex justify-center sm:items-end sm:w-1/2 overflow-hidden mt-10 sm:mt-0 z-10">
          <motion.img
            src="/Media/master-chef.webp"
            alt="Master Chef"
            className=" w-[300px] sm:w-[400px] lg:w-[450px] h-auto object-contain"

            initial={{ x:100, opacity:0 }}
            whileInView={{ x:0, opacity:1 }}
            viewport={{once: false, amount: 0.3 }}

            transition={{
              duration:1.2,
              ease: "easeOut",
              delay: 0.4
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StartedBaking;
