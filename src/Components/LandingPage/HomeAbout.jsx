import React from 'react'
import image2 from '../Images/homepage/sstab.png'
function HomeAbout() {
  return (
    <div className='lg:flex lg:items-center lg:justify-center lg:h-[100vh] lg:gap-36 lg:m-24 sm:flex sm:flex-col sm:gap-5 sm:items-center sm:m-14 sm:justify-center'>
      <div>
        <img className='sm:w-72 ' src={image2} alt="" />
      </div>
      <div className='flex flex-col gap-12 justify-self-end sm:text-center sm:gap-7 sm:items-center'>
        <div className='flex flex-col gap-4 sm:gap-5'>
        <h3 className='text-[20px] font-raleway text-[#FB9B02] font-semibold'>About</h3>
        <h1 className='lg:text-[30px] capitalize font-raleway font-bold lg:w-[26vw] sm:text-[25px] sm:w-[75vw] leading-8'>we’re building the future of technology</h1>
        </div>
        <h4 className="w-[33.7vw] font-poppins text-[14px] sm:w-[75vw] capitalize">We Are Committed to delivering exceptional service and quality products in website design, web development, app 
        development, and all aspects of software development, while also providing accessible and comprehensive training to help
        people transition to tech careers         </h4>
        <a href="/service"><button className='bg-[#FB9B02] lg:w-40 rounded-[17px] text-[white] py-3 px-2 sm:w-[40vw] border-[1px] border-solid border-[#FB9B02] hover:text-[#FB9B02] hover:bg-[white] transition duration-300 '>Learn More</button></a>
      </div>
    </div>
  )
}

export default HomeAbout
