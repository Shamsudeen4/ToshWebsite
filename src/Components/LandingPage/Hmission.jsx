import React from 'react'
import image from '../Images/coursepage/Rectangle 170.png'
import image1 from '../Images/coursepage/Rectangle 171.png'
function Hmission() {
  return (
    <div className=' font-raleway flex flex-col items-center gap-[100px] m-20'>
      <div className='flex lg:gap-[150px] items-center sm:flex-col sm:gap-[30px]'>
        <div className='flex flex-col gap-4 sm:items-center sm:text-center'>
            <h4 className='text-[20px] font-semibold text-[#FB9B02]'>Mission</h4>
            <h1 className='text-[35px] font-semibold sm:leading-[35px]'>Why Toshconsult</h1>
            <h3 className=' lg:w-[33vw] text-[18px] sm:w-[75vw]'>At Toshconsult Inc, our mission is 
            to deliver exceptional software solutions that redefine industry standards 
            and exceed customer expectations. We are dedicated to innovation, customer
             satisfaction, global impact, social responsibility, agile adaptability 
             and quality excellent.</h3>
        </div>
        <div>
            <img src={image} alt="" />
        </div>
      </div>
      <div className='flex lg:gap-[100px] sm:flex-col-reverse items-center sm:gap-[30px]'>
      <div>
            <img src={image1} alt="" />
        </div>
        <div className='flex flex-col gap-4 sm:items-center sm:text-center '>
            <h4 className='text-[20px] font-semibold text-[#FB9B02]'>Vision</h4>
            <h1 className='text-[35px] font-semibold'>Our Vision</h1>
            <h3 className=' lg:w-[37vw] text-[18px] sm:w-[75vw]'>We envision a future where technology seamlessly 
            integrates with human potential, empowering individuals and organizations to achieve 
            their fullest capabilities. Our vision is to be at the forefront of innovation, driving 
            positive change through cutting-edge software solutions that enhance efficiency, foster 
            creativity, and elevate the human experience.</h3>
        </div>
      
      </div>
    </div>
  )
}

export default Hmission
