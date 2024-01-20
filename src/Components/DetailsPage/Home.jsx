
import React from 'react'
import blurr from '../Images/homepage/Ellipse 2 (2).png'

import '../LandingPage/Cfirst.css'
function Home() {
  return (
    <div className='back flex  py-32 flex-col gap-4 sm:gap-1 items-center justify-center bg-[#FEF3C780]'>
      <h1 className='font-raleway font-bold text-[45px] sm:text-[35px] sm:w-[70vw] sm:text-center sm:leading-[40px]'>Front-End Development</h1>
      <h4 className=' font-poppins text-[18px] sm:w-[33vw] sm:text-center'>Home {'>'} Career {'>'} Front-end Development</h4>
      <img src={blurr} className='absolute right-0 top-[160px] w-96' alt="" />
    </div>
  )
}

export default Home