import React from 'react'
import inner from '../Images/servicepage/Rectangle 83.png'

function Course() {
  return (
    <div className=' flex flex-col justify-center items-center w-[100%] lg:ml-[200px]  mt-[200px]'>
    <div className=' flex flex-col font-raleway items-start gap-[50px]'>
      <div className=' flex-col lg:w-[45%] gap-1 flex '>
        <h5 className='text-[#FB9B02] font-semibold text-[20px]'>Courses</h5>
        <h1 className='font-semibold lg:text-[40px]'>Course Details</h1>
        <p className='capitalize sm:text-[14px] sm:w-[70vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, 
           consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.
        </p>          
      </div>
      <div>
        <img className=' sm:w-[80vw]' src={inner} alt=""/>
      </div>
    </div>
    </div>
  )
}

export default Course