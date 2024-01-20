import React from 'react'
import fp from '../Images/homepage/Group 60.png'
import sp from '../Images/homepage/Group 59.png'
import tp from '../Images/homepage/Group 61.png'
import ndblur from '../Images/homepage/ndblur.png'
// import './Hfirst.css'


function Homepage() {
  return ( 
    <div className=''>
    <div className='first flex sm:flex-col lg:items-end justify-center lg:gap-12 lg:py-24 font-raleway  lg:pb-44 sm:flex sm:justify-center sm:items-center sm:w-[100%] sm:h-[100vh] sm:pb-[80px] sm:gap-14 sm:pt-[40%]  '>
      <div className='second flex flex-col lg:gap-12 sm:gap-4 '>
       <div className='third flex flex-col lg:gap-5 sm:gap-2'>
         <h1 className='fourth capitalize lg:text-[45px] lg:w-[32vw] sm:w-[80vw] font-bold lg:leading-[50px] leading-[32px] sm:text-[27px]'>access the dream courses of your career.</h1>
         <h3 className='fifth capitalize lg:text-[20px] sm:text-[14px] sm:w-[85vw] sm:text-[#00000080] sm:font-poppins font-semibold '>flexible learning and innovation to get started in tech.</h3>
        </div>
        <div className='sixth flex lg:gap-5 sm:flex-col sm:gap-4'>
       <a href='/contact'> <button className='seventh  bg-[#FB9B02] border-[1px] border-solid border-[#FB9B02] py-3 px-6 rounded-[15px] text-[white] text-[15px] font-semibold hover:bg-transparent hover:text-[#FB9B02] transition duration-200 sm:w-[45vw]' >Get In Touch</button></a>
       <a href='/course'> <button className='eighth border border-[#C12DC1] hover:bg-[#C12DC1] transition duration-200 hover:text-[white] text-[15px] py-3 px-6 rounded-[15px] text-[#C12DC1] font-extrabold sm:w-[60vw]'>Explore Our Course</button>
       </a> </div>
      </div>
      <div className='ninth flex lg:gap-7 sm:gap-3 '>
        <img className='sm:w-[100px]' src={fp} alt="" />
        <img className='animate-bounce sm:w-[100px]' src={sp} alt="" />
        <img className='sm:w-[100px]' src={tp} alt="" />
      </div>
    </div>
    <div className="sm:hidden">
        <img className='absolute -bottom-14 right-0' src={ndblur} alt="" />
      </div>
    </div>
  )
}

export default Homepage
