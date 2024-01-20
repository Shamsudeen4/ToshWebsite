import React from 'react'
// import { Link } from 'react-router-dom'

function Faq() {
  return (
    <div className='flex items-center  flex-col gap-4 mt-[5%] justify-center text-center py-7  '>    
        <h1 className='font-bold text-[#FB9B02] text-[30px]'>READ OUR FAQ</h1>
        <p className='lg:w-[35vw] capitalize text-center justify-center text-[14px] text-[#00000099] font-poppins sm:w-[85vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet
          consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.
        </p>
        <div>
         <button className='bg-[#FB9B02] px-8 py-3  font-semibold rounded-xl text-white border-[1px] border-[#FB9B02] hover:text-[#FB9B02] hover:bg-[white] transition duration-300'>Click Here</button>
  </div>
  </div>
  )
}

export default Faq