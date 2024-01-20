import React from 'react'

function Frontnd() {
  return (
    <div className=' flex justify-center  bg-[#F8E7F8] py-[7%] '>
      <div className='flex text-[white] font-euclid gap-[50px] sm:flex-col'>
        <div className='bg-[black] flex flex-col  gap-[70px] rounded-[15px] p-11 sm:gap-[10px] sm:px-[30px]'>
            <div className=' flex flex-col gap-[20px] sm:gap-[10px]'>
                <h2 className=' text-[16px]'>Inter- state education</h2>
                <h1 className=' font-poppins text-[70px] font-bold'>70%</h1>
            </div>
            <div>
                <h2 className='w-[14vw] text-[20px] sm:w-[75vw]'>Reach more than 3,000 students around the nigeria.</h2>
            </div>
        </div>
        <div className=' bg-[black] flex flex-col  gap-[70px] rounded-[15px] p-11 sm:gap-[10px]  sm:px-[30px]'>
        <div className=' flex flex-col gap-[20px] sm:gap-[10px]'>
                <h2 className=' text-[16px]'>Students onboard</h2>
                <h1 className=' font-poppins text-[70px] font-bold'>3000+</h1>
            </div>
            <div>
                <h2 className='w-[14vw] text-[20px] sm:w-[75vw]'>Onboarded to our 
                frontend development training.
                </h2>
            </div>
        </div>
        <div className='bg-[black] flex flex-col  gap-[70px] rounded-[15px] p-11 sm:gap-[10px] sm:px-[30px]'>
        <div className=' flex flex-col gap-[20px] sm:gap-[10px]'>
                <h2 className=' text-[16px]'>Access to jobs opportunities</h2>
                <h1 className=' font-poppins text-[70px] font-bold'>50%</h1>
            </div>
            <div>
                <h2 className='w-[14vw] text-[20px] sm:w-[75vw]'>Our past students had 
                been working in a top brands.
                </h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Frontnd
