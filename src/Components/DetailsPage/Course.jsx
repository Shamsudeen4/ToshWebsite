import React from 'react'
import inner from '../Images/servicepage/Rectangle 83.png'

function Course() {
  return (
    <div className='lg:flex flex-col'>
      <div className='ml-[8%] flex-col lg:w-[45%] gap-1 flex mt-[10%]'>
        <h5 className='text-[#FB9B02] font-bold'>courses</h5>
        <h1 className='font-bold lg:text-[35px]'>Course Details</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, 
           consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.
        </p>          
      </div>
      <div className='items-center flex justify-center'><img className='mt-7' src={inner} alt=""/></div>
    </div>
  )
}

export default Course