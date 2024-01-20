import React from 'react'
import flogo from '../Images/homepage/Group 4.png'
import slogo from '../Images/homepage/Group 4.png'
import tlogo from '../Images/homepage/Group 4.png'
function HLogServ() {
  return (
    <div className='bg-[#FEF3C780] justify-center flex flex-col w-[100%] lg:h-[120vh] items-center '>
    <div className=' flex flex-col gap-20 items-start justify-center lg:m-44 sm:m-12 sm:text-center'> 
      <div className='flex flex-col gap-3'>
        <h3 className='text-[#FB9B02] font-raleway font-semibold text-[20px]'>Courses</h3>
        <h1 className='text-[40px] font-raleway font-bold sm:text-[25px]'>Our Services</h1>
        <h4 className='lg:w-[42vw] sm:w-[80vw]  capitalize'>
        We help logistics and transportation company increase their searchability and 
        discoverability with our versatile software solutions and SEO practices. Additionally, 
        the inclusion of prominent Call-To-Action buttons while putting not so tech-savvy
         users into consideration. 
      </h4>

      </div>
      <div className='flex flex-col items-end gap-20 sm:gap-11 sm:items-center'>
        <div className='flex sm:flex-col items-center justify-center gap-24 sm:gap-7'>
            <div className='flex flex-col gap-5 bg-[white] rounded-[15px] items-center justify-center p-10'>
                <img className='w-[58px]' src={flogo} alt="" />
                <h3 className='font-raleway font-bold uppercase'> bespoke web development</h3>
                <h4 className='w-[16vw] sm:w-[60vw] text-center'>From custom designs to robust business solutions,
                 we have the expertise to deliver a website that will set you apart from the competition.</h4>
                 <button className='border-[1px] border-solid border-[#C12DC1] text-[#C12DC1] px-[35px] rounded-[10px] py-[10px] font-semibold font-raleway cursor-pointer hover:bg-[#C12DC1] hover:text-[white] transition duration-500'>Learn More</button>
            </div>
            <div className='flex flex-col gap-3 bg-[white] rounded-[15px] items-center justify-center p-10'>
                <img className='w-[58px]' src={slogo} alt="" />
                <h3  className='font-raleway font-bold uppercase'>mobile app development</h3>
                <h4 className='w-[16vw] text-center  sm:w-[60vw]'>With years of experience and a commitment to quality,
                 we'll work closely with you to understand your unique needs and create an app that perfectly represents your brand.</h4>
                 <button className='border-[1px] border-solid border-[#C12DC1] text-[#C12DC1] px-[35px] rounded-[10px] py-[10px] font-semibold font-raleway cursor-pointer hover:bg-[#C12DC1] hover:text-[white] transition duration-500'>Learn More</button>

            </div>
            <div className='flex flex-col gap-5 bg-[white] rounded-[15px] items-center justify-center p-10'>
                <img className='w-[58px]' src={tlogo} alt="" />
                <h3  className='font-raleway font-bold'>DIGITAL MARKETING</h3>
                <h4 className='w-[16vw] text-center  sm:w-[60vw]'>Our team of skilled digital uses the latest technologies 
                and frameworks to create high-performance software that looks great on any device.</h4>
                <button className='border-[1px] border-solid border-[#C12DC1] text-[#C12DC1] px-[35px] rounded-[10px] py-[10px] font-semibold font-raleway cursor-pointer hover:bg-[#C12DC1] hover:text-[white] transition duration-500'>Learn More</button>

            </div>
        </div>
        <div>
            <button className='bg-[#FB9B02] text-[white] py-3 px-8 rounded-[15px] '>View All Services</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HLogServ

