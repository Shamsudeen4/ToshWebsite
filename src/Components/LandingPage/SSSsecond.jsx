import React from 'react'
import pra from '../Images/servicepage/Group 70 (12).png'
import praa from '../Images/servicepage/Group 70 (13).png'
function Ssecond() {
  return (
    <div className='flex flex-col gap-[100px] items-center justify-center'>
      <div className='flex items-center justify-center gap-[80px]'>
        <div>
            <img className='w-[655px] h-[737px]' src={pra} alt="" />
        </div>
        <div className='flex flex-col gap-[30px]'>
            <h1 className='text-[60px] font-raleway font-bold w-[35vw] leading-[60px] capitalize'>human centric design principlesh</h1>
            <h3 className='w-[31vw] text-[16px] font-poppins capitalize text-[#00000099]' >Immerse Your Users In A Seamless And Intuitive App Experience With Our Human-Centric Design Principles. We Prioritize Usability, Accessibility, And Visual Appeal To Ensure Your App Stands Out In Today's Competitive Market.
</h3>
        </div>
      </div>
      <div className='flex items-center justify-center gap-[60px]'>
        <div className='flex flex-col gap-[40px]'>
            <h1 className='text-[60px] font-raleway font-bold w-[30vw] leading-[60px] capitalize'>responsive mobile app</h1>
            <h3 className='w-[31vw] text-[16px] font-poppins capitalize text-[#00000099]'>Stay Ahead In The Mobile-First Era With Our Responsive Mobile App Development Services. We Craft Mobile Apps That Adapt Flawlessly To Different Screen Sizes And Devices, Delivering An Exceptional User Experience Across Smartphones And Tablets.</h3>
        </div>
        <div>
        <img className='w-[655px] h-[737px]' src={praa} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Ssecond
