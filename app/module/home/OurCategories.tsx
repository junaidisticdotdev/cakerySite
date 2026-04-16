import OurCategoryCard from '@/app/component/OurCategoryCard'
import React from 'react'

const OurCategories = () => {
  return (
    <div>
      {/* Our categories */}
      <div className='flex flex-col items-center justify-center min-h-screen w-full '>
        <p className='italic font-medium text-[70px] '>Our Categories</p>

<div className='flex'>
        <OurCategoryCard
        image="/Media/cupcake-home.webp"
        title="CUPCAKES"
        count={64}/>

        <OurCategoryCard
        image="/Media/brownie-home.webp"
        title="BROWNIES"
        count={64}/>

        <OurCategoryCard
        image="/Media/cheesecake-home.webp"
        title="CHEESECAKES"
        count={64}/>

        <OurCategoryCard
        image="/Media/cake-home.webp"
        title="CAKES"
        count={64}/>

</div>
      </div>
    </div>
  )
}

export default OurCategories
