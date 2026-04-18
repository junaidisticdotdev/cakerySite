import React from "react";
import { IoMdSearch } from "react-icons/io";

interface GalleryImageProps {
  src: string;
  className?: string;
}
// image card ki settings as component bana ke or props ma use kren gay

const GalleryImage = ({ src, className = "" } : GalleryImageProps) => (
  <div
    className={`relative group overflow-hidden rounded-xl cursor-pointer ${className}`}
  > 
    <img
      src={src}
      alt="Gallery Item"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* // overlay */}
    <div className="absolute inset-0 bg-[#f79dc3]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
        <div className="max-w-7xl h-auto mx-auto flex flex-col items-center justify-center ">

{/* heading */}
<div className="text-center mb-12">
        <p className="italic font-medium text-[45px] md:text-[70px]"> Our Gallery</p>

        {/* categories / responsive on mobile  */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-4 overflow-x-auto pb-2">

                <p className="italic transition duration-300 cursor-pointer text-[#f79dc3] text-[18px] md:text-[20px]">All</p>

                {["Occasion" , "Bakery item", "Cream type"].map((item) =>(
                        <p key={item} className="italic transition duration-300 hover:text-[#f79dc3] cursor-pointer text-[18px] md:text-[20px]">
                                {item}
                        </p>
                ))}
               
        </div>

</div>
{/* gallery section in grids  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-auto">
        {/* column 1 */}
        <div className="flex flex-col gap-4">
                <GalleryImage src="/Media/gallery-1.jpg.jpeg" className="h-[300px]" />

                <GalleryImage src="/Media/gallery-2.jpg.jpeg" className="h-[300px]" />
        </div>

        {/* column 2 */}
        <div className="flex flex-col">
                <GalleryImage src="/Media/gallery-3.jpg.jpeg" className="h-full min-h-[400px] lg:h-[616px]" />
        </div>

        {/* column 3 */}
        <div className="flex flex-col gap-4">
                <GalleryImage src="/Media/gallery-4.jpg.jpeg" className="h-[300px]" />
                <GalleryImage src="/Media/gallery-5.jpg.jpeg" className="h-[300px]" />
        </div>
</div>

        </div>

      </div>

    </div>
  );
};

export default Gallery;
