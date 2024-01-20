import React from 'react'
import st from '../Images/aboutpage/Group 23.png' 
import nd from '../Images/aboutpage/Group 25.png' 
import rd from '../Images/aboutpage/Group 27.png' 
import th from '../Images/aboutpage/Group 29.png' 

function Afourth() {
  return (
    <div className='flex flex-col gap-[60px] lg:p-44 sm:p-10 lg:h-[120vh] w-[100%] justify-center '>
    <div className='flex flex-col gap-3  sm:items-start'>
      <h3 className=' font-raleway text-[20px] font-semibold text-[#FB9B02] capitalize'>Services</h3>
      <h1 className='font-raleway font-semibold text-[35px] sm:w-[70vw] lg:w-[30vw] leading-10 sm:leading-8 capitalize'>Our Services</h1>
      <h4 className='lg:w-[30vw] sm:w-[75vw] text-[14px] capitalize font-poppins text-[#00000099]'>
      Transform Your Business with Comprehensive Tech Solutions and Expertise from Our Team
      </h4>
    </div>
    <div className='flex flex-col gap-[80px]'>
    <div className='flex items-center sm:flex-col gap-[100px] sm:gap-[80px] sm:items-start '>
      <div className='flex items-center gap-5 sm:items-start border-[2px] border-solid border-[#F8E7F8] p-14 sm:flex-col sm:py-10 sm:px-5 sm:rounded-[20px] '>
          <img  src={st} alt="" />
          <div className='flex flex-col gap-4'>
          <h2 className='w-[18vw] sm:w-[65vw] 
          font-raleway font-bold 
          uppercase leading-6 text-[20px] 
          sm:text-[18px]'>
            MOBILE APP DEVELOPMENT
          </h2>
          <h4 className='w-[23vw] text-[14px] sm:w-[60vw] text-[#00000099]'>
          Expert Mobile App Development to Enhance User Experience and Drive Business Growth
          </h4>
          </div>
      </div>
      <div className='flex gap-5 sm:items-start p-14 items-center  border-[2px] border-solid border-[#FEF3C7] sm:flex-col sm:py-10 sm:px-5 sm:rounded-[20px]'>
          <img  src={nd} alt="" />
          <div className=' flex flex-col gap-4'>
          <h2 className='w-[18vw] sm:w-[65vw] 
          font-raleway font-bold 
          uppercase leading-6 text-[20px] 
          sm:text-[18px]'>
            WEBSITE DEVELOPMENT
          </h2>
          <h4 className='w-[22vw] text-[14px] sm:w-[60vw] text-[#00000099]'>
          Transform Your Business with Comprehensive Tech Solutions and Expertise from Our Team</h4>
          </div>
      </div>
      
    </div>
    <div className='flex items-center sm:flex-col gap-[100px] sm:gap-[80px] sm:items-start '>
      <div className='flex items-center gap-5 sm:items-start border-[2px] border-solid border-[#F8E7F8] p-14 sm:flex-col sm:py-10 sm:px-5 sm:rounded-[20px]'>
          <img  src={rd} alt="" />
          <div className='flex flex-col gap-4'>
          <h2 className='w-[18vw] sm:w-[65vw] 
          font-raleway font-bold 
          uppercase leading-6 text-[20px] 
          sm:text-[18px]'>
            DIGITAL MARKETING
          </h2>
          <h4 className='w-[23vw] text-[14px] sm:w-[60vw] text-[#00000099]'>
          Transform Your Business with Comprehensive Tech Solutions and Expertise from Our Team </h4>
          </div>
      </div>
      <div className='flex gap-5 sm:items-start p-14 items-center  border-[2px] border-solid border-[#FEF3C7] sm:flex-col sm:py-10 sm:px-5 sm:rounded-[20px]'>
          <img  src={th} alt="" />
          <div className=' flex flex-col gap-4'>
          <h2 className='w-[18vw] sm:w-[65vw] 
          font-raleway font-bold 
          uppercase leading-6 text-[20px] 
          sm:text-[18px]'>
            UI/UX DESIGN
          </h2>
          <h4 className='w-[22vw] text-[14px] sm:w-[62vw] text-[#00000099]'>
          Transform Your Business with Comprehensive Tech Solutions and Expertise from Our Team</h4>
          </div>
      </div>
      
    </div>
  </div>
  </div>
  )
}

export default Afourth
