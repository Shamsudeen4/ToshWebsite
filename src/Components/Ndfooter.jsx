import React from 'react'
import logo from './Images/homepage/Toshconsult Img 1.png'
import logos from './Images/homepage/Frame 392.png'
import blurr from './Images/homepage/blurr.png'
import ndblur from './Images/homepage/ndblur.png'
function Ndfooter() {
  return (
    <div className='sm:p-11 sm:flex sm:flex-col sm:gap-5 sm:justify-center sm:items-center '>
        <div className=''>
        <div className='absolute sm:hidden'>
            <img src={blurr} alt="" />
        </div>
    <div className='flex items-center justify-center sm:items-start  gap-10 flex-col font-raleway py-10'>
      
      <div className='flex justify-between gap-[740px] items-center sm:flex-col sm:gap-6 sm:items-start'>
        <div><img src={logo} alt="" /></div>
        <div><img src={logos} alt="" /></div>
      </div>
      
      <div className='flex items-start gap-[80px] sm:flex-col sm:gap-[50px]'>
        <div className='flex flex-col gap-32'>
        <div className='flex flex-col  justify-center gap-7'>
            <div><h2 className='font-bold text-[20px]'>Courses</h2></div>
            <div className='flex flex-col gap-3'>
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
        <div className='sm:hidden'><h4>2023 copyright by toshconsult.</h4></div>
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
        <div className='flex flex-col gap-[150px] sm:gap-[60px]'>
        <div className='flex gap-[150px] sm:flex-col sm:gap-[60px]'>
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
        <div className='flex flex-col  justify-center gap-4'>
        <div><h2 className='font-bold text-[20px]'>Resources</h2></div>
            <div>
                <ul className='flex flex-col gap-3'>
                <li>Docs</li>
                <li>Career</li>
               <li>Blog</li>
               <li>Post</li>
                </ul>
            </div>
        </div>
        </div>
        <div className='flex flex-col gap-3'>
                <h4 className=' capitalize'>Address: &nbsp;&nbsp;&nbsp;&nbsp; block 20 ibrahim taiwo road, ilorin, kwara, NG
                </h4>
                <h4>Phone No:&nbsp;&nbsp;&nbsp;&nbsp; 08080595043</h4>
                <h4>Email: &nbsp;&nbsp;&nbsp;&nbsp;hello@toshconsult.com</h4>
            </div>
        </div>
      </div>
     
    </div>
    <div className='relative w-[100%] sm:hidden'>
           <img className='absolute -bottom-5 -right-0' src={ndblur} alt="" />
        </div>
        </div>
        <div className='2xl:hidden capitalize'><h4>2023 copyright by toshconsult.</h4></div>
    </div>
   
  )
}

export default Ndfooter
