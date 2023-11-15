import React from 'react'
import image2 from '../Images/homepage/sstab.png'
function HomeAbout() {
  return (
    <div className='2xl:flex 2xl:items-center 2xl:justify-center 2xl:h-[100vh] 2xl:gap-16 2xl:m-24'>
      <div>
        <img src={image2} alt="" />
      </div>
      <div className='flex flex-col gap-12 justify-self-end'>
        <div className='flex flex-col gap-4'>
        <h3 className='text-[20px] font-raleway text-[#FB9B02] font-semibold'>About</h3>
        <h1 className='text-[30px] capitalize font-raleway font-bold w-[26vw] leading-8'>we’re building the future of technology</h1>
        </div>
        <h4 className="w-[33.7vw] font-poppins text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Eget aenean accumsan bibendum gravida maecenas augue.
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Eget aenean accumsan bibendum gravida maecenas augue. Lorem 
             ipsum dolor sit amet, consectetur adipiscing elit. Eget 
             aenean accumsan bibendum gravida maecenas augue. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Eget 
              aenean accumsan bibendum gravida maecenas augue.
        </h4>
        <button className='bg-[#FB9B02] w-40 rounded-[17px] text-[white] py-3 px-2]'>Learn More</button>
      </div>
    </div>
  )
}

export default HomeAbout
