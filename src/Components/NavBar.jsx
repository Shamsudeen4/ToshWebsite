import React from 'react'
import logo from './Images/homepage/Toshconsult Img 1.png'
import blurr from './Images/homepage/blurr.png'
function NavBar() {
  return (
    <div>
    <div>
      <img className='absolute' src={blurr} alt="" />
    </div>
    <div className='navbar flex items-center justify-around py-5 '>
      <div>
        <img src={logo} alt="toshlogo" />
      </div>
      <div>
        <ul className='flex justify-between gap-6 font-raleway font-semibold '>
            <li className='hover:text-[#FB9B02] transition duration-300 cursor-pointer '>Home </li>
            <li className='hover:text-[#FB9B02] transition duration-300 cursor-pointer'>About</li>
            <li className='hover:text-[#FB9B02] transition duration-300 cursor-pointer'>Courses</li>
            <li className='hover:text-[#FB9B02] transition duration-300 cursor-pointer'>Services</li>
            <li className='hover:text-[#FB9B02] transition duration-300 cursor-pointer'>Career</li>
            <li className='hover:text-[#FB9B02] transition duration-300 cursor-pointer'>Contact</li>
        </ul>
      </div>
      <div>
        <button className='bg-[#FB9B02] px-5 py-2 rounded-[14px] text-[white] border-transparent  hover:bg-[white]  hover:text-[#FB9B02] hover:border hover:border-solid hover:border-[#FB9B02] transition duration-200'>Apply Now</button>
      </div>
    </div>
    </div>
  )
}

export default NavBar
