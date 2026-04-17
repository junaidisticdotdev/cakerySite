import { div } from "framer-motion/client";
import React from "react";
import { IoMdSearch } from "react-icons/io";

// image card ki settings as component bana ke or props ma use kren gay

const GalleryImage = ({ src, className = "" }) => (
  <div
    className={`relative group overflow-hidden rounded-xl cursor-pointer ${className}`}
  >
    <img
      src={src}
      alt="Gallery Item"
      className="w-full h-full object-cover transition-transform duration-500 group=hover:scale-110"
    />
    // overlay
    <div className="absolute inset-0 bg-[#f79dc3]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center jusitify-center">
      <IoMdSearch className="text-6xl text-white transform scale-50 group-hover:scale-100 transition-transform duration-300" />
    </div>
  </div>
);

const Gallery = () => {
  return (
    <div>

      {/* main for bg */}
      <div className="py-20 px-4 md:px-10 lg:px-20 bg-white min-h-screen">

        {/* sub for aligning items */}
        <div className="ma-w-7xl mx-auto flex flex-col items-center ">

        </div>

      </div>

    </div>
  );
};

export default Gallery;
