import React from 'react'
import pra from '../Images/servicepage/Group 70 (12).png'
import praa from '../Images/servicepage/Group 70 (13).png'
function Ssecond() {
  return (
    <div className='flex flex-col gap-[100px] items-center justify-center sm:py-12 sm:gap-[40px]'>
      <div className='flex items-center justify-center gap-[80px] sm:flex-col sm:gap-[30px]'>
        <div>
            <img className='w-[655px] h-[737px] sm:w-[400px] sm:h-[400px]' src={pra} alt="" />
        </div>
        <div className='flex flex-col gap-[30px] sm:text-center sm:items-center sm:gap-[20px]'>
            <h1 className='text-[60px] font-raleway font-bold w-[35vw] leading-[60sspx] capitalize sm:text-[35px] sm:w-[80vw] sm:leading-9 '>human centric design principlesh</h1>
            <h3 className='w-[31vw] text-[16px] font-poppins capitalize text-[#00000099] sm:w-[75vw]' >Immerse Your Users In A Seamless And Intuitive App Experience With Our Human-Centric Design Principles. We Prioritize Usability, Accessibility, And Visual Appeal To Ensure Your App Stands Out In Today's Competitive Market.</h3>
        </div>
      </div>
      <div className='flex items-center justify-center gap-[60px] sm:flex-col-reverse sm:gap-[30px]'>
        <div className='flex flex-col gap-[40px] sm:items-center sm:gap-[20px] sm:text-center'>
            <h1 className='text-[60px] font-raleway font-bold w-[30vw] leading-[60px] capitalize sm:text-[35px] sm:w-[80vw] sm:leading-10'>responsive mobile app</h1>
            <h3 className='w-[31vw] text-[16px] font-poppins capitalize text-[#00000099] sm:w-[75vw]'>Stay Ahead In The Mobile-First Era With Our Responsive Mobile App Development Services. We Craft Mobile Apps That Adapt Flawlessly To Different Screen Sizes And Devices, Delivering An Exceptional User Experience Across Smartphones And Tablets.</h3>
        </div>
        <div>
        <img className='w-[655px] h-[737px] sm:w-[400px] sm:h-[400px]' src={praa} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Ssecond
