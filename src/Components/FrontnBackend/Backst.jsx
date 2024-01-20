import React from 'react'
import image from '../Images/frontnbackend/Group 40.png'
function Backst() {
  return (
    <div className='flex items-center flex-col py-[4%] pt-[8%]'>
      <div className=' flex gap-[110px]  items-center'>
        <div className=' flex flex-col gap-[25px] items-start'>
            <h1 className=' font-poppins font-bold text-[70px] w-[24vw]'>
                Become a Backend Professional
            </h1>
            <h4 className='text-[#000000B2] text-[20px] font-euclid w-[28vw]'>Dive into the Future of Tech Education. Select Your Course, Apply Instantly.</h4>
            <button className=' bg-[black] text-[white] px-[30px] py-[10px] rounded-[30px] border-[1.5px] border-[black] hover:bg-[white] hover:text-[black]  duration-300'>Get Started</button>
        </div>
        <div>
            <img className=' relative bottom-20' src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Backst
