import React from 'react'
import logo from './Images/homepage/Toshconsult Img 1.png'
import logo4 from './Images/aboutpage/Group 16.png'
import logo3 from './Images/aboutpage/Group 17.png'
import logo2 from './Images/aboutpage/Group 15.png'
import logo1 from './Images/aboutpage/Group 13.png'
import blurr from './Images/homepage/blurr.png'
import ndblur from './Images/homepage/ndblur.png'
function Footer() {
  return (
    <div className='flex flex-col sm:items-start sm:justify-centers sm:p-12'>
        <div className='absolute sm:hidden'>
            <img src={blurr} alt="" />
        </div>
    <div className='flex items-center justify-center sm:items-start  gap-10 flex-col font-raleway lg:py-12'>
      
      <div className='flex lg:justify-between lg:gap-[740px] items-center sm:flex-col sm:gap-[20px] sm:items-start'>
        <div><img className=' sm:w-[30vw]' src={logo} alt="" /></div>
        <div className='flex gap-3'>
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            </div>
      </div>
      
      <div className='flex items-start gap-[80px] sm:flex-col z-50'>
        <div className='flex flex-col gap-48 sm:hidden'>
        <div className='flex flex-col  justify-center gap-7 '>
            <div><h2 className='font-bold text-[20px]'>Contact</h2></div>
            <div className='flex flex-col gap-3'>
                <h4 className='w-[19vw] '>Address: <br/> Block 20 
                ibrahim taiwo road, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ilorin, 
                kwara, NG
                </h4>
                <h4>Phone No: <br/>  08080595043</h4>
                <h4>Email: <br/>  hello@toshconsult.com</h4>
            </div>
        </div>
        <div><h4>2023 copyright by toshconsult.</h4></div>
        </div>
        <div className='flex flex-col  justify-center gap-4'>
            <div><h2 className='font-bold text-[20px]'>Courses</h2></div>
            <div>
                <ul className='flex flex-col gap-3'>
                <li className=' hover:text-[#FB9B02] transition duration-300 cursor-pointer'>Front-End Development</li>
                <li className=' hover:text-[#FB9B02] transition duration-300 cursor-pointer'>Back-End Development</li>
                <li className=' hover:text-[#FB9B02] transition duration-300 cursor-pointer'>Mobile App Development</li>
                <li className=' hover:text-[#FB9B02] transition duration-300 cursor-pointer'>UI/UX Design</li>
                <li className=' hover:text-[#FB9B02] transition duration-300 cursor-pointer'>Python Full-Stack Development</li>
                <li className=' hover:text-[#FB9B02] transition duration-300 cursor-pointer'>Javascript Full-Stack Development</li>
                <li className=' hover:text-[#FB9B02] transition duration-300 cursor-pointer'>Courses For Children</li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col  justify-center gap-4'>
            <div><h2 className='font-bold text-[20px]'>Services</h2></div>
            <div>
                <ul className='flex flex-col gap-3'>
                <li className=' hover:text-[#FB9B02] transition duration-300 cursor-pointer' >Website Development</li>
                <li className=' hover:text-[#FB9B02] transition duration-300 cursor-pointer'>Mobile App Development</li>
                <li className=' hover:text-[#FB9B02] transition duration-300 cursor-pointer'>Digital Marketing</li>
                <li className=' hover:text-[#FB9B02] transition duration-300 cursor-pointer'>Software Development</li>
                <li className=' hover:text-[#FB9B02] transition duration-300 cursor-pointer'>UI/UX Design</li>
                <li className=' hover:text-[#FB9B02] transition duration-300 cursor-pointer'>SEO Management</li>
                <li className=' hover:text-[#FB9B02] transition duration-300 cursor-pointer'>Social Media Management</li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col  justify-center gap-4'>
        <div><h2 className='font-bold text-[20px]'>About</h2></div>
            <div>
                <ul className='flex flex-col gap-3'>
                <li className=' hover:text-[#FB9B02] transition duration-300 cursor-pointer'>About Us</li>
                <li className=' hover:text-[#FB9B02] transition duration-300 cursor-pointer'>Contact Us</li>
               <li className=' hover:text-[#FB9B02] transition duration-300 cursor-pointer'>FAQ</li>
                </ul>
            </div>
        </div>
      </div>
     
    </div>
    <div className='relative w-[100%] sm:hidden'>
           <img className='absolute bottom-0 -right-0' src={ndblur} alt="" />
        </div>
    </div>
   
  )
}

export default Footer
