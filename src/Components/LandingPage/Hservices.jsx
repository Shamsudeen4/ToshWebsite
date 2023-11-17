import React from 'react'
import flogo from '../Images/homepage/Group 4.png'
import slogo from '../Images/homepage/Group 4.png'
import tlogo from '../Images/homepage/Group 4.png'
function Hservices() {
  return (
    <div className='bg-[#FEF3C780] justify-center flex flex-col w-[100%] 2xl:h-[100vh] items-center '>
    <div className=' flex flex-col gap-20 items-start justify-center 2xl:m-44 sm:m-12 sm:text-center'> 
      <div className='flex flex-col gap-3'>
        <h3 className='text-[#FB9B02] font-raleway font-semibold text-[20px]'>Courses</h3>
        <h1 className='text-[40px] font-raleway font-bold sm:text-[25px]'>Our Services</h1>
        <h4 className='2xl:w-[42vw] sm:w-[80vw]'>
          Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Eget aenean accumsan bibendum gravida 
            maecenas augue. Lorem ipsum dolor sit 
            amet, consectetur adipiscing elit. Eget
             aenean accumsan bibendum gravida 
             maecenas augue.</h4>

      </div>
      <div className='flex flex-col items-end gap-20 sm:gap-11 sm:items-center'>
        <div className='flex sm:flex-col items-center justify-center gap-7'>
            <div className='flex flex-col gap-3 bg-[white] rounded-[15px] items-center justify-center p-10'>
                <img className='w-[58px]' src={flogo} alt="" />
                <h3 className='font-raleway font-bold'> FRONT-END DEVELOPMENT</h3>
                <h4 className='w-[16vw] sm:w-[60vw] text-center'>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Eget 
                    aenean accumsan bibendum gravida 
                    maecenas augue.</h4>
            </div>
            <div className='flex flex-col gap-3 bg-[white] rounded-[15px] items-center justify-center p-10'>
                <img className='w-[58px]' src={slogo} alt="" />
                <h3  className='font-raleway font-bold'>BACK-END DEVELOPMENT</h3>
                <h4 className='w-[16vw] text-center  sm:w-[60vw]'>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Eget 
                    aenean accumsan bibendum gravida 
                    maecenas augue.</h4>
            </div>
            <div className='flex flex-col gap-3 bg-[white] rounded-[15px] items-center justify-center p-10'>
                <img className='w-[58px]' src={tlogo} alt="" />
                <h3  className='font-raleway font-bold'>DIGITAL MARKETING</h3>
                <h4 className='w-[16vw] text-center  sm:w-[60vw]'>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Eget 
                    aenean accumsan bibendum gravida 
                    maecenas augue.</h4>
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

export default Hservices
