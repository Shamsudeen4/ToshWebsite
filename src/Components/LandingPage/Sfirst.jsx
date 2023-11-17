import React from 'react'
import './Cfirst.css'
import arrow from '../Images/homepage/Curved Arrow Downward.png'
function Sfirst() {
  return (
<div className='sm:w-[100%] sm:h-[90vh]'>
 <div className='back flex flex-col gap-4 items-center justify-center bg-[#FEF3C780] py-44 sm:py-32 '>
      <div className='flex flex-col gap-[25px] items-center sm:gap-[30px]'>
      <div className='flex flex-col gap-[10px] items-center sm:gap-8'>
      <h1 className='font-raleway font-bold text-[45px] capitalize w-[47vw] text-center leading-[50px] sm:w-[80vw] sm:text-[30px] sm:leading-[30px]'>Are You looking for ui ux Design experts to work on your projects?</h1>
      <h4 className=' font-poppins text-[20px] w-[54vw] capitalize text-[#00000099] leading-[25px] sm:w-[75vw] sm:text-center sm:text-[18px]'>Search no more! Our expert ui ux designers are ready to work on both your new and existing project to deliver professional and conversion products.</h4>
      </div>
      <div className=''>
        <button className='flex items-center bg-[#FB9B02] px-6 rounded-[20px] text-[white] capitalize font-poppins gap-[20px] sm:py-2 '>Book a free consultation <img className='w-[2.5vw] sm:w-[9vw]' src={arrow} alt="" /></button>
      </div>
        </div>
    </div>
    </div>
  )
}

export default Sfirst
