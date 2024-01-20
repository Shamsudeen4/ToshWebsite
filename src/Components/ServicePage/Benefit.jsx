import React from 'react'
import p1 from '../Images/coursepage/Group 9.png'
import p2 from '../Images/coursepage/Group 10.png'
import p3 from '../Images/coursepage/Group 11.png'

function Benefit() {
  return (
    <div className=' flex flex-col justify-center items-center w-[100%] '>
    <div className='flex flex-col font-raleway items-start gap-[100px]'>
    <div className=' flex-col lg:w-[45%] gap-1 flex mt-[10%]'>
        <h5 className='text-[#FB9B02] font-semibold'>Benefits</h5>
        <h1 className='font-semibold lg:text-[35px] sm:text-[25px]'>The Purpose Of Hiring us </h1>
        <p className='text-[14px] w-[33vw] capitalize font-poppins sm:w-[85vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, 
           consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.
        </p>
    </div>

    <div className=' flex  justify-center gap-[30px] sm:gap-10 sm:flex-col'>
        <div className=' flex border-[2px] border-solid border-[#F8E7F8] items-center gap-10 p-6 rounded-[15px]'>
           
              <img className='' src={p1} alt="" />
          
          <div className='flex flex-col gap-3 '>
            <h2 className='font-semibold '>EXPERIENCE INSTRUCTORS</h2>
            <h6 className='text-[#00000080] w-[16vw] text-[12px] font-poppins sm:w-[55vw] sm:font-semibold  sm:text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Eget aenean accumsan bibendum gravida maecenas augue.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit..
            </h6>
          </div>
        </div>
        <div className=' flex border-[2px] border-solid border-[#FEF3C7] items-center gap-10 p-6 rounded-[15px]'>
           
              <img className='' src={p2} alt="" />
          
          <div className='flex flex-col gap-3 '>
            <h2 className='font-semibold '>WORKING EXPERIENCE</h2>
            <h6 className='text-[#00000080] w-[16vw] text-[12px] font-poppins sm:w-[55vw] sm:font-semibold  sm:text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Eget aenean accumsan bibendum gravida maecenas augue.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit..
            </h6>
          </div>
        </div>
        <div className=' flex border-[2px] border-solid border-[#FEF3C7] items-center gap-10 p-6 rounded-[15px]'>
           
              <img className='' src={p3} alt="" />
          
          <div className='flex flex-col gap-3 '>
            <h2 className='font-semibold '>COLLABORATIVE PROJECT</h2>
            <h6 className='text-[#00000080] w-[16vw] text-[12px] font-poppins sm:w-[55vw] sm:font-semibold  sm:text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Eget aenean accumsan bibendum gravida maecenas augue.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit..
            </h6>
          </div>
        </div>

   
        </div>
      
    </div>
</div>
  )
}

export default Benefit