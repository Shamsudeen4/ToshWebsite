import React from 'react'
import tosh from '../Images/frontnbackend/Toshconsult Img 1 (1).png'
import { SlArrowDown } from "react-icons/sl";
function Navbar() {
  return (
    <div>
      <div className='flex font-euclid items-center justify-around bg-[#121212] text-[#fff] '>
        <div>
            <img src={tosh} className=' sm:w-[25vw]' alt="" />
        </div>
        <div className='sm:hidden'> 
            <ul className='flex gap-[50px] '>
                <li className='hover:text-[#FB9B02]  transition duration-300 cursor-pointer'>Home</li>
                <li className='hover:text-[#FB9B02]  transition duration-300 flex items-center gap-[5px] cursor-pointer'>Courses <SlArrowDown /></li>
                <li className='hover:text-[#FB9B02]  transition duration-300 cursor-pointer'>About </li>
                <li className='hover:text-[#FB9B02]  transition duration-300 cursor-pointer'>Students Project</li>
                <li className='hover:text-[#FB9B02]  transition duration-300 flex items-center gap-[5px] cursor-pointer'>Resources <SlArrowDown /></li>
            </ul>
        </div>
        <div className='flex items-center gap-3'>
        <div className=' lg:hidden  cursor-pointer'>
            <div className=' bg-[white] h-[2px] w-[26px] m-[5px]  '></div>
            <div className=' bg-[white] h-[2px] w-[26px] m-[5px] '></div>
            <div className=' bg-[white] h-[2px] w-[26px] m-[5px] '></div>
        </div>
        <div>
            <button className=' lg:px-[40px] lg:py-[10px] lg:rounded-[20px] bg-[#FB9B02] sm:px-[20px] sm:py-[7px] sm:rounded-[10px] border-[1px] border-[#FB9B02] hover:text-[#FB9B02] hover:bg-transparent transition duration-300'>Apply Now</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
