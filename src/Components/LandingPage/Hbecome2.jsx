import React from 'react'
import arrow from '../Images/homepage/Curved Arrow Downward.png'
function Hbecome2() {
  return (
    <div className='  flex flex-col justify-center items-center w-[100%] h-[60vh] bg-[white]'>
      <div className='m-36 sm:m-14 flex flex-col gap-8  sm:gap-5 items-center justify-center bg-[#F8E7F8] lg:py-[50px] lg:px-[300px] sm:p-[40px]  sm:py-[55px] lg:rounded-[20px] text-center sm:items-start'>
        <h1 className='font-raleway text-[30px] sm:text-[25px] font-bold sm:text-left sm:font-semibold sm:w-[80vw] capitalize'>schedule a 30 minutes project consultation!</h1>
        <h2 className='text-[16px] w-[31vw] sm:font-poppins sm:w-[80vw] sm:text-left sm:text-[#00000080] text-[#00000080]'>Are you a business owner, having low revenue or looking forward to increase your online sales? Worry no more!
Our skilled engineers are ready to transform your business</h2>
<div className=''>
        <button className='flex items-center bg-[#C12DC1] px-6 rounded-[20px] text-[white] capitalize font-poppins gap-[25px]  text-[14px] sm:rounded-[10px] '>Book a free consultation <img className='w-[2.5vw] sm:w-[7vw]' src={arrow} alt="" /></button>
      </div>
      </div>
    </div>
  )
}

export default Hbecome2
