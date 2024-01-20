import React from 'react'
import tosh from '../Images/frontnbackend/Toshconsult Img 1 (2).png'
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
function Footer() {
  return (
    <div>
      <div className=' flex flex-col gap-[40px] items-center justify-center bg-[#000] py-[3%]'>
        <div className=' flex items-center gap-[850px] justify-around sm:flex-col sm:justify-center sm:gap-5 '>
            <div><img src={tosh} alt="" /></div>
            <div className=' flex gap-[10px]'>
                <a href="https://web.facebook.com/toshconsult" className=' bg-[#FB9B02] p-2 rounded-[100%]'><FaInstagram color='white' /></a>
                <a href="https://twitter.com/toshconsult " className=' bg-[#FB9B02] p-2 rounded-[100%]'><FaXTwitter  color='white'  /></a>
                <a href="https://web.facebook.com/toshconsult " className=' bg-[#FB9B02] p-2 rounded-[100%]'><CiLinkedin color='white' /></a>
                <a href="https://web.facebook.com/toshconsult " className=' bg-[#FB9B02] p-2 rounded-[100%]'><FiFacebook color='white' /></a>
            </div>
        </div>
        <div className=' flex items-start gap-[70px] font-euclid text-[white] sm:flex-col'>
            <div className=' flex flex-col gap-[100px]'>
                <div className=' flex flex-col gap-[25px]'>
                    <div><h1  className=' font-evolventa font-semibold text-[20px]'>Contact</h1></div>
                <div className=' flex flex-col gap-[20px]'>
                    <div className='flex gap-[20px]'>
                        <div><h4 className=' font-poppins'>Address:</h4></div>
                        <div><h4 className=' capitalize w-[15vw] text-[#FFFFFFB2] sm:w-[65vw]'>block 20 ibrahim taiwo road, ilorin, kwara, NG</h4></div>
                    </div>
                    <div className=' flex gap-[20px]'>
                        <div><h4 className=' font-poppins'>Phone No:</h4></div>
                        <div><h4 className='text-[#FFFFFFB2]'>08080595043</h4></div>
                    </div>
                    <div className=' flex gap-[20px]'>
                        <div><h4 className=' font-poppins'>Email:</h4></div>
                        <div><h4 className='text-[#FFFFFFB2]'>hello@toshconsult.com</h4></div>
                    </div>
                </div>
                </div>
                <div><h4 className='text-[#FFFFFFB2]'>2023 copyright by toshconsult.</h4></div>
            </div>
            <div className=' flex flex-col gap-[25px]'>
                <div> <h3 className=' font-evolventa font-semibold text-[20px]'>Courses</h3></div>
                <ul className=' flex flex-col gap-[12px] text-[#FFFFFFB2]'>
                    <li>Front-End Development</li>
                    <li>Back-End Development</li>
                    <li>Mobile App Development</li>
                    <li>UI/UX Design</li>
                    <li>Python Full-Stack Development</li>
                    <li>Javascript Full-Stack Development</li>
                    <li>Courses For Children</li>
                </ul>
            </div>
            <div className='flex flex-col gap-[25px]'>
            <div> <h3 className=' font-evolventa font-semibold text-[20px]'>Services</h3></div>
                <ul className=' flex flex-col gap-[12px] text-[#FFFFFFB2]'>
                    <li>Website Development</li>
                    
                    <li>Mobile App Development</li>
                    <li>Digital Marketing</li>
                    
                    <li>Software Development</li>
                    <li>UI/UX Design</li>
                    <li> SEO Management</li>
                    <li>Social Media Management</li>
                </ul>
            </div>
            <div  className='flex flex-col gap-[25px]'>
            <div> <h3 className=' font-evolventa font-semibold text-[20px]'>Company</h3></div>
                <ul className=' flex flex-col gap-[12px] text-[#FFFFFFB2]'>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
