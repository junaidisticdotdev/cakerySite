import OurCategoryCard from '@/app/component/OurCategoryCard'
import React from 'react'

const OurCategories = () => {
  return (
    <div>
      {/* Our categories */}
      <div className='flex flex-col items-center justify-center min-h-screen w-full overflow-hidden '>
        <p className='italic font-medium text-[40px] md:text-[60px] lg:text-[70px] px-4 md:px-0'>Our Categories</p>

<div className='flex flex-col md:flex-row'>
  {/* at md two cards shown */}
  <div className='flex flex-col sm:flex-row'>
        <OurCategoryCard
        image="/Media/cupcake-home.webp"
        title="CUPCAKES"
        count={64}/>

        <OurCategoryCard
        image="/Media/brownie-home.webp"
        title="BROWNIES"
        count={64}/> </div>

<div className='flex flex-col sm:flex-row'>
        <OurCategoryCard
        image="/Media/cheesecake-home.webp"
        title="CHEESECAKES"
        count={64}/>

        <OurCategoryCard
        image="/Media/cake-home.webp"
        title="CAKES"
        count={64}/> </div>

</div>
      </div>
    </div>
  )
}

export default OurCategories
