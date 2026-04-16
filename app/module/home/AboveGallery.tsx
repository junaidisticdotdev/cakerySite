import React from 'react'

const AboveGallery = () => {
  return (
    <div>
      {/* Abovr gallery section */}
      <div className='w-full h-[90vh] relative overflow-hidden'>
        <div className='absolute z-10 w-full h-full'> 
        <img src="/Media/hero-bg.jpg.jpeg" alt="Love BG image" className='w-full h-full object-cover ' /> </div>
{/* overlaping card  */}
<div className='absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[50vh] bg-[#d4e4d7]/70 rounded-3xl'>
{/* div for para */}
<div className=' h-full w-full flex items-center justify-center text-center'>
    <p className='italic text-[70px] text-[#414844] '>Bake-a-cake is a family <br /> owned bakery, with treasures <br /> the atmosphere.</p>
</div>
</div>
      </div>
    </div>
  )
}

export default AboveGallery
