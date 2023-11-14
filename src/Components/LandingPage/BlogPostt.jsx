import React from 'react'
import blurr from '../Images/homepage/Ellipse 2 (2).png'
import slogo from '../Images/homepage/tabler-icon-search.png'
import './Cfirst.css'
function Cfirst() {
  return (
    <div className='back flex flex-col gap-4 items-center justify-center bg-[#FEF3C780] py-32'>
     <div className='flex flex-col items-center'>
      <h1 className='font-raleway font-bold text-[45px]'>Blog Post</h1>
      <h4 className=' font-poppins text-[18px] text-[#00000080] '>Home {'>'} Blog</h4>
      </div>
      <div className='flex bg-[white] px-[20px] py-[20px] gap-2 rounded-[15px]'>
        <img src={slogo} alt="" />
         <input className='h-[3vh] w-[20vw]' type="text" placeholder='Search Blog' />   
      </div>
      <img src={blurr} className='absolute right-0 -top-2 w-96' alt="" />
    </div>
  )
}

export default Cfirst
