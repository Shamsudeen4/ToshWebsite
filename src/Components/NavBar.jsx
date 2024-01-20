import React from 'react'
import logo from './Images/homepage/Toshconsult Img 1.png'
import smlogo from './Images/homepage/Ellipse 1 (3).png'
import blurr from './Images/homepage/blurr.png'
// import { a } from 'react-router-dom'
import { useState } from 'react';
import "../App.css"

function NavBar(props) {
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
      <img className='absolute sm:hidden  lg:block ' src={blurr} alt="" />
      <img className='absolute  lg:hidden' src={smlogo} alt="hrefshlogo" />
    </div>
    <div className='navbar flex items-center justify-around py-5 '>
      <div className='sm:w-[67px] sm:h-[49px]  lg:w-[124px]  lg:h-[89px]'>
        <img  src={logo} alt="hrefshlogo" />
        
      </div>
      <div className=''>
        <ul className=' justify-between gap-11 font-raleway font-semibold hidden lg:flex '>
            <li className='hover:text-[#FB9B02] transition duration-300 cursor-pointer '><a className={props.home} href="/">Home </a> </li>
            <li className='hover:text-[#FB9B02] transition duration-300 cursor-pointer'><a className={props.about} href="/about">About </a></li>
            <li className='hover:text-[#FB9B02] transition duration-300 cursor-pointer'><a className={props.courses} href="/course">Courses</a></li>
            <li className='hover:text-[#FB9B02] transition duration-300 cursor-pointer'><a className={props.services} href="/service">Services</a></li>
            <li className='hover:text-[#FB9B02] transition duration-300 cursor-pointer'><a className={props.career} href="/career">Career</a></li>
            <li className='hover:text-[#FB9B02] transition duration-300 cursor-pointer'><a className={props.blog} href="/blog">Blog</a></li>
            <li className='hover:text-[#FB9B02] transition duration-300 cursor-pointer'><a className={props.contact} href="/contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <buthrefn className='bg-[#FB9B02] px-6 py-3 rounded-[14px] text-[white]    sm:hidden lg:block cursor-pointer  border-[1px] border-solid border-[#FB9B02] transition duration-200 hover:text-[#FB9B02] hover:bg-[white]'>Apply Now</buthrefn>
      </div>
      <div className={` lg:hidden cursor-pointer`} onClick={toggleNav}>
        <div className={`transition duration-300 transform ${rotate ? 'rotate-30' : '' } relative ${position ? 'top-[7px]': ''}  w-[25px] h-[2px] m-[5px] bg-black `}></div>
        <div className={` transform ${rotate ? 'hidden' : '' } w-[25px] h-[2px] m-[5px] bg-black`} ></div >
        <div className={`transition duration-300 transform ${rotate ? 'rotate-60' : '' }  w-[25px] h-[2px] m-[5px] bg-black`}></div>
      </div>
    </div>
    <div className='mobile lg:hidden relative z-[500]'>
    <ul  className={`transition-[all,3s,ease-linear] 
            ${showNav ? "mt-[5px]" : " mt-[-550px]"} flex flex-col items-center justify-center bg-[#C12DC1] font-raleway `}>
            <li className='hover:text-[black] text-[white] hover:bg-[#FB9B02] w-[100vw] text-center p-[15px] uppercase transition duration-300 cursor-pointer  '><a href="/"> Home</a> </li>
            <li className='hover:text-[black] text-[white] hover:bg-[#FB9B02] w-[100vw] text-center p-[15px] uppercase transition duration-300 cursor-pointer'> <a href="/about">About</a> </li>
            <li className='hover:text-[black] text-[white] hover:bg-[#FB9B02] w-[100vw] text-center p-[15px] uppercase transition duration-300 cursor-pointer'> <a href="/course"> Courses</a></li>
            <li className='hover:text-[black] text-[white] hover:bg-[#FB9B02] w-[100vw] text-center p-[15px] uppercase transition duration-300 cursor-pointer'><a href="/service"> Services</a></li>
            <li className='hover:text-[black] text-[white] hover:bg-[#FB9B02] w-[100vw] text-center p-[15px] uppercase transition duration-300 cursor-pointer'><a href="/career">Career</a></li>
            <li className='hover:text-[black] text-[white] hover:bg-[#FB9B02] w-[100vw] text-center p-[15px] uppercase transition duration-300 cursor-pointer'><a href="/blog"> Blog</a></li>
            <li className='hover:text-[black] text-[white] hover:bg-[#FB9B02] w-[100vw] text-center p-[15px] uppercase transition duration-300 cursor-pointer'> <a href="/contact"> Contact</a></li>
    </ul>
    </div>
    </div>
  )
}

export default NavBar
