import React from 'react'
import blurr from '../Images/homepage/Ellipse 2 (2).png'

import './Cfirst.css'
function NdBlogF() {
  return (
    <div className='back flex flex-col gap-4 items-center justify-center bg-[#FEF3C780] py-32'>
     <div className='flex flex-col items-center'>
      <h1 className='font-raleway font-bold text-[45px]'>Blog Post</h1>
      <h4 className=' font-poppins text-[18px] text-[#00000080] font-semibold '>Home {'>'} Blog {'>'} How To Use ChatGPT For UI/UX </h4>
      </div>
      <img src={blurr} className='absolute right-0 -top-2 w-96' alt="" />
    </div>
  )
}
export default NdBlogF