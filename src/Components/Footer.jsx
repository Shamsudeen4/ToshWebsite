import React from 'react'
import logo from './Images/homepage/Toshconsult Img 1.png'
import logos from './Images/homepage/Frame 392.png'
import blurr from './Images/homepage/blurr.png'
import ndblur from './Images/homepage/ndblur.png'
function Footer() {
  return (
    <div className=''>
        <div className='absolute'>
            <img src={blurr} alt="" />
        </div>
    <div className='flex items-center justify-center  gap-10 flex-col font-raleway py-20'>
      
      <div className='flex justify-between gap-[740px] items-center'>
        <div><img src={logo} alt="" /></div>
        <div><img src={logos} alt="" /></div>
      </div>
      
      <div className='flex items-start gap-[80px]'>
        <div className='flex flex-col gap-48'>
        <div className='flex flex-col  justify-center gap-7'>
            <div><h2 className='font-bold text-[20px]'>Contact</h2></div>
            <div className='flex flex-col gap-3'>
                <h4 className='w-[19vw] '>Address: &nbsp;&nbsp;&nbsp;&nbsp; block 20 
                ibrahim taiwo road, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ilorin, 
                kwara, NG
                </h4>
                <h4>Phone No:&nbsp;&nbsp;&nbsp;&nbsp; 08080595043</h4>
                <h4>Email: &nbsp;&nbsp;&nbsp;&nbsp;hello@toshconsult.com</h4>
            </div>
        </div>
        <div><h4>2023 copyright by toshconsult.</h4></div>
        </div>
        <div className='flex flex-col  justify-center gap-4'>
            <div><h2 className='font-bold text-[20px]'>Courses</h2></div>
            <div>
                <ul className='flex flex-col gap-3'>
                <li>Front-End Development</li>
                <li>Back-End Development</li>
                <li>Mobile App Development</li>
                <li>UI/UX Design</li>
                <li>Python Full-Stack Development</li>
                <li>Javascript Full-Stack Development</li>
                <li>Courses For Children</li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col  justify-center gap-4'>
            <div><h2 className='font-bold text-[20px]'>Services</h2></div>
            <div>
                <ul className='flex flex-col gap-3'>
                <li>Website Development</li>
                <li>Mobile App Development</li>
                <li>Digital Marketing</li>
                <li>Software Development</li>
                <li>UI/UX Design</li>
                <li>SEO Management</li>
                <li>Social Media Management</li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col  justify-center gap-4'>
        <div><h2 className='font-bold text-[20px]'>About</h2></div>
            <div>
                <ul className='flex flex-col gap-3'>
                <li>About Us</li>
                <li>Contact Us</li>
               <li>FAQ</li>
                </ul>
            </div>
        </div>
      </div>
     
    </div>
    <div className='relative w-[100%]'>
           <img className='absolute bottom-5 left-[1060px]' src={ndblur} alt="" />
        </div>
    </div>
   
  )
}

export default Footer
