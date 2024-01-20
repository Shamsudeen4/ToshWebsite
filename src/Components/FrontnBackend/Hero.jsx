import React from 'react'

import st from '../Images/frontnbackend/Rectangle 3.png'
import nd from '../Images/frontnbackend/Rectangle 5.png'
import rd from '../Images/frontnbackend/Rectangle 4.png'
import th from '../Images/frontnbackend/Rectangle 6.png'
function Hero() {
  return (
    <div className=' bg-[#F8E7F8] py-[3%] sm:py-[8%]'>
      <div className=' flex flex-col items-center gap-[60px] sm:gap-[20px]'>
        <div className=' flex items-start gap-[50px] sm:items-center sm:text-center sm:flex-col sm:gap-[40px]'>
            <div className=''>
                <img  className='sm:w-[140px] relative top-3' src={st} alt="" />
            </div>
            <div  className=' flex items-center flex-col gap-4 sm:gap-[20px]'>
                <p className='bg-[#FEF3C7] border-[1px] font-euclid border-[#FB9B02] px-[20px] py-[7px] rounded-[20px] sm:text-center'>Welcome to Toshconsult</p>
                <h1  className=' w-[40vw] text-center text-[60px] font-bold font-poppins sm:text-center sm:text-[40px] sm:w-[70vw] sm:leading-[50px]'>Where Tech Dreams Take Flight!</h1>
                <p className='w-[35vw] text-center font-euclid text-[#000000B2] sm:w-[75vw]'>Dive into the Future of Tech Education. 
                    Select Your Course, Apply Instantly, and 
                    Let's Begin the Transformation Journey 
                    Together!
                </p>
            </div>
            <div className=''>
                <img className=' relative -top-[10px]' src={nd} alt="" />
            </div>
        </div>
        <div className=' flex items-start gap-[160px]'>
            <div  className='sm:hidden'>
                <img className='relative bottom-7' src={rd} alt="" />
            </div>
            <div> <button className=' bg-[#000000] px-[40px] py-[14px] 
            font-euclid rounded-[25px] text-[#fff] border-[1px] border-[black]
             hover:bg-transparent hover:text-[black] duration-300 sm:w-[50vw]'>Get Started</button></div>
            <div className='sm:hidden'>
                <img className='relative bottom-7' src={th} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
