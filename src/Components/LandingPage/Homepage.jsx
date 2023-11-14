import React from 'react'
import fp from '../Images/homepage/Group 60.png'
import sp from '../Images/homepage/Group 59.png'
import tp from '../Images/homepage/Group 61.png'
import ndblur from '../Images/homepage/ndblur.png'
// import './Hfirst.css'

function Homepage() {
  return ( 
    <div className=''>
    <div className='first flex sm:flex-col 2xl:items-end justify-center 2xl:gap-12 2xl:py-24 font-raleway  2xl:pb-44 sm:flex sm:justify-center sm:items-center sm:w-[100%] sm:h-[100vh] sm:pb-[80px] sm:gap-10  '>
      <div className='second flex flex-col 2xl:gap-12 sm:gap-7 '>
       <div className='third flex flex-col 2xl:gap-5 sm:gap-4'>
         <h1 className='fourth capitalize 2xl:text-[45px] 2xl:w-[32vw] sm:w-[80vw] font-bold 2xl:leading-[50px] leading-[32px] sm:text-[27px]'>access the dream courses of your career.</h1>
         <h3 className='fifth capitalize 2xl:text-[20px] sm:text-[14px] sm:w-[85vw] sm:text-[#00000080] sm:font-poppins '>flexible learning and innovation to get started in tech.</h3>
        </div>
        <div className='sixth flex 2xl:gap-5 sm:flex-col sm:gap-4'>
        <button className='seventh  bg-[#FB9B02] border-[1px] border-solid border-[#FB9B02] py-3 px-6 rounded-[15px] text-[white] text-[15px] font-semibold hover:bg-transparent hover:text-[#FB9B02] transition duration-200 sm:w-[45vw]' >Get In Touch</button>
        <button className='eighth border border-[#C12DC1] hover:bg-[#C12DC1] transition duration-200 hover:text-[white] text-[15px] py-3 px-6 rounded-[15px] text-[#C12DC1] font-extrabold sm:w-[60vw]'>Explore Our Course</button>
        </div>
      </div>
      <div className='ninth flex 2xl:gap-7 sm:gap-3 '>
        <img className='sm:w-[100px]' src={fp} alt="" />
        <img className='image sm:w-[100px]' src={sp} alt="" />
        <img className='sm:w-[100px]' src={tp} alt="" />
      </div>
    </div>
    <div className="sm:hidden">
        <img className='absolute -bottom-6 right-0' src={ndblur} alt="" />
      </div>
    </div>
  )
}

export default Homepage
