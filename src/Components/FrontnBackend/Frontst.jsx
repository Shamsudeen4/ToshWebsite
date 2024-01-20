import React from 'react'
import image from '../Images/frontnbackend/Group 30.png'
function Frontst() {
  return (
    <div className='flex items-center flex-col py-[4%] pt-[8%]'>
      <div className=' flex gap-[110px]  items-center sm:flex-col-reverse sm:gap-[20px] '>
        <div className=' flex flex-col gap-[25px] items-start'>
            <h1 className=' font-poppins font-bold text-[70px] w-[24vw] sm:w-[70vw] sm:text-[45px] sm:leading-[45px]'>Become a Frontend Professional</h1>
            <h4 className='text-[#000000B2] text-[20px] font-euclid w-[28vw] sm:w-[75vw]'>Dive into the Future of Tech Education. Select Your Course, Apply Instantly.</h4>
            <button className=' bg-[black] text-[white] px-[30px] py-[10px] rounded-[30px] border-[1.5px] border-[black] hover:bg-[white] hover:text-[black]  duration-300'>Get Started</button>
        </div>
        
            <img className=' lg:relative lg:bottom-20 sm:w-[80%]' src={image} alt="" />
        
      </div>
    </div>
  )
}

export default Frontst
