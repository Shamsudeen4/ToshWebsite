import React from 'react'
import logo from './Images/homepage/Toshconsult Img 1.png'
import smlogo from './Images/homepage/Ellipse 1 (3).png'
import blurr from './Images/homepage/blurr.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function NavBar() {
  const[showNav, setShowNav] = useState(false)
  const[rotate, setRotation] = useState(false)
  const[position, setPosition] = useState(false)
  const toggleNav = () =>{
    setShowNav(!showNav);
    setRotation(!rotate);
    setPosition(!position);

  }
  return (
    <div>
    <div>
      <img className='absolute sm:hidden 2xl:block lg:block ' src={blurr} alt="" />
      <img className='absolute  2xl:hidden' src={smlogo} alt="toshlogo" />
    </div>
    <div className='navbar flex items-center justify-around py-5 '>
      <div className='sm:w-[67px] sm:h-[49px] 2xl:w-[124px] lg:w-[124px] 2xl:h-[89px] lg:h-[89px]'>
        <img  src={logo} alt="toshlogo" />
        
      </div>
      <div className=''>
        <ul className=' justify-between gap-6 font-raleway font-semibold hidden 2xl:flex lg:flex '>
            <li className='hover:text-[#FB9B02] transition duration-300 cursor-pointer '>Home </li>
            <li className='hover:text-[#FB9B02] transition duration-300 cursor-pointer'>About</li>
            <li className='hover:text-[#FB9B02] transition duration-300 cursor-pointer'>Courses</li>
            <li className='hover:text-[#FB9B02] transition duration-300 cursor-pointer'>Services</li>
            <li className='hover:text-[#FB9B02] transition duration-300 cursor-pointer'>Career</li>
            <li className='hover:text-[#FB9B02] transition duration-300 cursor-pointer'>Contact</li>
        </ul>
      </div>
      <div>
        <button className='bg-[#FB9B02] px-6 py-3 rounded-[14px] text-[white]   hover:bg-[white] sm:hidden 2xl:block lg:block  hover:text-[#FB9B02] border-[1px] border-solid border-[#FB9B02] transition duration-200'>Apply Now</button>
      </div>
      <div className={`2xl:hidden lg:hidden cursor-pointer`} onClick={toggleNav}>
        <div className={`transition duration-300 transform ${rotate ? 'rotate-30' : '' } relative ${position ? 'top-[7px]': ''}  w-[25px] h-[2px] m-[5px] bg-black `}></div>
        <div className={` transform ${rotate ? 'hidden' : '' } w-[25px] h-[2px] m-[5px] bg-black`} ></div >
        <div className={`transition duration-300 transform ${rotate ? 'rotate-60' : '' }  w-[25px] h-[2px] m-[5px] bg-black`}></div>
      </div>
    </div>
    <div className='mobile 2xl:hidden lg:hidden relative'>
    <ul  className={` ${showNav ? 'block' : 'hidden'}  flex flex-col items-center justify-center bg-[#C12DC1] font-raleway gap-[10px]`}>
            <li className='hover:text-[black] text-[white] hover:bg-[#FB9B02] w-[100vw] text-center p-[15px] uppercase transition duration-300 cursor-pointer  '><Link to="/homepage"> Home</Link> </li>
            <li className='hover:text-[black] text-[white] hover:bg-[#FB9B02] w-[100vw] text-center p-[15px] uppercase transition duration-300 cursor-pointer'> <Link to="/habout">About</Link> </li>
            <li className='hover:text-[black] text-[white] hover:bg-[#FB9B02] w-[100vw] text-center p-[15px] uppercase transition duration-300 cursor-pointer'>Courses</li>
            <li className='hover:text-[black] text-[white] hover:bg-[#FB9B02] w-[100vw] text-center p-[15px] uppercase transition duration-300 cursor-pointer'>Services</li>
            <li className='hover:text-[black] text-[white] hover:bg-[#FB9B02] w-[100vw] text-center p-[15px] uppercase transition duration-300 cursor-pointer'>Career</li>
            <li className='hover:text-[black] text-[white] hover:bg-[#FB9B02] w-[100vw] text-center p-[15px] uppercase transition duration-300 cursor-pointer'>Contact</li>
        </ul>
    </div>
    </div>
  )
}

export default NavBar
