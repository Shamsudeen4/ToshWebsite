import React from 'react'
import image2 from '../Images/homepage/sstab.png'
function HomeAbout() {
  return (
    <div className='2xl:flex 2xl:items-center 2xl:justify-center 2xl:h-[100vh] 2xl:gap-16 2xl:m-24 sm:flex sm:flex-col sm:gap-5 sm:items-center sm:m-14 sm:justify-center'>
      <div>
        <img className='sm:w-72 ' src={image2} alt="" />
      </div>
      <div className='flex flex-col gap-12 justify-self-end sm:text-center sm:gap-7 sm:items-center'>
        <div className='flex flex-col gap-4 sm:gap-5'>
        <h3 className='text-[20px] font-raleway text-[#FB9B02] font-semibold'>About</h3>
        <h1 className='2xl:text-[30px] capitalize font-raleway font-bold 2xl:w-[26vw] sm:text-[25px] sm:w-[75vw] leading-8'>we’re building the future of technology</h1>
        </div>
        <h4 className="w-[33.7vw] font-poppins text-[14px] sm:w-[75vw] capitalize">We Are Committed to delivering exceptional service and quality products in website design, web development, app 
        development, and all aspects of software development, while also providing accessible and comprehensive training to help
        people transition to tech careers         </h4>
        <button className='bg-[#FB9B02] 2xl:w-40 rounded-[17px] text-[white] py-3 px-2 sm:w-[40vw] '>Learn More</button>
      </div>
    </div>
  )
}

export default HomeAbout
