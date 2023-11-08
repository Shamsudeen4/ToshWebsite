import React from 'react'
import fp from '../Images/homepage/Group 60.png'
import sp from '../Images/homepage/Group 59.png'
import tp from '../Images/homepage/Group 61.png'
import ndblur from '../Images/homepage/ndblur.png'
function Homepage() {
  return ( 
    <div className='flex items-end justify-center gap-12 py-24 font-raleway'>
      <div className='flex flex-col gap-12'>
       <div className='flex flex-col gap-5'>
         <h1 className='capitalize text-[45px] w-[32vw] font-bold leading-[50px]'>access the dream courses of your career.</h1>
         <h3 className='capitalize text-[20px] '>flexible learning and innovation to get started in tech.</h3>
        </div>
        <div className='flex gap-5'>
        <button className='bg-[#FB9B02] py-3 px-6 rounded-[15px] text-[white] text-[15px] font-semibold' >Get In Touch</button>
        <button className='border border-[#C12DC1] text-[15px] py-3 px-6 rounded-[15px] text-[#C12DC1] font-extrabold'>Explore Our Course</button>
        </div>
      </div>
      <div className='flex gap-7'>
        <img src={fp} alt="" />
        <img src={sp} alt="" />
        <img src={tp} alt="" />
      </div>
    
   
    <div className='relative'>
      <div className="fixed bottom-0 right-0 p-4">
        <img className='max-w-xs max-h-xs' src={ndblur} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Homepage
