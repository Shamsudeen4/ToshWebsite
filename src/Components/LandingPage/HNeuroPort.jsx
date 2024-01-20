import React from 'react'
import p1 from '../Images/servicepage/Rectangle 69.png'
import p2 from '../Images/servicepage/Rectangle 70.png'
import p3 from '../Images/servicepage/Rectangle 71.png'


function HNeuroPort() {
  return (
    <div className='lg:flex flex-col lg:items-center gap-[100px] font-raleway lg:mt-20 sm:mt-20 sm:mb-20'>
        <div className='flex items-start flex-col  gap-[60px] sm:items-center'>
        <div className=' flex-col  gap-4 flex sm:text-center sm:items-center'>
            <h5 className='text-[#FB9B02] font-semibold capitalize sm:text-[20px]'>portfolio</h5>
            <h1 className='font-bold lg:text-[35px] capitalize sm:text-[25px]'>here’s some of our work</h1>
            <p className='lg:w-[34vw] text-[#00000099] font-semibold sm:w-[85vw]'>We Are Committed To Delivering 
            Exceptional Service And Quality Products In Website Design, Web Development, App Development, And 
            All Aspects Of Software Development, While Also Providing Accessible And Comprehensive Training To
             Help People Transition To Tech Careers.   Given our 7 years of expertise in this field, we have 
             proven tracks and records that enables us to remain reliable and exceptional. Below are some of our works
        and products.
            </p>
        </div>
        <div className='Services flex gap-[80px] sm:flex-col sm:text-center sm:items-center'>
              {/* //////////////////Services 1////////////////////////// */}
          <div className='flex flex-col gap-3 sm:items-center'>
            <div><img className='sm:w-[80vw]' src={p1} alt="" /></div>          
            <h1 className='font-bold lg:text-[20px] '>MOBILE APP DEVELOPMENT</h1>
            <h6 className='text-[#00000099] lg:w-[22vw] capitalize  sm:w-[75vw]'>Lorem ipsum dolor 
            sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum 
            gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing.
            </h6>          
            <button className='bg-[#C12DC1] border-0 rounded-md w-[50%] py-2 text-white lg:font-semibold'>Visit Website</button>
          </div>
             {/* //////////////////Services 2////////////////////////// */}
          <div className='flex flex-col gap-3 sm:items-center'>
            <div><img className='sm:w-[80vw]' src={p2} alt="" /></div>          
            <h1 className='font-bold lg:text-[20px] '>WEBSITE DEVELOPMENT</h1>
            <h6 className='text-[#00000099] lg:w-[22vw] capitalize  sm:w-[75vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing.
            </h6>          
            <button className='bg-[#FB9B02] border-0 rounded-md w-[50%] py-2 text-white lg:font-semibold'>Visit Website</button>
          </div>
            {/* //////////////////Services 3////////////////////////// */}
          <div className='flex flex-col w-[80%]  gap-3 sm:items-center'>
            <div><img className='sm:w-[80vw]' src={p3} alt="" /></div>          
            <h1 className='font-bold lg:text-[20px] '>UI/UX DESIGN</h1>
            <h6 className='text-[#00000099] lg:w-[22vw] capitalize  sm:w-[75vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing.
            </h6>          
            <button className='bg-[#C12DC1] border-0 rounded-md w-[50%]  py-2 text-white lg:font-semibold'>Visit Website</button>
          </div>

       
   
    
        </div>
        </div>
        <div>
        {/* ////////////////SCICHING SECTION/////////// */}
  
        </div>
    </div>
  )
}

export default HNeuroPort