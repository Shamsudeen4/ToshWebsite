import React from 'react'

import ndblur from '../Images/homepage/ndblur.png'


function Afirst() {
  return ( 
    <div className='lg:mb-28 sm:mt-24'>
    <div className=' flex lg:py-24  sm:flex-col lg:items-center justify-center lg:gap-12 font-raleway   sm:flex sm:justify-center sm:items-center sm:w-[100%] sm:h-[50vh] sm:pb-[80px] sm:gap-10  '>
      
       <div className='flex flex-col items-center lg:gap-5 sm:gap-4'>
         <h1 className='capitalize lg:text-[45px] lg:w-[39vw] sm:w-[80vw] font-bold lg:leading-[50px] leading-[32px] sm:text-[27px] sm:text-center'>Discover Our Story. Who We Are and What We Stand For</h1>
         <h3 className='capitalize lg:text-[20px] sm:text-[14px] sm:w-[85vw] sm:text-[#00000080] sm:font-poppins font-semibold lg:w-[44vw] lg:text-center text-[#00000099] sm:text-center'>Get to Know Our Team and Our Mission to Provide Exceptional Service and Quality Products</h3>
        </div>

    </div>
    <div className="sm:hidden">
        <img className='absolute bottom-[155px] right-0' src={ndblur} alt="" />
      </div>
    </div>
  )
}

export default Afirst
