import React from 'react'
import './Cfirst.css'
import arrow from '../Images/homepage/Curved Arrow Downward.png'
function Sfirst() {
  return (

 <div className='back flex flex-col gap-4 items-center justify-center bg-[#FEF3C780] py-44 sm:py-32'>
      <div className='flex flex-col gap-[25px] items-center'>
      <div className='flex flex-col gap-[10px] items-center'>
      <h1 className='font-raleway font-bold text-[45px] capitalize w-[50vw] text-center leading-[50px] sm:text-[35px] sm:w-[80vw] sm:leading-9'>Do you have an idea you would love to turn into a mobile app?</h1>
      <h4 className=' font-poppins text-[20px] w-[54vw] capitalize text-[#00000099] leading-[25px] sm:text-[18px] sm:w-[80vw] sm:text-center'>Our expert team of engineers are committed to transforming your innovative ideas into powerful mobile applications that resonate with your target audience.</h4>
      </div>
      <div className=''>
        <button className='flex items-center bg-[#FB9B02] px-6 rounded-[20px] text-[white] capitalize font-poppins gap-[20px] sm:py-2 '>Book a free consultation <img className='w-[2.5vw] sm:w-[9vw]' src={arrow} alt="" /></button>
      </div>
        </div>
    </div>

  )
}

export default Sfirst
